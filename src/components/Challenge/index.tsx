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
import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface ChallengeProps {
  challenge: IChallenge;
}

const Challenge = ({ challenge }: ChallengeProps) => {
  const router = useRouter();

  const navigateToTag = (e: MouseEvent, slug: string) => {
    e.preventDefault();
    router.push(`/challenges/tag/${slug}`);
  };

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
            <TagItem key={tag.slug} onClick={(e) => navigateToTag(e, tag.slug)}>
              {tag.name}{" "}
            </TagItem>
          ))}
        </TagsContainer>
      </Container>
    </Link>
  );
};

export default Challenge;
