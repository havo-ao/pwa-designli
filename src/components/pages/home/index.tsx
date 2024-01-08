import { ComponentContainer } from "../../molecules/ComponentContainer";
import Graph from "../../organisms/Graph";
import LeftForm from "../../organisms/LeftForm";
import TopCards from "../../organisms/TopCards";

const Home = () => (
  <ComponentContainer className="App">
    <TopCards />
    <LeftForm />
    <Graph />
  </ComponentContainer>
);

export default Home;
