"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@chakra-ui/core");
exports.Wrapper = ({ children, variant = "regular", }) => {
    return (<core_1.Box mt={8} mx="auto" maxWidth={variant === "regular" ? "800px" : "400px"} w="100%">
      {children}
    </core_1.Box>);
};
//# sourceMappingURL=Wrapper.js.map