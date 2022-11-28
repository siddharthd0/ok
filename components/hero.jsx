import React from "react";
import { Heading, Text, Button, Center, Divider, Box } from "@chakra-ui/react";
import Link from "next/link";
import { transform } from "framer-motion";

export default function hero() {
  return (
    <>
      <div className="hero-container">
        <Center flexDirection={"column"} alignItems="center">
          <Heading
            fontWeight={"700"}
            fontSize={"72px"}
            className="hero-tagline"
            color="textColor"
            maxWidth={"900px"}
            textAlign="center"
          >
            <span className="hero-gradient">Cheap, Clean, Credible</span> just
            for you.
          </Heading>
          <Text
            color={"textColor"}
            fontSize={"15px"}
            textAlign={"center"}
            pt={"60px"}
            maxWidth={"600px"}
          >
            Caravan strives to help you find the best deals on the market. We are a team of passionate individuals who will help you find your next dream car. 
          </Text>
          <Link href={"#find-car"}>
            <Button
              transition={"all 0.3s ease-in-out"}
              mt={"45px"}
              bgColor={"primary"}
              color={"textColor"}
              h={"65px"}
              w={"220px"}
              fontSize={"20px"}
              _hover={{
                bgColor: "primary",
                opacity: "0.79",
                transform: "scale(0.95)",
              }}
            >
              Start Exploring &rarr;
            </Button>
          </Link>
        </Center>
      </div>
      
    </>
  );
}
