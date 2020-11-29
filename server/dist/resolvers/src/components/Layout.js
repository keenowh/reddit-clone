"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const Navbar_1 = require("./Navbar");
const react_1 = __importDefault(require("react"));
const Wrapper_1 = require("./Wrapper");
exports.Layout = ({ variant = "regular", children, }) => {
    return (<>
      <Navbar_1.Navbar />
      <Wrapper_1.Wrapper variant={variant}>{children}</Wrapper_1.Wrapper>
    </>);
};
//# sourceMappingURL=Layout.js.map