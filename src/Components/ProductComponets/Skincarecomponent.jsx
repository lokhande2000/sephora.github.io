import { useContext, useEffect } from "react";
import { ContextProductDataProvider } from "../../Context/ProductDataProvider";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";

const Skincarecomponent = () => {
    const { productData } = useContext(ContextProductDataProvider);
    
    useEffect(()=>{
        let res = productData.filter((item) => (console.log(item.category)))
        
    },[])
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
              items: 6,
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
          {productData &&
            productData.filter((item)=> item.type === 'moisturizers').map((ele) => (
              <ProductCard key={ele.id} element={ele} />
            ))}
        </Carousel>
      </div>
    );
}

export default Skincarecomponent
