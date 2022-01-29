import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const TechnicalSkills = () => (
  <div>
    <SectionTitle title="Technical skills" />
    <Divider />
    <SectionItem
      list={[
        "Innovative thinking",
        "Multi tasking",
        "Ability to consistently meet deadlines",
        "Fast learning",
      ]}
    />
  </div>
);

export default TechnicalSkills;
