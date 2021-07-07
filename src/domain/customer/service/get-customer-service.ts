import { CustomerRepository } from "../../../out/customer-repository";
import { CustomerDTO } from "../../../out/dto/customer-dto";
import { Customer } from "../model/customer";
import { CustomerDTOToCustomerMapper } from "./customer-dto-to-customer-mapper";
import { GetCustomer } from "./get-customer";

export class GetCustomersService implements GetCustomer {

    repository: CustomerRepository;

    public constructor(repository: CustomerRepository) {
        this.repository = repository;
    }
    byId(id: Number): Customer | undefined {
        try {
            let customer: CustomerDTO = this.repository.get(id);
            if (customer) {
                return CustomerDTOToCustomerMapper.map(customer);
            }
        } catch (error) {
            throw new Error('The customer could not be fetched')
        }
        return undefined;
    }
}