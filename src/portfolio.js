/* ====== Personal Portfolio Configuration (tailored for Duong Le) ====== */

// Home Page
const greeting = {
  title: "Hi, I'm Duong Le",
  logo_name: "DuongLe",
  nickname: "Duong",
  subTitle:
    "Systems Engineer specializing in VMware vCenter/ESXi/vSAN, Windows/AD, Cisco/CCNA networking, and automation. I build end-to-end business systems that connect Odoo ERP with Square/Clover POS and modern AI/RAG stacks.",
  resumeLink:
    "https://dle2022.github.io/portfolio/assets/Duong-Le-Resume.pdf", // update if different
  portfolio_repository: "https://github.com/dle2022",
  githubProfile: "https://github.com/dle2022"
};

// Social Media
const socialMediaLinks = {
  github: "https://github.com/dle2022",
  linkedin: "https://www.linkedin.com/in/duong-le", // update exact slug
  gmail: "lengocduong18@gmail.com",
  // add any others supported by template:
  // twitter: "", facebook: "", medium: "", stackoverflow: "", etc.
};

// Skills / Tech Stack
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Design, deploy, and operate reliable infrastructure with strong observability and automation.",
  skills: [
    "• VMware vCenter/ESXi/vSAN, HA/DRS, backup/restore, nested lab design",
    "• Windows Server/Active Directory (AD DS, GPO, DHCP/DNS), Intune/Endpoint",
    "• Networking: VLANs, routing, VPN, firewalling (Cisco/SonicWall), CCNA",
    "• Cloud/DevOps: AWS, Docker, GitHub Actions CI/CD",
    "• Observability: Telegraf → Prometheus → Grafana, Checkmk/Zabbix",
    "• Odoo ERP ↔ Square/Clover POS integrations (webhooks, REST APIs)",
    "• AI/RAG: Ollama, Qdrant, n8n, Open WebUI; email parsing & knowledge retrieval"
  ],
  softwareSkills: [
    { skillName: "VMware vCenter/ESXi/vSAN", fontAwesomeClassname: "fab fa-vmware" },
    { skillName: "Windows / AD / Intune", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "Cisco / CCNA", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Grafana / Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Odoo + POS APIs", fontAwesomeClassname: "fas fa-cash-register" },
    { skillName: "Ollama / Qdrant / n8n", fontAwesomeClassname: "fas fa-robot" }
  ]
};

// Education
const competitiveSites = {
  competitiveSites: []
};

const degrees = {
  degrees: [
    {
      title: "M.S. (IT) & B.S. (IT-related)",
      subtitle:
        "Graduate & undergraduate studies in Information Technology; focus on systems, networks, and cloud.",
      logo_path: "education.png",
      alt_name: "Graduate Studies",
      duration: "—",
      descriptions: [
        "• Coursework: Systems Engineering, Networking, Cloud, Security.",
        "• Projects: VMware lab, AD/Intune rollout, observability pipelines."
      ],
      website_link: "https://github.com/dle2022"
    }
  ]
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "AWS (Associate level)",
      subtitle: "Architect / Developer (Associate)",
      logo_path: "aws.png",
      certificate_link: "",
      alt_name: "AWS",
      color_code: "#232F3E"
    },
    {
      title: "Cisco CCNA",
      subtitle: "Networking (Routing/Switching)",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "CCNA",
      color_code: "#1BA0D7"
    },
    {
      title: "VMware",
      subtitle: "Data center virtualization skills",
      logo_path: "vmware.png",
      certificate_link: "",
      alt_name: "VMware",
      color_code: "#607078"
    }
  ]
};

