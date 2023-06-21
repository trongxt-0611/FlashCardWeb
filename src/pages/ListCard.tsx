import React, { useState } from "react";
import Nav from "../components/Nav";
import WrapContainer from "../components/WrapContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Card,
  Divider,
  Flex,
  Skeleton,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReactCardFlip from "react-card-flip";

import useSWR from "swr";
import api from "../api/api";

interface ICardFlip {
  firstWord: string;
  secondWord: string;
}
const CardFlip = (props: ICardFlip) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Box onClick={() => setIsFlipped((prev) => !prev)}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card h={"400px"}>
          <Flex h="full" w="full" justifyContent="center" alignItems="center">
            <Text fontSize={"68px"} fontWeight={"semibold"}>
              {props.firstWord}
            </Text>
          </Flex>
        </Card>
        <Card h={"400px"}>
          <Flex h="full" w="full" justifyContent="center" alignItems="center">
            <Text fontSize={"38px"} fontWeight={"semibold"}>
              {props.secondWord}
            </Text>
          </Flex>
        </Card>
      </ReactCardFlip>
    </Box>
  );
};

const ListCard = () => {
  const params = useParams();
  const { data, isLoading } = useSWR<any>("/get-card", async () => {
    return await api.getListCard(params.id!);
  });
  return (
    <>
      <Nav />
      <Box mt={16}>
        <WrapContainer>
          <Swiper
            slidesPerView={1}
            style={{ width: "800px", border: "1px solid #c399ff" }}
            navigation
            pagination
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          >
            {!isLoading ? (
              data?.data?.cards?.map((card: any) => {
                return (
                  <SwiperSlide>
                    <Card h={"400px"}>
                      <CardFlip firstWord={card.term} secondWord={card.defi} />
                    </Card>
                  </SwiperSlide>
                );
              })
            ) : (
              <Skeleton w={800} h={400} />
            )}
          </Swiper>
          <Box mt={20} w={"800px"} mx="auto">
            {!isLoading ? (
              data?.data?.cards?.map((card: any) => {
                return (
                  <Box w={"full"} my={4}>
                    <Flex shadow="lg" px={4} py={5}>
                      <Text fontSize="xl" flexBasis={"40%"}>
                        {card.term}
                      </Text>
                      <Divider
                        h={"32px"}
                        orientation="vertical"
                        borderColor="primary.50"
                      />
                      <Text fontSize="xl" flexBasis={"40%"} ml={"12px"}>
                        {card.defi}
                      </Text>
                    </Flex>
                  </Box>
                );
              })
            ) : (
              <Spinner colorScheme="primary" />
            )}
          </Box>
        </WrapContainer>
      </Box>
    </>
  );
};

export default ListCard;
