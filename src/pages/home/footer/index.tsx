import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FooterSection = styled.div`
  height: 100px;
  background-color: #2c2f35;
`;

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 4.3 }}
    >
      <FooterSection />
    </motion.div>
  );
}
