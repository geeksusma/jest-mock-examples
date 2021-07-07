import { CustomerRepository } from "../../../out/customer-repository";
import { Name } from "../model/name";
import { NameToCustomerMapper } from "./name-to-customer-mapper";
import { NewCustomer } from "./new-customer";


export class NewCustomerService implements NewCustomer {
    private repository: CustomerRepository;

    public constructor(repository: CustomerRepository) {
        this.repository = repository;
    }

    createNamedCustomer(name: Name): Number {
        if (name.isEmpty()) {
            throw Error('Cannot save an empty customer');
        }
        try {
            return this.repository.add(NameToCustomerMapper.map(name));
        }
        catch (error) {
            throw new Error('The customer could not be saved');
        }
    }

}
