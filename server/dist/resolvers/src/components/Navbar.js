"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@chakra-ui/core");
const link_1 = __importDefault(require("next/link"));
const graphql_1 = require("../generated/graphql");
const isServer_1 = require("../../utils/isServer");
exports.Navbar = ({}) => {
    const [{ fetching: logoutFetching }, logout] = graphql_1.useLogoutMutation();
    const [{ data, fetching }] = graphql_1.useMeQuery({
        pause: isServer_1.isServer(),
    });
    let body = null;
    if (fetching) {
    }
    else if (!(data === null || data === void 0 ? void 0 : data.me)) {
        body = (<>
        <link_1.default href="/login">
          <core_1.Link mr={4}>Login</core_1.Link>
        </link_1.default>
        <link_1.default href="/register">
          <core_1.Link mr={4}>Register</core_1.Link>
        </link_1.default>
      </>);
    }
    else {
        body = (<core_1.Flex>
        <core_1.Box mr={2}>{data.me.username}</core_1.Box>
        <core_1.Button onClick={() => logout()} isLoading={logoutFetching} variant="link">
          Logout
        </core_1.Button>
      </core_1.Flex>);
    }
    return (<core_1.Flex zIndex={1} position={"sticky"} top={0} bg="tan" p={4}>
      <core_1.Box ml={"auto"}>{body}</core_1.Box>
    </core_1.Flex>);
};
//# sourceMappingURL=Navbar.js.map