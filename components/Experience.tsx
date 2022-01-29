import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const Experience = () => (
  <div>
    <SectionTitle title="Experience" />
    <Divider />
    <SectionItem
      title="Frontend Developer"
      subtitle="Arnia Software | 2021 - present"
      list={[
        "Work with the engineering team to understand customer requirements and deliver features on time and with minimal bugs",
        "Produce clean, understandable, well-tested and documented code following best practices",
        "Participate in paired programming and software code reviews to ensure flawless execution",
        "Complete medium to large features (each with many tasks)",
        "Collaborate with engineers, UI designers and product managers",
      ]}
    />
    <SectionItem
      title="Frontend Developer"
      subtitle="ISSCO | 2017 - 2021"
      list={[
        "Provide analysis and frontend development with React, React Native, Angular and other technologies",
        "Work with project managers to build project plans and estimations in order to meet challenging goals",
        "Deliver on time and with very good quality",
        "Work in an Agile software development environment",
        "Propose ideas to improve the applications, procedures and technologies used",
        "Engage in all aspects of release cycles including requirements review, work estimation, design, implementation, testing and deployment",
        "Collaborate with QA to understand and resolve defects",
        "Building clean, optimized and easily maintainable code",
      ]}
    />
    <SectionItem
      title="IT Specialist"
      subtitle="TalexWeb  | 2016 - 2017"
      list={[
        "Develop and maintain both frontend and backend applications (Javascript, PHP)",
        "Implement and configure physical servers, VMs (Linux KVM) and containers (Docker)",
        "Manage SQL servers (MySQL, MS SQL, MariaDB, PostgreSQL), DNS servers (Bind) and email servers (Dovecot, Postfix)",
        "Configure network equipment (switches, routers, firewalls)",
        "Conduct regular software maintenance (patching, testing, scheduling production upgrades)",
      ]}
    />
  </div>
);

export default Experience;
