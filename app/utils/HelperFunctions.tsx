// helperFunctions.tsx

import React from 'react';
import { ERoleType } from '../models/common/ERoleType';

export const getHoverText = (roleType: any): string => {
    if (roleType === ERoleType.UserSuperPremium) return "78%";
    if (roleType === ERoleType.UserPremium) return "75%";
    if (roleType === ERoleType.User) return "70%";
    return "";
};

export const getUserClass = (roleType: any): string => {
    if (roleType === ERoleType.UserSuperPremium) return "user-level-s-premium";
    if (roleType === ERoleType.UserPremium) return "user-level-premium";
    if (roleType === ERoleType.User) return "user-level";
    return "";
};

export const getLevelBadgeClass = (roleType: any): string => {
    if (roleType === ERoleType.UserSuperPremium) return "level-badge-s-premium";
    if (roleType === ERoleType.UserPremium) return "level-badge-premium";
    if (roleType === ERoleType.User) return "level-badge";
    return "";
};

export const getRoleBadge = (roleType: any): React.ReactNode => {
    if (roleType === ERoleType.UserSuperPremium) return <span className="s-premium-badge">S-Premium</span>;
    if (roleType === ERoleType.UserPremium) return <span className="premium-badge">Premium</span>;
    return null;
};

export const getUserNameClass = (roleType: any): string => {
    if (roleType === ERoleType.UserSuperPremium) return "s-glitter-text";
    if (roleType === ERoleType.UserPremium) return "glitter-text";
    return "";
};

export const getHoverTextValue = (roleType: any): string => {
    if (roleType === ERoleType.UserSuperPremium) return "78%";
    if (roleType === ERoleType.UserPremium) return "75%";
    if (roleType === ERoleType.User) return "70%";
    return "";
};
