import { Name } from "./name";


describe('Name Model', () => {

    test('should return true if blank name', () => {
        //when
        let result: boolean = new Name("").isEmpty();
        expect(result).toBe(true);
    });

});