import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { ScholarIcon } from "@/components/icons/ScholarIcon";

export const RESUME_DATA = {
  name: "Yi-Tsang Lee",
  initials: "YTL",
  location: "San Diego, CA", // Updated to your current location
  locationLink: "https://www.google.com/maps/place/San+Diego,+CA", // Updated link
  about:
    "Dedicated immunologist with expertise in cancer immunotherapy, T cell biology, and protein engineering.",
  summary: (
    <>
      Results-driven PhD immunologist with over six years of experience in
      molecular biology, protein engineering, and immunotherapy research.
      Currently a Postdoctoral Fellow at La Jolla Institute for Immunology,
      focusing on T cell biology and cancer immunotherapy for translational
      advancements. Skilled in NGS, CRISPR genome editing, and optogenetic
      systems, with a proven track record in high-impact research and mentorship.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/91809801?s=400&u=f330e4ed93241cd4444cf79aa8cce56c15ce3ffc&v=4", // No avatar URL provided, retaining original as placeholder
  personalWebsiteUrl: undefined, // No personal website provided
  contact: {
    email: "mickey413@gmail.com",
    tel: "979-985-2756",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Ytlee413",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yl-tsang-leephd-799605105/",
        icon: LinkedInIcon,
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=YOUR_ID",
        icon: ScholarIcon,
      }
    ],
  },
  education: [
    {
      school: "Texas A&M University",
      degree: "Doctor of Philosophy - PhD, Medical Sciences",
      start: "2018",
      end: "2024",
    },
    {
      school: "Texas A&M University",
      degree: "Master of Science (M.S.), Biotechnology",
      start: "2015",
      end: "2017",
    },
    {
      school: "China Medical University",
      degree: "BS, Nutrition",
      start: "2009",
      end: "2013",
    },
  ],
  work: [
    {
      company: "La Jolla Institute for Immunology",
      link: "https://www.lji.org", // Official LJI link
      badges: ["Immunology", "T-cell", "Cancer Research"],
      title: "Postdoctoral Fellow",
      logo: ConsultlyLogo, // No specific logo match, retaining original as placeholder
      start: "2025",
      end: null,
      description: (
        <>
          Conducting research on T cell biology and cancer immunotherapy.
          <ul className="list-inside list-disc">
            <li>
              Design and implement molecular techniques to study immune signaling
            </li>
            <li>
              Collaborate on translational immunology research for therapeutic targets
            </li>
            <li>
              Mentor junior researchers and present findings at scientific conferences
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Texas A&M University",
      link: "https://ibt.tamu.edu/index.html",
      badges: ["Protein Engineering", "CRISPR"],
      title: "Postdoctoral Research Fellow",
      logo: ParabolLogo, // No specific logo match, retaining original as placeholder
      start: "2024",
      end: "2024",
      description: (
        <>
          Focused on protein engineering and immunotherapy development.
          <ul className="list-inside list-disc">
            <li>
              Optimized CRISPR genome-editing for gene function studies
            </li>
            <li>
              Designed optogenetic/chemogenetic systems for cellular signaling
            </li>
            <li>
              Authored high-impact publications on cancer progression mechanisms
            </li>
          </ul>
        </>
      ),
      
    },
    {
      company: "Texas A&M University",
      link: "https://ibt.tamu.edu/index.html",
      badges: ["Imaging", "NGS", "Optogenetics"],
      title: "PhD Student",
      logo: ClevertechLogo, // No specific logo match, retaining original as placeholder
      start: "2018",
      end: "2024",
      description: (
        <>
          Engineered drug-responsive and light-controllable protein systems.
          <ul className="list-inside list-disc">
            <li>
              Investigated fusion genes in renal cell carcinoma with multi-omic sequencing
            </li>
            <li>
              Developed CRISPR-knock-in systems with dTAG technology
            </li>
            <li>
              Mentored students and contributed to 10 peer-reviewed publications
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Texas A&M University",
      link: "https://ibt.tamu.edu/index.html", // Specific Health Science Center link
      badges: ["Genomics", "Animal Study"],
      title: "Research Assistant",
      logo: JojoMobileLogo, // No specific logo match, retaining original as placeholder
      start: "2017",
      end: "2018",
      description: (
        <>
          Studied aging effects on genome maintenance in liver regeneration.
          <ul className="list-inside list-disc">
            <li>Performed partial hepatectomy in mice models</li>
            <li>Conducted immunohistochemical staining and data analysis</li>
          </ul>
        </>
      ),
    },

  ],
  skills: [
    "Next Generation Sequencing (NGS)",
    "CRISPR Genome Editing",
    "Protein Engineering",
    "Molecular cloning",
    "Python",
    "R",
    "Cytiva AKTA (Protein Purification)",
  ],
  publications: [
    {
      "title": "Optogenetic engineering to probe the molecular choreography of STIM1-mediated cell signaling",
      "authors": "G Ma, L He, S Liu, J Xie, Z Huang, J Jing, YT Lee, R Wang, H Luo, W Han, Y Huang, Y Zhou",
      "journal": "Nature Communications",
      "year": "2020",
      "url": "https://www.nature.com/articles/s41467-020-14841-9"
    },
    {
      "title": "Visible light excited ratiometric-GECIs for long-term in-cellulo monitoring of calcium signals",
      "authors": "J Li, L Wang, Y Chen, Y Yang, J Liu, K Liu, YT Lee, N He, Y Zhou, Y Wang",
      "journal": "Cell Calcium",
      "year": "2020",
      "url": "https://www.sciencedirect.com/science/article/pii/S0143416020300075"
    },
    {
      "title": "Expanding the chemogenetic toolbox by circular permutation",
      "authors": "YT Lee, L He, Y Zhou",
      "journal": "Journal of Molecular Biology",
      "year": "2020",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0022283620302783?via%3Dihub"
    },
    {
      "title": "Identification of a STIM1 splicing variant that promotes glioblastoma growth",
      "authors": "J Xie, G Ma, L Zhou, L He, Z Zhang, P Tan, Z Huang, S Fang, T Wang, YT Lee, S Wen, S Siwko, L Wang, Y Du, N Zhang, X Liu, L Han, Y Huang, R Wang,Y Wang, Y Zhou, W Han",
      "journal": "Advanced Science",
      "year": "2022",
      "url": "https://onlinelibrary.wiley.com/doi/10.1002/advs.202103940"
    },
    {
      "title": "Optogenetic control of calcium influx in mammalian cells",
      "authors": "YT Lee, R Chen, Y Zhou, L He",
      "journal": "Methods in Enzymology",
      "year": "2021",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0076687921000929"
    },
    {
      "title": "Proteomic mapping and optogenetic manipulation of membrane contact sites",
      "authors": "G Lin, W Shi, N Zhang, YT Lee, Y Wang, J Jing",
      "journal": "Biochemical Journal",
      "year": "2022",
      "url": "https://portlandpress.com/biochemj/article/479/17/1857/231892"
    },
    {
      "title": "Ten-eleven translocation ablation impairs cardiac differentiation of mouse embryonic stem cells",
      "authors": "S Fang, D Cui, T Hong, L Guo, YT Lee, M Lee, S Isgandarova, M Martinez-Moczygemba, Y Zhou, J Li, Y Huang",
      "journal": "Stem Cells",
      "year": "2022",
      "url": "https://academic.oup.com/stmcls/article/40/3/260/6529349"
    },
    {
      "title": "Targeting epigenetic regulatory machinery to overcome cancer therapy resistance",
      "authors": "L Guo, YT Lee, Y Zhou, Y Huang",
      "journal": "Seminars in Cancer Biology",
      "year": "2022",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S1044579X20302820?via%3Dihub"
    },
    {
      "title": "Light-activated macromolecular phase separation modulates transcription by reconfiguring chromatin interactions",
      "authors": "YJ Kim, M Lee Jr, YT Lee, J Jing, JT Sanders, GA Botten, L He, J Lyu, Y Zhang, M Mettlen, P LY, Y Zhou, J Xu",
      "journal": "Science Advances",
      "year": "2023",
      "url": "https://www.science.org/doi/10.1126/sciadv.adg1123"
    },
    {
      "title": "Optogenetic engineering of STING signaling allows remote immunomodulation to enhance cancer immunotherapy",
      "authors": "Y Dou, R Chen, S Liu, YT Lee, J Jing, X Liu, Y Ke, R Wang, Y Zhou, Y Huang",
      "journal": "Nature Communications",
      "year": "2023",
      "url": "https://www.nature.com/articles/s41467-023-41164-2"
    },
    {
      "title": "A Chemogenetic Toolkit for Inducible, Cell Type-Specific Actin Disassembly",
      "authors": "TH Lan, N Ambiel, YT Lee, T Nonomura, Y Zhou, JB Zuchero",
      "journal": "Small Methods",
      "year": "2025",
      "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/smtd.202401522"
    },
  ],
  projects: [
    {
      title: "Optogenetic Engineering of STIM1 Signaling", // From your publications
      techStack: ["Optogenetics", "CRISPR", "Molecular Biology"],
      description:
        "Probed molecular choreography of STIM1-mediated cell signaling (Nature Communications, 2020).",
      logo: MonitoLogo, // No specific logo match, retaining original as placeholder
      link: {
        label: "Publication",
        href: "https://pubmed.ncbi.nlm.nih.gov/32098964/",
      },
    },
    {
      title: "Targeting Epigenetic Machinery in Cancer", // From your publications
      techStack: ["Epigenetics", "Cancer Research", "Molecular Biology"],
      description:
        "Developed strategies to overcome cancer therapy resistance (Seminars in Cancer Biology, 2021).",
      logo: ConsultlyLogo, // No specific logo match, retaining original as placeholder
      link: {
        label: "Publication",
        href: "https://pubmed.ncbi.nlm.nih.gov/33421619/",
      },
    },
    // Retained original project as you have no direct equivalent for a standalone software project
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;