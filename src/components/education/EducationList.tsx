import { education } from "../../assets/education.ts";
import { EducationType } from "../../types/education";
import Education from "./Education";

const EducationList = () => {
  return (
    <ul>
      {education.map((edu: EducationType) => (
        <Education key={edu.name} edu={edu} />
      ))}
    </ul>
  );
};

export default EducationList;
