"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const Wrapper_1 = require("../components/Wrapper");
const InputField_1 = require("../components/InputField");
const core_1 = require("@chakra-ui/core");
const graphql_1 = require("../generated/graphql");
const toErrorMap_1 = require("../../utils/toErrorMap");
const router_1 = require("next/router");
const next_urql_1 = require("next-urql");
const createUrqlClient_1 = require("../../utils/createUrqlClient");
const Register = ({}) => {
    const router = router_1.useRouter();
    const [, register] = graphql_1.useRegisterMutation();
    return (<Wrapper_1.Wrapper variant={"small"}>
      <formik_1.Formik initialValues={{ email: "", username: "", password: "" }} onSubmit={(values, { setErrors }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const response = yield register({ options: values });
        console.log(response);
        if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.register.errors) {
            setErrors(toErrorMap_1.toErrorMap(response.data.register.errors));
        }
        else if ((_b = response.data) === null || _b === void 0 ? void 0 : _b.register.user) {
            console.log("here");
            router.push("/");
        }
    })}>
        {({ isSubmitting }) => (<formik_1.Form>
            <InputField_1.InputField name="username" placeholder="Username" label="Username"/>
            <core_1.Box mt={4}>
            <InputField_1.InputField name="email" placeholder="Email" label="Email"/>
              </core_1.Box>
            <core_1.Box mt={4}>
              <InputField_1.InputField name="password" placeholder="Password" label="Password" type="password"/>
            </core_1.Box>
            <core_1.Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">
              Register
            </core_1.Button>
          </formik_1.Form>)}
      </formik_1.Formik>
    </Wrapper_1.Wrapper>);
};
exports.default = next_urql_1.withUrqlClient(createUrqlClient_1.createUrqlClient)(Register);
//# sourceMappingURL=register.js.map