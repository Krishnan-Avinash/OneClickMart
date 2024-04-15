import React from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import IndividualName from "./IndividualName";

const AllPages = () => {
  const elements = [
    { name: "Home", link: "/", id: 1 },
    { name: "Contact", link: "/contact", id: 2 },
    { name: "About", link: "/about", id: 3 },
    { name: "Sign Up", link: "/signup", id: 4 },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="allpages-elements">
      <ul>
        {elements.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>
              <IndividualName name={item.name} />
            </Link>
          </li>
        ))}
      </ul>
      <Button
        pos={"sticky"}
        top={"4"}
        right={"4"}
        colorScheme="blue"
        className="header-ham"
        p={"0"}
        w={"10"}
        h={"10"}
        onClick={onOpen}
      >
        <BiMenuAltRight size={"25"} />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ONECLICKMART</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button variant={"ghost"} colorScheme="blue">
                <Link to={"/"} onClick={onClose}>
                  Home
                </Link>
              </Button>
              <Button variant={"ghost"} colorScheme="blue">
                <Link to={"/contact"} onClick={onClose}>
                  Contact
                </Link>
              </Button>
              <Button variant={"ghost"} colorScheme="blue">
                <Link to={"/about"} onClick={onClose}>
                  About
                </Link>
              </Button>
              <Button variant={"ghost"} colorScheme="blue">
                <Link to={"/signup"} onClick={onClose}>
                  Sign Up
                </Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AllPages;
