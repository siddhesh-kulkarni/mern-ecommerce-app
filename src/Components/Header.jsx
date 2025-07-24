import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="top-strip py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="coll w-[50%]">
              <p className="text-[14px] font-[500]">
                Get up to 50% off new season styles, limited time only{" "}
              </p>
            </div>

            <div className="col2 flex item-center justify-end">
                <ul>
                    <li className="list-none">
                        <Link to="#">Help Center</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
