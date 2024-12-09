export class User {
    email?: string;
    password?: string;

    // Constructor to initialize user object with email and password properties.
    constructor(init?: { email?: string; password?: string }) {
        if (init) {
            this.email = init.email;
            this.password = init.password;
        }
    }
}
