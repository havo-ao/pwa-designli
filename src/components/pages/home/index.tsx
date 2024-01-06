import { ComponentContainer } from "../../molecules/ComponentContainer";
import LeftForm from "../../organisms/LeftForm";
import TopCards from "../../organisms/TopCards";

const Home = () => (
  <ComponentContainer className="App">
    <TopCards />
    <LeftForm />
  </ComponentContainer>
);

export default Home;
