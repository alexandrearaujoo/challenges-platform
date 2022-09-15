import Link from "next/link";
import {
  Container,
  DifficultyTag,
  H3,
  P,
  TagItem,
  TagsContainer,
} from "./styles";
import { BiLinkExternal } from "react-icons/bi";
import { IChallenge } from "interfaces/challenge.interface";

interface ChallengeProps {
  challenge: IChallenge;
}

const Challenge = ({ challenge }: ChallengeProps) => {
  return (
    <Link href={`/challenges/${challenge.slug}`} passHref>
      <Container>
        <header>
          <DifficultyTag difficulty={challenge.difficulty}>
            {challenge.difficulty}
          </DifficultyTag>
          <BiLinkExternal />
        </header>
        <H3>{challenge.title}</H3>
        <P>{challenge.description}</P>

        <TagsContainer>
          {challenge.challengeTags.map((tag) => (
            <TagItem key={tag.slug}>{tag.name} </TagItem>
          ))}
        </TagsContainer>
      </Container>
    </Link>
  );
};

export default Challenge;
