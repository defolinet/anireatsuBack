const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')
const TokenModel = require('../models/token-model')

class UserService {
    async registration(email, password, username, ava) {
        const candidate = await UserModel.findOne({email})
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с почтой ${email} уже существует`)
        } 
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const candidateUsername = await UserModel.findOne({username})
        if(candidateUsername){
            throw ApiError.BadRequest(`Пользователь с именем ${username} уже существует`)
        }

        console.log(ava)
        const user = await UserModel.create({username, email, ava, password: hashPassword, activationLink, recentAnimes: []})
        // await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens,user: userDto}
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if(!user) {
            throw new ApiError.BadRequest('Неккоректная ссылка активации')
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if(!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens,user: userDto}
    }

    async edit (data) {
        let isDeleted = false
    
        data.recentAnimes?.forEach((anime, id, arr) => {
            if(id !== arr.length - 1) {
                if(anime === arr[arr.length - 1]) {
                    isDeleted = true
                    arr.pop()
                    arr.push(anime)
                    arr.splice(id, 1)
                }
            }
        })

        if(data.recentAnimes?.length > 12 && !isDeleted) {
            data.recentAnimes.shift()
        }

        await UserModel.updateOne({email: data.email}, {$set: data})
        const user = await UserModel.findOne({email: data.email})
        const userDto = new UserDto(user)
        return {user: userDto}
    }


    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens,user: userDto}
    }

    async deleteUser(email, refreshToken) {
        const response = await UserModel.deleteOne({email})
        console.log(response, email)
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async getAllUsers() {
        const users = await UserModel.find()
        return users
    }

    async getUser(refreshToken) {
        console.log(refreshToken)
        const token = await TokenModel.findOne({refreshToken})
        console.log(token)
        // const user = await UserModel.findOne({email})
        return token
    }
}

module.exports = new UserService()