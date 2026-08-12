import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const portraitSrc = "/assets/aldren-sketch.png";

const experiences = [
  {
    title: "Product Owner",
    system: "Turnover System & Instrument Loop System",
    period: "Nov 2024 - Current",
  },
  {
    title: "Turnover / Completions Engineer",
    system: "",
    period: "Jul 2017 - Nov 2024 . 7 yrs 4 mos",
  },
  {
    title: "Engineer / Field Team Leader",
    system: "",
    period: "Oct 2015 - Dec 2016 . 1 yr 3 mos",
  },
];

const skills = [
  "Product Ownership",
  "Agile Methodologies",
  "Scrum",
  "Product Backlog Management",
  "Backlog Refinement",
  "Product Prioritization",
  "Requirements Gathering",
  "User Story Writing",
  "User Story Mapping",
  "Acceptance Criteria",
  "Stakeholder Management",
  "Sprint Planning",
  "Business Analysis",
  "Figma",
  "Design Thinking",
  "User-Centered Design",
  "Generative AI",
  "Leadership",
  "Usability Testing",
  "Problem Solving",
];

const strengths = [
  {
    label: "01",
    title: "Engineering operations",
    description:
      "Turnover, test packs, spoolgen, commissioning, and handover work.",
  },
  {
    label: "02",
    title: "Domain understanding",
    description:
      "Seeing how field execution, approvals, reports, and handover workflows really behave.",
  },
  {
    label: "03",
    title: "Product ownership",
    description:
      "Owning backlog decisions, user stories, acceptance criteria, validation, and release readiness.",
  },
  {
    label: "04",
    title: "UX-informed delivery",
    description:
      "Applying self-directed UI/UX learning to make product decisions clearer and easier to adopt.",
  },
];

const drivers = [
  "Unclear product requirements",
  "Backlog items without business value",
  "Workflows misaligned with actual user operations",
  "Slow approvals and handover bottlenecks",
  "Features that need validation before release",
  "Documentation gaps that slow adoption",
];

const beyondAreas = [
  {
    label: "01",
    title: "Product Strategy & Roadmaps",
    body: (
      <>
        I create and maintain <strong>product roadmaps</strong> that connect
        business requirements, user needs, technical priorities, and future
        improvements. I use them not only to communicate what we are building,
        but also to provide stakeholders and the team with a clear view of where
        the product is going and why.
      </>
    ),
  },
  {
    label: "02",
    title: "Dashboards, KPIs & Targets",
    hasDashboardPreview: true,
    body: (
      <>
        I build my own <strong>dashboards, KPIs, and performance targets</strong>{" "}
        to turn development and operational data into information that can
        support decisions. I track delivery progress, sprint performance,
        velocity, completion trends, product adoption, and other indicators that
        show where we are performing well and where improvement is needed.
      </>
    ),
    flow: ["Data", "Insight", "Decision", "Improvement"],
  },
  {
    label: "03",
    title: "UI/UX & AI-Assisted Frontend Development",
    body: (
      <>
        I take a hands-on role in improving user experience. When backend data
        and functionality already exist, I look for ways to improve the product
        through the <strong>frontend first</strong>, rather than introducing
        unnecessary backend changes. I design workflows, dashboards, screens,
        and interface improvements using <strong>UI/UX principles and Figma</strong>,
        then use <strong>AI-assisted development tools such as Codex and GitHub Copilot</strong>{" "}
        to turn ideas into working frontend concepts and prototypes.
      </>
    ),
    flow: [
      "Problem",
      "UX Analysis",
      "UI Design",
      "AI-Assisted Prototype",
      "Validation",
      "Development",
    ],
  },
  {
    label: "04",
    title: "Continuous Improvement Beyond the Product",
    body: (
      <>
        I do not limit improvement initiatives to features within my own product.
        When I identify a problem, inefficiency, or broader opportunity, I
        research it, develop a solution or concept, and prepare{" "}
        <strong>structured proposals for team managers and stakeholders</strong>.
        These proposals may involve product improvements, internal processes,
        reporting and analytics, digital tools, user experience, or initiatives
        that improve how the organization works.
      </>
    ),
  },
];

