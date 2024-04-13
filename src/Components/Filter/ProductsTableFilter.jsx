import { useContext } from "react";
import { Button, Center, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { ContextProductDataProvider } from "../../Context/ProductDataProvider";

const ProductsTableFilter = () => {
  const { filterdatas } = useContext(ContextProductDataProvider);

  function handealClickFillterProducts(item) {
    filterdatas(item);
  }

  return (
    <VStack align="self-start">
      <Text>New</Text>
      <Heading as="h3" fontSize={25}>
        New
      </Heading>

      <VStack align="self-start" m={0}>
        <button>Just Dropped</button>
        <button
          onClick={() => {
            handealClickFillterProducts("makeup");
          }}
        >
          Makeup
        </button>
        <button
          onClick={() => {
            handealClickFillterProducts("skincare");
          }}
        >
          Skincare
        </button>
        <button
          onClick={() => {
            handealClickFillterProducts("fragrance");
          }}
        >
          Fragrance
        </button>
        <button
          onClick={() => {
            handealClickFillterProducts("bath");
          }}
        >
          Bath & Body
        </button>
        <button
          onClick={() => {
            handealClickFillterProducts("hair");
          }}
        >
          Hair
        </button>
        <button
          onClick={() => {
            handealClickFillterProducts("tools");
          }}
        >
          Tools & Brushes
        </button>
      </VStack>
    </VStack>
  );
};

export default ProductsTableFilter;
