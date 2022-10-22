import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Article = styled.div`
  /* max-width: 200px; */
  margin: 10px;
  padding: 10px;
  flex: 1 200px;
  background-color: lightblue;
  &:nth-of-type(3) {
    background-color: red;
  }
`;

const Heading = styled.h2`
  line-height: 100px;
`;

const ButtonsWrapper = styled.div``;

const Button = styled.button``;

export { Section, Article, ButtonsWrapper, Button, Heading };
