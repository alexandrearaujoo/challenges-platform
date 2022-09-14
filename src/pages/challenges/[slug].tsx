import ChallengeSideBar from "components/ChallengeSideBar";
import CodeEditor from "components/CodeEditor";
import { NextPage } from "next";
import { useState } from "react";
import { Container } from "styles/pages/Challange";

const Challenge: NextPage = () => {
  const [instructions, setInstructions] = useState('');

  return (
    <Container>
      <CodeEditor setInstructions={setInstructions} />
      <ChallengeSideBar instructions={instructions} />
    </Container>
  );
};

export default Challenge;
