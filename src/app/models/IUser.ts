import { IAddress } from "./IAddress";
import { ICompany } from "./ICompany";

export interface IUser {
    address?: IAddress;
    company?: ICompany;
    email?: string;
    id?: number;
    name?: string;
    username?: string;
    phone?: string;
    website?: string;
}