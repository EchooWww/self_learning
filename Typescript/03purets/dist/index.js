"use strict";
class User {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        this.city = city;
        this.email = email;
        this.name = name;
    }
    get info() {
        return this.name;
    }
    set cityName(city) {
        this.city = city;
    }
}
class Admin extends User {
    constructor(email, name) {
        super(email, name);
        this.city = "Vancouver";
    }
}
const echo = new Admin("echo@123.com", "Echo wang");
