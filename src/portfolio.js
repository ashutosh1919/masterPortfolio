/* ===== Portfolio config for Duong Le =====
   This file includes ALL named exports your fork expects:
   seo, greeting, socialMediaLinks, skillsSection, degrees, certifications,
   experience, projectsHeader, projects, publicationsHeader, publications,
   openSource, achievementSection, blogSection, talkSection, podcastSection,
   contactInfo, contactPageData, twitterDetails, plus an assetImages helper.
*/

const assetImages = {
  vmware: "/images/vcenter.png",
  grafana: "/images/grafana.png",
  odooPos: "/images/odoo-pos.png",
  milestone: "/images/milestone-vms.png",
  amag: "/images/amag-acs.png",
  lenel: "/images/lenel-acs.png",
  avigilon: "/images/avigilon-vms.png",
  cisco: "/images/cisco-core.png",
  zabbix: "/images/zabbix.png",
  checkmk: "/images/checkmk.png",
  square: "/images/square-receipt.png",
  qdrant: "/images/qdrant.png",
  n8n: "/images/n8n.png",
  keycloak: "/images/keycloak.png",
  nextcloud: "/images/nextcloud.png",
  projectsHeader: "/images/projects.png",
  og: "/images/og.png",
};

/* ---------- SEO (required by SeoHeader.js) ---------- */
const seo = {
  title: "Duong Le — Systems Engineer",
  description:
    "Systems Engineer specializing in VMware vCenter/ESXi/vSAN, Windows/AD/Intune, Cisco networking, Odoo+POS integrations, observability, and AI/RAG automation.",
  og: {
    title: "Duong Le — Systems Engineer",
    type: "website",
    url: "https://dle2022.github.io/duongportfolio",
    image: assetImages.og,
  },
};

/* ---------- Greeting / Home ---------- */
const greeting = {
  title: "Hi, I'm Duong Le",
  logo_name: "DuongLe",
  nickname: "Duong",
  subTitle:
    "Systems Engineer focused on reliable infra: VMware, Windows/AD, Cisco networking, observability, Odoo+POS, and AI/RAG.",
  resumeLink:
    "https://dle2022.github.io/duongportfolio/assets/Duong-Le-Resume.pdf",
  portfolio_repository: "https://github.com/dle2022",
  githubProfile: "https://github.com/dle2022",
  heroImage: assetImages.vmware,
};