const dashboardGauges = [
  { title: "New Feature", value: 10, max: 31, accent: "#f21cdf" },
  { title: "Enhancement", value: 24, max: 52, accent: "#1787f2" },
  { title: "Performance", value: 5, max: 5, accent: "#1787f2" },
  { title: "UI/UX", value: 17, max: 25, accent: "#1597ff" },
  { title: "Technical Debt", value: 6, max: 28, accent: "#1b42d9" },
];

const dashboardLabels = [
  ["Strategic", "High Impact / High Effort"],
  ["Big Wins", "High Impact / Medium Effort"],
  ["Quick Wins", "High Impact / Low Effort"],
  ["Heavy Lift", "Medium Impact / High Effort"],
  ["Steady Wins", "Medium Impact / Medium Effort"],
  ["Easy Wins", "Medium Impact / Low Effort"],
  ["Avoid", "Low Impact / High Effort"],
  ["Optional", "Low Impact / Medium Effort"],
  ["Fill-ins", "Low Impact / Low Effort"],
];

const dashboardLineSeries = [
  {
    name: "Strategic",
    color: "#d9b400",
    points: "22,150 144,132 266,104 388,74 510,46 632,20",
  },
  {
    name: "Steady Wins",
    color: "#7d63d9",
    points: "20,160 142,140 264,112 386,88 508,60 630,36",
  },
  {
    name: "Quick Wins",
    color: "#e0489e",
    points: "20,154 142,146 264,128 386,110 508,86 630,58",
  },
  {
    name: "Optional",
    color: "#7d148f",
    points: "20,168 142,158 264,140 386,122 508,104 630,82",
  },
  {
    name: "Fill-ins",
    color: "#ff7f35",
    points: "20,176 142,170 264,154 386,134 508,112 630,92",
  },
  {
    name: "Easy Wins",
    color: "#1434c8",
    points: "20,190 142,188 264,176 386,162 508,150 630,136",
  },
  {
    name: "Big Wins",
    color: "#19a7ff",
    points: "20,192 142,190 264,182 386,170 508,160 630,150",
  },
];

const sprintCompletion = [100, 100, 100, 96, 97, 100];
const storyPointPairs = [
  [0, 21],
  [7, 22],
  [8, 23],
  [8, 16],
  [10, 20],
  [4, 18],
];
const issueCounts = [
  [17, 0],
  [7, 0],
  [9, 0],
  [10, 1],
  [10, 1],
  [8, 0],
];

function PixelRevealPortrait({ src, alt }) {
  const canvasRef = React.useRef(null);
  const [isRevealing, setIsRevealing] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return undefined;
    }

    let animationFrame = 0;
    let delayTimer = 0;
    let isCancelled = false;
    const image = new Image();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    image.decoding = "async";
    image.src = src;

    image.onload = () => {
      if (isCancelled) {
        return;
      }

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      if (prefersReducedMotion) {
        setIsComplete(true);
        return;
      }

      const duration = 5000;
      const delay = 650;
      const cellSize = Math.max(18, Math.round(image.naturalWidth / 38));
      const cells = [];

      for (let y = 0; y < image.naturalHeight; y += cellSize) {
        for (let x = 0; x < image.naturalWidth; x += cellSize) {
          cells.push({
            x,
            y,
            width: Math.min(cellSize, image.naturalWidth - x),
            height: Math.min(cellSize, image.naturalHeight - y),
          });
        }
      }

      for (let index = cells.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [cells[index], cells[swapIndex]] = [cells[swapIndex], cells[index]];
      }

      delayTimer = window.setTimeout(() => {
        setIsRevealing(true);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1;
        context.imageSmoothingEnabled = false;
        let revealedCellCount = 0;

        const drawFrame = (startTime) => (currentTime) => {
          if (isCancelled) {
            return;
          }

          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = progress * progress * (3 - 2 * progress);
          const targetCellCount = Math.floor(easedProgress * cells.length);

          for (
            let index = revealedCellCount;
            index < targetCellCount;
            index += 1
          ) {
            const cell = cells[index];

            context.drawImage(
              image,
              cell.x,
              cell.y,
              cell.width,
              cell.height,
              cell.x,
              cell.y,
              cell.width,
              cell.height,
            );
          }

          revealedCellCount = targetCellCount;

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(drawFrame(startTime));
            return;
          }

          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          setIsComplete(true);
        };

        animationFrame = window.requestAnimationFrame((startTime) => {
          drawFrame(startTime)(startTime);
        });
      }, delay);
    };

    image.onerror = () => {
      if (!isCancelled) {
        setIsComplete(true);
      }
    };

    return () => {
      isCancelled = true;
      window.clearTimeout(delayTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [src]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`hero-card__portrait-canvas${isRevealing ? " is-revealing" : ""}`}
        aria-hidden="true"
      />
      <img
        className={isComplete ? "is-visible" : ""}
        src={src}
        alt={alt}
      />
    </>
  );
}

