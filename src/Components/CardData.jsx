import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardData = ({ data }) => {
  //   console.log(data);
  return (
    <>
      <Box
        width={"90%"}
        // height={"auto"}
        // h={"450px"}
        margin={"auto"}
        pb={3}
        textAlign={"left"}
        // border={"1px solid red"}
        boxShadow="xl"
        rounded="sm"
        bg="white"
      >
        <Image w={"100%"}  src={"https://bit.ly/dan-abramov"} />
        <Heading mt={3} pl={5} fontSize={"18px"}>
          {" "}
          {data.Name}
        </Heading>
        <Text h={"100px"} pl={5} overflow={"hidden"} mt={5}>
          {data.ShortDesc}
        </Text>
        <Button
          ml={5}
          size={"md"}
          variant={"outline"}
          colorScheme="blackAlpha"
          mt={5}
        >
          View
        </Button>
      </Box>
    </>
  );
};

export default CardData;
