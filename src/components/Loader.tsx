import React from "react";
import styled, { keyframes } from "styled-components";
const Loader = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Loader;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;
const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translate(-50%, -50%, 0);
  border-top: 3px solid royalblue;
  border-right: 3px solid royalblue;
  border-bottom: 3px solid royalblue;
  border-left: 3px solid #c1c2fa;
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;
