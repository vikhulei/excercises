import styled from "styled-components";

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 50px;
  background-color: lightgreen;
  z-index: 15;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: 200vh;
  text-align: center;
  background-color: lightblue;
  z-index: 10;
`;

const Box1 = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 200px;
  background-color: brown;
`;

const Zindex = () => {
  return (
    <div>
      <Nav />
      <Wrapper>
        <Box1 />
      </Wrapper>
    </div>
  );
};

export default Zindex;
