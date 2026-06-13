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
    offerLetter: "https://www.dropbox.com/scl/fi/s7myt68xkiv3h92drkacc/1752819437688.jpg?rlkey=c0ew6vveg9iyvyd0lz56i2bl5&st=0viunju6&dl=0",
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
    certificate: "https://www.dropbox.com/scl/fi/lyxet9waxgxge8m5usjit/ABAP-Backend-Dev.pdf?rlkey=xq4izt0pp37quk82su3md1oyj&st=la0chw78&dl=0",
    logo: "https://imgs.search.brave.com/vZdmXRO82pw6hxGZUxLg7-TMpMFK76f_0svmtby2FPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TQVBfU0Uv/U0FQX1NFLUxvZ28u/d2luZS5zdmc",
  },
  "Implementing Fund Accounting in SAP S/4HANA Cloud Public Edition": {
    title: "Implementing Fund Accounting in SAP S/4HANA Cloud Public Edition",
    certificate: "https://www.dropbox.com/scl/fi/9m7vlqoc6hytwd43dkc4u/Implementing-Fund-Accounting-in-SAP.jpg?rlkey=p3zpuigw3fj4j1psvgq7r28lx&st=s4vo8qa2&dl=0",
    logo: "https://imgs.search.brave.com/vZdmXRO82pw6hxGZUxLg7-TMpMFK76f_0svmtby2FPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TQVBfU0Uv/U0FQX1NFLUxvZ28u/d2luZS5zdmc",
  },
  "FlashBuild (International Pre-Conference Workshop)": {
    title: "FlashBuild (International Pre-Conference Workshop)",
    certificate: "https://www.dropbox.com/scl/fi/30w3mgpikrwy2p8xaoxuq/flasbuild.jpg?rlkey=lggnr66r0t98hloj3bokj4h5r&st=gsx63g8o&dl=0",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "HackElite’26 – National Hackathon": {
    title: "HackElite’26 – National Hackathon",
    certificate: "https://www.dropbox.com/scl/fi/0vuzdf52f17epc83vq57m/hackelite-26.jpeg?rlkey=ukp99l2369wcjn66m9jb2ehlk&st=euh6cn7q&dl=0",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "HackForge’26 – National Hackathon": {
    title: "HackForge’26 – National Hackathon",
    certificate: "https://www.dropbox.com/scl/fi/fen1x0l5rlwnsq5sck4n0/hackforge-26.pdf?rlkey=ch2tsep0szcfyootdzgxfor4v&st=gjva2pi0&dl=0",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "Introduction to Artificial Intelligence": {
    title: "Introduction to Artificial Intelligence",
    certificate: "https://www.dropbox.com/scl/fi/jm609i36whlvok1a5v50w/intro-to-ai.pdf?rlkey=ncg477emxs9c36yq8zopby4zh&st=avyoewzi&dl=0",
    logo: "https://imgs.search.brave.com/41GaSL9S0yda9ta7GqMiNmU7AIL3wfp78AG2zrxCH2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZGpLT1JGUUIt/L3cvMTY2Ny9oLzE2/NjcvdGhlbWUvZGFy/ay9pY29uLmpwZWc_/Yz0xYnhpZDY0TXVw/N2FjemV3U0FZTVgm/dD0xNzQ4Mjk1ODQ1/NTE0",
  },
  "Fintech Workshop": {
    title: "Fintech Workshop",
    certificate: "https://www.dropbox.com/scl/fi/xh1p64dwxaogia9ka5jvj/fintech.pdf?rlkey=p7vxsibjet6pfs51g95khxook&st=uqpgscpz&dl=0",
    logo: "https://imgs.search.brave.com/4iXB3flF0RscuZjDVeHQTMvkxRvV95ARKsITUb9zgxU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3JtJTIwVW5p/dmVyc2l0eS0wNC5z/dmc",
  },
  "Introduction to Programming in C": {
    title: "Introduction to Programming in C",
    certificate: "https://www.dropbox.com/scl/fi/f2558kby7j9zdyvgx0mvb/intro-prog-c.pdf?rlkey=42k9aha6txmmyuqnehyn1qw3m&st=z5oeyppq&dl=0",
    logo: "https://www.google.com/s2/favicons?domain=nptel.ac.in&sz=128",
  },
  "Introduction to Computer Architecture": {
    title: "Introduction to Computer Architecture",
    certificate: "https://www.dropbox.com/scl/fi/nlb4kkiiu0b5lf0ks410d/intro-to-computerarc.pdf?rlkey=5e7y4zoi7o2od0l8hdtcxcw1t&st=y8fv2dx9&dl=0",
    logo: "https://imgs.search.brave.com/R0D2MowocQQ05_Gejlj-4i0rjFczQRVH7Q8kZ_Du3uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYXRl/d2F5LmVkdS5pbi9p/bWFnZXMvbG9nb3Mv/aW5mb3N5cy1zcHJp/bmdib2FyZC53ZWJw",
  },
  "Introduction to Unix": {
    title: "Introduction to Unix",
    certificate: "https://www.dropbox.com/scl/fi/6u4xwfqgpnv97n0y824tl/intro-to-unix.pdf?rlkey=7883lwe6vs3vdcch72r4eig3w&st=76qjaenj&dl=0",
    logo: "https://imgs.search.brave.com/R0D2MowocQQ05_Gejlj-4i0rjFczQRVH7Q8kZ_Du3uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYXRl/d2F5LmVkdS5pbi9p/bWFnZXMvbG9nb3Mv/aW5mb3N5cy1zcHJp/bmdib2FyZC53ZWJw",
  },
};
