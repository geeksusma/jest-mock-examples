import { CustomerRepository } from "../../../out/customer-repository";
import { CustomerDTO } from "../../../out/dto/customer-dto";

export class CustomerRepositoryImpl implements CustomerRepository {
    
    public constructor() {
        
    }
    
    add(customer: CustomerDTO): Number {
        throw new Error("Method not implemented.");
    }
    get(id: Number): CustomerDTO {
        throw new Error("Method not implemented.");
    }

}