// Experience
const experience = {
  title: "Experience",
  subtitle: "Systems Engineering • Infrastructure • Integrations",
  description:
    "Hands-on infrastructure engineer across VMware, Windows/AD, networking, observability, and business systems integrations (Odoo+POS). Navy leadership: budgeting, mentoring, incident response.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Systems / Infrastructure Engineer",
      work: true,
      experiences: [
        {
          title: "Systems Engineer",
          company: "Freelance & Enterprise Engagements",
          company_url: "https://github.com/dle2022",
          logo_path: "infra.png",
          duration: "2019 — Present • Los Angeles, CA",
          location: "Hybrid / Remote",
          description:
            "• Designed and operated VMware clusters (vCenter, ESXi, vSAN, HA/DRS); snapshot & DR policies.\n" +
            "• Administered Windows/AD (AD DS, GPO, DHCP/DNS), hybrid M365/Intune; print & file services.\n" +
            "• Built secure networks (VLAN segmentation, site-to-site VPN, firewall hardening Cisco/SonicWall).\n" +
            "• Odoo ERP ↔ Square/Clover POS integrations; idempotent webhooks; receipt modifiers/variations.\n" +
            "• Observability: Telegraf→Prometheus→Grafana; alerting; SLO-driven dashboards.\n" +
            "• Self-hosted AI/RAG with Ollama, Qdrant, n8n for email intelligence and knowledge retrieval.",
          color: "#0879bf"
        }
      ]
    }
  ]
};

// Projects (featured)
const projects = {
  data: [
    {
      id: "vmware-lab",
      name: "VMware Lab on a Budget",
      url: "https://github.com/dle2022",
      description:
        "Nested ESXi + vCenter + vSAN with HA/DRS, backup/restore; production-like lab for testing & DR.",
      languages: [
        { name: "VMware", iconifyClass: "logos:vmware" },
        { name: "Windows", iconifyClass: "logos:microsoft-windows" }
      ]
    },
    {
      id: "pos-odoo",
      name: "POS ↔ Odoo Integration",
      url: "https://github.com/dle2022",
      description:
        "Square/Clover ↔ Laravel ↔ Odoo sync; auto-create modifiers; ensure receipts show add-ons & variations.",
      languages: [
        { name: "Odoo", iconifyClass: "simple-icons:odoo" },
        { name: "Laravel/PHP", iconifyClass: "logos:laravel" }
      ]
    },
    {
      id: "ai-rag",
      name: "Self-Hosted AI/RAG",
      url: "https://github.com/dle2022",
      description:
        "Docker Compose with Ollama, Qdrant, n8n, Postgres, Open WebUI for retrieval-augmented Q&A.",
      languages: [
        { name: "Docker", iconifyClass: "logos:docker-icon" },
        { name: "Qdrant", iconifyClass: "simple-icons:qdrant" }
      ]
    },
    {
      id: "observability",
      name: "Full-stack Observability",
      url: "https://github.com/dle2022",
      description:
        "Telegraf→Prometheus→Grafana stack; dashboards per audience; actionable alerting.",
      languages: [
        { name: "Grafana", iconifyClass: "logos:grafana" },
        { name: "Prometheus", iconifyClass: "logos:prometheus" }
      ]
    }
  ]
};

// Open Source (optional)
const openSource = {
  githubUserName: "dle2022",
  showGithubProfile: "true"
};

// Achievements / Certifications / Talks (optional sections)
const achievementSection = { title: "Highlights", achievementsCards: [] };
const blogSection = { title: "Notes", subtitle: "", blogs: [] };
const talkSection = { title: "Talks", talks: [] };
const podcastSection = { title: "Podcasts", subtitle: "", podcast: [] };

// Contact Info
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "For systems/infrastructure roles or integration projects. I can share sanitized configs and diagrams on request.",
  number: "",
  email_address: "lengocduong18@gmail.com",
  github: "https://github.com/dle2022",
  linkedin: "https://www.linkedin.com/in/duong-le", // update exact slug
  location: "Los Angeles, CA (PST)"
};

// Twitter Section (if template uses it)
const twitterDetails = {
  userName: "" // e.g., "duong_handle"
};

// Export all
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
