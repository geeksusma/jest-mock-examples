import { CustomerDTO } from "../../../out/dto/customer-dto";
import { Name } from "../model/name";

export class NameToCustomerMapper {
    static map(name:Name):CustomerDTO {
        return new CustomerDTO(-1, name.getName());
    }
}