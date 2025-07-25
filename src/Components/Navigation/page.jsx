import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button className="!text-black gap-2 w-full">
              <RiMenu2Fill className="text-[18px]"/>
              {t(`shopByCategory`)}
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Home</Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Fashion</Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Electronics</Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Bags</Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Footwear</Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Groceries</Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Beauty </Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Wellness </Link>
              </li>
              <li className="list-none">
                <Link to={'/'} className="link transtion text-[14px] font-[500]">Jwellery </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[13px] font-[500] flex items-center gap-3 mt-0 mb-0"><GoRocket className="text-[18px]" />Free International Delivery</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
