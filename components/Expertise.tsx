import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const Expertise = () => (
  <div>
    <SectionTitle title="Expertise" />
    <Divider />
    <SectionItem
      list={[
        "Frontend: JavaScript, TypeScript, React, React Native, Next.js, Angular, Apollo GraphQL, Redux, Mobx, Vue",
        "Backend: Express, Hasura, Feathers, Dokku, Keycloak, ASP.NET Core, Laravel",
      ]}
    />
  </div>
);

export default Expertise;
