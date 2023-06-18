import { useLocation } from "react-router-dom";
import BG from "../../assets/Images/bg.png";
import Title from "../../components/Layout/Title";
import descriptions from "../../data/Personality Types Desc/PersonalityTypes";
import descTypes from "../../data/Descriptions/DescType";
import jobsDesc from "../../components/Job Carousel/JobsDesc";

const PersonalityDescription = () => {
  const location = useLocation();
  const personalityType = location.pathname.split("/")[2];
  return (
    <Title title="Test Result">
      <>
        <div className="resultPage">
          <div className="bg">
            <img className="bg" src={BG} alt="bg" height={"1100"} />
          </div>
          <div className="resultSection">
            <div className="intro-user-result">
              <p className="typeResult">
                Berdasarkan tes yang sudah dilakukan oleh mahasiswa tersebut,
                tipe kepribadiannya adalah
              </p>
            </div>
            <p className="user-result">
              {personalityType} {descriptions[personalityType]}
            </p>
            <p className="characteristic-desc">
              Karakteristik {personalityType} adalah :
            </p>
            <div>{descTypes[personalityType]}</div>
          </div>

          <div className="jobSection">
            <p className="title-jobSection">
              Berikut jenis pekerjaan yang cocok dengan tipe kepribadian{" "}
              {personalityType}
            </p>
            <>{jobsDesc[personalityType]}</>
          </div>
        </div>
      </>
    </Title>
  );
};

export default PersonalityDescription;
