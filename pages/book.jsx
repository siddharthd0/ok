import Head from "next/head";
import {
  Input,
  Flex,
  Text,
  Heading,
  Box,
  Button,
  Grid,
} from "@chakra-ui/react";
import Footer from "../components/footer";

export default function Book() {
  return (
    <>
      <Flex marginTop={"50px"} direction={"column"}>
        <Heading textAlign={"center"} color={"primary"} margin="auto">
          Book an appointment with a <br />
          sales representative at Caravan today!
        </Heading>
        <Input
          color={"primary"}
          marginTop={"20px !important"}
          margin="auto"
          width=""
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
        <Button
          mt={"15px !important"}
          fontSize={"md"}
          margin="auto"
          width="100px"
          colorScheme="teal"
          variant="outline"
        >
          Book now
        </Button>
      </Flex>
      <Footer />
    </>
  );
}
