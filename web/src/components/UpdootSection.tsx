import { Flex, IconButton } from "@chakra-ui/core";
import React from "react";
import { PostSnippetFragment, PostsQuery } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" mr={4}>
      <IconButton aria-label="upvote post" icon="chevron-up" />
      {post.points}
      <IconButton aria-label="downvote post" icon="chevron-down" />
    </Flex>
  );
};
