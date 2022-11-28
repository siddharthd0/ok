import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Flex
        zIndex={100}
        position="relative"
        justifyContent="space-between"
        alignItems="center"
        className="nav-bar-container"
      >
        <Heading
          fontWeight={600}
          fontSize="3xl"
          color="textColor"
          className="nav-logo"
        >
          Caravan
        </Heading>

        <nav>
          <ul className="nav-links">
            <li>
              <Text className="link-navs" color="textColor"  >
                <Link href="/">Home</Link>
              </Text>
            </li>
            <li>
              <Text className="link-navs" color="textColor">
                <Link href="/salesreps">Sales Reps</Link>
              </Text>
            </li>

            <li>
              <Text className="link-navs" color="textColor">
                <Link href="/browse">Browse Cars</Link>
              </Text>
            </li>
            <li>
              <Text className="link-navs" color="textColor">
                <Link href="/loan">Loans</Link>
              </Text>
            </li>
            <li>
              <Text className="link-navs" color="textColor">
                <Link href="/book">Book an appointment</Link>
              </Text>
            </li>
          </ul>
        </nav>
      </Flex>
    </>
  );
}
