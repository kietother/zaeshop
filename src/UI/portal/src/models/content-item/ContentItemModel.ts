import { EContentItemType } from "../enums/EContentItemType";

export default interface ContentItemModel {
    id: number;
    name: string;
    orderBy: number;
    relativeUrl?: string;
    originalUrl?: string;
    displayUrl?: string;
    type: EContentItemType;
    createdOnUtc: Date;
}