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
      {items.map((item, index) => (
        <TimelineItem key={index} isEven={index % 2 === 1}>
          <TimelineDot />
          <TimelineContent isEven={index % 2 === 1}>
            <Date>{item.date}</Date>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
}
