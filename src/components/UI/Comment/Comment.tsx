import React, { useState } from 'react';
import { Box, Text, Divider, Button, Collapse } from '@chakra-ui/react';

const Comments: React.FC = () => {
  return <>
    <Comment />
    <Comment />
    <Comment />
  </>
}

export const Comment: React.FC = () => {
  const [showReplies, setShowReplies] = useState(false);
  const toggleShowReplies = () => setShowReplies((show) => !show);

  return (
    <Box border="1px solid #ccc" rounded={10} p={3} my={2}>
      <Text color="gray.500">
        AUser : 2 hours ago
      </Text>
      <Divider />
      <Box my={4} dangerouslySetInnerHTML={{ __html: "Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }} />
      <Divider />
      <Button
        variantColor="orange"
        onClick={toggleShowReplies}
        size="xs"
        variant="ghost"
        color="orangered"
      >
        {showReplies ? 'Hide' : 'View'} Replies (3)
      </Button>
      <Collapse in={showReplies} startingHeight={0}>
        {showReplies && <Comments />}
      </Collapse>
    </Box>
  );
};


