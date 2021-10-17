import React from "react";

interface IHeaderBanner {
  header: string;
}

const HeaderBanner: React.FC<IHeaderBanner> = ({ header }) => (
  <div className="bg-blue-400 mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <p className="ml-3 font-medium text-white text-center">{header}</p>
  </div>
);

export default HeaderBanner;
