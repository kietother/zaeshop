export default interface UserRoleSubscriptionResponse {
    userId: string;
    fullName?: string | null;
    username?: string | null;
    email?: string | null;
    avatar?: string | null;
    role?: string | null;
    expiredRoleDate?: Date | null;
    createdOnUtc: Date;
}