const socialHandles = {
  github: "https://github.com/dle2022",
  linkedin: "https://www.linkedin.com/in/duong-le",
  gmail: "mailto:lengocduong18@gmail.com",
};
/* ---------- Socials ---------- */
// ✅ This is what Header/Greeting expect: an ARRAY of link entries
const socialMediaLinks = [
  {
    name: "Github",
    link: socialHandles.github,
    fontAwesomeIcon: "fa-github", // Font Awesome class (v4/5 in this template)
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: socialHandles.linkedin,
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: socialHandles.gmail,
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

/* ---------- Skills ---------- */
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Design, deploy, and operate resilient infrastructure with security, automation, and visibility.",
  skills: [
    "💠 VMware: vCenter, ESXi, vSAN, HA/DRS; snapshot/backup/restore; DR tests.",
    "🪟 Windows/AD: AD DS, GPO, DHCP/DNS, M365 hybrid, Intune baselines & app deploys.",
    "🌐 Cisco networking: L2/L3 design, VLANs, LACP, inter-VLAN routing, ACLs, VPN, firewalling.",
    "🛡️ Physical security: Milestone XProtect, AMAG Symmetry, Lenel OnGuard, Avigilon CC.",
    "🧩 Business systems: Odoo ERP ↔ Square/Clover POS (webhooks/REST), modifiers/variations on receipts.",
    "🤖 AI/RAG: Ollama, Qdrant, n8n, Open WebUI—doc/email ingestion, semantic search, `/reindex` jobs.",
    "📈 Observability: Telegraf → Prometheus → Grafana; Checkmk/Zabbix; SLO-driven alerts.",
    "🐳 DevOps: Docker, GitHub Actions CI/CD; repeatable lab→prod cutovers.",
    "🔐 SSO/IdP: Keycloak ↔ Google Workspace; Cloudflare Zero Trust tunnels/WAF.",
  ],
  softwareSkills: [
    { skillName: "VMware", fontAwesomeClassname: "fab fa-vmware" },
    {
      skillName: "Windows / AD / Intune",
      fontAwesomeClassname: "fab fa-windows",
    },
    { skillName: "Cisco (CCNA)", fontAwesomeClassname: "fas fa-network-wired" },
    {
      skillName: "Odoo + POS APIs",
      fontAwesomeClassname: "fas fa-cash-register",
    },
    {
      skillName: "Grafana / Prometheus",
      fontAwesomeClassname: "fas fa-chart-line",
    },
    {
      skillName: "Zabbix / Checkmk",
      fontAwesomeClassname: "fas fa-laptop-medical",
    },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Keycloak / SSO", fontAwesomeClassname: "fas fa-key" },
    {
      skillName: "Cloudflare Zero Trust",
      fontAwesomeClassname: "fas fa-shield-alt",
    },
  ],
};

/* ---------- Education (brief placeholder) ---------- */
const competitiveSites = { competitiveSites: [] };

/* ---------- Education (required by EducationComponent) ---------- */
const degrees = {
  degrees: [
    {
      title: "B.S. — Information Technology",
      subtitle: "Systems Engineering & Networking",
      // 👉 Must exist in public/images/
      logo_path: "og.png",
      alt_name: "IT",
      duration: "",
      descriptions: [
        "• VMware vCenter/ESXi/vSAN labs; HA/DRS; DR simulations.",
        "• Windows/AD DS, GPO, DHCP/DNS, Intune baselines.",
        "• Cisco switching/routing, VLANs, VPN; observability stacks.",
      ],
      website_link: "https://github.com/dle2022",
    },
    {
      title: "M.S. — Information Systems (coursework)",
      subtitle: "Cloud • Automation • Observability",
      logo_path: "og.png",
      alt_name: "IS",
      duration: "",
      descriptions: [
        "• Prometheus/Grafana SLOs; Checkmk/Zabbix.",
        "• Odoo ERP + Square/Clover POS integrations.",
        "• AI/RAG with Ollama, Qdrant, n8n, Open WebUI.",
      ],
      website_link: "https://github.com/dle2022",
    },
  ],
};

/* ---------- Certifications ---------- */
const certifications = {
  certifications: [
    {
      title: "Cisco CCNA",
      subtitle: "Routing/Switching, VLANs, VPN, ACLs",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "CCNA",
      color_code: "#1BA0D7",
    },
    {
      title: "AWS (Associate)",
      subtitle: "Core cloud services & architectures",
      logo_path: "aws.png",
      certificate_link: "",
      alt_name: "AWS",
      color_code: "#232F3E",
    },
    {
      title: "VMware (DCV)",
      subtitle: "vCenter/ESXi/vSAN/HA/DRS fundamentals",
      logo_path: "vmware.png",
      certificate_link: "",
      alt_name: "VMware",
      color_code: "#607078",
    },
  ],
};

/* ---------- Experience ---------- */
const experience = {
  title: "Experience",
  subtitle: "Systems Engineering • Infrastructure • Integrations",
  description:
    "Hands-on infra engineer across VMware, Windows/AD, Cisco networking, observability, and Odoo+POS integrations; Navy leadership: budgeting, mentoring, incident response.",
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
          description: [
            "🏗️ VMware clusters (vCenter, ESXi, vSAN) with HA/DRS; snapshot/backup/restore; quarterly DR drills.",
            "🪟 Windows/AD: AD DS, OU/GPO, DHCP/DNS; M365 hybrid; Intune hardening & deployments.",
            "🌐 Cisco switching/routing: VLAN segmentation, LACP, inter-VLAN routing, ACL micro-segmentation, site-to-site VPN.",
            "🎥 Security systems: Milestone XProtect VMS; AMAG Symmetry & Lenel OnGuard; Avigilon CC—roles, badge policies, event/alarms.",
            "🧩 Odoo ERP ↔ Square/Clover POS: webhooks; idempotent sync; modifiers/variations on receipts; multi-location mapping.",
            "📊 Observability: Telegraf → Prometheus → Grafana; Checkmk/Zabbix; dashboards by audience; SLOs & on-call alerts.",
            "🤖 AI/RAG: Dockerized Ollama, Qdrant, n8n, Open WebUI; email + document ingestion; `/reindex` automation.",
            "🔐 Keycloak SSO ↔ Google Workspace; Cloudflare Zero Trust for hardened public endpoints.",
          ].join("\n"),
          color: "#0879bf",
          image: assetImages.cisco,
        },
      ],
    },
  ],
};

/* ---------- Projects page header (required) ---------- */
const projectsHeader = {
  title: "Projects & Case Studies",
  description:
    "Highlighted systems engineering, networking, observability and automation projects with measurable outcomes.",
  avatar_image_path: assetImages.projectsHeader,
};

