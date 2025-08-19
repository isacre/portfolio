import React from "react";
import styled from "styled-components";
import Section from "../section";
import { Tecnology } from "../../types";
import BuildImageUrl from "../../utils";

const Technology = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 5px;
  width: 100%;
  place-items: center;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    width: 40px;
    height: 40px;
    padding: 25px;
    background-color: rgba(45, 48, 51, 0.267);
    border-radius: 10px;
    margin-top: 10px;
    object-fit: contain;
  }
`;

export default function Technologyes({
  tecnologies,
}: {
  tecnologies: Tecnology[];
}) {
  console.log(tecnologies);
  return (
    <Technology>
      <Wrapper>
        {tecnologies.map((item) => {
          return (
            <img
              key={item.documentId}
              src={BuildImageUrl(item?.icon?.url)}
              alt={item.name}
            />
          );
        })}
      </Wrapper>
    </Technology>
  );
}
