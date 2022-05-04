import React, { ReactElement } from "react";
import { Layout } from "../../layout/Layout";

const About = () => {
  return <div>About Hello</div>;
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <h1>Extra layout</h1>
      {page}
    </Layout>
  );
};
export default About;
