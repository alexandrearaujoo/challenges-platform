import Link from "next/link";
import { Container, DifficultyTag, H3, P, TagItem, TagsContainer } from "./styles";
import { BiLinkExternal } from "react-icons/bi";

const Challenge = () => {
  return (
    <Link href="/challenges" passHref>
      <Container>
        <header>
          <DifficultyTag difficulty="Easy">Easy</DifficultyTag>
          <BiLinkExternal />
        </header>
        <H3>To do List</H3>
        <P>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          expedita, ducimus at reprehenderit enim, iure ullam neque repellendus
          dolor cumque adipisci sequi. Qui, earum eum repellendus voluptate
          nostrum voluptas cum.
        </P>

        <TagsContainer>
            <TagItem>ReactJs</TagItem>
            <TagItem>Styled</TagItem>
        </TagsContainer>
      </Container>
    </Link>
  );
};

export default Challenge;
