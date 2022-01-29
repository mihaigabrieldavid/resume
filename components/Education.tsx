import Divider from "./Divider";
import SectionItem from "./SectionItem";
import SectionTitle from "./SectionTitle";

const Education = () => (
  <div>
    <SectionTitle title="Education" />
    <Divider />
    <SectionItem
      title={
        'Master\'s degree in Computer Science, UNIVERSITATEA "VASILE ALECSANDRI", Bacău'
      }
      subtitle="2017 - 2019"
      list={[]}
    />
    <SectionItem
      title={
        'Bachelor\'s degree in Computer Science, UNIVERSITATEA "VASILE ALECSANDRI", Bacău'
      }
      subtitle="2014 - 2017"
      list={[]}
    />
    <SectionItem
      title="Certification in Web Design, CENTRUL DE CONSULTANȚĂ ȘI STUDII EUROPENE, Bacău"
      subtitle="2014"
      list={[]}
    />
    <SectionItem
      title='High school diploma, COLEGIUL NAȚIONAL DE ARTĂ "GEORGE APOSTU", Bacău'
      subtitle="2010 - 2014"
      list={[]}
    />
  </div>
);

export default Education;
