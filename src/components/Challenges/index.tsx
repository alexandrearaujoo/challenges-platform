import Challenge from "components/Challenge";
import { Container, Div } from "./styles";

const Challenges = () => {
  return (
    <Container>
      <h2>All Challenges</h2>
      <Div>
        <Challenge />
        <Challenge />
        <Challenge />
        <Challenge />
        <Challenge />
        <Challenge />
        <Challenge />
      </Div>
    </Container>
  );
};

export default Challenges;
