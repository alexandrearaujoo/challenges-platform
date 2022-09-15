import Challenges from "components/Challenges";
import Header from "components/Header";
import type { GetStaticProps, NextPage } from "next";
import { HomePageContainer } from "styles/pages/Homepage";
import { prisma } from "lib/prisma";
import { IChallenge } from "interfaces/challenge.interface";
import Head from "next/head";

interface HomeProps {
  data: IChallenge[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <HomePageContainer>
      <Head>
        <title>upskill.code</title>
        <meta
          name="description"
          content="Simple Code Challenge Platform with integrated code editor. Train for your job interviews for free!"
        />
        <meta
          property="og:description"
          content="Simple Code Challenge Platform with integrated code editor. Train for your job interviews for free!"
        />
      </Head>
      <Header />
      <Challenges challenges={data} title="All challenges" />
    </HomePageContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const challenges = await prisma.challenge.findMany({
    include: {
      challengeTags: {
        include: { tag: true },
      },
    },
  });

  const data = challenges.map((challenge) => {
    return {
      ...challenge,
      challengeTags: [...challenge.challengeTags.map((tag) => tag.tag)],
    };
  });

  return {
    props: { data },
    revalidate: 86400,
  };
};
