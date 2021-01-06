import React from 'react';
import { Flex, Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { StoryMetaBox, StoryViewButton } from './StoryListItem.styled';

export const StoryListItemLoader: React.FC = () => (
  <Flex my={2}>
    <StoryMetaBox>
      <Box gridArea="index" justifySelf="center">
        <SkeletonCircle size="6" />
      </Box>
      <Box gridArea="title">
        <Skeleton width={300} height={6} />
      </Box>
      <Box gridArea="url">
        <Skeleton width={100} height={3} />
      </Box>
      <Box gridArea="info">
        <Skeleton height={4} />
      </Box>
    </StoryMetaBox>
    <StoryViewButton>
      <Skeleton width={70} height={6} />
    </StoryViewButton>
  </Flex>
);
