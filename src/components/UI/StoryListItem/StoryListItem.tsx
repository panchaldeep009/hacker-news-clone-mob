import React from 'react';
import { Text, Link, Flex } from '@chakra-ui/react';
import { StoryMetaBox, StoryViewButton } from './StoryListItem.styled';
import { StoryInfoLine } from './StoryInfoLine';

export const StoryListItem: React.FC = () => {

  return (
    <Flex my={2}>
      <StoryMetaBox>
        <>
          <Text gridArea="index" justifySelf="center">
            1
            </Text>
          <Link gridArea="title" as="a" fontSize="md">
            A Title A Title
            </Link>
          <Link
            as="a"
            gridArea="url"
            href="/"
            color="gray.500"
            fontSize="sm"
            justifySelf="right"
          >
            www.awebsite.com
              </Link>
          <StoryInfoLine />
        </>
      </StoryMetaBox>
      <StoryViewButton href="/">View Details</StoryViewButton>
    </Flex>);
};
