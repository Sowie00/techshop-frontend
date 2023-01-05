import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description"></meta>
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To TechShop",
  description: "Find amazing deals on your favorite tech products!",
  keywords: "electronics, tech, buy tech, cheap tech",
};

export default Meta;
