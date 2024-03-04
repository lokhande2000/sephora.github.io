import { useContext } from "react";
import { ContextProductDataProvider } from "../Context/ProductDataProvider";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import ProductsTableFilter from "./Filter/ProductsTableFilter";
import ProductsTableCard from "./ProductComponets/ProductsTableCard";
const ProductsTable = () => {
  const { productData } = useContext(ContextProductDataProvider);
  return (
    <Flex  w="80%" m="auto" >
      <Box w="20%" >
        <ProductsTableFilter />
      </Box>
      <SimpleGrid h="full" w="full" columns={4} spacing={2}>
        {productData &&
          productData.map((product) => (
            <ProductsTableCard key={product.id} product={product} />
          ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductsTable;
