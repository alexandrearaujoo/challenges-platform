import Challenges from "components/Challenges";
import Header from "components/Header";
import type { NextPage } from "next";
import { HomePageContainer } from "styles/pages/Homepage";

const Home: NextPage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Challenges />
    </HomePageContainer>
  );
};

export default Home;
