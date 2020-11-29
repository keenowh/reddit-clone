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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePassword = void 0;
const core_1 = require("@chakra-ui/core");
const formik_1 = require("formik");
const next_urql_1 = require("next-urql");
const router_1 = require("next/router");
const react_1 = __importStar(require("react"));
const createUrqlClient_1 = require("../../../utils/createUrqlClient");
const toErrorMap_1 = require("../../../utils/toErrorMap");
const InputField_1 = require("../../components/InputField");
const Wrapper_1 = require("../../components/Wrapper");
const graphql_1 = require("../../generated/graphql");
const link_1 = __importDefault(require("next/link"));
exports.ChangePassword = () => {
    const router = router_1.useRouter();
    const [, changePassword] = graphql_1.useChangePasswordMutation();
    const [tokenError, setTokenError] = react_1.useState("");
    return (<Wrapper_1.Wrapper variant={"small"}>
      <formik_1.Formik initialValues={{ newPassword: "" }} onSubmit={(values, { setErrors }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const response = yield changePassword({
            newPassword: values.newPassword,
            token: typeof router.query.token === "string" ? router.query.token : "",
        });
        if ((_a = response.data) === null || _a === void 0 ? void 0 : _a.changePassword.errors) {
            const errorMap = toErrorMap_1.toErrorMap(response.data.changePassword.errors);
            if ("token" in errorMap) {
                setTokenError(errorMap.token);
            }
            setErrors(errorMap);
        }
        else if ((_b = response.data) === null || _b === void 0 ? void 0 : _b.changePassword.user) {
            router.push("/");
        }
    })}>
        {({ isSubmitting }) => (<formik_1.Form>
            <InputField_1.InputField name="newPassword" placeholder="Input your new password" label="Password" type="password"/>
            <core_1.Flex>
              <core_1.Box color="red">{tokenError}</core_1.Box>
              <link_1.default href="/forgot-password">
                <core_1.Link mr={4}>Go back to forget password</core_1.Link>
              </link_1.default>
            </core_1.Flex>
            <core_1.Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">
              Login
            </core_1.Button>
          </formik_1.Form>)}
      </formik_1.Formik>
    </Wrapper_1.Wrapper>);
};
exports.default = next_urql_1.withUrqlClient(createUrqlClient_1.createUrqlClient)(exports.ChangePassword);
//# sourceMappingURL=[token].js.map