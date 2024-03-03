import CrouselComponent from "../Components/Crousel/CrouselComponent";
import BeautyOffers from "../Components/ProductComponets/BeautyOffers";
import Facecomponent from "../Components/ProductComponets/Facecomponent";
import Lipcomponet from "../Components/ProductComponets/Lipcomponet";
import SellingFast from "../Components/ProductComponets/SellingFast";
import Singlecategory from "../Components/ProductComponets/Singlecategory";
import Singlecategory2 from "../Components/ProductComponets/Singlecategory2";
import Skincarecomponent from "../Components/ProductComponets/Skincarecomponent";

const Home = () => {
  return (
    <div>
      <div>
        <CrouselComponent />
      </div>

      <div className="productcomponet">
        <h2>Chosen For You</h2>
        <Lipcomponet />
      </div>

      <div className="productcomponet">
        <h2>New Arrivals</h2>
        <Skincarecomponent />
      </div>
      <div className="productcomponet">
        <h2>Beauty Offers (10)</h2>
        <BeautyOffers />
      </div>

      <div className="Singlecategory">
        <Singlecategory />
      </div>

      <div className="productcomponet">
        <h2>Selling Fast</h2>
        <SellingFast />
      </div>

      <div className="productcomponet">
        <h2>Beauty Insider Rewards</h2>
        <p>Sign in to redeem your points.</p>
        <Facecomponent />
      </div>

      <div className="Singlecategory">
        <Singlecategory2 />
      </div>
    </div>
  );
};

export default Home;
