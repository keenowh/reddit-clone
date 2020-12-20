import React from "react";
import { Box, Link, Flex, Button, Heading } from "@chakra-ui/core";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../../utils/isServer";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  let body = null;

  // Check if info is loading or not
  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={4}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link mr={4}>Register</Link>
        </NextLink>
      </>
    );
  } else {
    // means user is logged in
    body = (
      <Flex align="center">
        <NextLink href="/create-post">
          <Button as={Link} mr={4}>
            Create Post
          </Button>
        </NextLink>
        <Box mr={2}>{data.me.username}</Box>
        <Button
          onClick={() => logout()}
          isLoading={logoutFetching}
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex zIndex={1} position={"sticky"} top={0} bg="tan" p={4}>
      <Flex flex={1} m="auto" align="center" maxWidth={800}>
        <Heading>
          <NextLink href="/">
            <Link>LiReddit</Link>
          </NextLink>
        </Heading>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
