// Central place for downloadable / viewable assets in the portfolio.
// Replace placeholder "#" entries with real URLs (Dropbox, Drive, R2, etc.)
// when the files are ready. Items marked inProgress will hide their
// completion certificate button and show an "In Progress" badge instead.

// Resume (Dropbox direct-download link)
export const RESUME_URL =
  "https://www.dropbox.com/scl/fi/fdox4vq5qt64frvjtdsu3/Deepak-B-T-Profile.pdf?rlkey=x9iu4ux07l4hzyiv4h5dpaypw&st=dxkg07mu&dl=0";

export type ExperienceAsset = {
  company: string;
  logo?: string; // optional logo image URL
  offerLetter?: string;
  certificate?: string;
  inProgress?: boolean;
};

export const toDirectDropboxImageUrl = (url?: string) => {
  if (!url || url === "#") return url;

  try {
    const directUrl = new URL(url);

    if (directUrl.hostname === "www.dropbox.com" || directUrl.hostname === "dropbox.com") {
      directUrl.hostname = "dl.dropboxusercontent.com";
      directUrl.searchParams.delete("dl");
      directUrl.searchParams.delete("raw");
      return directUrl.toString();
    }

    return url;
  } catch {
    return url;
  }
};

export const experienceAssets: Record<string, ExperienceAsset> = {
  "FlyRank AI": {
    company: "FlyRank AI",
    logo: "https://www.dropbox.com/scl/fi/arpg59ysw1x9em48j3qzz/flyrank_logo.jpg?rlkey=ffnchg850gqfvf16a2jff6pxi&st=x4fyct53&dl=0",
    offerLetter: "https://www.dropbox.com/scl/fi/w7xcbfzpiai3qnp83r6kw/flyrank-internship-confirmation-deepak-thiagarajan-july-2026-6-weeks.pdf?rlkey=edg1hs12rfazr62fxi584epez&st=by8j8i2n&dl=0",
    inProgress: true,
  },
  "SNR Automation Pvt Ltd": {
    company: "SNR Automation Pvt Ltd",
    logo: "https://www.dropbox.com/scl/fi/xybf1lb3pi5pbidnqtffv/snrautomations_logo.jpg?rlkey=0uaqur18ph7wym4qsxvhdbb84&st=na8bprfw&dl=0",
    offerLetter: "https://www.dropbox.com/scl/fi/nva8i2tlad1m3gdwk6wbf/Offer-letter-SNR-Automation.pdf?rlkey=9i6etpzp7bghtxg4o0cidqyrt&st=g9jfhd5a&dl=0",
    certificate: "https://www.dropbox.com/scl/fi/t7v4kwapn0zb85qbcdwbs/download-1.pdf?rlkey=yeigw4jz4nmvw8r9rgm6by1va&st=o8ktijpb&dl=0",
  },
  "ApexPlanet Software Pvt Ltd": {
    company: "ApexPlanet Software Pvt Ltd",
    logo: "https://www.dropbox.com/scl/fi/rkkn0i9rxuuqgj878u73g/1748084023993.jpg?rlkey=gtqagd2ub5y51x4evz7y7mmvs&st=mwkkcc6r&dl=0",
    offerLetter: "https://media.licdn.com/dms/image/v2/D4D22AQFKGdPIC3DygA/feedshare-shrink_800/B4DZgcLgq.GQAg-/0/1752819437688?e=1782950400&v=beta&t=j5AGnxQdXIg2SUawl2ENR7smloQdFf8b1wqhM6FsC1g",
    certificate: "https://www.dropbox.com/scl/fi/995jpx6iwpr7kaa6ttw9g/download.pdf?rlkey=n8cbvx6nkq8bhxty2eoce59ms&st=osivbjbn&dl=0",
  },
  "Learnflu EdTech": {
    company: "Learnflu EdTech",
    logo: "https://www.dropbox.com/scl/fi/pkxo4s86ga79l6zlaqqoe/1767451118825.jpg?rlkey=fahzw09tlll63efgz5h5oqwat&st=ybumre7y&dl=0",
    offerLetter: "#",
    certificate: "https://www.dropbox.com/scl/fi/faqxkkq73gkv87aw96089/Certificate-of-appreciation.pdf?rlkey=1xanjpx4e15iqdi6s88ouzx5n&st=u24uutym&dl=0",
  },
};

export type CertificationAsset = {
  title: string;
  certificate?: string;
  inProgress?: boolean;
};

export const certificationAssets: Record<string, CertificationAsset> = {
  "Full Stack Web Development": { title: "Full Stack Web Development", inProgress: true },
  "MERN Stack Masterclass": { title: "MERN Stack Masterclass", certificate: "https://media.licdn.com/dms/image/v2/D4D2DAQGMLDMufjhwqw/profile-treasury-document-images_1280/B4DZgcsrktGkAY-/1/1752828133321?e=1782345600&v=beta&t=GouX4r9adhlXe69iiEsJw96XH_TvEgIcezImZgU7mx0" },
  "Full Stack Development Webinar": { title: "Full Stack Development Webinar", certificate: "https://www.dropbox.com/scl/fi/7fgfxjlkic8fxoat92ex6/FSWD-Webinar.Guvi-Participation.png?rlkey=y0cv2a0ujl5u90eh0etvc6plo&st=46wweeqf&dl=0" },
  "Git & GitHub Workshop": { title: "Git & GitHub Workshop", certificate: "https://media.licdn.com/dms/image/v2/D4D2DAQGpfHZ4iOHFyg/profile-treasury-image-shrink_800_800/B4DZgclOM6HsAY-/0/1752826178841?e=1781845200&v=beta&t=CqP3ceTN5-HXeix9AQSOWMBRfunSzeVgNt9BB4DFEmY" },
};
