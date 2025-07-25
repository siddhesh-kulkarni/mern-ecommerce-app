import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/page";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { changeLanguage } from "../../i18n";
import Navigation from "../Navigation/page";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    changeLanguage(selectedLang);
  };

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-[#e5e5e5] border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="coll w-[50%]">
              <p className="text-[12px] font-[500]">{t(`discountMessage`)}</p>
            </div>

            <div className="col2 flex items-center justify-end gap-4">
              <select
                value={i18n.language}
                onChange={handleLanguageChange}
                className="text-[12px] border px-2 py-[2px] rounded"
              >
                <option value="en">English</option>
                <option value="mr">मराठी</option>
                <option value="hi">हिंदी</option>
              </select>

              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    {t(`helpCenter`)}
                  </Link>
                </li>{" "}
                |
                <li>
                  <Link
                    to="/order-traking"
                    className="text-[12px] link font-[500] transition"
                  >
                    {t(`orderTracking`)}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-[#e5e5e5] border-b-[1px]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/images/logo.jpg" alt="Logo" />
            </Link>
          </div>

          <div className="col2 w-[45%]">
            <SearchBar />
          </div>

          <div className="col3 w-[30%] flex items-center pl-3">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to={"/login"}
                  className="link transition text-[15px] font-[500]"
                >
                  {t("Login")}
                </Link>
                &nbsp; | &nbsp;
                <Link
                  to={"/register"}
                  className="link transition text-[15px] font-[500]"
                >
                  {t("Register")}
                </Link>
              </li>

              <li>
                <Tooltip title={t("Compare")}>
                  <Badge badgeContent={3} color="primary">
                    <IconButton aria-label="compare">
                      <IoIosGitCompare />
                    </IconButton>
                  </Badge>
                </Tooltip>
              </li>

              <li>
                <Tooltip title={t("Cart")}>
                  <Badge badgeContent={3} color="primary">
                    <IconButton aria-label="cart">
                      <MdOutlineShoppingCart />
                    </IconButton>
                  </Badge>
                </Tooltip>
              </li>

              <li>
                <Tooltip title={t("Wishlist")}>
                  <Badge badgeContent={3} color="primary">
                    <IconButton aria-label="wishlist">
                      <FaRegHeart />
                    </IconButton>
                  </Badge>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
