import { Customer } from "../model/customer";

export interface GetCustomer {
    byId(id: Number): Customer | undefined;
}