import Challenges from "components/Challenges";
import Header from "components/Header";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { HomePageContainer } from "styles/pages/Homepage";
import { prisma } from "lib/prisma";
import { IChallenge, ITags } from "interfaces/challenge.interface";
import Head from "next/head";
import { useRouter } from "next/router";
import Loading from "components/Loading";

interface TagProps {
  data: IChallenge[];
  tag: ITags;
}

const Tag: NextPage<TagProps> = ({ data, tag }) => {
  const { isFallback } = useRouter();

  if (isFallback) return <Loading />;

  return (
    <HomePageContainer>
      <Head>
        <title>{`${tag.name} Challenges | upskill.code`}</title>
        <meta
          name="description"
          content={`${tag.name} online challenges. Train for your job interviews for free!`}
        />
        <meta
          property="og:description"
          content={`${tag.name} online challenges. Train for your job interviews for free!`}
        />
      </Head>
      <Header />
      <Challenges challenges={data} title={`${tag.name} Challenges`} />
    </HomePageContainer>
  );
};

export default Tag;

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await prisma.tag.findMany();

  const paths = tags.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const tag = await prisma.tag.findUnique({ where: { slug } });

  if (!tag) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const challenges = await prisma.challenge.findMany({
    where: {
      challengeTags: { some: { tagId: tag.id } },
    },
    include: {
      challengeTags: {
        include: {
          tag: true,
        },
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
    props: { data, tag },
    revalidate: 86400,
  };
};
