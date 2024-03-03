import Carousel from "react-multi-carousel";
import BeautyOffersCard from "./BeautyOffersCard";

const BeautyOffers = () => {
  const beautyProducts = [
    {
      id: 1,
      image:
        "https://www.sephora.com/contentimages/2024-spend-more-get-more-multiworld-app-site-desktop-mobile-beauty-offers-page-banner-us-final.jpg?imwidth=240",
      brand: "Spend More, Get More",
      name: "Choose up to three trial sizes from top brands like Drunk Elephant, Ceremonia and more! ",
      tag: "Free with $30, $55, or $80 min purchase.*Beauty Insider members only.",
      dis: "Online only *Exclusions/terms apply. ",
    },
    {
      id: 2,
      image:
        "https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-peter-thomas-roth-en-us-can-kohls.jpg?imwidth=240",
      brand: "Get 4X Points††",
      name: "on ALL Peter Thomas Roth.",
      tag: "Beauty Insider members only.",
      dis: "In store & online • Ends 3/6/2024††Exclusions/terms apply. May be combined with other promotional offers.",
    },
    {
      id: 3,
      image:
        "https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-patrick-ta-en-us-can.jpg?imwidth=240",
      brand: "Get 4X Points††",
      name: "on ALL PATRICK TA.",
      tag: "Beauty Insider members only.",
      dis: "In store & online • Ends 3/6/2024††Exclusions/terms apply. May be combined with other promotional offers.",
    },
    {
      id: 4,
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-02-29-PRETTYHAIR-slotting-promo-app-beauty-offers-banner-US.jpg?imwidth=240",
      brand: "Choose a Free Hair-Care Trial Size",
      name: "Get a Nutrafol conditioner or Living Proof shampoo.",
      tag: "Free with $30 purchase.* Beauty Insider members only.",
      dis: "Online only*Exclusions/terms apply.",
    },
    {
      id: 5,
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-2-28-skinfix-barrier-protection-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=240",
      brand: "Get a Skinfix Trial Size",
      name: "Visibly plump skin with this new and improved, barrier-supporting moisturizer.",
      tag: "Free with $30 purchase.* Beauty Insider members only.",
      dis: "Online only*Exclusions/terms apply.",
    },
    {
      id: 6,
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-02-15-SKINNEWNESS-slotting-promo-app-beauty-offers-banner-US-handoff.jpg?imwidth=240",
      brand: "Choose a Complimentary Skincare Trial Size",
      name: "Receive a Soft Services moisturizer or Tatcha cleanser.",
      tag: "Complimentary with $40 purchase.* Beauty Insider members only.",
      dis: "Online only *Exclusions/terms apply.",
    },
    {
      id: 7,
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-02-24-MULTITASKERS-slotting-promo-app-beauty-offers-banner-US-CA-handoff.jpg?imwidth=240",
      brand: "Choose a Free Skincare Trial Size",
      name: "From fresh, Kiehl’s Since 1851, Glow Recipe, Sunday Riley, or Summer Fridays.",
      tag: "Free with $40 purchase.* Beauty Insider members only.",
      dis: "Online only *Exclusions/terms apply.",
    },
    {
      id: 8,
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-02-06-ARMANIYSL-slotting-promo-app-beauty-offers-banner-US-handoff.jpg?imwidth=240",
      brand: "Choose a Complimentary Makeup Trial Size",
      name: "Set an Armani Beauty eyeshadow or Yves Saint Laurent lipstick in one of two shades.",
      tag: "Complimentary with $40 purchase.* Beauty Insider members only.",
      dis: "Online only *Exclusions/terms apply.",
    },
    {
      id: 9,
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-2-24-vib-r-gifts-site-desktop-mobile-app-beauty-offers-page-banner-caudalie-en-us-can.jpg?imwidth=240",
      brand: "Complimentary Caudalie Skincare",
      name: "Target fine lines with this duo from the Premier Cru lineup.",
      tag: "Complimentary with $45 purchase. Rouge & VIB only.",
      dis: "Online only *Exclusions/terms apply.",
    },
    {
      id: 10,
      image:
        "https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-2-17-vib-r-gifts-site-desktop-mobile-app-beauty-offers-page-banner-moroccanoil-en-us-can.jpg?imwidth=240",
      brand: "Receive a Moroccanoil Gift",
      name: "Try argan-oil-infused hair and body care.",
      tag: "Complimentary with $45 purchase.Rouge & VIB only.",
      dis: "Online only *Exclusions/terms apply.",
    },
    // {
    //     id:,
    //     image:'',
    //     brand:'',
    //     name:'',
    //     tag:'',
    //     dis:'',
    // },
  ];
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
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
            items: 5,
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
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {beautyProducts &&
          beautyProducts.map((ele) => (
            <BeautyOffersCard key={ele.id} element={ele} />
          ))}
      </Carousel>
    </div>
  );
};

export default BeautyOffers;
