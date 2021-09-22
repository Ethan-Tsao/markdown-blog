import React from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

function Example() {
  const dimension = "200px";
  return (
    <MotionBox
      height={dimension}
      width={dimension}
      bg="red.300"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 2 }}
      whileTap={{ scale: 1.5 }}
      my={5}
      rounded="lg"
    />
  );
}

export default Example;
