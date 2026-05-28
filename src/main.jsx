import React from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import {
  ArrowRight24Regular,
  BookOpen24Regular,
  Briefcase24Regular,
  CheckmarkCircle24Regular,
  Document24Regular,
  FolderOpen24Regular,
  Home24Regular,
  Mail24Regular,
  Open24Regular,
  Person24Regular,
  Sparkle24Regular,
} from "@fluentui/react-icons";
import "./styles.css";

const skills = [
  {
    title: "Research & Analytical Skills",
    items: [
      "Domain Research",
      "UX Research",
      "Workflow Discovery",
      "Stakeholder Communication",
      "System Analysis",
      "Data Interpretation",
      "Process Mapping",
      "User-Centered Problem Solving",
    ],
  },
  {
    title: "Product & Domain Understanding",
    items: [
      "Business Workflow Analysis",
      "Process Digitization",
      "Enterprise Systems Understanding",
      "Operations-to-System Translation",
      "Requirements Gathering",
      "Domain-Driven Design",
      "User Pain Point Analysis",
    ],
  },
  {
    title: "Technical & Systems Collaboration",
    items: [
      "Developer Collaboration",
      "Technical Product Ownership",
      "System Architecture Awareness",
      "Sprint Planning",
      "Ticket Tracking",
      "Agile / Scrum",
    ],
  },
  {
    title: "AI-Assisted Product Building",
    items: [
      "AI-Assisted Development",
      "No-Code / Low-Code Thinking",
      "Human + AI Collaboration",
      "Interaction Design",
      "Product Experimentation",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "UI Design",
      "UX Design",
      "Design Systems",
      "Responsive Design",
      "Interaction Design",
      "Figma",
      "Spline",
    ],
  },
];

const productFeedback = [
  "Missing workflow support",
  "Simpler reporting paths",
  "Clearer approval states",
  "Less manual re-entry",
  "Interfaces that reduce site errors",
];

const currentFocus = [
  "UI/UX Design",
  "Product Thinking",
  "Domain-Driven Design",
  "Workflow Optimization",
  "Frontend Systems",
  "Construction & Commissioning Operations",
];

const journeySteps = [
  {
    label: "Engineering operations",
    detail: "Turnover, test packs, spoolgen, commissioning, and handover work.",
  },
  {
    label: "Workflow insight",
    detail: "First-hand exposure to unclear interfaces, repetitive processes, and slow reporting.",
  },
  {
    label: "Product ownership",
    detail: "Turning operational pain points into better platform decisions and user flows.",
  },
  {
    label: "UI/UX practice",
    detail: "Combining domain expertise with design systems, interaction design, and frontend thinking.",
  },
];

