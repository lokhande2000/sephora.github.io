import "./Navbar.css";
import { Box, Center, Flex, Text, Input, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import home from "./images/home.jpg";
import community from "./images/comunity.jpg";
import Face from "./images/face.jpg";
import Basket from "../../../public/image.svg";
const Navbar = () => {
  return (
    <>
      {/* <Flex gap={15}>
      <Link to='/'>Home</Link>
      <Link to='/dashboard'>dashboard</Link>
      <Link to='/login'>login</Link>
      <Link to='/signin'>signin</Link>
    </Flex> */}
      <header>
        <Box _hover={{ textDecoration: "underline" }} p={18} bg={"#FEF1BD"}>
          <Center>
            <Link style={{ color: "black" }}>
              <b>Choose up to 3 FREE trial sizes </b> with $30, $55, or $80*
              purchase. *Terms apply. Code <b>BEAUTYFAVS ▸</b>
            </Link>
          </Center>
        </Box>

        <Box className="navbox">
          <Link to='/' style={{letterSpacing:"10px", fontSize:"25px"}}>
            SEPHORA
          </Link>
          <Input
            w={"30%"}
            borderRadius={"50px"}
            outline="none"
            padding="5px 20px"
            fontSize={"17px"}
            placeholder="search"
          />

          <Flex alignItems={"center"}>
            <Image
              src="https://www.sephora.com/img/ufe/icons/stores.svg"
              alt="home img"
              w={8}
            />
            <Box ml={10}>
              <Text fontSize={15} fontWeight={500}>
                Stores & Services
              </Text>
              <Text fontSize={14}>Chose your Store</Text>
            </Box>
          </Flex>

          <Flex>
            <Center>
              <Image
                src="https://www.sephora.com/img/ufe/icons/community.svg"
                alt="comunity img"
                w={8}
              />
              <Text ml={5}>Community</Text>
            </Center>
          </Flex>

          <Flex>
            <Center>
              <Image
                src="https://www.sephora.com/img/ufe/icons/me.svg"
                alt="image"
                w={8}
              />
              <Box ml={8}>
                <Text>
                  <Link to="/signin">
                    <b style={{ color: "black" }}>Sign in</b>
                  </Link>
                </Text>
                <Text>for FREE Shipping</Text>
              </Box>
            </Center>
          </Flex>

          <Box>
            <FavoriteBorderIcon />
          </Box>

          <Box w={8}>
            <Image src={Basket} alt="basket img" />
          </Box>
        </Box>

        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">
              <Link to="/products">New</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column sub-menu">
                  <Link to="/dashboard">All New</Link>
                  <Link to="">Just Dropped</Link>
                  <Link to="">New Makeup</Link>
                  <Link to="">New Skincare</Link>
                  <Link to="">New Hair Care</Link>
                  <Link to="">New Fragrance</Link>
                  <Link to="">New Bath & Body</Link>
                  <Link to="">New Tools & Brushes</Link>
                </div>

                <div className="column sub-menu">
                  <Link to="">The Next Big Thing</Link>
                  <Link to="">Bestsellers</Link>
                  <Link to="">Trending on Social</Link>
                  <Link to="">Refillable Beauty Products</Link>
                  <Link to="">Quizzes & Buying Guides</Link>
                  <Link to="">Clean Beauty Guide</Link>
                  <Link to="">Clean+ Planet Positive Beauty Guide</Link>
                  <Link to="">FSA & HSA Eligible</Link>
                </div>

                <div className="column">
                  <img
                    src="https://www.sephora.com/contentimages/meganav/large/2024-april-skin-story-site-desktop-universal-navigation-button-release.jpg?imwidth=294"
                    alt=""
                  />
                </div>
                <div className="column">
                  <img
                    src="https://www.sephora.com/contentimages/2024-4-1-rare-beauty-fos-soft-pinch-powder-blush-site-desktop-global-navigation-button-en-us.jpg?imwidth=294"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Brands</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <h3>Brands A-Z</h3>
                  <Link to="">SEPHORA COLLECTION</Link>
                  <Link to="">New Brands</Link>
                  <Link to="">Brown Girl Jane</Link>
                  <Link to="">AAVRANI</Link>
                  <Link to="">Dr. Idriss</Link>
                  <Link to="">Prada Beauty</Link>
                  <Link to="">Iris&Romeo</Link>
                </div>
                <div className="column">
                  <h3>Only At Sephora</h3>
                  <Link to="">Rare Beauty by Selena Gomez</Link>
                  <Link to="">HAUS LABS By Lady Gaga</Link>
                  <Link to="">Mane</Link>
                  <Link to="">5 SENS</Link>
                </div>
                <div className="column">
                  <h3>Affordable Brands</h3>
                  <Link to="">SEPHORA COLLECTION</Link>
                  <Link to="">The Ordinary</Link>
                  <Link to="">The Inkey List</Link>
                  <Link to="">Verb</Link>
                </div>
                <div className="column">
                  <h4>Black-Owned Brands</h4>
                  <Link to="">PATTERN By Tracee Ellis Ross</Link>
                  <Link to="">adwoa beauty</Link>
                  <Link to="">FENTY Fragrance</Link>
                  <Link to="">Melanin Haircare</Link>
                  <Link to="">Ami Colé</Link>
                  <Link to="">World of Chris Collins</Link>
                </div>

                <div className="column">
                  <h4>Clean at Sephora</h4>
                  <Link to="">Kosas</Link>
                  <Link to="">dae</Link>
                  <Link to="">amika</Link>
                  <Link to="">PHLUR</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Makeup</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b>All Makeup</b>
                  </Link>
                  <Link to="">Face</Link>
                  <Link to="">Foundation</Link>
                  <Link to="">BB & CC Cream</Link>
                  <Link to="">Tinted Moisturizer</Link>
                  <Link to="">Concealer</Link>
                  <Link to="">Face Primer</Link>
                  <Link to="">Setting Spray & Powder</Link>
                  <Link to="">Highlighter</Link>
                  <Link to="">Contour</Link>
                  <Link to="">Color Correct</Link>
                  <Link to="">Face Sets</Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Eye</b>
                  </Link>
                  <Link to="">Eye Palettes</Link>
                  <Link to="">Mascara</Link>
                  <Link to="">Eyeliner</Link>
                  <Link to="">Eyebrow</Link>
                  <Link to="">False Eyelashes</Link>
                  <Link to="">Eyeshadow</Link>
                  <Link to="">Eyelash Serums</Link>
                  <Link to="">Eyebrow Serums</Link>
                  <Link to="">Eye Primer</Link>
                  <Link to="">Eye Sets</Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Lip</b>
                  </Link>
                  <Link to="">Lip Gloss</Link>
                  <Link to="">Lipstick</Link>
                  <Link to="">Lip Oil</Link>
                  <Link to="">Lip Plumper</Link>
                  <Link to="">Lip Balms & Treatments</Link>
                  <Link to="">Liquid Lipstick</Link>
                  <Link to="">Lip Liner</Link>
                  <Link to="">Lip Stain</Link>
                  <Link to="">Lip Sets</Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Cheek</b>
                  </Link>
                  <Link to="">Blush</Link>
                  <Link to="">Bronzer</Link>
                  <Link to="">Highlighter</Link>
                  <Link to="">Contour</Link>
                  <Link to="">Cheek Palettes</Link>
                  <Link to="">
                    <b>Value & Gift Sets</b>
                  </Link>
                  <Link to="">
                    <b>Makeup Palettes</b>
                  </Link>
                  <Link to="">
                    <b>Brushes & Applicators</b>
                  </Link>
                  <Link to="">
                    <b>Accessories</b>
                  </Link>
                  <Link to="">
                    <b>Nail</b>
                  </Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>New</b>
                  </Link>
                  <Link to="">
                    <b>Bestsellers</b>
                  </Link>
                  <Link to="">
                    <b>Clean Makeup</b>
                  </Link>
                  <Link to="">
                    <b>Vegan Makeup</b>
                  </Link>
                  <Link to="">
                    <b>Vegan Makeup</b>
                  </Link>
                  <Link to="">
                    <b>Mini Size</b>
                  </Link>
                  <Link to="">
                    <b>Value Size</b>
                  </Link>
                  <Link to="">
                    <b>Refillable Makeup</b>
                  </Link>
                  <Link to="">
                    <b>Sephora Collection</b>
                  </Link>
                  <Link to="">
                    <b>Luxury Makeup</b>
                  </Link>
                  <Link to="">
                    <b>Black-Owned Brands Makeup</b>
                  </Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Help Me Choose</b>
                  </Link>
                  <Link to="">Monochrome Makeup</Link>
                  <Link to="">Easy Eye Makeup</Link>
                  <Link to="">Foundation Quiz</Link>
                  <Link to="">Lip Quiz</Link>
                  <Link to="">Brow Quiz</Link>
                  <Link to="">Complexion Routine Builder</Link>
                  <Link to="">Guide To Foundations</Link>
                  <Link to="">Clean Makeup Guide</Link>
                  <Link to="">No Makeup Makeup</Link>
                  <Link to="">Super-Natural Sculpting</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Skincare</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b>All Skincare</b>
                  </Link>
                  <Link to="">
                    <b>Moisturizers</b>
                  </Link>
                  <Link to="">Night Creams</Link>
                  <Link to="">Face Oils</Link>
                  <Link to="">Mists & Essences</Link>
                  <Link to="">BB & CC Cream</Link>
                  <Link to="">
                    <b>Cleansers</b>
                  </Link>
                  <Link to="">Face Wash & Cleansers</Link>
                  <Link to="">Exfoliators</Link>
                  <Link to="">Makeup Removers</Link>
                  <Link to="">Face Wipes</Link>
                  <Link to="">Toners</Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Treatments</b>
                  </Link>
                  <Link to="">Face Serums</Link>
                  <Link to="">Blemish & Acne Treatments</Link>
                  <Link to="">Facial Peels</Link>
                  <Link to="">
                    <b>Masks</b>
                  </Link>
                  <Link to="">Face Masks</Link>
                  <Link to="">Sheet Masks</Link>
                  <Link to="">Eye Masks</Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Eye Care</b>
                  </Link>
                  <Link to="">Eye Creams & Treatments</Link>
                  <Link to="">
                    <b>Eye Masks</b>
                  </Link>
                  <Link to="">
                    <b>Lip Balms & Treatments</b>
                  </Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Sunscreen</b>
                  </Link>
                  <Link to="">Face Sunscreen</Link>
                  <Link to="">Body Sunscreen</Link>
                  <Link to="">
                    <b>High Tech Tools</b>
                  </Link>
                  <Link to="">
                    <b>Wellness</b>
                  </Link>
                  <Link to="">Supplements</Link>
                  <Link to="">Feminine Care</Link>
                </div>

                <div className="column">
                  <Link to="">
                    <b>Shop By Concern</b>
                  </Link>
                  <Link to="">Acne & Blemishes</Link>
                  <Link to="">Anti-Aging</Link>
                  <Link to="">Dark Spots</Link>
                  <Link to="">Pores</Link>
                  <Link to="">Dryness</Link>
                  <Link to="">Fine Lines & Wrinkles</Link>
                  <Link to="">Dullness</Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>New</b>
                  </Link>
                  <Link to="">
                    <b>Bestsellers</b>
                  </Link>
                  <Link to="">
                    <b>Clean Skincare</b>
                  </Link>
                  <Link to="">
                    <b>Vegan Skincare</b>
                  </Link>
                  <Link to="">
                    <b>Value & Gift Sets</b>
                  </Link>
                  <Link to="">
                    <b>Mini Size</b>
                  </Link>
                  <Link to="">
                    <b>Mini Size</b>
                  </Link>
                  <Link to="">
                    <b>Refillable Skincare</b>
                  </Link>
                  <Link to="">
                    <b>FSA & HSA Eligible</b>
                  </Link>
                  <Link to="">
                    <b>Sephora Collection</b>
                  </Link>
                  <Link to="">
                    <b>Luxury Skincare</b>
                  </Link>
                  <Link to="">
                    <b>Black-Owned Brands Skincare</b>
                  </Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b>Help Me Choose</b>
                  </Link>
                  <Link to="">Better Skin Fast</Link>
                  <Link to="">Skincare Quiz</Link>
                  <Link to="">Skin Routine Quiz</Link>
                  <Link to="">FSA/HSA Guide</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Hair</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Fragrance</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Tools & Brushes</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Bath & Body</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Mini Size</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Gifts & Gift Cards</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Beauty Under $20</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              <Link to="">Sale & Offers</Link>
            </button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
                <div className="column">
                  <Link to="">
                    <b></b>
                  </Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                  <Link to=""></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
