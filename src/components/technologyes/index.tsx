import React from "react";
import styled from "styled-components";
import Section from "../section";
import { Tecnology } from "../../types";
import BuildImageUrl from "../../utils";

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  scroll-margin-top: 120px;
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

const SkeletonBox = styled.div`
  width: 40px;
  height: 40px;
  padding: 25px;
  background: linear-gradient(90deg, #2d3033 25%, #3a3d40 50%, #2d3033 75%);
  background-size: 200% 100%;
  border-radius: 10px;
  margin-top: 10px;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

const SkeletonGrid = () => {
  // Create 24 skeleton boxes to fill the grid
  const skeletonCount = 24;

  return (
    <>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <SkeletonBox key={`skeleton-${index}`} />
      ))}
    </>
  );
};

export default function Technologyes({
  tecnologies,
  isLoading,
}: {
  tecnologies: Tecnology[];
  isLoading: boolean;
}) {
  return (
    <Technology>
      <Wrapper>
        {isLoading ? (
          <SkeletonGrid />
        ) : (
          tecnologies.map((item) => {
            return (
              <img
                key={item.documentId}
                src={BuildImageUrl(item?.icon?.url)}
                alt={item.name}
              />
            );
          })
        )}
      </Wrapper>
    </Technology>
  );
}
