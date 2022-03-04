import type { NextPage } from "next";
import Head from "next/head";
import GuideContainer from "../containers/GuideContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Task 1 - Climate Science Software Trial Task</title>
        <meta
          name="description"
          content="My Solution to task 1 of the Climate Science Software Trial Task"
        />
      </Head>
      <GuideContainer />
    </>
  );
};

export default Home;
