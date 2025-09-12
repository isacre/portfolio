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
import { fadeInUp, staggerContainer } from "./animations";

interface TimelineItemType {
  date: string;
  title: string;
  description: string;
}

interface Props {
  items: TimelineItemType[];
}

export default function Timeline({ items }: Props) {
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
