import React, { useState } from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryDrawer from "./Category/page";

const Navigation = () => {
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button className="!text-black gap-2 w-full" onClick={toggleDrawer}>
              <RiMenu2Fill className="text-[18px]" />
              {t(`shopByCategory`)}
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`home`)}
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`fashion`)}
                  </Button>
                </Link>

                {/* here to add submenus in men section rerfere yt video 3 mern stack */}
                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`electronics`)}
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`bags`)}
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`footwear`)}
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`groceries`)}
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`beauty`)}
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`wellness`)}
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transtion text-[14px] font-[500]"
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    {t(`jwellery`)}
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[13px] font-[500] flex items-center gap-3 mt-0 mb-0">
              <GoRocket className="text-[18px]" />
              {t(`freeInternationalDelivery`)}
            </p>
          </div>
        </div>
      </nav>

      {/* Category Drawer Component */}
      <CategoryDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
};

export default Navigation;
