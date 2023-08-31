import { Helmet } from "react-helmet-async";

const Title = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Career Path ` : "Career Path"}</title>
      </Helmet>

      <main>{children}</main>
    </>
  );
};

export default Title;
