
import { CustomerDTO } from "../../../out/dto/customer-dto";
import { Name } from "../model/name";
import { NameToCustomerMapper } from "./name-to-customer-mapper";

describe('Name to Customer DTO mapper', () => {
    test('should map to expected when map', () => {
        //given
        let name = new Name("John Doe");

        //when
        let customer: CustomerDTO = NameToCustomerMapper.map(name);

        //then
        expect(customer).toStrictEqual(new CustomerDTO(-1, "John Doe"));
    });
});