import React from "react";
import Cart from "./Cart";
import img1 from "../../../assets/myAcc.png";
import { Link } from "react-router-dom";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const SearchNCart = () => {
  return (
    <div className="header-right">
      <input type="text" placeholder="What are you looking for?" />
      <Cart />
      {/* <Link>
        <img
          src={img1}
          alt="Err"
          style={{
            height: "2rem",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "0.15rem",
            cursor: "pointer",
          }}
        />
      </Link> */}
      <Menu>
        <MenuButton
          as={Button}
          _hover={{ bg: "gray.400" }}
          style={{
            height: "fit-content",
            width: "fit-content",
            padding: "0.75rem",
            borderRadius: "50%",
            border: "2px solid black",
          }}
        >
          <img
            src={img1}
            alt="Err"
            style={{
              height: "1.5rem",
            }}
          />
        </MenuButton>
        <MenuList style={{ backgroundColor: "#5858ff61" }}>
          <MenuItem>My Account</MenuItem>
          <MenuItem>My Orders</MenuItem>
          <MenuItem>My Cancellations</MenuItem>
          <MenuItem>My Reviews</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SearchNCart;
