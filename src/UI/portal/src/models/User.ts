export default interface User {
    id: string;
    fullName?: string;
    verificationToken?: string;
    verifiedOnUtc?: Date;
    resetPasswordToken?: string;
    resetPasswordTokenExpiresOnUtc?: Date;
    resetPasswordOnUtc?: Date;
    createdOnUtc: Date;
    updatedOnUtc?: Date;
}