function ScrollToHash() {
  React.useEffect(() => {
    const timers = [];
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scrollToCurrentHash = ({ behavior = "auto" } = {}) => {
      if (!window.location.hash) {
        return;
      }

      const targetId = decodeURIComponent(window.location.hash.slice(1));
      let attempt = 0;

      const tryScroll = () => {
        const target = document.getElementById(targetId);

        if (target) {
          const root = document.documentElement;
          const previousScrollBehavior = root.style.scrollBehavior;
          const scrollBehavior = prefersReducedMotion ? "auto" : behavior;
          const top = target.getBoundingClientRect().top + window.scrollY;

          if (scrollBehavior === "auto") {
            root.style.scrollBehavior = "auto";
          }

          window.scrollTo({
            top,
            left: 0,
            behavior: scrollBehavior,
          });

          if (scrollBehavior === "auto") {
            root.style.scrollBehavior = previousScrollBehavior;
          }

          return;
        }

        if (attempt < 8) {
          attempt += 1;
          timers.push(window.setTimeout(tryScroll, 50));
        }
      };

      tryScroll();
    };

    scrollToCurrentHash();
    const handleHashChange = () => {
      scrollToCurrentHash({ behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}

function DashboardPreviewModal({ onClose }) {
  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="dashboard-modal" role="presentation" onMouseDown={handleBackdropMouseDown}>
      <section
        className="dashboard-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dashboard-modal-title"
      >
        <header className="dashboard-modal__header">
          <div>
            <p>Mockup Dashboard</p>
            <h2 id="dashboard-modal-title">Sprint Performance Dashboard</h2>
          </div>
          <button
            className="dashboard-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Close dashboard preview"
          >
            X
          </button>
        </header>

        <div className="dashboard-preview">
          <div className="dashboard-preview__top">
            <article className="dashboard-preview__iteration">
              <p>Iteration-6</p>
              <strong>MM/DD - MM/DD/YYYY</strong>
              <span>Current Iteration</span>
            </article>

            {dashboardGauges.map((item) => {
              const progress = Math.max(3, Math.min(50, (item.value / item.max) * 50));

              return (
                <article
                  key={item.title}
                  className="dashboard-preview__gauge"
                  style={{
                    "--gauge-accent": item.accent,
                    "--gauge-progress": `${progress}%`,
                  }}
                >
                  <p>{item.title}</p>
                  <div className="dashboard-preview__gauge-wrap" aria-hidden="true">
                    <span>0</span>
                    <div className="dashboard-preview__gauge-arc" />
                    <span>{item.max}</span>
                  </div>
                  <strong>{item.value}</strong>
                </article>
              );
            })}
          </div>

          <div className="dashboard-preview__grid">
            <article className="dashboard-preview__panel dashboard-preview__panel--table">
              <h3>Impact Labels</h3>
              <table>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Labels</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardLabels.map(([label, description], index) => (
                    <tr key={label}>
                      <td>{index + 1}</td>
                      <td>{label}</td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <div className="dashboard-preview__mini-row">
              <article className="dashboard-preview__mini-card">
                <strong>6.60</strong>
                <span>Average SP for Aldren</span>
              </article>

              <article className="dashboard-preview__mini-card dashboard-preview__mini-card--gold">
                <strong>20.00</strong>
                <span>Average SP for Developer</span>
              </article>
            </div>

            <article className="dashboard-preview__panel dashboard-preview__panel--executive">
              <h3>Executive Summary</h3>
              <p>
                Across all tracked iterations, the team completed{" "}
                <strong>### story points across ## closed work items</strong>,
                with sprint velocity reaching a peak of{" "}
                <strong>## story points during Iteration 3</strong>.{" "}
                <strong>
                  Strategic and New Feature initiatives remained the primary
                  work categories, reflecting the team's continued focus on
                  high-impact development.
                </strong>{" "}
                Overall, the team achieved a strong{" "}
                <strong>average sprint completion rate of 98.75%</strong>,
                demonstrating consistent delivery against planned sprint targets.
              </p>
            </article>

            <article className="dashboard-preview__panel dashboard-preview__panel--line">
              <div className="dashboard-preview__panel-title">
                <h3>Accumulated Items by Labels</h3>
                <span>Closed Items</span>
              </div>
              <svg viewBox="0 0 720 250" aria-hidden="true">
                <g className="dashboard-preview__grid-lines">
                  <line x1="42" y1="28" x2="42" y2="210" />
                  <line x1="42" y1="210" x2="675" y2="210" />
                  <line x1="42" y1="160" x2="675" y2="160" />
                  <line x1="42" y1="110" x2="675" y2="110" />
                  <line x1="42" y1="60" x2="675" y2="60" />
                </g>
                {dashboardLineSeries.map((series) => (
                  <polyline
                    key={series.name}
                    points={series.points}
                    fill="none"
                    stroke={series.color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(30 0)"
                  />
                ))}
                <g className="dashboard-preview__axis-labels">
                  <text x="42" y="232">Apr 2026</text>
                  <text x="282" y="232">Jun 2026</text>
                  <text x="522" y="232">Jul 2026</text>
                </g>
              </svg>
              <ul className="dashboard-preview__legend">
                {dashboardLineSeries.map((series) => (
                  <li key={series.name}>
                    <span style={{ backgroundColor: series.color }} />
                    {series.name}
                  </li>
                ))}
              </ul>
            </article>

            <article className="dashboard-preview__panel dashboard-preview__panel--completion">
              <div className="dashboard-preview__panel-title">
                <h3>Sprint Completion by %</h3>
                <strong>Average Sprint Completion: 98.75%</strong>
              </div>
              <div className="dashboard-preview__completion-bars">
                {sprintCompletion.map((value, index) => (
                  <div key={`${value}-${index}`} className="dashboard-preview__completion-bar">
                    <span style={{ "--bar-height": `${value}%` }}>
                      <em>{value}%</em>
                    </span>
                    <small>Iteration {index + 1}</small>
                  </div>
                ))}
              </div>
            </article>

            <article className="dashboard-preview__panel dashboard-preview__panel--story">
              <div className="dashboard-preview__panel-title">
                <h3>Total Story Point</h3>
                <span>By person</span>
              </div>
              <div className="dashboard-preview__grouped-bars">
                {storyPointPairs.map(([aldren, developer], index) => (
                  <div key={`${aldren}-${developer}-${index}`} className="dashboard-preview__bar-group">
                    <span
                      className="dashboard-preview__bar dashboard-preview__bar--blue"
                      style={{ "--bar-height": `${(aldren / 25) * 100}%` }}
                    >
                      <em>{aldren}</em>
                    </span>
                    <span
                      className="dashboard-preview__bar dashboard-preview__bar--gold"
                      style={{ "--bar-height": `${(developer / 25) * 100}%` }}
                    >
                      <em>{developer}</em>
                    </span>
                    <small>{index + 1}</small>
                  </div>
                ))}
              </div>
              <div className="dashboard-preview__simple-legend">
                <span><i className="dashboard-preview__dot dashboard-preview__dot--blue" />Aldren Gacute</span>
                <span><i className="dashboard-preview__dot dashboard-preview__dot--gold" />Developer</span>
              </div>
            </article>

            <article className="dashboard-preview__panel dashboard-preview__panel--issues">
              <div className="dashboard-preview__panel-title">
                <h3>Issue Count</h3>
                <span>Done vs Spillover</span>
              </div>
              <div className="dashboard-preview__grouped-bars">
                {issueCounts.map(([done, spillover], index) => (
                  <div key={`${done}-${spillover}-${index}`} className="dashboard-preview__bar-group">
                    <span
                      className="dashboard-preview__bar dashboard-preview__bar--green"
                      style={{ "--bar-height": `${(done / 20) * 100}%` }}
                    >
                      <em>{done}</em>
                    </span>
                    <span
                      className="dashboard-preview__bar dashboard-preview__bar--blue"
                      style={{ "--bar-height": `${(spillover / 20) * 100}%` }}
                    >
                      <em>{spillover}</em>
                    </span>
                    <small>FY2026-{index + 1}</small>
                  </div>
                ))}
              </div>
              <div className="dashboard-preview__simple-legend">
                <span><i className="dashboard-preview__dot dashboard-preview__dot--green" />Done</span>
                <span><i className="dashboard-preview__dot dashboard-preview__dot--blue" />Spillover</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function FrontPage() {
  const [isDashboardPreviewOpen, setIsDashboardPreviewOpen] = React.useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = React.useState(false);
  const projectsMenuRef = React.useRef(null);

  React.useEffect(() => {
    const handlePointerDown = (event) => {
      if (!projectsMenuRef.current?.contains(event.target)) {
        setIsProjectsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsProjectsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="site-shell">
      <section id="home" className="front-page" aria-labelledby="front-page-title">
        <article className="hero-card">
          <header className="hero-card__nav" aria-label="Portfolio header">
            <div className="hero-card__nav-left">
              <a className="hero-card__brand" href="#home" aria-label="ALDREN GACUTE home">
                ALDREN GACUTE
              </a>
              <nav aria-label="Primary">
                <div
                  ref={projectsMenuRef}
                  className={`hero-card__projects-menu${isProjectsMenuOpen ? " is-open" : ""}`}
                >
                  <button
                    className="hero-card__projects-trigger"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isProjectsMenuOpen}
                    onClick={() => setIsProjectsMenuOpen((isOpen) => !isOpen)}
                  >
                    Projects
                  </button>
                  <div className="hero-card__projects-dropdown" role="menu" aria-label="Project links">
                    <a
                      href="https://skillmatrix-client.onrender.com/"
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      onClick={() => setIsProjectsMenuOpen(false)}
                    >
                      Skill Matrix Application
                    </a>
                    <a
                      href="https://invoiceflowapp.onrender.com/"
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      onClick={() => setIsProjectsMenuOpen(false)}
                    >
                      Invoice Application
                    </a>
                  </div>
                </div>
                <a href="#about">About Me</a>
                <a href="#beyond">Beyond</a>
              </nav>
            </div>
            <a className="hero-card__contact" href="mailto:aldgacute@gmail.com">
              Contact Me
            </a>
          </header>

          <div className="hero-card__portrait">
            <PixelRevealPortrait
              src={portraitSrc}
              alt="Illustrated portrait of Aldren Gacute"
            />
          </div>

          <h1 id="front-page-title" className="hero-card__name">
            ALDREN GACUTE
          </h1>

          <p className="hero-card__tagline">
            Product Owner | UI/UX &amp; Workflow-Focused Problem Solver | Bridging Design, Systems &amp; User Experience
          </p>

          <div className="hero-card__roles" aria-label="Professional roles">
            <span>ENGINEER / PRODUCT OWNER</span>
          </div>

          <footer className="hero-card__links" aria-label="Profile links">
            <a href="mailto:aldgacute@gmail.com">Mail</a>
            <a href="https://www.linkedin.com/in/aldren-gacute" target="_blank" rel="noreferrer">
              in
            </a>
          </footer>

          <a className="hero-card__scroll" href="#about" aria-label="Go to next section">
            <span />
            <span />
          </a>
        </article>
      </section>
      <section id="about" className="about-page" aria-labelledby="about-title">
        <div className="about-page__inner">
          <header className="about-page__intro">
            <p>About Me</p>
            <div>
              <div className="about-page__title-row">
                <h2 id="about-title">Product owner grounded in operations</h2>
                <a className="about-page__home-link" href="#home" aria-label="Back to home">
                  <span />
                  <span />
                </a>
              </div>
              <p>
                Product Owner with a strong operations background, translating
                business needs into user-focused digital solutions. Experienced
                in backlog management, stakeholder collaboration, and delivering
                product enhancements through Agile practices.
              </p>
            </div>
          </header>

          <div className="about-page__body">
            <aside className="about-page__sidebar" aria-label="Experience and skills">
              <section className="experience" aria-labelledby="experience-title">
                <h2 id="experience-title">Experience</h2>
                <ol className="experience__timeline">
                  {experiences.map((item) => (
                    <li key={`${item.title}-${item.period}`} className="experience__item">
                      <h3>{item.title}</h3>
                      {item.system ? <p>{item.system}</p> : null}
                      <time>{item.period}</time>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="skills" aria-labelledby="skills-title">
                <h2 id="skills-title">Product toolkit</h2>
                <ul className="skill-cloud" aria-label="Core skills">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            </aside>

            <div className="about-page__content">
              <section className="strength-grid" aria-label="Product ownership strengths">
                {strengths.map((item) => (
                  <article key={item.label} className="strength-card">
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </section>

              <section className="po-drivers" aria-labelledby="po-drivers-title">
                <h2 id="po-drivers-title">What I drive as a PO</h2>
                <ul>
                  {drivers.map((driver) => (
                    <li key={driver}>{driver}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
        <a className="about-page__next-link" href="#beyond" aria-label="Go to Beyond PO">
          <span />
          <span />
        </a>
      </section>
      <section id="beyond" className="beyond-page" aria-labelledby="beyond-title">
        <div className="beyond-page__inner">
          <header className="beyond-page__header">
            <p>Beyond PO</p>
            <div>
              <div className="beyond-page__title-row">
                <h2 id="beyond-title">Beyond Product Ownership</h2>
                <a className="beyond-page__about-link" href="#about" aria-label="Back to About Me">
                  <span />
                  <span />
                </a>
              </div>
              <p>
                I do not just manage the backlog. I look for opportunities to
                improve the product, the way we work, and the value we deliver.
              </p>
            </div>
          </header>

          <div className="beyond-page__intro">
            <p>
              As a <strong>Product Owner</strong>, my core responsibility is to
              understand user and business needs, define priorities, manage the
              product backlog, coordinate with stakeholders and the development
              team, and guide features from concept to release. However, my
              contribution extends beyond traditional Product Ownership.
            </p>
          </div>

          <section className="beyond-grid" aria-label="Beyond product ownership areas">
            {beyondAreas.map((area) => (
              <article key={area.label} className="beyond-card">
                <span>{area.label}</span>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                {area.hasDashboardPreview ? (
                  <button
                    className="beyond-card__dashboard-button"
                    type="button"
                    onClick={() => setIsDashboardPreviewOpen(true)}
                  >
                    View dashboard mockup
                  </button>
                ) : null}
                {area.flow ? (
                  <ol className="beyond-card__flow" aria-label={`${area.title} process`}>
                    {area.flow.map((step) => (
                      <li key={step} className="beyond-card__flow-step">
                        {step}
                      </li>
                    ))}
                  </ol>
                ) : null}
              </article>
            ))}
          </section>

          <footer className="beyond-page__closing">
            <p>
              This is how I approach Product Ownership - not simply as managing
              requirements and delivery, but as a combination of{" "}
              <strong>
                Product Strategy, Data & Analytics, UI/UX, AI-Assisted
                Development, and Continuous Improvement.
              </strong>
            </p>
          </footer>
        </div>
      </section>
      {isDashboardPreviewOpen ? (
        <DashboardPreviewModal onClose={() => setIsDashboardPreviewOpen(false)} />
      ) : null}
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToHash />
      <FrontPage />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
