import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const Languages = () => (
  <div>
    <SectionTitle title="Languages" />
    <Divider />
    <SectionItem list={["English (advanced)", "Romanian (native)"]} />
  </div>
);

export default Languages;
