import { Box, Text, Heading, Link, Button, Image } from "@chakra-ui/react";
import './CrouselComponent.css';
const BannerCard = ({ data }) => {
  const { url, title, use, color } = data;
  return (
    <Box
    className="crouselbox"
      width="98%"
      rounded="md"
    //   height={{ base:'450px', sm: "380px", md: "450px", lg: "500px",}}
      position={"relative"}
      bg={color}
      overflow={"hidden"}
    >
      <Image src={url} alt="banner image" width={'100%'} />
      <Box p={"15px"}>
        <Heading as="h2" size="md" >
          {title}
        </Heading>
        <Box _hover={{ textDecoration: "underline" }} >
          <Link fontSize={{xl:'xl'}}>{use}</Link>
          <Button
            _hover={{ textDecoration: "underline" }}
            border={"none"}
            bg={"none"}
            position={"absolute"}
            bottom={"20px"}
            left={"15px"}
            
          >
            <b>SHOP NOW</b>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerCard;
