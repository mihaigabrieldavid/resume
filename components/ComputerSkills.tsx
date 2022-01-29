import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const ComputerSkills = () => (
  <div>
    <SectionTitle title="Computer skills" />
    <Divider />
    <SectionItem
      list={[
        "Very good handle of JavaScript (senior level), understanding of functions and parameters, async behavior and callbacks, variable scopes, array, string manipulation and new features like the spread operator, rest parameters and asynchronous iteration",
        "Proven experience with the most popular frontend frameworks and libraries (React, React Native, Next.js, Angular, Apollo GraphQL, Redux, Mobx, Vue, Axios, Tailwind CSS, Elastic UI, Material UI, Fluent UI, Ant Design, Atlaskit, Carbon Design System, React Native Paper)",
        "Strong experience with charting libraries I've used for building advanced dashboards and reports (Highcharts, Recharts, Nivo)",
        "Solid understanding of OAuth 2.0 and OpenID Connect standards gained while working for one of the most popular iPaaS. I've also administrated a Keycloak server and worked with libraries like oidc-client and react-native-app-auth",
        "Experience with tools for software development using the continuous methodologies (GitLab CI/CD)",
        "Good understanding of database modeling fundamentals (entities, attributes and relationships)",
        "Experience with Linux and OS Hardening, physical servers, VMs (Linux KVM) and containers (Docker)",
        "Strong experience with AWS, GCP, Firebase and Azure",
        "Backend experience with Express, Feathers, Hasura, Dokku, Keycloak, ASP.NET Core, Laravel",
        "Strong experience with common development tools like Webpack, NPM, SASS",
      ]}
    />
  </div>
);

export default ComputerSkills;
