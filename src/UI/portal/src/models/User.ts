export default interface User {
    Id: string;
    FullName?: string;
    VerificationToken?: string;
    VerifiedOnUtc?: Date;
    ResetPasswordToken?: string;
    ResetPasswordTokenExpiresOnUtc?: Date;
    ResetPasswordOnUtc?: Date;
    CreatedOnUtc: Date;
    UpdatedOnUtc?: Date;
}