import {RotatingLines} from "react-loader-spinner";
import Layout from "./Layout.jsx";

const Loader = () => (
  <Layout>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </Layout>
);

export default Loader;