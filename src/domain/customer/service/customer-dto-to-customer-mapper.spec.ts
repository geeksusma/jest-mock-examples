
import { CustomerDTO } from "../../../out/dto/customer-dto";
import { Customer } from "../model/customer";
import { Name } from "../model/name";
import { CustomerDTOToCustomerMapper } from "./customer-dto-to-customer-mapper";

describe('Customer DTO to Customer mapper', () => {
    test('should map to expected when map', () => {
        //given
        let name = new Name("John Doe");
        let id: Number = 1;
        let source = new CustomerDTO(id, name.getName());

        //when
        let customer: Customer = CustomerDTOToCustomerMapper.map(source);

        //then
        expect(customer).toStrictEqual(new Customer(id, name));
    });
});