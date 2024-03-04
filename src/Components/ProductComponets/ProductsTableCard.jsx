import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductsTableCard = ({ product }) => {
    const { imageUrl, name, brand, price, stars } = product;
  return <Box p={10}>
    <Image src={imageUrl}/>
    <Text><b>{name}</b></Text>
    <Text>{brand}</Text>
    <Text><b>{stars}</b></Text>
    <Heading as='h3' fontSize={18}>${price}</Heading>
  </Box>;
};

export default ProductsTableCard;
