import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const SocialSkills = () => (
  <div>
    <SectionTitle title="Social skills" />
    <Divider />
    <SectionItem
      list={[
        "Ability to integrate, communicate and work in a team in multicultural and multidisciplinary environments due",
        "Clear communication",
        "Responsability",
        "Relationship management",
        "Respect",
      ]}
    />
  </div>
);

export default SocialSkills;
