import { Github, Linkedin, GraduationCap, BookOpen } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/nikifoteinopoulou/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/NickyFot", label: "GitHub" },
  { icon: GraduationCap, href: "https://scholar.google.com/citations?user=YOUR_ID", label: "Google Scholar" },
  { icon: BookOpen, href: "https://orcid.org/YOUR_ID", label: "ORCID" },
];

const Footer = () => (
  <footer className="border-t py-8">
    <div className="mx-auto flex max-w-4xl items-center justify-between px-6">
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Niki Foteinopoulou</p>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
            aria-label={link.label}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
