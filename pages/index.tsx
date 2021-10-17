import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import HeaderBanner from "../components/header-banner";
import { IGoal } from "../types/goal";
import Card from "../components/card";
import { getGoalImageUrl } from "../lib/image";

interface IPageProps {
  goals: IGoal[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get<IGoal[]>(
    "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true"
  );

  if (!response?.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { goals: response.data },
  };
};

const Home: NextPage<IPageProps> = ({ goals }) => (
  <div className="bg-cover bg-hero h-96 sm:h-96 md:h-96 xl:h-full">
    <HeaderBanner header="THE GOALS" />
    <div className="container mx-auto mt-80">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {goals.map((goal, index) => (
          <Card
            key={goal.code}
            title={goal.title}
            imageUrl={getGoalImageUrl(index + 1)}
            linkTo={`/details/${goal.code}`}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Home;
