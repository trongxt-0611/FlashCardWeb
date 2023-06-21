import { Center } from "@chakra-ui/react";
import React from "react";
import { useSidebarStore } from "../context/useSidebarAdmin";
import UserManager from "./UserManager";
import CardManager from "./CardManager";

const AdminContent = () => {
  const { sidebar } = useSidebarStore();
  return <Center mt={10}>{sidebar === "User" ? <UserManager /> : <CardManager/>}</Center>;
};

export default AdminContent;
