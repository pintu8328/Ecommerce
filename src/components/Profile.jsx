import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <Flex>
        <Menu>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
            minW={0}
          >
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </MenuButton>
          <MenuList zIndex={10000}>
            <Link to="/cart">
            <MenuItem>Cart</MenuItem>
            </Link>
            <Link to="/orders">
            <MenuItem>Orders</MenuItem>
            </Link>
            <Link to="/login">
            <MenuItem>Login</MenuItem>
            </Link>
            <Link to="/">
            <MenuItem>Log Out</MenuItem>
            </Link>
          </MenuList>
        </Menu>
    </Flex>
  );
};
