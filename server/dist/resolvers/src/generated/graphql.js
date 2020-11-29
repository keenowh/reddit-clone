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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostsQuery = exports.PostsDocument = exports.useMeQuery = exports.MeDocument = exports.useRegisterMutation = exports.RegisterDocument = exports.useLogoutMutation = exports.LogoutDocument = exports.useLoginMutation = exports.LoginDocument = exports.useForgotPasswordMutation = exports.ForgotPasswordDocument = exports.useCreatePostMutation = exports.CreatePostDocument = exports.useChangePasswordMutation = exports.ChangePasswordDocument = exports.RegularUserResponseFragmentDoc = exports.RegularUserFragmentDoc = exports.RegularErrorFragmentDoc = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const Urql = __importStar(require("urql"));
exports.RegularErrorFragmentDoc = graphql_tag_1.default `
    fragment RegularError on FieldError {
  field
  message
}
    `;
exports.RegularUserFragmentDoc = graphql_tag_1.default `
    fragment RegularUser on User {
  id
  username
}
    `;
exports.RegularUserResponseFragmentDoc = graphql_tag_1.default `
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${exports.RegularErrorFragmentDoc}
${exports.RegularUserFragmentDoc}`;
exports.ChangePasswordDocument = graphql_tag_1.default `
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${exports.RegularUserResponseFragmentDoc}`;
function useChangePasswordMutation() {
    return Urql.useMutation(exports.ChangePasswordDocument);
}
exports.useChangePasswordMutation = useChangePasswordMutation;
;
exports.CreatePostDocument = graphql_tag_1.default `
    mutation createPost($input: PostInput!) {
  createPost(input: $input) {
    id
    createdAt
    updatedAt
    title
    text
    points
    creatorId
  }
}
    `;
function useCreatePostMutation() {
    return Urql.useMutation(exports.CreatePostDocument);
}
exports.useCreatePostMutation = useCreatePostMutation;
;
exports.ForgotPasswordDocument = graphql_tag_1.default `
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
function useForgotPasswordMutation() {
    return Urql.useMutation(exports.ForgotPasswordDocument);
}
exports.useForgotPasswordMutation = useForgotPasswordMutation;
;
exports.LoginDocument = graphql_tag_1.default `
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...RegularUserResponse
  }
}
    ${exports.RegularUserResponseFragmentDoc}`;
function useLoginMutation() {
    return Urql.useMutation(exports.LoginDocument);
}
exports.useLoginMutation = useLoginMutation;
;
exports.LogoutDocument = graphql_tag_1.default `
    mutation Logout {
  logout
}
    `;
function useLogoutMutation() {
    return Urql.useMutation(exports.LogoutDocument);
}
exports.useLogoutMutation = useLogoutMutation;
;
exports.RegisterDocument = graphql_tag_1.default `
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${exports.RegularUserResponseFragmentDoc}`;
function useRegisterMutation() {
    return Urql.useMutation(exports.RegisterDocument);
}
exports.useRegisterMutation = useRegisterMutation;
;
exports.MeDocument = graphql_tag_1.default `
    query Me {
  me {
    ...RegularUser
  }
}
    ${exports.RegularUserFragmentDoc}`;
function useMeQuery(options = {}) {
    return Urql.useQuery(Object.assign({ query: exports.MeDocument }, options));
}
exports.useMeQuery = useMeQuery;
;
exports.PostsDocument = graphql_tag_1.default `
    query Posts($limit: Int!, $cursor: String) {
  posts(limit: $limit, cursor: $cursor) {
    id
    createdAt
    updatedAt
    title
    textSnippet
  }
}
    `;
function usePostsQuery(options = {}) {
    return Urql.useQuery(Object.assign({ query: exports.PostsDocument }, options));
}
exports.usePostsQuery = usePostsQuery;
;
//# sourceMappingURL=graphql.js.map