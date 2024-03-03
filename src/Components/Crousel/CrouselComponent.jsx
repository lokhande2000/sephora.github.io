
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BannerCard from "./BannerCard";
import './CrouselComponent.css';
const CrouselComponent = () => {
  const bannerData = [
    {
      id: 1,
      url: "https://www.sephora.com/contentimages/2024-feb-lip-and-cheek-site-desktop-mobile-rwd-hero-banner-color-story-berry-US-CAN-image-3005-release.jpg?imwidth=545",
      title: "Berry on Berry",
      use: "Double down on a matching lip and cheek. It winse every time.",
      color: "#C4AADA",
    },
    
    {
      id: 2,
      url: "https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-mauve-image-only-us-3003-3079-release.jpg?imwidth=545",
      title: "Mauve on Mauve",
      use: "Play up your lips and cheeks with a wash of color.",
      color: "#CE7183",
    },
    {
      id: 3,
      url: "https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-pink-us-can-2883-release.jpg?imwidth=545",
      title: "Pink on Pink",
      use: "Make this lip-and-cheek look your whole personality.",
      color: "#FF82A4",
    },
    {
      id: 4,
      url: "https://www.sephora.com/contentimages/2024-02-19-slotting-bestsellers-v2-site-rwd-hp-hero-banner-US-CA_01.jpg?imwidth=545",
      title: "Bestselling Beauty",
      use: "These fan-favorites are worth the hype.",
      color: "#F57F7D",
    },
    {
      id: 5,
      url: "https://www.sephora.com/contentimages/2024-2-17-mufe-hd-skin-hydra-glow-skincare-foundation-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=545",
      title: "New MAKEUP FOR EVER",
      use: "HD Skin Hydra Glow Foundation: 24 hours of hydrating, blurring coverage. Only at Sephora.",
      color: "#F2EEED",
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
