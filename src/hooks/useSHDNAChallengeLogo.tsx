import { ChallengeType } from "../Components/Challenges/SHDNAChallengeBlock";

const useSHDNAChallengeLogo = (challengeType: ChallengeType) => {
  switch (challengeType) {
    case "Personal Integrity":
      return require("../../assets/imgs/sacredheartDNA-01.png");
    case "Spirituality":
      return require("../../assets/imgs/sacredheartDNA-02.png");
    case "Belonging Community":
      return require("../../assets/imgs/sacredheartDNA-03.png");
    case "Active Citizenship":
      return require("../../assets/imgs/sacredheartDNA-04.png");
    case "Transformative Action":
      return require("../../assets/imgs/sacredheartDNA-05.png");

    default:
      return require("../../assets/imgs/sacredheartDNA-01.png");
  }
};

export default useSHDNAChallengeLogo;
