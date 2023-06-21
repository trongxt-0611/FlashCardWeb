import {
  Spinner,
  TableContainer,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  Text,
  TableCaption,
  Button,
  Tag,
  useDisclosure,
  Modal,
  ModalBody,
  HStack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  VStack,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import api from "../api/api";

const TableCol = [
  { label: "ID", dataIndex: "uid" },
  { label: "Email", dataIndex: "email" },
  { label: "Email Verified", dataIndex: "emailVerified" },
  { label: "Name", dataIndex: "displayName" },
  { label: "Action", dataIndex: "" },
];

interface IBackupData {
  date: string;
  id: number;
  catesCnt: number;
  setsCnt: number;
  cardsCnt: number;
}
const UserManager = () => {
  const { data, isLoading } = useSWR("/admin/get-user", () =>
    api.admin.getUsers()
  );
  const backupModal = useDisclosure();
  const { trigger, isMutating } = useSWRMutation(
    "/admin/getUserBackups",
    (url, { arg }: { arg: any }) => api.admin.getBackup(arg)
  );
  const [backupData, setBackupData] = useState<IBackupData>();

  return isLoading ? (
    <Spinner colorScheme="primary" />
  ) : (
    <TableContainer>
      <Table
        variant="simple"
        colorScheme="primary"
        borderWidth="1px"
        borderColor="primary.50"
        rounded="md"
      >
        <TableCaption placement="top">
          <Text fontSize="lg">All Users</Text>
        </TableCaption>
        <Thead>
          <Tr>
            {TableCol.map((col) => (
              <Td key={col.label} fontWeight="bold">
                {col.label}
              </Td>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data
            ? data.data.map((item: any, id: number) => (
                <Tr key={id}>
                  {TableCol.map((col) => {
                    if (col.label === "Email Verified")
                      return (
                        <Td>
                          {item[col.dataIndex as any] ? (
                            <Tag colorScheme={"green"}>Verfied</Tag>
                          ) : (
                            <Tag colorScheme={"red"}>Not verify</Tag>
                          )}
                        </Td>
                      );
                    if (col.label === "Action")
                      return (
                        <Td>
                          <Button
                            rightIcon={<InfoOutlineIcon />}
                            onClick={() => {
                              trigger(item["email"]).then((res) => {
                                console.log(res?.data);
                                setBackupData(res?.data);
                                backupModal.onOpen();
                              });
                            }}
                          />
                        </Td>
                      );
                    return <Td>{item[col.dataIndex as any]}</Td>;
                  })}
                </Tr>
              ))
            : null}
        </Tbody>
      </Table>
      <Modal isOpen={backupModal.isOpen} onClose={backupModal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"primary.100"}>User data</ModalHeader>
          <ModalBody>
            <VStack gap={"20px"} alignItems="start">
              <HStack>
                <Text fontWeight={"bold"}>Date:</Text>
                <Text>
                  {backupData &&
                    new Date(backupData?.date).toLocaleDateString()}
                </Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Categories:</Text>
                <Text>{backupData && backupData.catesCnt}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Sets:</Text>
                <Text>{backupData && backupData.setsCnt}</Text>
              </HStack>
              <HStack>
                <Text fontWeight={"bold"}>Cards:</Text>
                <Text>{backupData && backupData.cardsCnt}</Text>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </TableContainer>
  );
};

export default UserManager;
