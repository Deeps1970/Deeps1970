// Central place for downloadable / viewable assets in the portfolio.
// Replace placeholder "#" entries with real URLs (Dropbox, Drive, R2, etc.)
// when the files are ready. Items marked inProgress will hide their
// completion certificate button and show an "In Progress" badge instead.

// Resume (Dropbox direct-download link)
export const RESUME_URL =
  "https://www.dropbox.com/scl/fi/fdox4vq5qt64frvjtdsu3/Deepak-B-T-Profile.pdf?rlkey=x9iu4ux07l4hzyiv4h5dpaypw&dl=1";

export type ExperienceAsset = {
  company: string;
  logo?: string; // optional logo image URL
  offerLetter?: string;
  certificate?: string;
  inProgress?: boolean;
};

export const experienceAssets: Record<string, ExperienceAsset> = {
  "FlyRank AI": {
    company: "FlyRank AI",
    logo: "",
    offerLetter: "#",
    inProgress: true,
  },
  "SNR Automation Pvt Ltd": {
    company: "SNR Automation Pvt Ltd",
    logo: "",
    offerLetter: "#",
    certificate: "#",
  },
  "ApexPlanet Software Pvt Ltd": {
    company: "ApexPlanet Software Pvt Ltd",
    logo: "",
    offerLetter: "#",
    certificate: "#",
  },
  "Learnflu EdTech": {
    company: "Learnflu EdTech",
    logo: "",
    offerLetter: "#",
    certificate: "#",
  },
};

export type CertificationAsset = {
  title: string;
  certificate?: string;
  inProgress?: boolean;
};

export const certificationAssets: Record<string, CertificationAsset> = {
  "Full Stack Web Development": { title: "Full Stack Web Development", inProgress: true },
  "MERN Stack Masterclass": { title: "MERN Stack Masterclass", certificate: "#" },
  "Full Stack Development Webinar": { title: "Full Stack Development Webinar", certificate: "#" },
  "Git & GitHub Workshop": { title: "Git & GitHub Workshop", certificate: "#" },
};