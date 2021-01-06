import { Box, Divider, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

export const CommentLoader: React.FC = () => (
  <Box border="1px solid #ccc" rounded={10} p={3} my={2}>
    <Skeleton width={200} height={3} />
    <Divider />
    <SkeletonText my={4} noOfLines={4} spacing={3} />
    <Skeleton height={6} width={200} />
  </Box>
);