import { Link } from "react-router-dom";
import SearchBar from "../Seach/Search";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-gray-400 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="coll w-[50%]">
              <p className="text-[12px] font-[500]">
                {t(`Get up to 50% off new season styles, limited time only`)}
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    {t(`Help Center`)}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-traking"
                    className="text-[12px] link font-[500] transition"
                  >
                    {`Order Tracking`}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src="/images/logo.jpg" />
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
                  Login
                </Link> | &nbsp;
                <Link
                  to={"/register"}
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>

              <li>
                <Tooltip title="Comapre" >
                  <Badge badgeContent={3} color="primary bg-primary text-white">
                    <IconButton aria-label="compare">
                      <IoIosGitCompare />
                    </IconButton>
                  </Badge>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Cart" >
                  <Badge badgeContent={3} color="primary bg-primary text-white">
                    <IconButton aria-label="cart">
                      <MdOutlineShoppingCart />
                    </IconButton>
                  </Badge>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist" >
                  <Badge badgeContent={3} color="primary bg-primary text-white">
                    <IconButton aria-label="wisglist">
                      <FaRegHeart />
                    </IconButton>
                  </Badge>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
