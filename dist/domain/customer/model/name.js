"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
var Name = /** @class */ (function () {
    function Name(name) {
        this.name = name;
    }
    Name.prototype.getName = function () {
        return this.name;
    };
    Name.prototype.isEmpty = function () {
        return (!this.name || /^\s*$/.test(this.name));
    };
    return Name;
}());
exports.Name = Name;
