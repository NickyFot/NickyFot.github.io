import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import Layout from "@/components/Layout";

const publications = [
  {
    title: "VLLMs Provide Better Context for Emotion Understanding Through Common Sense Reasoning",
    authors: "Alexandros Xenos*, Niki Maria Foteinopoulou*, Ioanna Ntinou*, Ioannis Patras, Georgios Tzimiropoulos",
    venue: "IJCNN 2025",
    arxiv: "https://arxiv.org/abs/2404.07078",
    code: "https://github.com/NickyFot/EmoCommonSense",
    note: "* Equal contribution",
  },
  {
    title: "A Hitchhiker's Guide to Fine-Grained Face Forgery Detection Using Common Sense Reasoning",
    authors: "Niki Maria Foteinopoulou, Enjie Ghorbel, Djamila Aouada",
    venue: "NeurIPS 2024",
    arxiv: "https://arxiv.org/",
    code: "https://github.com/NickyFot/HitchhikersGuide",
  },
  {
    title: "EmoCLIP: A Vision-Language Method for Zero-Shot Video Facial Expression Recognition",
    authors: "N. M. Foteinopoulou, I. Patras",
    venue: "FG 2024",
    arxiv: "https://arxiv.org/abs/2310.16640",
    code: "https://github.com/NickyFot/EmoCLIP",
  },
  {
    title: "Machine Learning Approaches for Fine-Grained Symptom Estimation in Schizophrenia: A Comprehensive Review",
    authors: "N. M. Foteinopoulou, I. Patras",
    venue: "Preprint",
    arxiv: "https://arxiv.org/abs/2310.16677",
  },
  {
    title: "Learning from Label Relationships in Human Affect",
    authors: "N. M. Foteinopoulou, I. Patras",
    venue: "ACM Multimedia 2022",
    arxiv: "https://arxiv.org/abs/2207.05577",
    code: "https://github.com/NickyFot/ACMMM22_LearningLabelRelationships",
    proceedings: "https://dl.acm.org/doi/abs/10.1145/3503161.3548373",
  },
];

const Publications = () => (
  <Layout>
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-3xl font-bold tracking-tight"
      >
        Publications
      </motion.h1>
      <div className="mt-8 space-y-6">
        {publications.map((pub, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <h2 className="font-display text-base font-semibold leading-snug">{pub.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
            {pub.note && <p className="mt-0.5 text-xs text-muted-foreground italic">{pub.note}</p>}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-secondary px-3 py-0.5 font-display text-xs font-medium text-secondary-foreground">
                {pub.venue}
              </span>
              {pub.arxiv && (
                <a href={pub.arxiv} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs link-accent">
                  <ExternalLink className="h-3 w-3" /> arXiv
                </a>
              )}
              {pub.code && (
                <a href={pub.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs link-accent">
                  <Code className="h-3 w-3" /> Code
                </a>
              )}
              {pub.proceedings && (
                <a href={pub.proceedings} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs link-accent">
                  <ExternalLink className="h-3 w-3" /> Proceedings
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </Layout>
);

export default Publications;
