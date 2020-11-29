"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPassword = void 0;
const core_1 = require("@chakra-ui/core");
const formik_1 = require("formik");
const next_urql_1 = require("next-urql");
const react_1 = __importStar(require("react"));
const createUrqlClient_1 = require("../../utils/createUrqlClient");
const InputField_1 = require("../components/InputField");
const Wrapper_1 = require("../components/Wrapper");
const graphql_1 = require("../generated/graphql");
exports.forgotPassword = ({}) => {
    const [complete, setComplete] = react_1.useState(false);
    const [, forgotPassword] = graphql_1.useForgotPasswordMutation();
    return (<Wrapper_1.Wrapper variant={"small"}>
      <formik_1.Formik initialValues={{ email: "" }} onSubmit={(values) => __awaiter(void 0, void 0, void 0, function* () {
        yield forgotPassword(values);
        setComplete(true);
    })}>
        {({ isSubmitting }) => complete ? (<core_1.Box>
              If an account with that email exists we sent you an email to
              change it
            </core_1.Box>) : (<formik_1.Form>
              <InputField_1.InputField name="email" placeholder="Input your email" label="Email"/>
              <core_1.Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">
                Send
              </core_1.Button>
            </formik_1.Form>)}
      </formik_1.Formik>
    </Wrapper_1.Wrapper>);
};
exports.default = next_urql_1.withUrqlClient(createUrqlClient_1.createUrqlClient)(exports.forgotPassword);
//# sourceMappingURL=forgot-password.js.map