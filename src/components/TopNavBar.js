import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 60px;
  width: 100%;
  background-color: lightcoral;
`;

const TopNavBar = () => {
  return (
    <div>
      <Bar />
    </div>
  );
};

export default TopNavBar;
