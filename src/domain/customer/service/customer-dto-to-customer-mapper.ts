import { CustomerDTO } from "../../../out/dto/customer-dto";
import { Customer } from "../model/customer";
import { Name } from "../model/name";

export class CustomerDTOToCustomerMapper {
    static map(customer: CustomerDTO): Customer {
        return new Customer(customer.getId(), new Name(customer.getName()));
    }
}