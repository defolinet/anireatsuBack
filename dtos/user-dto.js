module.exports = class UserDto {
    username;
    email;
    ava;
    id;
    isActivated;
    recentAnimes;
    favouriteAnimes;

    constructor(model) {
        this.username = model.username
        this.email = model.email
        this.ava = model.ava
        this.id = model._id
        this.isActivated = model.isActivated
        this.recentAnimes = model.recentAnimes
        this.favouriteAnimes = model.favouriteAnimes
    }
}