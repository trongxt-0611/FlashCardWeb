import { Container, ContainerProps } from "@chakra-ui/react";
import React from "react";
interface IContainer extends ContainerProps {
  children: React.ReactNode;
}
const WrapContainer = (props: IContainer) => {
  return <Container maxW={"1280px"}>{props.children}</Container>;
};

export default WrapContainer;
