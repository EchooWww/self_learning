class User {
  constructor(
    public email: string,
    public name: string,
    protected city?: string
  ) {
    this.email = email;
    this.name = name;
  }

  get info(): string {
    return this.name;
  }

  set cityName(city: string) {
    this.city = city;
  }
}

class Admin extends User {
  constructor(email: string, name: string) {
    super(email, name);
    this.city = "Vancouver";
  }
}

const echo = new Admin("echo@123.com", "Echo wang");
