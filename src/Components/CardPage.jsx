import { Box, Card, Grid, Heading, Text } from "@chakra-ui/react";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import content from "./data.js";
import CardData from "./CardData.jsx";

const CardPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(content);
  }, []);

  console.log(data);

  return (
    <>
      <Box mt={"50px"} mb={5}>
        <Heading fontWeight={200}>Classes</Heading>
        <Text mt={5} fontSize={"16px"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere
          tenetur cumque. Laborum mollitia modi quia
        </Text>
      </Box>
      <Grid
        mt={5}
        width={"80%"}
        margin={"auto"}
        templateColumns="repeat(3, 1fr)"
        gap={6}
        // border={"1px solid red"}
      >
        {data?.map((ele) => {
          return <CardData key={ele.ID} data={ele} />;
        })}
      </Grid>
    </>
  );
};

export default CardPage;
