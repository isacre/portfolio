import { Text } from "./styles";

export default function Section(props: { title: string }) {
  return <Text>{props.title.toUpperCase()}</Text>;
}
