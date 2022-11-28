import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Image,
} from "@chakra-ui/react";

export default function loanEstimator() {
  return (
    <>
      <Box minHeight={"100vh"}>
        <Image src="car-image.png" className="car-image" />
        <Box
          bgColor={"gray"}
          width={"700px"}
          height={"600px"}
          position={"absolute"}
        >
          <FormControl>
            <FormLabel>Title</FormLabel>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
