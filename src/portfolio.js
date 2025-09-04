/* ====== Personal Portfolio Configuration (tailored for Duong Le ) ====== */

/** 
 * TIP: Put screenshots in /public/images and keep these names, or 
 * update the paths here to match your actual uploaded filenames. 
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
  nextcloud: "/images/nextcloud.png"
};

// ================== Home / Greeting ==================
const greeting = {
  title: "Hi, I'm Duong Le",
  logo_name: "DuongLe",
  nickname: "Duong",
  subTitle:
    "Systems Engineer specialized in VMware vCenter/ESXi/vSAN, Windows/AD/Intune, Cisco networking, and secure automation. I build end-to-end business systems connecting Odoo ERP with Square/Clover POS, plus modern AI/RAG stacks with real observability.",
  resumeLink: "https://dle2022.github.io/portfolio/assets/Duong-Le-Resume.pdf",
  portfolio_repository: "https://github.com/dle2022",
  githubProfile: "https://github.com/dle2022",
  heroImage: assetImages.vmware
};

// ================== Social Media ==================
const socialMediaLinks = {
  github: "https://github.com/dle2022",
  linkedin: "https://www.linkedin.com/in/duong-le", // update to exact slug
  gmail: "lengocduong18@gmail.com"
};

// ================== Skills ==================
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Design, deploy, and operate reliable infrastructure with security, automation, and visibility.",
  skills: [
    "💠 VMware datacenter builds: vCenter, ESXi, vSAN, HA/DRS, snapshots, backup/restore.",
    "🪟 Windows/AD: AD DS, GPO, DHCP/DNS, hybrid M365, Intune/Endpoint hardening & baselines.",
    "🌐 Cisco networking: Layer-2/Layer-3 design, VLANs, EtherChannel, STP/RSTP, static & dynamic routing, site-to-site VPN, QoS, ACLs, firewalling.",
    "🛡️ Physical security platforms: Milestone XProtect VMS, AMAG Symmetry, Lenel OnGuard, Avigilon Control Center—design, deployment, and integrations.",
    "🧩 Business systems: Odoo ERP ↔ Square/Clover POS (webhooks, REST), receipt modifiers/variations, multi-location sync.",
    "🤖 AI/RAG: Ollama, Qdrant, n8n, Open WebUI—document/email ingestion, semantic search, Q&A, `/reindex` jobs.",
    "📈 Observability: Telegraf → Prometheus → Grafana dashboards; Checkmk/Zabbix for agents & SNMP; actionable alerts/SLOs.",
    "🐳 DevOps: Docker, GitHub Actions CI/CD; infra-as-docs; repeatable lab → prod cutovers.",
    "🔐 SSO/IdP: Keycloak ↔ Google Workspace SSO; Okta/Zscaler knowledge; Cloudflare Zero Trust for secure tunnels/webhooks."
  ],
  softwareSkills: [
    { skillName: "VMware", fontAwesomeClassname: "fab fa-vmware" },
    { skillName: "Windows / AD / Intune", fontAwesomeClassname: "fab fa-windows" },
    { skillName: "Cisco (CCNA)", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Odoo ERP", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "Square/Clover POS", fontAwesomeClassname: "fas fa-cash-register" },
    { skillName: "Milestone XProtect", fontAwesomeClassname: "fas fa-video" },
    { skillName: "AMAG / Lenel / Avigilon", fontAwesomeClassname: "fas fa-door-open" },
    { skillName: "Grafana / Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Zabbix / Checkmk", fontAwesomeClassname: "fas fa-laptop-medical" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Keycloak / SSO", fontAwesomeClassname: "fas fa-key" },
    { skillName: "Cloudflare Zero Trust", fontAwesomeClassname: "fas fa-shield-alt" },
    { skillName: "Ollama / Qdrant / n8n", fontAwesomeClassname: "fas fa-robot" }
  ]
};

// ================== Education (brief placeholders) ==================
const competitiveSites = { competitiveSites: [] };

const degrees = {
  degrees: [
    {
      title: "M.S. & B.S. (Information Technology)",
      subtitle:
        "Focus: systems engineering, networks, and cloud; labs across VMware, AD, and observability.",
      logo_path: "education.png",
      alt_name: "Graduate Studies",
      duration: "",
      descriptions: [
        "• Projects: VMware lab, AD/Intune rollout, observability pipelines.",
        "• Electives: security, automation, cloud architectures."
      ],
      website_link: "https://github.com/dle2022"
    }
  ]
};

// ================== Certifications ==================
const certifications = {
  certifications: [
    {
      title: "Cisco CCNA",
      subtitle: "Routing/Switching, VLANs, VPN, ACLs",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "CCNA",
      color_code: "#1BA0D7"
    },
    {
      title: "AWS (Associate Level)",
      subtitle: "Core cloud services and architectures",
      logo_path: "aws.png",
      certificate_link: "",
      alt_name: "AWS",
      color_code: "#232F3E"
    },
    {
      title: "VMware (Data Center Virtualization)",
      subtitle: "vCenter/ESXi/vSAN/HA/DRS fundamentals",
      logo_path: "vmware.png",
      certificate_link: "",
      alt_name: "VMware",
      color_code: "#607078"
    }
  ]
};

// ================== Experience ==================
const experience = {
  title: "Experience",
  subtitle: "Systems Engineering • Infrastructure • Integrations",
  description:
    "Hands-on infrastructure engineer across VMware, Windows/AD, Cisco networking, observability, and business systems (Odoo+POS). US Navy leadership: budgeting, mentoring, incident response.",
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
            [
              "🏗️ Built VMware clusters (vCenter, ESXi, vSAN) with HA/DRS; created snapshot/backup/restore policies and tested quarterly DR.",
              "🪟 Administered Windows/AD: AD DS, OU/GPO design, DHCP/DNS; hybrid M365; Intune baselines and app deployments.",
              "🌐 Engineered Cisco switching/routing topologies with VLAN segmentation, LACP/EtherChannel, inter-VLAN routing, ACL-based micro-segmentation, site-to-site VPN, and high-availability firewall pairs.",
              "🎥 Deployed enterprise physical security: Milestone XProtect VMS camera servers and recording storage; AMAG Symmetry and Lenel OnGuard access control panels; Avigilon Control Center with analytics—user roles, badge policies, event rules.",
              "🧩 Integrated Odoo ERP with Square/Clover POS: webhooks + idempotent sync; modifiers/variations printed correctly on receipts; multi-location mapping and inventory hygiene.",
              "📊 Implemented observability: Telegraf → Prometheus → Grafana; Checkmk/Zabbix agents & SNMP; dashboards by audience; SLOs and on-call alerts.",
              "🤖 Delivered self-hosted AI/RAG platform (Ollama, Qdrant, n8n, Open WebUI) for email intelligence, document Q&A, and `/reindex` flows.",
              "🔐 Rolled out Keycloak SSO ↔ Google Workspace; hardened public endpoints via Cloudflare Zero Trust and WAF rules.",
              "📜 Wrote playbooks & runbooks for onboarding, patching, backup/restore, and incident handling; mentored junior admins."
            ].join("\n"),
          color: "#0879bf",
          image: assetImages.cisco
        }
      ]
    }
  ]
};

// ================== Featured Projects ==================
const projects = {
  data: [
    {
      id: "vmware-lab",
      name: "VMware Lab & DR Playgrounds",
      url: "https://github.com/dle2022",
      description:
        "Nested ESXi + vCenter + vSAN with HA/DRS; snapshot/backup policies; DR simulations; upgrade rehearsals with minimal risk.",
      languages: [
        { name: "VMware", iconifyClass: "logos:vmware" },
        { name: "Windows", iconifyClass: "logos:microsoft-windows" }
      ],
      image: assetImages.vmware,
      bullets: [
        "🧪 Rehearsed upgrades and failure scenarios safely.",
        "♻️ Verified RPO/RTO with restore drills.",
        "📚 Documented procedures & rollback plans."
      ]
    },
    {
      id: "cisco-network-redesign",
      name: "Cisco Switching & Network Redesign",
      url: "https://github.com/dle2022",
      description:
        "Layer-2/3 campus core with VLANs, LACP, inter-VLAN routing, ACL segmentation, site-to-site VPN, and resilient internet edges.",
      languages: [
        { name: "Cisco", iconifyClass: "logos:cisco" }
      ],
      image: assetImages.cisco,
      bullets: [
        "🧩 Designed core/distribution/access with redundancy.",
        "🔒 ACL micro-segmentation for sensitive systems.",
        "🚦 QoS for VoIP/Video; DHCP/DNS failover design."
      ]
    },
    {
      id: "milestone-xprotect",
      name: "Milestone XProtect Enterprise VMS",
      url: "https://github.com/dle2022",
      description:
        "Multi-server XProtect with recording servers, storage retention policies, user roles, event/alarm rules, and health monitoring.",
      languages: [
        { name: "Milestone XProtect", iconifyClass: "mdi:cctv" }
      ],
      image: assetImages.milestone,
      bullets: [
        "🎥 Camera groups, motion rules, storage tiers.",
        "👥 Role-based access and audit trails.",
        "🔔 Alarm routing to SOC with email/SMS hooks."
      ]
    },
    {
      id: "amag-lenel-avigilon",
      name: "AMAG / Lenel / Avigilon Access & Video",
      url: "https://github.com/dle2022",
      description:
        "AMAG Symmetry, Lenel OnGuard, and Avigilon Control Center deployments with badge policies, door schedules, and video analytics.",
      languages: [
        { name: "AMAG Symmetry", iconifyClass: "mdi:door-closed" },
        { name: "Lenel OnGuard", iconifyClass: "mdi:badge-account" },
        { name: "Avigilon", iconifyClass: "mdi:video" }
      ],
      image: assetImages.lenel,
      bullets: [
        "🪪 Badge/credential policies & door groups.",
        "🕒 Holiday & after-hours schedules with audits.",
        "🤝 Video-ACS event linking for investigations."
      ]
    },
    {
      id: "pos-odoo",
      name: "POS ↔ Odoo Integration (Square/Clover)",
      url: "https://github.com/dle2022",
      description:
        "Webhooks + REST syncing; auto-create modifiers; ensure receipts display add-ons & variations; location-aware mapping.",
      languages: [
        { name: "Odoo", iconifyClass: "simple-icons:odoo" },
        { name: "Laravel/PHP", iconifyClass: "logos:laravel" }
      ],
      image: assetImages.square,
      bullets: [
        "🧾 Modifiers & variations printed clearly on receipts.",
        "🔁 Idempotent sync to prevent duplicate orders.",
        "🏪 Multi-location inventory & catalog hygiene."
      ]
    },
    {
      id: "observability",
      name: "Full-Stack Observability",
      url: "https://github.com/dle2022",
      description:
        "Telegraf → Prometheus → Grafana with Checkmk/Zabbix; dashboards for ESXi, NAS, firewall, Wi-Fi, apps; alerting & SLOs.",
      languages: [
        { name: "Grafana", iconifyClass: "logos:grafana" },
        { name: "Prometheus", iconifyClass: "logos:prometheus" }
      ],
      image: assetImages.grafana,
      bullets: [
        "📊 Per-audience dashboards (ops/executive).",
        "🚨 Noise-reduced alerts tied to user impact.",
        "⏱️ MTTR down; proactive capacity planning."
      ]
    },
    {
      id: "ai-rag",
      name: "Self-Hosted AI/RAG Platform",
      url: "https://github.com/dle2022",
      description:
        "Dockerized Ollama, Qdrant, n8n, Open WebUI; ingest PDFs/Docs; retrieval-augmented Q&A; `/reindex` endpoint.",
      languages: [
        { name: "Docker", iconifyClass: "logos:docker-icon" },
        { name: "Qdrant", iconifyClass: "simple-icons:qdrant" }
      ],
      image: assetImages.qdrant,
      bullets: [
        "📚 Add docs/emails and auto-embed into vectors.",
        "🔎 Semantic search + summarization workflows.",
        "🔁 Hot reindex after new uploads."
      ]
    },
    {
      id: "keycloak-sso",
      name: "Keycloak SSO ↔ Google Workspace",
      url: "https://github.com/dle2022",
      description:
        "Centralized SSO for apps; role mappings; 2FA enforcement; smoother onboarding/offboarding workflows.",
      languages: [
        { name: "Keycloak", iconifyClass: "mdi:key" }
      ],
      image: assetImages.keycloak,
      bullets: [
        "🔐 Consistent identity & role-based access.",
        "🧑‍💼 Faster onboarding with fewer tickets.",
        "🧯 Reduced password reset incidents."
      ]
    },
    {
      id: "nextcloud-drive-sync",
      name: "Nextcloud + Google Drive Sync",
      url: "https://github.com/dle2022",
      description:
        "On-prem Nextcloud with Google Drive bidirectional sync; permissions & shares; backup strategy.",
      languages: [
        { name: "Nextcloud", iconifyClass: "logos:nextcloud" }
      ],
      image: assetImages.nextcloud,
      bullets: [
        "🗂️ Web UI + desktop sync clients for users.",
        "🔁 Drive bridge for hybrid workflows.",
        "🛡️ Snapshot-based backups of storage."
      ]
    },
    {
      id: "zabbix-checkmk",
      name: "Raspberry Pi Probes (Zabbix & Checkmk)",
      url: "https://github.com/dle2022",
      description:
        "Lightweight remote probes for VMware hosts, storage, firewall, and switches; SNMP + agent checks.",
      languages: [
        { name: "Zabbix", iconifyClass: "mdi:server" },
        { name: "Checkmk", iconifyClass: "mdi:chart-areaspline" }
      ],
      image: assetImages.checkmk,
      bullets: [
        "🍓 Flexible remote collectors over VPN.",
        "🔭 Visibility into edge devices.",
        "🌐 Low-cost monitoring at branch sites."
      ]
    }
  ]
};

// ================== Open Source (optional) ==================
const openSource = {
  githubUserName: "dle2022",
  showGithubProfile: "true"
};

// ================== Achievements / Blog / Talks (optional) ==================
const achievementSection = {
  title: "Highlights",
  achievementsCards: [
    {
      title: "Infra Reliability Wins",
      subtitle:
        "Cut incident noise ~30% with SLO-driven alerting and runbooks; 99.9% uptime for core services.",
      image: assetImages.grafana,
      footerLink: []
    },
    {
      title: "POS Receipt Parity",
      subtitle:
        "Ensured modifiers/variations displayed correctly on Square receipts across multiple locations.",
      image: assetImages.square,
      footerLink: []
    }
  ]
};

const blogSection = {
  title: "Notes & Writeups",
  subtitle: "Drafts and guides I’m refining.",
  blogs: [
    {
      url: "https://github.com/dle2022",
      title: "Hardening Odoo Behind Cloudflare",
      description: "WAF rules, cache bypass, websockets/Tunnel, webhook security."
    },
    {
      url: "https://github.com/dle2022",
      title: "Telegraf vsphere in Production",
      description: "Label cardinality, scraping strategy, and retention best practices."
    }
  ]
};

const talkSection = { title: "Talks", talks: [] };
const podcastSection = { title: "Podcasts", subtitle: "", podcast: [] };

// ================== Contact ==================
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

// ================== Twitter (optional) ==================
const twitterDetails = { userName: "" };

// ================== Exports ==================
export {
  assetImages,
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
