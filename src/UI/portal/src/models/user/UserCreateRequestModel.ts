export default interface UserCreateRequestModel {
    fullName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    isAcceptTerm: boolean;
}