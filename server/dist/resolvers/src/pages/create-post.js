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
const core_1 = require("@chakra-ui/core");
const formik_1 = require("formik");
const next_urql_1 = require("next-urql");
const router_1 = require("next/router");
const react_1 = __importDefault(require("react"));
const createUrqlClient_1 = require("../../utils/createUrqlClient");
const useIsAuth_1 = require("../../utils/useIsAuth");
const InputField_1 = require("../components/InputField");
const Layout_1 = require("../components/Layout");
const graphql_1 = require("../generated/graphql");
const CreatePost = ({}) => {
    const router = router_1.useRouter();
    useIsAuth_1.useIsAuth();
    const [, createPost] = graphql_1.useCreatePostMutation();
    return (<Layout_1.Layout variant="small">
      <formik_1.Formik initialValues={{ title: "", text: "" }} onSubmit={(values) => __awaiter(void 0, void 0, void 0, function* () {
        const { error } = yield createPost({ input: values });
        console.log(error);
        if (!error) {
            router.push("/");
        }
    })}>
        {({ isSubmitting }) => (<formik_1.Form>
            <InputField_1.InputField name="title" placeholder="Input Title of the Post" label="Title"/>
            <core_1.Box mt={4}>
              <InputField_1.InputField textarea name="text" placeholder="Input text..." label="Body"/>
            </core_1.Box>
            <core_1.Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">
              Create Post
            </core_1.Button>
          </formik_1.Form>)}
      </formik_1.Formik>
    </Layout_1.Layout>);
};
exports.default = next_urql_1.withUrqlClient(createUrqlClient_1.createUrqlClient)(CreatePost);
//# sourceMappingURL=create-post.js.map