import {
  TimelineContainer,
  TimelineLine,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  Title,
  Date,
  Description,
} from "./styles";
import { motion } from "framer-motion";

interface TimelineItemType {
  date: string;
  title: string;
  description: string;
}

interface Props {
  items: TimelineItemType[];
}

export default function Timeline({ items }: Props) {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <TimelineContainer>
      <TimelineLine />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <TimelineItem isEven={index % 2 === 1}>
              <TimelineDot />
              <TimelineContent isEven={index % 2 === 1}>
                <Date>{item.date}</Date>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        ))}
      </motion.div>
    </TimelineContainer>
  );
}
