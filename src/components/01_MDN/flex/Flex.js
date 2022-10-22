import styled from "styled-components";
import { Section, Article, ButtonsWrapper, Button, Heading } from "./FlexStyle";

const Flex = () => {
  return (
    <Section>
      <Article>
        <Heading>First article</Heading>
        <p>
          Tacos actually microdosing, pour-over semiotics banjo chicharrones
          retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B
          pork belly, everyday carry ennui pickled sriracha normcore hashtag
          polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund
          twee, leggings salvia iPhone photo booth health goth gastropub
          hammock.
        </p>
      </Article>
      <Article>
        <h1>Second article</h1>
        <p>
          Tacos actually microdosing, pour-over semiotics banjo chicharrones
          retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B
          pork belly, everyday carry ennui pickled sriracha normcore hashtag
          polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund
          twee, leggings salvia iPhone photo booth health goth gastropub
          hammock.
        </p>
      </Article>
      <Article>
        <ButtonsWrapper>
          <Button>Smile</Button>
          <Button>Laugh</Button>
          <Button>Wink</Button>
          <Button>Shrug</Button>
          <Button>Blush</Button>
        </ButtonsWrapper>
        <p>
          Tacos actually microdosing, pour-over semiotics banjo chicharrones
          retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B
          pork belly, everyday carry ennui pickled sriracha normcore hashtag
          polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund
          twee, leggings salvia iPhone photo booth health goth gastropub
          hammock.
        </p>
      </Article>
    </Section>
  );
};

export default Flex;
