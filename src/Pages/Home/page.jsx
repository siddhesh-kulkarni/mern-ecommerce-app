import AdsBannerSlider from "../../Components/AdsBannerSlider/page";
import CatSlider from "../../Components/CatSlider/page";
import ProductItemsPage from "../../Components/ProductItems/page";
import Slider from "../../Components/Slider/page";
import { LiaShippingFastSolid } from "react-icons/lia";

export default function Home() {
  return (
    <>
      <Slider />
      <CatSlider />

      <section className="py-8 mt-5 lg:py-16 bg-white">
        <div className="container px-4">
          <div className="freeShipping w-full border-2 border-[#ff5252] rounded-md p-3 flex flex-wrap items-center justify-between gap-3 lg:p-4">
            {/* Left: Icon + Title */}
            <div className="flex items-center gap-2">
              <LiaShippingFastSolid className="text-[24px] lg:text-[50px]" />
              <span className="text-[13px] lg:text-[20px] font-semibold uppercase">
                Free Shipping
              </span>
            </div>

            {/* Middle: Description */}
            <div className="text-[12px] lg:text-base font-medium whitespace-nowrap">
              Free Delivery Now On Your First Order and over $200
            </div>

            {/* Right: Price */}
            <p className="text-[14px] lg:text-[25px] font-bold whitespace-nowrap">
              - Only $200*
            </p>
          </div>

          <AdsBannerSlider items={4} />
      <ProductItemsPage/>
        </div>
      </section>



      <div className="pb-16 lg:pb-32" />
    </>
  );
}
