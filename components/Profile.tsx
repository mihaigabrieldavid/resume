import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Profile = () => (
  <div className="px-4 lg:px-10 ">
    <div
      className="max-w-xs mx-auto rounded-full aspect-square bg-no-repeat bg-center bg-cover m-10"
      style={{ backgroundImage: "url('profile.webp')" }}
    />
    <div className="text-6xl mt-10 font-semibold text-center">
      Mihai-Gabriel
      <br />
      David
    </div>
    <div className="text-center text-2xl uppercase mt-5">
      Frontend Developer
    </div>
    <div className="flex justify-center mt-10">
      <a
        href="https://github.com/mihaigabrieldavid"
        className="mr-4"
        target="_blank"
      >
        <BsGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/mihai-gabriel-david/"
        target="_blank"
      >
        <BsLinkedin size={30} color="#0B66C3" />
      </a>
    </div>
    <div className="max-w-md my-10 lg:my-20 mx-auto">
      I am an experienced developer passionate about both frontend and backend.
      Skilled in JavaScript, TypeScript, React, React Native, Next.js, Angular
      and Express. Have done numerous projects involving frontend and backend
      development. I am interested in new technologies and I am always open to
      learning new things.
    </div>
    <div className="border-l-2 border-black pl-4 max-w-md mx-auto mb-10">
      <div className="my-2">
        <a href="tel:+40757636929">+40 757 636 929</a>
      </div>
      <div className="my-2">
        <a href="mailto:mail@mihaigabrieldavid.ro">mail@mihaigabrieldavid.ro</a>
      </div>
      <div className="my-2">Bacău, România</div>
    </div>
  </div>
);

export default Profile;
