import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        px={10}
        // border={"1px solid red"}
        py={3}
        boxShadow='md'
      >
        <Box>
          <Text fontWeight={500}>Title</Text>
        </Box>
        <Flex gap={5} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontWeight={500}>Home</Text>
          <Text fontWeight={500}>About</Text>
          <Text fontWeight={500}>Log</Text>
          <Text fontWeight={500}>Contact</Text>
          <Button fontWeight={500} size={"sm"} variant={"outline"} colorScheme="blue">
            Button
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
