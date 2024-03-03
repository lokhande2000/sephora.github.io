import "./Navbar.css";
import { Box, Center, Flex, Text, Input, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import home from "./images/home.jpg";
import community from "./images/comunity.jpg";
import Face from "./images/face.jpg";
import Basket from "./images/basket.jpg";
const Navbar = () => {
  return (
    // <Flex gap={15}>
    //   <Link to='/'>Home</Link>
    //   <Link to='/dashboard'>dashboard</Link>
    //   <Link to='/login'>login</Link>
    //   <Link to='/signin'>signin</Link>
    // </Flex>
    <>
      <header>
        <Box _hover={{ textDecoration: "underline" }} p={18} bg={"#FEF1BD"}>
          <Center>
            <Link style={{ color: "black" }}>
              <b>Choose up to 3 FREE trial sizes </b> with $30, $55, or $80*
              purchase. *Terms apply. Code <b>BEAUTYFAVS ▸</b>
            </Link>
          </Center>
        </Box>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1vw",
          }}
          h="65px"
          // w={"80%"}
          m="auto"
          // bg={"blue"}
        >
          <Text letterSpacing={7} fontSize={"25px"}>
            SEPHORA
          </Text>
          <Input
            w={"30%"}
            borderRadius={"50px"}
            outline="none"
            padding="5px 20px"
            fontSize={"17px"}
            placeholder="search"
          />

          <Flex alignItems={"center"}>
            <Image src={home} alt="home img" w={"2vw"} h={28} />
            <Box ml={10}>
              <Text fontSize={15} fontWeight={500}>
                Stores & Services
              </Text>
              <Text fontSize={14}>Chose your Store</Text>
            </Box>
          </Flex>

          <Flex>
            <Center>
              <Image src={community} alt="comunity img" w={"2vw"} h={28} />
              <Text ml={5}>Community</Text>
            </Center>
          </Flex>

          <Flex>
            <Center>
              <Image src={Face} alt="image" w={"2vw"} h={28} />
              <Box ml={8}>
                <Text>
                  <Link>
                    <b style={{ color: "black" }}>Sign in</b>
                  </Link>
                </Text>
                <Text>for FREE Shipping 🚙</Text>
              </Box>
            </Center>
          </Flex>

          <Box>
            <FavoriteBorderIcon />
          </Box>

          <Box>
            <Image src={Basket} alt="basket img" w={"2vw"} h={28} />
          </Box>
        </Box>

        <nav>
          <div className="menu-bar">
            <ul>
              <li className="active">
                <Link href="">New</Link>
                <div className="sub-menu-1">
                  <ul className="dropdown-flex">
                    <li>
                      <Link to="">
                        <b>All New</b>
                      </Link>
                      <Link to="">Just Dropped</Link>
                      <Link to="">New Makeup</Link>
                      <Link to="">New Skincare</Link>
                      <Link to="">New Hair Care</Link>
                      <Link to="">New Fragrance</Link>
                      <Link to="">New Bath & Body</Link>
                      <Link to="">New Tools & Brushes</Link>
                    </li>
                    <li>
                      <Link to="">
                        <b>he Next Big Thing</b>
                      </Link>
                      <Link to="">Bestsellers</Link>
                      <Link to="">Trending on Social</Link>
                      <Link to="">Refillable Beauty Products</Link>
                      <Link to="">Quizzes & Buying Guides</Link>
                      <Link to="">Clean Beauty Guide</Link>
                      <Link to="">Clean+ Planet Positive Beauty Guide</Link>
                      <Link to="">FSA & HSA Eligible</Link>
                    </li>
                    <li>
                      <img
                        src="https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-desktop-global-navigation-button-2053-release.jpg?imwidth=294"
                        alt="img"
                      />
                    </li>
                    <li>
                      <img
                        src="https://www.sephora.com/contentimages/meganav/large/2024-feb-hair-repair-site-desktop-universal-navigation-button-us.jpg?imwidth=294"
                        alt="img"
                      />
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="">Brands</a>

                <div className="sub-menu-1">
                  <ul className="dropdown-flex">
                    <li>
                      <Link>Brands A-Z</Link>
                      <Link>SEPHORA COLLECTION</Link>
                      <Link>New Brands</Link>
                      <Link>Prada Beauty</Link>
                      <Link>The Rootist</Link>
                      <Link>Iris&Romeo</Link>
                      <Link>Act + Acre</Link>
                    </li>
                    <li>
                      <Link to="">
                        <b>Only At Sephora</b>
                      </Link>
                      <Link to="">HAUS LABS By Lady Gaga</Link>
                      <Link to="">MILK MAKEUP</Link>
                      <Link to="">Function of Beauty PRO</Link>
                      <Link to="">MAKEUP BY MARIO</Link>
                      <Link to=""></Link>
                      <Link to="">LoveShackFancy</Link>
                    </li>
                    <li>
                      <Link to="">
                        <b>Affordable Brands</b>
                      </Link>
                      <Link to="">SEPHORA COLLECTION</Link>
                      <Link to="">The Ordinary</Link>
                      <Link to="">The Inkey List</Link>
                      <Link to="">Verb</Link>
                    </li>
                    <li>
                      <Link to="">
                        <b>Black-Owned Brands</b>
                      </Link>
                      <Link to="">PATTERN By Tracee Ellis Ross</Link>
                      <Link to="">adwoa beauty</Link>
                      <Link to="">FENTY Fragrance</Link>
                      <Link to="">Melanin Haircare</Link>
                      <Link to="">Ami Colé</Link>
                      <Link to="">World of Chris Collins</Link>
                    </li>
                    <li>
                      <Link to="">
                        <b>Clean at Sephora</b>
                      </Link>
                      <Link to="">Kosas</Link>
                      <Link to="">dae</Link>
                      <Link to="">amika</Link>
                      <Link to="">PHLUR</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">Makeup</a>
                <div className="sub-menu-1">
                  <ul className="dropdown-flex">
                    <li>
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
                    </li>
                    <li>
                      <Link>
                        <b>Eye</b>
                      </Link>
                      <Link>Eye Palettes</Link>
                      <Link>Mascara</Link>
                      <Link>Eyeliner</Link>
                      <Link>Eyebrow</Link>
                      <Link>False Eyelashes</Link>
                      <Link>Eyeshadow</Link>
                      <Link>Eyelash Serums</Link>
                      <Link>Eyebrow Serums</Link>
                      <Link>Eye Primer</Link>
                      <Link>Eye Sets</Link>
                    </li>
                    <li>
                      <Link>
                        <b>Lip</b>
                      </Link>
                      <Link>Lip Gloss</Link>
                      <Link>Lipstick</Link>
                      <Link>Lip Oil</Link>
                      <Link>Lip Plumper</Link>
                      <Link>Lip Balms & Treatments</Link>
                      <Link>Liquid Lipstick</Link>
                      <Link>Lip Liner</Link>
                      <Link>Lip Stain</Link>
                      <Link>Lip Sets</Link>
                    </li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="">Skincare</a>
              </li>
              <li>
                <a href="">Hair</a>
              </li>
              <li>
                <a href="">Fragrance</a>
              </li>
              <li>
                <a href="">Tools & Brushes</a>
              </li>
              <li>
                <a href="">Vath & Body</a>
              </li>
              <li>
                <a href="">Mini Size</a>
              </li>
              <li>
                <a href="">Gifts & Gift Cards</a>
              </li>
              <li>
                <a href="">Beauty Under $20</a>
              </li>
              <li>
                <a href="">Sale & Offers</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
