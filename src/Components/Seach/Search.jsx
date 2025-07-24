import React from "react";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
        <input
          type="text"
          placeholder={t(`Search for products`)}
          className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
        />
        <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
          <IoSearch className="text-[#4e4e4e] text-[20px]" />
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
