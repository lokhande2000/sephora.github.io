
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BannerCard from "./BannerCard";
import './CrouselComponent.css';
const CrouselComponent = () => {
  const bannerData = [
    {
      id: 1,
      url: "https://www.sephora.com/contentimages/homepage/031524/2024-sse-bundle-c-site-desktop-mobile-rwd-hero-banner-insider-us-can-final-image-only-2000x2000.jpeg?imwidth=545",
      title: "Major Beauty Savings!",
      use: "Join our free loyalty program to save. Ends 4/15. ",
      color: "#2F1747",
    },
    
    {
      id: 2,
      url: "https://www.sephora.com/contentimages/2024-april-skin-story-site-desktop-mobile-app-home-page-rwd-hero-banner-v2-plumping-1200x800-us-can-2833.jpg?imwidth=545",
      title: "Visibly Plump Fast",
      use: "With powerful formulas for bouncy, youthful-looking skin.",
      color: "#000",
    },
    {
      id: 3,
      url: "https://www.sephora.com/contentimages/2004-04-06-slotting-luxe-site-rwd-home-page-hero-banner-3-product-english-US-CA_01.jpg?imwidth=545",
      title: "Everyday Luxury",
      use: 'Meet the "gift to self" you need right now.',
      color: "#E2BEA4",
    },
    {
      id: 4,
      url: "https://www.sephora.com/contentimages/homepage/031524/2024-april-skin-story-rwd-hero-banner-brightening-us-release-image-only-2000x2000.jpeg?imwidth=545",
      title: "Glow Fast",
      use: "With powerful formulas for dullness and dark spots.",
      color: "#000",
    },
    {
      id: 5,
      url: "https://www.sephora.com/contentimages/2024-04-03-slotting-just-arrived-v3-site-rwd-home-page-hero-banner-US-CA-handoff_01.jpg?imwidth=545",
      title: "The Latest Lineup",
      use: "New beauty from the hottest brands.",
      color: "#944E4E",
    },
    {
      id: 6,
      url: "https://www.sephora.com/contentimages/2024-2-14-kosas-bb-burst-tinted-moisturizer-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=545",
      title: "NEW Kosas BB Tinted Gel Cream",
      use: "Hydrates, visibly smooths, and comes in 24 shades.",
      color: "#8DC1E8",
    },
    
  ];
  return (
    <div className='crouselcomponent'>
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={3}
        swipeable
      >
        {
          bannerData.map((data)=>(
            <BannerCard key={data.id} data={data} />
          ))
        }
      </Carousel>
    </div>
  );
};

export default CrouselComponent;
