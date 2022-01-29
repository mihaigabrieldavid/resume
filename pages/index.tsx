import ComputerSkills from "../components/ComputerSkills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Expertise from "../components/Expertise";
import Languages from "../components/Languages";
import OrganisationalSkills from "../components/OrganisationalSkills";
import PageHead from "../components/PageHead";
import Profile from "../components/Profile";
import SocialSkills from "../components/SocialSkills";
import TechnicalSkills from "../components/TechnicalSkills";

export default function Home() {
  return (
    <>
      <PageHead />
      <div className="flex max-w-screen-xl mx-auto flex-col lg:flex-row p-4 lg:p-10 print:flex-row">
        <div className="flex flex-col flex-1 bg-white rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-bl-lg print:rounded-tr-none print:rounded-bl-lg">
          <Profile />
        </div>
        <div className="flex flex-col flex-1 bg-blue-100 rounded-bl-lg rounded-br-lg pb-4 lg:rounded-bl-none lg:rounded-tr-lg lg:pt-4 lg:pr-4 print:rounded-bl-none print:rounded-tr-lg">
          <div className="lg:border-solid lg:border-t lg:border-r lg:border-b lg:border-black pl-4 pr-4 lg:pl-8 pb-10 lg:pt-4 lg:pb-14">
            <Experience />
            <Education />
            <Languages />
            <Expertise />
            <ComputerSkills />
            <SocialSkills />
            <OrganisationalSkills />
            <TechnicalSkills />
          </div>
        </div>
      </div>
    </>
  );
}
