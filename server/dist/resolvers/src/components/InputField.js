"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputField = void 0;
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const core_1 = require("@chakra-ui/core");
exports.InputField = (_a) => {
    var { label, textarea, size: _ } = _a, props = __rest(_a, ["label", "textarea", "size"]);
    let InputOrTextArea = core_1.Input;
    if (textarea) {
        InputOrTextArea = core_1.Textarea;
    }
    const [field, { error }] = formik_1.useField(props);
    return (<core_1.FormControl isInvalid={!!error}>
      <core_1.FormLabel htmlFor={field.name}>{label}</core_1.FormLabel>
      <InputOrTextArea {...field} {...props} id={field.name} placeholder={props.placeholder}/>
      {error ? <core_1.FormErrorMessage>{error}</core_1.FormErrorMessage> : null}
    </core_1.FormControl>);
};
//# sourceMappingURL=InputField.js.map