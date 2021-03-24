import React from "react";
import "./HeaderArea.css";
import { FaYoutube } from "react-icons/fa";
import { MdSearch, MdVideoCall, MdViewComfy } from "react-icons/md";
import { AiTwotoneBell } from "react-icons/ai";

function HeaderArea() {
  return (
    <body>
      <div className="HeaderArea">
        <div className="Header">
          <header className="header">
            <button className="button">&#9776;</button>
            <FaYoutube color="red" fontSize="3rem" />
            <div>Youtube</div>
          </header>

          <form
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(0,0,0,.1)",
              padding: 5,
              borderRadius: 5,
              width: 280,
            }}
          >
            <input
              type="text"
              placeholder={"Search"}
              style={{
                background: "rgba(0,0,0,.001)",
                border: "none",
                outline: "none",
                padding: 7,
                fontSize: 15,
                width: 280,
              }}
            />
            <div className="search">
              <MdSearch fontSize="3rem" />
            </div>
          </form>
          <div className="Icon">
            <div className="icon">
              <MdVideoCall fontSize="2.8rem" />
            </div>
            <div className="icon">
              <MdViewComfy fontSize="2.8rem" />
            </div>
            <div className="icon">
              <AiTwotoneBell fontSize="2.8rem" />
            </div>
            <div className="icon">
              <img src="/images/dp.jpg" alt="dp" />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default HeaderArea;
