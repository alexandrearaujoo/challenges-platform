import ChallengeSideBar from "components/ChallengeSideBar";
import CodeEditor from "components/CodeEditor";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { Container } from "styles/pages/Challange";
import { prisma } from "lib/prisma";
import { IChallenge } from "interfaces/challenge.interface";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

interface ChallengeProps {
  challenge: IChallenge;
}

const Challenge: NextPage<ChallengeProps> = ({ challenge }) => {
  const [instructions, setInstructions] = useState("");
  console.log(challenge);

  return (
    <Container>
      <Head>
        <title>{`${challenge.title} | upskill.code`}</title>
      </Head>
      <CodeEditor
        setInstructions={setInstructions}
        embedId={challenge.embedId}
      />
      <ChallengeSideBar
        instructions={instructions}
        challengeTitle={challenge.title}
      />
    </Container>
  );
};

export default Challenge;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { slug } = context.params as { slug: string };

  const challenge = await prisma.challenge.findUnique({ where: { slug } });

  if (!challenge) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { challenge },
  };
};
