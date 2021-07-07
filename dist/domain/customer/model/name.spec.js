"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name_1 = require("./name");
describe('Name Model', function () {
    test('should return true if blank name', function () {
        //when
        var result = new name_1.Name("").isEmpty();
        expect(result).toBe(true);
    });
});
