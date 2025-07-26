import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";

const CategoryDrawer = (props) => {
  const [open, setOpen] = useState(false);
  const { openDrawer, setOpenDrawer } = props;
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="text-[16px] p-3 font-[500] flex items-center justify-between">
        Shop By Categories
        <IoCloseSharp
          className="cursor-pointer text-[20px]"
          onClick={() => setOpenDrawer(false)}
        />
      </h3>
    </Box>
  );
  return (
    <>
      <div>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </>
  );
};

export default CategoryDrawer;
