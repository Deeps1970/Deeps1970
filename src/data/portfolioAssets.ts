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
  logo?: string;
};

export const certificationAssets: Record<string, CertificationAsset> = {
  "Full Stack Web Development": {
    title: "Full Stack Web Development",
    inProgress: true,
    logo: "https://www.google.com/s2/favicons?domain=udemy.com&sz=128",
  },
  "Stay Certified – Back-End Developer – ABAP Cloud": {
    title: "Stay Certified – Back-End Developer – ABAP Cloud",
    certificate: "/__l5e/assets-v1/1efbccd2-c8e2-4aec-918c-5edb82311f4c/ABAP-Backend-Dev.pdf",
    logo: "https://imgs.search.brave.com/vZdmXRO82pw6hxGZUxLg7-TMpMFK76f_0svmtby2FPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TQVBfU0Uv/U0FQX1NFLUxvZ28u/d2luZS5zdmc",
  },
  "Implementing Fund Accounting in SAP S/4HANA Cloud Public Edition": {
    title: "Implementing Fund Accounting in SAP S/4HANA Cloud Public Edition",
    certificate: "/__l5e/assets-v1/363695df-7288-4761-bbee-d1f79ab215f3/Implementing_Fund_Accounting_in_SAP.jpg",
    logo: "https://imgs.search.brave.com/vZdmXRO82pw6hxGZUxLg7-TMpMFK76f_0svmtby2FPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TQVBfU0Uv/U0FQX1NFLUxvZ28u/d2luZS5zdmc",
  },
  "FlashBuild (International Pre-Conference Workshop)": {
    title: "FlashBuild (International Pre-Conference Workshop)",
    certificate: "/__l5e/assets-v1/09467682-b088-469e-9777-d0f84567274b/flasbuild.jpg",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "HackElite’26 – National Hackathon": {
    title: "HackElite’26 – National Hackathon",
    certificate: "/__l5e/assets-v1/c02daa32-7e60-48bb-8987-de2a99676f64/hackelite26.jpeg",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "HackForge’26 – National Hackathon": {
    title: "HackForge’26 – National Hackathon",
    certificate: "/__l5e/assets-v1/6cd462dc-9678-47a6-be35-89c75dd75e39/hackforge26.pdf",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "Introduction to Artificial Intelligence": {
    title: "Introduction to Artificial Intelligence",
    certificate: "/__l5e/assets-v1/c5a06943-d148-4213-ba8b-17e53ede35fb/intro-to-ai.pdf",
    logo: "https://imgs.search.brave.com/41GaSL9S0yda9ta7GqMiNmU7AIL3wfp78AG2zrxCH2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZGpLT1JGUUIt/L3cvMTY2Ny9oLzE2/NjcvdGhlbWUvZGFy/ay9pY29uLmpwZWc_/Yz0xYnhpZDY0TXVw/N2FjemV3U0FZTVgm/dD0xNzQ4Mjk1ODQ1/NTE0",
  },
  "Fintech Workshop": {
    title: "Fintech Workshop",
    certificate: "/__l5e/assets-v1/aa8bd6d5-21ff-49a5-a77f-f50757a1d0df/fintech.pdf",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "Introduction to Programming in C": {
    title: "Introduction to Programming in C",
    certificate: "/__l5e/assets-v1/e3d5f558-35fa-44bd-aae0-59a45abc9c09/intro-prog-c.pdf",
    logo: "https://www.google.com/s2/favicons?domain=nptel.ac.in&sz=128",
  },
  "Introduction to Computer Architecture": {
    title: "Introduction to Computer Architecture",
    certificate: "/__l5e/assets-v1/ae8b91d5-e735-4784-915e-a6a68132488a/intro-to-computerarc.pdf",
    logo: "https://imgs.search.brave.com/R0D2MowocQQ05_Gejlj-4i0rjFczQRVH7Q8kZ_Du3uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYXRl/d2F5LmVkdS5pbi9p/bWFnZXMvbG9nb3Mv/aW5mb3N5cy1zcHJp/bmdib2FyZC53ZWJw",
  },
  "Introduction to Unix": {
    title: "Introduction to Unix",
    certificate: "/__l5e/assets-v1/7f2b12c7-189a-406c-9e81-257ecd9ea66f/intro-to-unix.pdf",
    logo: "https://imgs.search.brave.com/R0D2MowocQQ05_Gejlj-4i0rjFczQRVH7Q8kZ_Du3uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYXRl/d2F5LmVkdS5pbi9p/bWFnZXMvbG9nb3Mv/aW5mb3N5cy1zcHJp/bmdib2FyZC53ZWJw",
  },
  "MERN Stack Masterclass": {
    title: "MERN Stack Masterclass",
    certificate: "https://media.licdn.com/dms/image/v2/D4D2DAQGMLDMufjhwqw/profile-treasury-document-images_1280/B4DZgcsrktGkAY-/1/1752828133321?e=1782345600&v=beta&t=GouX4r9adhlXe69iiEsJw96XH_TvEgIcezImZgU7mx0",
    logo: "https://www.dropbox.com/scl/fi/c0f8yx2tahwcqh8p0cknt/novitechresearchanddevelopment_logo.jpg?rlkey=fuf576o68yqey0d52drmiphk6&st=i1vi8q7i&dl=0",
  },
  "Full Stack Development Webinar": {
    title: "Full Stack Development Webinar",
    certificate: "https://www.dropbox.com/scl/fi/7fgfxjlkic8fxoat92ex6/FSWD-Webinar.Guvi-Participation.png?rlkey=y0cv2a0ujl5u90eh0etvc6plo&st=46wweeqf&dl=0",
    logo: "https://www.google.com/s2/favicons?domain=guvi.in&sz=128",
  },
  "Git & GitHub Workshop": {
    title: "Git & GitHub Workshop",
    certificate: "https://media.licdn.com/dms/image/v2/D4D2DAQGpfHZ4iOHFyg/profile-treasury-image-shrink_800_800/B4DZgclOM6HsAY-/0/1752826178841?e=1781845200&v=beta&t=CqP3ceTN5-HXeix9AQSOWMBRfunSzeVgNt9BB4DFEmY",
    logo: "https://www.dropbox.com/scl/fi/ihey9w7gtr9ze64ufrev0/5722.webp?rlkey=ztg8ikgq8dsepu73heob4ge5n&st=u7lm32dd&dl=0",
  },
};