/* ---------- Projects (featured) ---------- */
const projects = {
  data: [
    {
      id: "vmware-lab",
      name: "VMware Lab & DR Playgrounds",
      url: "https://github.com/dle2022",
      description:
        "Nested ESXi + vCenter + vSAN with HA/DRS; snapshot/backup policies; DR simulations and upgrade rehearsals.",
      languages: [
        { name: "VMware", iconifyClass: "logos:vmware" },
        { name: "Windows", iconifyClass: "logos:microsoft-windows" },
      ],
      image: assetImages.vmware,
      bullets: [
        "🧪 Rehearsed upgrades and failure scenarios safely.",
        "♻️ Verified RPO/RTO with restore drills.",
        "📚 Documented rollback plans.",
      ],
    },
    {
      id: "cisco-network-redesign",
      name: "Cisco Switching & Network Redesign",
      url: "https://github.com/dle2022",
      description:
        "Core/distribution/access with VLANs, LACP, inter-VLAN routing, ACL segmentation, site-to-site VPN, resilient edges.",
      languages: [{ name: "Cisco", iconifyClass: "logos:cisco" }],
      image: assetImages.cisco,
      bullets: [
        "🧩 Redundant topology with rapid convergence.",
        "🔒 ACL micro-segmentation for sensitive systems.",
        "🚦 QoS for VoIP/Video; DHCP/DNS failover design.",
      ],
    },
    {
      id: "milestone-xprotect",
      name: "Milestone XProtect Enterprise VMS",
      url: "https://github.com/dle2022",
      description:
        "Recording servers, retention tiers, user roles, event/alarm rules, and health monitoring.",
      languages: [{ name: "Milestone XProtect", iconifyClass: "mdi:cctv" }],
      image: assetImages.milestone,
      bullets: [
        "🎥 Camera groups, motion rules, storage tiers.",
        "👥 Role-based access and audit trails.",
        "🔔 Alarm routing to SOC with email/SMS hooks.",
      ],
    },
    {
      id: "amag-lenel-avigilon",
      name: "AMAG / Lenel / Avigilon Access & Video",
      url: "https://github.com/dle2022",
      description:
        "AMAG Symmetry, Lenel OnGuard, Avigilon Control Center deployments with badge policies, door schedules, analytics.",
      languages: [
        { name: "AMAG Symmetry", iconifyClass: "mdi:door-closed" },
        { name: "Lenel OnGuard", iconifyClass: "mdi:badge-account" },
        { name: "Avigilon", iconifyClass: "mdi:video" },
      ],
      image: assetImages.lenel,
      bullets: [
        "🪪 Badge/credential policies",
        "🕒 Holiday schedules",
        "🤝 Video-ACS event linking",
      ],
    },
    {
      id: "pos-odoo",
      name: "POS ↔ Odoo Integration (Square/Clover)",
      url: "https://github.com/dle2022",
      description:
        "Webhooks + REST syncing; auto-create modifiers; receipts display add-ons/variations; location-aware mapping.",
      languages: [
        { name: "Odoo", iconifyClass: "simple-icons:odoo" },
        { name: "Laravel/PHP", iconifyClass: "logos:laravel" },
      ],
      image: assetImages.square,
      bullets: [
        "🧾 Clear modifiers on receipts",
        "🔁 Idempotent sync",
        "🏪 Multi-location inventory",
      ],
    },
    {
      id: "observability",
      name: "Full-Stack Observability",
      url: "https://github.com/dle2022",
      description:
        "Telegraf → Prometheus → Grafana with Checkmk/Zabbix; dashboards for ESXi, NAS, firewall, Wi-Fi, apps; SLO alerts.",
      languages: [
        { name: "Grafana", iconifyClass: "logos:grafana" },
        { name: "Prometheus", iconifyClass: "logos:prometheus" },
      ],
      image: assetImages.grafana,
      bullets: [
        "📊 Audience-based dashboards",
        "🚨 Noise-reduced alerts",
        "⏱️ Capacity planning",
      ],
    },
    {
      id: "ai-rag",
      name: "Self-Hosted AI/RAG Platform",
      url: "https://github.com/dle2022",
      description:
        "Dockerized Ollama, Qdrant, n8n, Open WebUI; ingest PDFs/Docs; retrieval-augmented Q&A; `/reindex` endpoint.",
      languages: [
        { name: "Docker", iconifyClass: "logos:docker-icon" },
        { name: "Qdrant", iconifyClass: "simple-icons:qdrant" },
      ],
      image: assetImages.qdrant,
      bullets: [
        "📚 Auto-embed docs/emails",
        "🔎 Semantic search",
        "🔁 Hot reindex after new uploads",
      ],
    },
  ],
};

/* ---------- Publications header + list (required) ---------- */
const publicationsHeader = {
  title: "Writeups & Publications",
  description:
    "Notes, runbooks, and deep-dives from systems engineering projects: networking, VMware labs, Odoo+POS, and observability.",
  avatar_image_path: assetImages.og,
};

const publications = {
  data: [
    {
      id: "hardening-odoo-cloudflare",
      name: "Hardening Odoo Behind Cloudflare Zero Trust",
      createdAt: "2024",
      description:
        "WAF rules, cache bypass, tunnels, and webhook security for public Odoo.",
      url: "https://github.com/dle2022",
    },
    {
      id: "telegraf-vsphere",
      name: "Telegraf vsphere in Production",
      createdAt: "2024",
      description:
        "Label cardinality, scrape strategy, alert routing, retention best practices.",
      url: "https://github.com/dle2022",
    },
  ],
};

