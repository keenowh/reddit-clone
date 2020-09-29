import React from "react";
import { Box, Link, Flex } from "@chakra-ui/core";
import NextLink from "next/link";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex bg="tomato" p={4}>
      <Box ml={"auto"}>
        <NextLink href="/login">
          <Link mr={4}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link mr={4}>Register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
