import Head from "next/head";
import RepCard from "../components/reps-card";
import { Wrap,Text, Flex, Box, Badge, Heading,Grid } from "@chakra-ui/react";


export default function SalesReps() {
  return (
    <>
   <Wrap spacing="30px"  maxWidth="1000px" margin="auto" mt={"5rem"} placeContent={"center"}  >
      <RepCard image="./einstein.png" role="Senior Sales Representative"name={"Billy Bob"} email="billy@jomama.com" description={"Billy is a Senior Sales Representative at Caravan. He can help you find the right car for you? Or something? Lol"}/>
      <RepCard image="./einstein.png" role="Senior Sales Representative"name={"Billy Bob"} email="billy@jomama.com" description={"Billy is a Senior Sales Representative at Caravan. He can help you find the right car for you? Or something? Lol"}/>
      <RepCard image="./einstein.png" role="Senior Sales Representative"name={"Billy Bob"} email="billy@jomama.com" description={"Billy is a Senior Sales Representative at Caravan. He can help you find the right car for you? Or something? Lol"}/>
      <RepCard image="./einstein.png" role="Senior Sales Representative"name={"Billy Bob"} email="billy@jomama.com" description={"Billy is a Senior Sales Representative at Caravan. He can help you find the right car for you? Or something? Lol"}/>
    
      </Wrap>
    </>
  );
}