/* ---------- Legacy Skills (required by SkillSection.js) ---------- */
const skills = {
  data: [
    {
      title: "Infrastructure & Virtualization 🖥️",
      fileName: "DataInfraImg",
      skills: [
        "⚙️ VMware vCenter, ESXi, vSAN, HA/DRS",
        "📦 Backup/restore, DR simulations",
        "🧩 Nested labs for upgrade rehearsals",
      ],
      softwareSkills: [
        { skillName: "VMware", fontAwesomeClassname: "fab fa-vmware" },
        { skillName: "Windows Server", fontAwesomeClassname: "fab fa-windows" },
      ],
    },
    {
      title: "Networking 🌐",
      fileName: "NetworkingImg",
      skills: [
        "🌐 Cisco switching/routing, VLANs, VPN",
        "🔒 Firewalling, ACL segmentation, QoS",
      ],
      softwareSkills: [
        { skillName: "Cisco", fontAwesomeClassname: "fas fa-network-wired" },
      ],
    },
    {
      title: "Security & Monitoring 🔐📊",
      fileName: "SecurityImg",
      skills: [
        "🎥 Milestone, AMAG, Lenel, Avigilon systems",
        "📊 Telegraf, Prometheus, Grafana, Zabbix, Checkmk",
        "🔐 Keycloak SSO, Cloudflare Zero Trust",
      ],
      softwareSkills: [
        { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line" },
        { skillName: "Keycloak", fontAwesomeClassname: "fas fa-key" },
      ],
    },
  ],
};

/* ---------- Open source & misc sections ---------- */
// Open Source settings (used by Opensource page)
const openSource = {
  githubUserName: "dle2022", // <-- your GitHub username
  showGithubProfile: "true", // shows profile card on Home if the fork supports it
};

const achievementSection = {
  title: "Highlights",
  achievementsCards: [
    {
      title: "Infra Reliability Wins",
      subtitle:
        "Reduced noisy alerts ~30% using SLOs; 99.9% uptime for core services.",
      image: assetImages.grafana,
      footerLink: [],
    },
  ],
};

const blogSection = {
  title: "Notes",
  subtitle: "Drafts and guides in progress.",
  blogs: [
    {
      url: "https://github.com/dle2022",
      title: "Telegraf vsphere—Production Patterns",
      description: "Scraping strategy, cardinality control, retention.",
    },
  ],
};

const talkSection = { title: "Talks", talks: [] };
const podcastSection = { title: "Podcasts", subtitle: "", podcast: [] };

/* ---------- Global site settings (required by Header.js) ---------- */
const settings = {
  isSplash: false, // if true → shows animated splash screen
  useCustomCursor: false, // set true if you want a custom cursor
  theme: "light", // default theme: "light" or "dark"
};

/* ---------- Contact (required by ContactComponent) ---------- */
const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Systems / Infrastructure roles, integrations, or consulting. Sanitized configs/diagrams available on request.",
  number: "", // keep empty if you don't want to show a phone number
  email_address: "lengocduong18@gmail.com",
  github: "https://github.com/dle2022",
  linkedin: "https://www.linkedin.com/in/duong-le",
  location: "Los Angeles, CA (PST)",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    // 👉 Must point to an existing file under public/images
    profile_image_path: "/images/vcenter.png",
    description:
      "Best ways to reach me: email or LinkedIn. I’m open to systems engineering, networking, Odoo+POS integrations, and observability work.",
    email: "lengocduong18@gmail.com",
    github: "https://github.com/dle2022",
    linkedin: "https://www.linkedin.com/in/duong-le",
  },
  addressSection: {
    title: "Address",
    subtitle: "Los Angeles, CA (PST), USA",
    avatar_image_path: "/images/cisco-core.png",
    location_map_link: "https://www.google.com/maps/place/Los+Angeles,+CA",
  },
  phoneSection: {
    title: "Phone",
    // leave blank to hide if your template supports that
    subtitle: "",
    avatar_image_path: "/images/checkmk.png",
  },
  resumeSection: {
    title: "Resume",
    subtitle: "Download a PDF version of my resume.",
    // You can change this later; it just needs to be a non-empty string
    link: "https://dle2022.github.io/duongportfolio/assets/Duong-Le-Resume.pdf",
    avatar_image_path: "/images/og.png",
  },
};

const twitterDetails = { userName: "" };

/* ---------- Exports ---------- */
export {
  assetImages,
  seo,
  greeting,
  socialMediaLinks,
  skillsSection,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  contactPageData,
  twitterDetails,
  settings,
};
