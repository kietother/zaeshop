import { ERegion } from "../enums/Eregion";

export default interface ContentType {
    id: number;
    name: string,
    description?: string;
    region: ERegion;
}