export interface UserDetails {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    country: string;
    phoneNumber: string;
    termsOfService: boolean,
}

export type RegisterUserRequest = UserDetails;