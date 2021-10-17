import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import axios from "axios";
import { IGoal } from "../../types/goal";

interface IPageProps {
  goal: IGoal;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const goalCode = Array.isArray(params?.code)
    ? params?.code?.[0]
    : params?.code;

  const response = await axios.get<IGoal[]>(
    `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${goalCode}/Target/List?includechildren=true`
  );

  if (!response?.data?.[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      goal: response.data[0],
    },
  };
};

const Page: NextPage<IPageProps> = ({ goal }) => {
  return <div>{goal.description}</div>;
};

export default Page;
