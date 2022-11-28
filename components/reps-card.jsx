import { Text, Box, Badge, Heading, Image, Link } from "@chakra-ui/react";

export default function RepCard({ name, description, image, role, email }) {
  return (
    <>
      <Box
        borderRadius={"10px"}
        margin="2rem"
        width="300px"
        padding={"1rem"}
        backgroundColor={"blue.900"}
      >
        <Badge colorScheme="blue">{role}</Badge>
        <Heading marginTop={".5rem"} color="blue.300">
          {name}
        </Heading>
        <Image marginTop={"10px"} borderRadius={"20px"} src={image} alt={name} />
        <Text color={"teal.100"} marginBottom={"10px"} marginTop={".7rem"}>
          {description}
        </Text>
        <Link
          _hover={{
            textDecoration: "none",
            color: "blue.900",
            backgroundColor: "blue.300",
          }}
          transitionDuration="0.3s"
          borderRadius={"10px"}
          padding={"3px 10px 3px 10px"}
          backgroundColor={"blue.500"}
          href={`mailto:${email}`}
        >
          Email
        </Link>
      </Box>
    </>
  );
}
