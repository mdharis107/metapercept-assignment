import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Title = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"#00B5D8"}
        color={"white"}
        mt={5}
        gap={5}
        h={"300px"}
        // border={"1px solid red"}
        borderRadius={3}
        textAlign={"center"}
        mb={20}
      >
        <Heading fontWeight={200}>Title</Heading>
        <Text fontSize={"17px"} fontWeight={200} w={"620px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          recusandae voluptates culpa mollitia quae. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </Text>
        <Button w={"10%"}>Read more</Button>
      </Box>
    </>
  );
};

export default Title;
