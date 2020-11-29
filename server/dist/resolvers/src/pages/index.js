"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_urql_1 = require("next-urql");
const createUrqlClient_1 = require("../../utils/createUrqlClient");
const graphql_1 = require("../generated/graphql");
const Layout_1 = require("../components/Layout");
const core_1 = require("@chakra-ui/core");
const link_1 = __importDefault(require("next/link"));
const react_1 = require("react");
const Index = () => {
    const [variables, setVariables] = react_1.useState({
        limit: 10,
        cursor: null,
    });
    const [{ data, fetching }] = graphql_1.usePostsQuery({
        variables,
    });
    if (!fetching && !data) {
        return <div>You got Query failure</div>;
    }
    return (<Layout_1.Layout>
      <core_1.Flex align="center">
        <core_1.Heading>LiReddit</core_1.Heading>
        <link_1.default href="/create-post">
          <core_1.Link ml="auto">Create Post</core_1.Link>
        </link_1.default>
      </core_1.Flex>
      <br />
      {fetching && !data ? (<div>loading</div>) : (<core_1.Stack spacing={8}>
          {data.posts.map((p) => (<core_1.Box key={p.id} p={5} shadow="md" borderWidth="1px">
              <core_1.Heading fontSize="xl">{p.title}</core_1.Heading>
              <core_1.Text mt={4}>{p.textSnippet + "..."}</core_1.Text>
            </core_1.Box>))}
        </core_1.Stack>)}
      {data ? (<core_1.Flex>
          <core_1.Button onClick={() => {
        setVariables({
            limit: variables.limit,
            cursor: data.posts[data.posts.length - 1].createdAt,
        });
    }} isLoading={fetching} m="auto" my={8}>
            Load More
          </core_1.Button>
        </core_1.Flex>) : null}
    </Layout_1.Layout>);
};
exports.default = next_urql_1.withUrqlClient(createUrqlClient_1.createUrqlClient, { ssr: true })(Index);
//# sourceMappingURL=index.js.map