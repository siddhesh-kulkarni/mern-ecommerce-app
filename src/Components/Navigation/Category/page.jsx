import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CategoryDrawer = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { openDrawer, setOpenDrawer } = props;
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className="categoryPanel">
      <h3 className="text-[16px] p-3 font-[500] flex items-center justify-between">
        {t(`shopByCategory`)}
        <IoCloseSharp
          className="cursor-pointer text-[20px]"
          onClick={() => setOpenDrawer(false)}
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !px-3 ">
                {t(`fashion`)}
              </Button>
            </Link>

            {subMenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {subMenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !px-3 ">
                      {t(`Apparel`)}
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubMenuIndex === 0 && (
                    <ul className="innerSubmenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Apparel`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Samrt Tablet`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Crepe T-Shirt`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Leather Watch`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Rolling Diamond`)}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !px-3 ">
                {t(`fashion`)}
              </Button>
            </Link>

            {subMenuIndex === 1 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {subMenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !text-[rgba(0,0,0,0.8)] !px-3 ">
                      {t(`Apparel`)}
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubMenuIndex === 1 && (
                    <ul className="innerSubmenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Apparel`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Samrt Tablet`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Crepe T-Shirt`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Leather Watch`)}
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link w-full !text-left !justify-start transition text-[14px] !px-3 "
                        >
                          {t(`Rolling Diamond`)}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryDrawer;
