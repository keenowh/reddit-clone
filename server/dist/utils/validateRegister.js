"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
exports.validateRegister = (options) => {
    if (!options.email.includes("@")) {
        return [
            {
                field: "email",
                message: "Email is not valid",
            },
        ];
    }
    ;
    if (options.username.length <= 2) {
        return [
            {
                field: "username",
                message: "username is not valid",
            },
        ];
    }
    ;
    if (options.username.includes('@')) {
        return [
            {
                field: "username",
                message: "Username cannot include an '@'",
            },
        ];
    }
    ;
    return null;
};
//# sourceMappingURL=validateRegister.js.map