const caseStudies = [
  {
    id: "skill-matrix-application",
    eyebrow: "UI/UX Case Study",
    title: "Skill Matrix Application",
    summary:
      "A web-based workforce capability management platform designed to help organizations visualize, manage, and evaluate employee skills across departments, teams, and company positions.",
    liveUrl: "https://skillmatrix-client.onrender.com/",
    snippets: {
      eyebrow: "Interface snippets",
      title: "Selected product screens",
      items: [
        {
          title: "Landing page",
          description: "A product-facing entry page explaining the value of capability mapping and evidence-based growth.",
          src: "/case-studies/skillmatrix-gallery/skillmatrix-landing-page.png",
          alt: "SkillMatrix landing page hero with product brand, call to action, and 3D cube visual.",
        },
        {
          title: "Admin dashboard",
          description: "A system-level summary of organization records, skills, pending actions, and setup alerts.",
          src: "/case-studies/skillmatrix-gallery/admin-dashboard.png",
          alt: "SkillMatrix admin dashboard showing organization metrics and pending actions.",
        },
        {
          title: "Organization team view",
          description: "A filtered table view for browsing teams, departments, sections, and team assignments.",
          src: "/case-studies/skillmatrix-gallery/admin-organization.png",
          alt: "SkillMatrix organization screen showing team records and hierarchy filters.",
        },
        {
          title: "Role hierarchy",
          description: "Role levels and permission-oriented actions organized for administrator maintenance.",
          src: "/case-studies/skillmatrix-gallery/admin-roles.png",
          alt: "SkillMatrix roles screen showing hierarchy levels and role management actions.",
        },
        {
          title: "Skill category management",
          description: "Expandable skill categories with related entries, descriptions, and admin actions.",
          src: "/case-studies/skillmatrix-gallery/admin-skills.png",
          alt: "SkillMatrix skills screen showing categories, skills, and admin actions.",
        },
        {
          title: "Member skill matrix",
          description: "A proficiency matrix that maps personal skills across categories and level bands.",
          src: "/case-studies/skillmatrix-gallery/aldren-skills.png",
          alt: "SkillMatrix member skills screen showing a proficiency matrix by category.",
        },
        {
          title: "Member dashboard",
          description: "A user dashboard for tracking skill progress, endorsements, assessments, and review signals.",
          src: "/case-studies/skillmatrix-gallery/aldren-dashboard.png",
          alt: "SkillMatrix member dashboard showing personal skill metrics and analytics cards.",
        },
      ],
    },
    tags: [
      "Enterprise UX",
      "Admin workflows",
      "Skill assessment",
      "Organizational visibility",
    ],
    problemAreas: [
      "Difficulty tracking employee competencies",
      "Lack of visibility into skill gaps",
      "Manual and inconsistent skill evaluations",
      "Limited alignment between workforce capability and project requirements",
    ],
    systemIncludes: [
      "Skill assessment and proficiency tracking",
      "Organizational hierarchy management",
      "Role and permission management",
      "Team and department visualization",
      "User approval workflows",
      "Administrative dashboards and analytics",
    ],
    designChallenges: [
      {
        title: "Complex Organizational Structure",
        body: "Departments, sections, teams, roles, and company positions needed to feel connected without overwhelming users.",
      },
      {
        title: "Large Amount of Data",
        body: "Skill matrices include proficiency levels, employee records, approval statuses, and assignments, so dense information had to stay scannable.",
      },
      {
        title: "Different User Types",
        body: "Administrators, managers, and employees required different access levels while sharing one consistent product experience.",
      },
      {
        title: "Administrative Friction",
        body: "Repeated setup tasks needed fewer clicks, clearer grouping, and better feedback than traditional enterprise screens.",
      },
    ],
    researchFindings: [
      {
        title: "Visibility mattered most",
        body: "Users wanted team coverage, missing competencies, pending approvals, and readiness visible without digging through reports.",
      },
      {
        title: "Admin users needed speed",
        body: "Role assignment, team updates, user management, and request review were recurring tasks that needed direct paths.",
      },
      {
        title: "Clear hierarchy reduced confusion",
        body: "Users understood the system faster when departments, sections, teams, and roles were visually grouped.",
      },
      {
        title: "Immediate feedback built confidence",
        body: "Status indicators, validation feedback, confirmations, and progress visibility made high-impact actions easier to complete.",
      },
    ],
    solutions: [
      {
        title: "Dashboard-centered experience",
        body: "A centralized dashboard gives access to user statistics, pending approvals, organizational metrics, missing assignments, and administrative alerts.",
      },
      {
        title: "Simplified navigation",
        body: "The sidebar was organized into clear zones: Dashboard, Organization, Roles, Users, and Skills.",
      },
      {
        title: "Hierarchical information design",
        body: "Department, Section, and Team structures were grouped into a clearer mental model.",
      },
      {
        title: "Reusable component patterns",
        body: "Tables, cards, forms, dialogs, status labels, and actions share consistent visual and interaction rules.",
      },
      {
        title: "Reduced form complexity",
        body: "Administrative forms were grouped, simplified, and tuned to reduce errors during repeated setup work.",
      },
      {
        title: "Role-based experience",
        body: "The interface adapts to permissions so each user focuses on relevant features.",
      },
    ],
    results: [
      "Improved administrative efficiency",
      "Better visibility into skill gaps and readiness",
      "Reduced cognitive overload",
      "A more scalable UX foundation",
      "Stronger alignment with real operational workflows",
    ],
    conclusion:
      "The Skill Matrix Application shows how a dense administrative system can become more intuitive when hierarchy, workflow efficiency, and real operational behavior guide the interface.",
  },
];

