import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CarCard from "../components/car-card";
import {
  Wrap,
  Input,
  Text,
  Flex,
  Box,
  Badge,
  Heading,
  Grid,
} from "@chakra-ui/react";
import Footer from "../components/footer";
export default function Browse() {
  return (
    <>
      <Flex marginTop={"30px"}>
        <Box w="100%" h="46.45vh" bg="tomato">
          <Flex>
            <Image
              height="100"
              width="500"
              src="/subaru-forester-test-drive-day-hong-kong-china-oct-134905419.jpg"
            
            />
            <Flex
              width="500px  "
              margin="auto"
              marginLeft={"50px"}
              marginTop={"100px"}
              direction={"column"}
            >
              <Heading> We can help find the right car for you.</Heading>
              <Text marginTop={"10px"}>
                With our vast selection of used cars, you have a wide variety of
                styles that you can choose from. We will make sure you are
                satisfied with your purchase.
              </Text>
            </Flex>
          </Flex>
          <Text></Text>
        </Box>
      </Flex>
      <Flex direction={"column"} marginTop={"20px"}>
        <Heading color={"primary"} margin="auto">
          Browse our inventory
        </Heading>
        <br />
        <Input
          _hover={{
            boxShadow: "20px 20px 90px rgba(33,33,33,.2)",
          }}
          margin={"auto"}
          width={"600px"}
          variant="outline"
          placeholder="Search for your next car"
        />
      </Flex>
      <Wrap
        className="cars-container"
        spacing="40px"
        placeContent={"center"}
      >
        <CarCard
          name={"Honda Pilot"}
          smallDescription="2019 Honda Pilot EX-L is a 3 row SUV with a 3.5L V6 engine and 9-speed automatic transmission."
          bigDescription="The 2019 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class."
          make={"Honda"}
          condition="shitty"
          year="2019"
          image="https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png"
          price="24,930"
          miles="61,492"
        />
        <CarCard
          name={"Honda Pilot"}
          smallDescription="shitty car"
          bigDescription="The 2022 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class."
          make={"Honda"}
          condition="shitty"
          year="1969"
          image="https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png"
        />
        <CarCard
          name={"Honda Pilot"}
          smallDescription="shitty car"
          bigDescription="The 2022 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class."
          make={"Honda"}
          condition="shitty"
          year="1969"
          image="https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png"
        />
        <CarCard
          name={"Honda Pilot"}
          smallDescription="shitty car"
          bigDescription="The 2022 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class."
          make={"Honda"}
          condition="shitty"
          year="1969"
          image="https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png"
        />
        <CarCard
          name={"Honda Pilot"}
          smallDescription="shitty car"
          bigDescription="The 2022 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class."
          make={"Honda"}
          condition="shitty"
          year="1969"
          image="https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png"
        />
        <CarCard
          name={"Honda Pilot"}
          smallDescription="shitty car"
          bigDescription="The 2022 Honda Pilot is one of our favorite three-row SUVs thanks to its spacious, thoughtfully designed interior and smooth ride. Added bonuses include better-than-average fuel economy as well as a smooth, powerful V6 engine. The Pilot pretty much had the class covered until the Kia Telluride and Hyundai Palisade came along and shook things up. It's rumored that Honda's looking to redesign the aging Pilot for 2023 — it's been around in its current guise since 2016 — to put it back on top of this family-friendly class."
          make={"Honda"}
          condition="shitty"
          year="1969"
          image="https://cdn.discordapp.com/attachments/968273644352569405/1041201655661723700/Screen_Shot_2022-11-12_at_9.03.34_PM.png"
        />
      </Wrap>
      <Footer></Footer>
    </>
  );
}
