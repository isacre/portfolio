import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-bottom: 5px;
  ::before {
    margin-right: 10px;
    display: block;
    content: "";
    height: 2px;
    background-color: var(--color-main);
    width: 20px;
  }
`;

export default function Section(props: { title: string }) {
  return <Text>{props.title.toUpperCase()}</Text>;
}