const caseStudyDetailSections = [
  { id: "project-overview", label: "Project overview", icon: BookOpen24Regular },
  { id: "design-challenge", label: "Design challenge", icon: Briefcase24Regular },
  {
    id: "user-research-findings",
    label: "User research findings",
    icon: Person24Regular,
  },
  {
    id: "design-solutions-implemented",
    label: "Design solutions implemented",
    icon: Sparkle24Regular,
  },
  { id: "results-achieved", label: "Results achieved", icon: CheckmarkCircle24Regular },
];

function getCaseStudyDetailHash(caseStudy, sectionId = "") {
  return `#case-study/${caseStudy.id}${sectionId ? `/${sectionId}` : ""}`;
}

function getCaseStudyRouteFromHash(hash) {
  const match = hash.match(/^#case-study\/([^/]+)(?:\/([^/]+))?$/);

  if (!match) {
    return { caseStudy: null, caseStudySection: "" };
  }

  const caseStudy = caseStudies.find((item) => item.id === match[1]) ?? null;
  const sectionId = caseStudyDetailSections.some((section) => section.id === match[2])
    ? match[2]
    : "";

  return {
    caseStudy,
    caseStudySection: caseStudy ? sectionId : "",
  };
}

function getCaseStudyDetailNavItems(caseStudy) {
  return caseStudyDetailSections.map((section) => ({
    ...section,
    href: getCaseStudyDetailHash(caseStudy, section.id),
  }));
}

function useHashRoute() {
  const [hash, setHash] = React.useState(() => window.location.hash);

  React.useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return {
    hash,
    ...getCaseStudyRouteFromHash(hash),
  };
}

function useScrollRestoration(hash, isCaseDetailPage, caseStudySection) {
  React.useEffect(() => {
    if (isCaseDetailPage) {
      if (!caseStudySection) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return undefined;
      }

      const frame = window.requestAnimationFrame(() => {
        document.getElementById(caseStudySection)?.scrollIntoView({ block: "start" });
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const targetId = hash?.startsWith("#") ? hash.slice(1) : "";

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [hash, isCaseDetailPage, caseStudySection]);
}

function useCaseStudyActiveSection(caseStudySection) {
  const [activeSection, setActiveSection] = React.useState(
    caseStudySection || "project-overview",
  );

  React.useEffect(() => {
    setActiveSection(caseStudySection || "project-overview");
  }, [caseStudySection]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -56% 0px",
        threshold: [0.1, 0.24, 0.4, 0.6],
      },
    );

    caseStudyDetailSections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}

const navItems = [
  { href: "#home", label: "Home", id: "home", icon: Home24Regular },
  { href: "#about-me", label: "About me", id: "about-me", icon: Person24Regular },
  {
    href: "#case-study",
    label: "Case study",
    id: "case-study",
    icon: BookOpen24Regular,
  },
  { href: "#skills", label: "Skill set", id: "skills", icon: Sparkle24Regular },
];

function useActiveSection() {
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const sectionIds = [
      "home",
      "about-me",
      "case-study",
      "skills",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        setActiveSection(visibleEntry.target.id);
      },
      {
        rootMargin: "-32% 0px -48% 0px",
        threshold: [0.1, 0.24, 0.4, 0.6],
      },
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}

function FloatingNav({
  activeSection,
  items = navItems,
  label = "Navigate",
  ariaLabel = "Portfolio navigation",
  variant = "",
}) {
  return (
    <aside
      className={`floating-nav${variant ? ` floating-nav--${variant}` : ""}`}
      aria-label={ariaLabel}
    >
      <p className="floating-nav__label">{label}</p>
      <nav>
        {items.map(({ href, label: itemLabel, id, icon: Icon }) => (
          <a
            key={id}
            className={`floating-nav__item${activeSection === id ? " is-active" : ""}`}
            href={href}
            aria-current={activeSection === id ? "page" : undefined}
          >
            <span className="floating-nav__icon" aria-hidden="true">
              <Icon />
            </span>
            <span>{itemLabel}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

function TopBar() {
  return (
    <header className="top-bar" aria-label="Portfolio contact links">
      <a className="brand-lockup" href="#home" aria-label="Aldren Gacute home">
        <span>
          <strong>Aldren Gacute</strong>
          <small>Product Owner / UI/UX Designer</small>
        </span>
      </a>

      <div className="top-actions" aria-label="Contact actions">
        <a
          className="button button--subtle"
          href="https://www.linkedin.com/in/aldren-gacute"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
          <Open24Regular aria-hidden="true" />
        </a>
        <a
          className="button button--primary"
          href="mailto:aldgacute@gmail.com?subject=Portfolio%20Inquiry"
        >
          <Mail24Regular aria-hidden="true" />
          Email me
        </a>
      </div>
    </header>
  );
}

function SectionHeader({ eyebrow, title, description, id }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function HomeSection() {
  return (
    <section id="home" className="page-section hero-section" aria-labelledby="home-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio / Product UX / Operations</p>
          <h1 id="home-title">
            Hi, I&rsquo;m Aldren. I design clear systems for complex work.
          </h1>
          <p className="hero-lede">
            I bring 8+ years of construction and commissioning operations into
            product ownership, UI/UX design, workflow optimization, and frontend
            collaboration.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#case-study">
              View case study
              <ArrowRight24Regular aria-hidden="true" />
            </a>
            <a className="button button--subtle" href="#about-me">
              About me
            </a>
          </div>

          <dl className="hero-stats" aria-label="Portfolio highlights">
            <div>
              <dt>8+</dt>
              <dd>years in engineering operations</dd>
            </div>
            <div>
              <dt>PO</dt>
              <dd>product ownership for internal systems</dd>
            </div>
            <div>
              <dt>UX</dt>
              <dd>design systems, research, and prototypes</dd>
            </div>
          </dl>
        </div>

      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about-me" className="page-section" aria-labelledby="about-title">
      <SectionHeader
        eyebrow="About me"
        id="about-title"
        title="Design shaped by real project pressure"
        description="My UX work did not start in a perfect design brief. It started in turnover rooms, field execution, approvals, reporting, and handover workflows where clarity directly affects delivery."
      />

      <div className="about-grid">
        {journeySteps.map((step, index) => (
          <article className="journey-card" key={step.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.label}</h3>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>

      <div className="split-section">
        <div className="story-block">
          <h3>From operations to product design</h3>
          <p>
            I began in oil, gas, and construction as a Completion System
            Engineer, supporting turnover, test packs, spoolgen, commissioning,
            and system handover activities across projects in the Philippines,
            Bahrain, and Saudi Arabia.
          </p>
          <p>
            Over time, I became the person who could translate operational pain
            points into product conversations: where reports were unclear, where
            users repeated work, where approvals slowed down, and where the
            interface could help teams move with more confidence.
          </p>
          <p>
            Now, alongside product ownership, I continue to deepen my skills in
            UI/UX design, interaction design, design systems, and frontend
            development, combining domain expertise with modern digital product
            thinking.
          </p>
          <p>
            I believe the best products are built by understanding both the
            system and the people using it.
          </p>
        </div>

        <div className="feedback-panel" aria-label="Common product feedback areas">
          <h3>What I usually improve</h3>
          <ul>
            {productFeedback.map((item) => (
              <li key={item}>
                <CheckmarkCircle24Regular aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="focus-cloud" aria-label="Current focus areas">
        {currentFocus.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function CaseSelectionCard({ caseStudy, index }) {
  return (
    <a className="case-selection-card" href={getCaseStudyDetailHash(caseStudy)}>
      <div className="case-selection-card__icon" aria-hidden="true">
        <FolderOpen24Regular />
      </div>
      <div>
        <p>Case Study {String(index + 1).padStart(2, "0")}</p>
        <h3>{caseStudy.title}</h3>
        <span>{caseStudy.summary}</span>
      </div>
      <strong>
        Open detail
        <ArrowRight24Regular aria-hidden="true" />
      </strong>
    </a>
  );
}

function CaseStudySelection() {
  return (
    <section id="case-study" className="page-section" aria-labelledby="case-title">
      <SectionHeader
        eyebrow="Case study"
        id="case-title"
        title="Choose a project"
      />

      <div className="case-selection-grid">
        {caseStudies.map((caseStudy, index) => (
          <CaseSelectionCard
            key={caseStudy.id}
            caseStudy={caseStudy}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function DetailCardGroup({ title, items, icon: Icon }) {
  return (
    <article className="detail-card">
      <div className="detail-card__heading">
        <Icon aria-hidden="true" />
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function InsightGrid({ title, items }) {
  return (
    <div className="insight-group">
      <h3>{title}</h3>
      <div className="insight-grid">
        {items.map((item) => (
          <article className="insight-card" key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function CaseStudyDetailGroup({ id, title, items }) {
  return (
    <div id={id} className="case-anchor">
      <InsightGrid title={title} items={items} />
    </div>
  );
}

function CaseStudySnippetGallery({ snippets }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalItems = snippets.items.length;

  if (!totalItems) {
    return null;
  }

  const activeItem = snippets.items[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + totalItems) % totalItems);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalItems);
  };

  return (
    <section className="snippet-gallery-section" aria-labelledby="snippet-gallery-title">
      <div className="snippet-gallery-heading">
        <p className="eyebrow">{snippets.eyebrow}</p>
        <h3 id="snippet-gallery-title">{snippets.title}</h3>
        {snippets.description ? <p>{snippets.description}</p> : null}
      </div>

      <div className="snippet-slideshow" aria-label="Product screen slideshow">
        <div className="snippet-slide-frame">
          <button
            className="snippet-slide-button snippet-slide-button--previous"
            type="button"
            aria-label="View previous screenshot"
            onClick={showPrevious}
          >
            <ArrowRight24Regular aria-hidden="true" />
          </button>
          <img
            key={activeItem.src}
            src={activeItem.src}
            alt={activeItem.alt}
          />
          <button
            className="snippet-slide-button snippet-slide-button--next"
            type="button"
            aria-label="View next screenshot"
            onClick={showNext}
          >
            <ArrowRight24Regular aria-hidden="true" />
          </button>
        </div>

        <div className="snippet-slide-footer">
          <div>
            <p className="snippet-slide-count">
              {String(activeIndex + 1).padStart(2, "0")} / {String(totalItems).padStart(2, "0")}
            </p>
            <h4>{activeItem.title}</h4>
            <p>{activeItem.description}</p>
          </div>
          <a
            className="snippet-slide-open"
            href={activeItem.src}
            target="_blank"
            rel="noreferrer"
          >
            Open full image
            <Open24Regular aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CaseStudyDetail({ caseStudy }) {
  return (
    <section
      id={caseStudy.id}
      className="page-section case-detail-section"
      aria-labelledby="case-detail-title"
    >
      <div id="project-overview" className="case-detail-hero case-anchor">
        <div>
          <p className="eyebrow">{caseStudy.eyebrow}</p>
          <h2 id="case-detail-title">{caseStudy.title}</h2>
          <p>{caseStudy.summary}</p>
        </div>
        <div className="case-detail-index" aria-label="Case study number">
          <span>Case</span>
          <strong>01</strong>
        </div>
      </div>

      <div className="tag-row" aria-label="Case study focus areas">
        {caseStudy.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      {caseStudy.liveUrl ? (
        <a
          className="case-live-link"
          href={caseStudy.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open live project
          <Open24Regular aria-hidden="true" />
        </a>
      ) : null}

      {caseStudy.snippets ? (
        <CaseStudySnippetGallery snippets={caseStudy.snippets} />
      ) : null}

      <div className="detail-grid">
        <DetailCardGroup
          title="Problems solved"
          items={caseStudy.problemAreas}
          icon={Briefcase24Regular}
        />
        <DetailCardGroup
          title="System capabilities"
          items={caseStudy.systemIncludes}
          icon={Document24Regular}
        />
      </div>

      <CaseStudyDetailGroup
        id="design-challenge"
        title="Design challenges"
        items={caseStudy.designChallenges}
      />
      <CaseStudyDetailGroup
        id="user-research-findings"
        title="Research findings"
        items={caseStudy.researchFindings}
      />
      <CaseStudyDetailGroup
        id="design-solutions-implemented"
        title="Solutions implemented"
        items={caseStudy.solutions}
      />

      <div id="results-achieved" className="results-panel case-anchor">
        <div>
          <p className="eyebrow">Results achieved</p>
          <h3>Clearer administration and better workforce visibility</h3>
          <p>{caseStudy.conclusion}</p>
        </div>
        <ul>
          {caseStudy.results.map((result) => (
            <li key={result}>
              <CheckmarkCircle24Regular aria-hidden="true" />
              {result}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="page-section skills-section" aria-labelledby="skills-title">
      <SectionHeader
        eyebrow="Skill set"
        id="skills-title"
        title="Capability cards"
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-card__header">
              <Sparkle24Regular aria-hidden="true" />
              <h3>{skill.title}</h3>
            </div>
            <div className="skill-card__body">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" aria-label="Contact footer">
      <div>
        <strong>Aldren Gacute</strong>
        <span>Product ownership, UI/UX design, and workflow systems.</span>
      </div>
      <a
        className="button button--primary"
        href="mailto:aldgacute@gmail.com?subject=Portfolio%20Inquiry"
      >
        <Mail24Regular aria-hidden="true" />
        aldgacute@gmail.com
      </a>
    </footer>
  );
}

function MainPortfolioPage() {
  const activeSection = useActiveSection();

  return (
    <>
      <FloatingNav activeSection={activeSection} />
      <div className="portfolio-page">
        <TopBar />
        <main className="page-main">
          <HomeSection />
          <AboutSection />
          <CaseStudySelection />
          <SkillsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

function CaseStudyDetailPage({ caseStudy, caseStudySection }) {
  const activeSection = useCaseStudyActiveSection(caseStudySection);
  const detailNavItems = getCaseStudyDetailNavItems(caseStudy);

  return (
    <>
      <FloatingNav
        activeSection={activeSection}
        items={detailNavItems}
        label="Case study"
        ariaLabel="Case study detail navigation"
        variant="case-detail"
      />
      <div className="portfolio-page portfolio-page--case-detail">
        <TopBar />
        <main className="page-main">
          <a className="detail-back-link" href="#case-study">
            <ArrowRight24Regular aria-hidden="true" />
            Back to case study selection
          </a>
          <CaseStudyDetail caseStudy={caseStudy} />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  const { hash, caseStudy, caseStudySection } = useHashRoute();
  const isCaseDetailPage = Boolean(caseStudy);

  useScrollRestoration(hash, isCaseDetailPage, caseStudySection);

  return (
    <FluentProvider
      theme={webLightTheme}
      className="app-shell"
    >
      {caseStudy ? (
        <CaseStudyDetailPage
          caseStudy={caseStudy}
          caseStudySection={caseStudySection}
        />
      ) : (
        <MainPortfolioPage />
      )}
    </FluentProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
