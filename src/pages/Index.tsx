import { motion } from "framer-motion";
import { MapPin, Linkedin, Github, GraduationCap, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import profileImg from "@/assets/profile.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/nikifoteinopoulou/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/NickyFot", label: "GitHub" },
  { icon: GraduationCap, href: "https://scholar.google.com/citations?user=R9DTsJEAAAAJ&hl=en", label: "Google Scholar" },
  { icon: BookOpen, href: "https://orcid.org/0000-0003-4481-9360", label: "ORCID" },
];

const news = [
  { date: "Dec 2025", text: "Delivered Seminar on Intrinsic Concept Control in Diffusion Models at University of Oxford" },
  { date: "Aug 2025", text: "CAD-Assistant accepted at ICCV 2025", link: "https://openaccess.thecvf.com/content/ICCV2025/papers/Mallis_CAD-Assistant_Tool-Augmented_VLLMs_as_Generic_CAD_Task_Solvers_ICCV_2025_paper.pdf" },
  { date: "Jul 2025", text: "Co-chair @ BMVA Symposium on AI Security", link: "https://www.bmva.org/meetings/25-07-16-AISecurity.html" },
  { date: "Apr 2025", text: "Paper accepted at IJCNN!", link: "https://arxiv.org/abs/2404.07078" },
  { date: "Sep 2024", text: "Paper accepted at NeurIPS'2024" },
  { date: "Mar 2024", text: "Paper accepted at FG'2024", link: "https://arxiv.org/abs/2310.16640" },
  { date: "Jul 2022", text: "Paper accepted at ACM Multimedia 2022", link: "https://dl.acm.org/doi/10.1145/3503161.3548373" },
  { date: "Jul 2021", text: "Paper accepted at ACII 2021" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 md:flex-row md:items-start"
        >
          <div className="shrink-0">
            <img
              src={profileImg}
              alt="Niki Foteinopoulou"
              className="h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-background"
            />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Niki Foteinopoulou
            </h1>
            <p className="mt-1 font-display text-lg font-medium text-accent">
              Research Scientist · Visiting Lecturer
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              London, UK
            </div>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border p-2 text-muted-foreground transition-all hover:border-accent hover:text-accent"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14"
        >
          <h2 className="font-display text-xl font-semibold">About</h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground/85">
            <p>
              I am currently a Research Scientist at <strong>Tavus</strong> in London, UK, where I focus on advancing
              Conversational Agents. I also serve as a Visiting Lecturer at <strong>City University of London</strong>,
              teaching "Deep Learning for Image Analysis" and supervising MSc thesis projects.
            </p>
            <p>
              Previously, I was a Postdoctoral Researcher at the University of Luxembourg and completed my PhD at
              Queen Mary University of London. My expertise spans machine learning, multi-modal AI, and human-centred
              approaches, with a strong foundation in both academic research and industry applications.
            </p>
          </div>
        </motion.section>

        {/* News */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14"
        >
          <h2 className="font-display text-xl font-semibold">News</h2>
          <div className="mt-4 space-y-0">
            {news.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-4 border-l-2 border-border py-3 pl-5 transition-colors hover:border-accent"
              >
                <span className="shrink-0 font-display text-sm font-medium text-muted-foreground w-20">
                  {item.date}
                </span>
                <p className="text-sm leading-relaxed">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-accent">
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Index;
