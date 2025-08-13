import CatSlider from "../../Components/CatSlider/page";
import Slider from "../../Components/Slider/page";
import { LiaShippingFastSolid } from "react-icons/lia";

export default function Home() {
  return (
    <>
      <Slider />
      <CatSlider />

      <section className="py-16 bg-white mt-5">
        <div className="container">
          <div className="freeShipping w-full p-4 py-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
            </div>

            <div className="col2 ">
              <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
            </div>

            <p className="font-bold font-[25px]">- Only $200*</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
