import { CustomerDTO } from "./dto/customer-dto";

export interface CustomerRepository {
    add(customer: CustomerDTO): Number;
    get(id: Number): CustomerDTO;
}