import { Customer } from "../model/customer";

export interface GetCustomer {
    byId(id: Number): Promise<Customer | undefined>;
}