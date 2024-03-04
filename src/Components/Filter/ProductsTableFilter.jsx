import { useContext } from "react";
import { Button, Center, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { ContextProductDataProvider } from '../../Context/ProductDataProvider'

const ProductsTableFilter = () => {

    const { fetchProductData } = useContext(ContextProductDataProvider);

    
  return (
    <VStack align="self-start">
      <Text>New</Text>
      <Heading as="h3" fontSize={25}>
        New
      </Heading>

      <VStack align="self-start" m={0} >
        <button onClick={(e)=>(console.log(e))}>
          Just Dropped
        </button>
        <button >
          Makeup
        </button>
        <button >
          Skincare
        </button>
        <button >
          Fragrance
        </button>
        <button >
          Bath & Body
        </button>
        <button>
          Hair
        </button>
        <button >
          Tools & Brushes
        </button>
      </VStack>
    </VStack>
  );
};

export default ProductsTableFilter;
