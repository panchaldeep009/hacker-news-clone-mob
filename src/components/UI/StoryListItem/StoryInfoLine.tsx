import React from 'react';
import { Text, Link } from '@chakra-ui/react';

export const StoryInfoLine: React.FC = () => (
  <Text gridArea="info" fontSize="sm" color="gray.600">
    123 points by aUser 2 hours ago |{' '}
    <Link href='/' color="orange" fontSize="sm">
      123 comments{' '}
    </Link>
  </Text>
);
