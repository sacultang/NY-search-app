import React from "react";
import styled, { keyframes } from "styled-components";

const Skeleton = () => {
  return (
    <CardSkeleton>
      <HSkeleton />
      <PSkeleton />
      <ImgSkeleton />
      <ClipBoxSkeleton>
        <BtnSkeleton />
      </ClipBoxSkeleton>
    </CardSkeleton>
  );
};

export default Skeleton;

const SkeletonAnimation = keyframes`
      0% {
        background-color: rgba(165, 165, 165, 0.1);
        color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
        color: rgba(165, 165, 165, 0.1);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
        color: rgba(165, 165, 165, 0.1);
    }
    `;
const CardSkeleton = styled.div`
  border: 1px solid gray;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${SkeletonAnimation} 1.8s infinite ease-in-out;
`;
export const HSkeleton = styled.div`
  width: 100%;
  height: 30px;
  margin: 10px 0;
  animation: ${SkeletonAnimation} 1.8s infinite ease-in-out;
`;
export const PSkeleton = styled.div`
  width: 100%;
  height: 30px;
  margin: 10px 0;
  animation: ${SkeletonAnimation} 1.8s infinite ease-in-out;
`;
export const ImgSkeleton = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  animation: ${SkeletonAnimation} 1.8s infinite ease-in-out;
`;
const ClipBoxSkeleton = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  margin-top: 30px;
  animation: ${SkeletonAnimation} 1.8s infinite ease-in-out;
`;
const BtnSkeleton = styled.div`
  border-radius: 8px;
  padding: 10px 20px;
  animation: ${SkeletonAnimation} 1.8s infinite ease-in-out;
`;
