import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const OrganisationalSkills = () => (
  <div>
    <SectionTitle title="Organisational skills" />
    <Divider />
    <SectionItem
      list={[
        "Focus orientation",
        "Goal setting",
        "Prioritization",
        "Attention to detail",
        "Strategic thinking and planning",
        "Self-motivation",
      ]}
    />
  </div>
);

export default OrganisationalSkills;
