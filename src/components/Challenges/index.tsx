import Challenge from "components/Challenge";
import { IChallenge } from "interfaces/challenge.interface";
import { Container, Div } from "./styles";

interface ChallengeProps {
  challenges: IChallenge[];
}

const Challenges = ({ challenges }: ChallengeProps) => {
  return (
    <Container>
      <h2>All Challenges</h2>
      <Div>
        {challenges.map((challenge) => (
          <Challenge key={challenge.id} challenge={challenge} />
        ))}
      </Div>
    </Container>
  );
};

export default Challenges;
