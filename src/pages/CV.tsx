import { motion } from "framer-motion";
import Layout from "@/components/Layout";

interface CVEntry {
  title: string;
  org: string;
  period: string;
  details?: string[];
}

interface CVSection {
  heading: string;
  entries: CVEntry[];
}

const sections: CVSection[] = [
  {
    heading: "Education",
    entries: [
      { title: "Ph.D in Deep Learning Methods for Affect and Schizophrenia Symptom Estimation", org: "Queen Mary University of London", period: "2023", details: ["Funded by EPSRC-UKRI studentship", "Supervisor: Prof. Ioannis Patras"] },
      { title: "M.Sc Computer Science — Distinction", org: "Queen Mary University of London", period: "2018" },
      { title: "B.S. Economics (Hons)", org: "Queen Mary University of London", period: "2012" },
    ],
  },
  {
    heading: "Research Experience",
    entries: [
      { title: "Research Scientist", org: "Tavus, London", period: "Nov 2025 – Present" },
      { title: "Research Scientist", org: "Toshiba Cambridge Research Laboratory", period: "Feb 2025 – Nov 2025" },
      { title: "Postdoctoral Researcher", org: "SnT, University of Luxembourg", period: "Feb 2024 – Jan 2025" },
    ],
  },
  {
    heading: "Industry Experience",
    entries: [
      { title: "Contractor — Data Science / ML", org: "Ernst & Young, London", period: "May – Sep 2019", details: ["Contract work for EY Brain"] },
      { title: "Lead Data Scientist", org: "Wunderman, London", period: "Oct 2018 – May 2019" },
      { title: "Senior Data Scientist", org: "Publicis Media, London", period: "Jan 2017 – Sep 2018" },
      { title: "Senior Analyst / Data Engineer", org: "Starcom (Publicis Media), London", period: "Jun – Dec 2016" },
      { title: "Account Manager (Analytics)", org: "Mindshare Worldwide, London", period: "Sep 2014 – Jun 2015" },
      { title: "Data Analyst", org: "Mindshare Worldwide, London", period: "Apr 2013 – Sep 2014" },
    ],
  },
  {
    heading: "Teaching",
    entries: [
      { title: "Visiting Lecturer", org: "City, University of London", period: "Jan 2025 – Present", details: ["Teaching Computer Vision / Deep Learning for Image Analysis", "Supervision of 5 MSc students"] },
      { title: "Teaching Fellow", org: "Queen Mary University of London", period: "Sep 2022 – Sep 2024", details: ["Module support for Machine Learning (ECS708)", "Supervised 8 MSc students"] },
      { title: "Senior Demonstrator", org: "Queen Mary University of London", period: "Sep 2019 – Sep 2022" },
    ],
  },
  {
    heading: "Skills",
    entries: [
      { title: "Programming", org: "Python", period: "" },
      { title: "Frameworks", org: "PyTorch, FAISS, NumPy, pandas", period: "" },
    ],
  },
];

const CV = () => (
  <Layout>
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-3xl font-bold tracking-tight"
      >
        Curriculum Vitae
      </motion.h1>

      {sections.map((section, si) => (
        <motion.section
          key={section.heading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: si * 0.1 }}
          className="mt-10"
        >
          <h2 className="font-display text-lg font-semibold text-accent">{section.heading}</h2>
          <div className="mt-4 space-y-4">
            {section.entries.map((entry, ei) => (
              <div key={ei} className="border-l-2 border-border py-1 pl-5 transition-colors hover:border-accent">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-sm font-semibold">{entry.title}</h3>
                  {entry.period && (
                    <span className="text-xs text-muted-foreground">{entry.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{entry.org}</p>
                {entry.details && (
                  <ul className="mt-1 space-y-0.5">
                    {entry.details.map((d, di) => (
                      <li key={di} className="text-sm text-foreground/75">• {d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  </Layout>
);

export default CV;
