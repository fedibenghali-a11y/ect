import { useState } from "react"

const heroImage = "/assets/ect-campus.jpg"
const teamImage = "/assets/ect-team.jpg"
const eventImage = "/assets/ect-event.png"
const secondaryCampusImage = "/assets/ect-secondary-campus.jpg"

type IconName = "arrow" | "book" | "calendar" | "check" | "chevron" | "download" | "globe" | "mail" | "map" | "menu" | "phone" | "science" | "users" | "x"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    ),
    science: (
      <>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
        <path d="M7.5 15h9" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: <path d="M6 6l12 12M18 6 6 18" />,
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function SchoolLogo({ light = false }: { light?: boolean }) {
  return (
    <span className={`school-logo ${light ? "school-logo-light" : ""}`}>
      <span className="school-logo-mark">
        <img src="/assets/ect-logo.jpg" alt="" />
      </span>
      <span className="school-logo-copy">
        <strong>École Canadienne</strong>
        <small>de Tunis</small>
      </span>
    </span>
  )
}

const programs = [
  {
    ages: "3 — 5 ans",
    title: "Préscolaire",
    text: "Grandir en confiance par le jeu, l’éveil et l’exploration dans un cadre bienveillant.",
    icon: "users" as IconName,
    color: "sky",
  },
  {
    ages: "6 — 10 ans",
    title: "Primaire",
    text: "Bâtir des fondations solides et nourrir la curiosité grâce à une pédagogie active.",
    icon: "book" as IconName,
    color: "red",
  },
  {
    ages: "11 — 15 ans",
    title: "Collège",
    text: "Développer l’autonomie, l’esprit critique et le goût d’apprendre au quotidien.",
    icon: "science" as IconName,
    color: "gold",
  },
]

const dates = [
  {
    day: "18",
    month: "SEP",
    title: "Réunion de rentrée",
    type: "Vie scolaire",
  },
  {
    day: "04",
    month: "OCT",
    title: "Journée portes ouvertes",
    type: "Admissions",
  },
  { day: "21", month: "OCT", title: "Semaine des sciences", type: "Pédagogie" },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="header">
        <div className="topbar">
          <div className="container topbar-inner">
            <p>Une éducation canadienne au cœur de Tunis</p>
            <div className="topbar-links">
              <a href="tel:+21670000000">
                <Icon name="phone" size={15} />
                +216 70 000 000
              </a>
              <a href="#contact">
                <Icon name="mail" size={15} />
                Nous écrire
              </a>
            </div>
          </div>
        </div>

        <nav className="nav container" aria-label="Navigation principale">
          <a className="brand" href="#accueil" aria-label="ECT — Accueil">
            <SchoolLogo />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "x" : "menu"} size={25} />
          </button>

          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#ecole" onClick={closeMenu}>
              L’école
            </a>
            <a href="#programmes" onClick={closeMenu}>
              Programmes
            </a>
            <a href="#campus" onClick={closeMenu}>
              Campus
            </a>
            <a href="#admissions" onClick={closeMenu}>
              Admissions
            </a>
            <a href="#actualites" onClick={closeMenu}>
              Actualités
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a
              className="button button-small button-red"
              href="#admissions"
              onClick={closeMenu}
            >
              Demande d’admission
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-pattern" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> Bienvenue à l’ECT
              </div>
              <h1>
                Apprendre ici.
                <br />
                <em>Rayonner partout.</em>
              </h1>
              <p>
                Un environnement bilingue et stimulant où chaque élève développe
                sa confiance, sa curiosité et son plein potentiel.
              </p>
              <div className="hero-actions">
                <a className="button button-red" href="#programmes">
                  Découvrir notre école <Icon name="arrow" />
                </a>
                <a className="text-link" href="#admissions">
                  Visiter le campus{" "}
                  <span>
                    <Icon name="chevron" size={17} />
                  </span>
                </a>
              </div>
              <div className="hero-proof">
                <div>
                  <strong>15+</strong>
                  <span>années d’excellence</span>
                </div>
                <div>
                  <strong>25</strong>
                  <span>nationalités réunies</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>engagés pour réussir</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="image-frame">
                <img
                  src={heroImage}
                  alt="Façade du campus de l’École Canadienne de Tunis"
                />
                <div className="image-wash" />
              </div>
              <div className="floating-card">
                <span className="floating-icon">
                  <Icon name="globe" size={22} />
                </span>
                <p>
                  <strong>Un monde</strong>
                  <br />
                  d’opportunités
                </p>
              </div>
              <div className="maple-mark">✦</div>
            </div>
          </div>
          <a
            href="#ecole"
            className="scroll-cue"
            aria-label="Découvrir la suite"
          >
            <span>Découvrir</span>
            <i />
          </a>
        </section>

        <section className="intro section" id="ecole">
          <div className="container intro-grid">
            <div>
              <div className="section-kicker">Notre différence</div>
              <h2>
                Une école ancrée à Tunis,
                <br />
                <em>ouverte sur le monde.</em>
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                À l’ECT, nous proposons bien plus qu’un parcours scolaire. Nous
                créons un milieu de vie francophone où les élèves apprennent à
                penser, collaborer et agir avec ouverture.
              </p>
              <a className="underlined-link" href="#programmes">
                Notre projet éducatif <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
          <div className="container values-grid">
            <article className="value-card">
              <span>01</span>
              <Icon name="globe" size={29} />
              <h3>Ouverture</h3>
              <p>
                Une culture bilingue et internationale qui prépare à comprendre
                le monde.
              </p>
            </article>
            <article className="value-card featured">
              <span>02</span>
              <Icon name="users" size={29} />
              <h3>Bienveillance</h3>
              <p>
                Chaque élève est connu, écouté et encouragé à avancer à son
                rythme.
              </p>
            </article>
            <article className="value-card">
              <span>03</span>
              <Icon name="science" size={29} />
              <h3>Excellence</h3>
              <p>
                Des approches actuelles pour construire des savoirs solides et
                durables.
              </p>
            </article>
          </div>
        </section>

        <section className="programs section" id="programmes">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-kicker light">Nos programmes</div>
                <h2>
                  Chaque âge, un chemin
                  <br />
                  <em>pour s’accomplir.</em>
                </h2>
              </div>
              <p>
                Un accompagnement cohérent, de la petite enfance jusqu’à
                l’adolescence.
              </p>
            </div>
            <div className="program-grid">
              {programs.map((program) => (
                <article
                  className={`program-card ${program.color}`}
                  key={program.title}
                >
                  <div className="program-icon">
                    <Icon name={program.icon} size={27} />
                  </div>
                  <span>{program.ages}</span>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <a
                    href="#admissions"
                    aria-label={`Découvrir le programme ${program.title}`}
                  >
                    En savoir plus <Icon name="arrow" size={18} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section">
          <div className="container experience-grid">
            <div className="experience-image">
              <img
                src={teamImage}
                alt="Équipe de l’École Canadienne de Tunis devant le campus"
              />
              <span>ECT</span>
            </div>
            <div className="experience-copy">
              <div className="section-kicker">L’expérience ECT</div>
              <h2>
                La réussite se construit
                <br />
                <em>ensemble.</em>
              </h2>
              <p>
                Nos équipes créent des expériences concrètes qui donnent du sens
                aux apprentissages et font grandir chaque élève.
              </p>
              <ul>
                <li>
                  <span>
                    <Icon name="check" size={17} />
                  </span>{" "}
                  Enseignement bilingue français–anglais
                </li>
                <li>
                  <span>
                    <Icon name="check" size={17} />
                  </span>{" "}
                  Équipe pédagogique internationale
                </li>
                <li>
                  <span>
                    <Icon name="check" size={17} />
                  </span>{" "}
                  Projets, sciences, arts et citoyenneté
                </li>
                <li>
                  <span>
                    <Icon name="check" size={17} />
                  </span>{" "}
                  Accompagnement personnalisé
                </li>
              </ul>
              <a className="button button-blue" href="#admissions">
                Rencontrer notre équipe <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="campus section" id="campus">
          <div className="container">
            <div className="campus-heading">
              <div>
                <div className="section-kicker light">Notre environnement</div>
                <h2>
                  Un campus conçu
                  <br />
                  <em>pour apprendre et grandir.</em>
                </h2>
              </div>
              <p>
                Des espaces lumineux, accueillants et adaptés aux différents
                âges pour favoriser la concentration, la collaboration et le
                plaisir d’apprendre.
              </p>
            </div>

            <div className="campus-gallery">
              <figure className="campus-photo campus-photo-main">
                <img
                  src={heroImage}
                  alt="Vue extérieure du campus principal de l’École Canadienne de Tunis"
                />
                <figcaption>
                  <span>01</span>
                  <div>
                    <strong>Le campus principal</strong>
                    <small>Un cadre moderne au cœur de Tunis</small>
                  </div>
                </figcaption>
              </figure>
              <figure className="campus-photo campus-photo-secondary">
                <img
                  src={secondaryCampusImage}
                  alt="Vue du bâtiment secondaire de l’École Canadienne de Tunis"
                />
                <figcaption>
                  <span>02</span>
                  <div>
                    <strong>L’espace secondaire</strong>
                    <small>Un lieu adapté aux nouveaux défis</small>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div className="campus-details">
              <article>
                <span>
                  <Icon name="book" size={23} />
                </span>
                <div>
                  <h3>Espaces pédagogiques</h3>
                  <p>
                    Des salles conçues pour alterner travail individuel,
                    ateliers et projets d’équipe.
                  </p>
                </div>
              </article>
              <article>
                <span>
                  <Icon name="science" size={23} />
                </span>
                <div>
                  <h3>Sciences et créativité</h3>
                  <p>
                    Des environnements qui encouragent l’expérimentation, la
                    recherche et la création.
                  </p>
                </div>
              </article>
              <article>
                <span>
                  <Icon name="users" size={23} />
                </span>
                <div>
                  <h3>Vie de communauté</h3>
                  <p>
                    Des lieux de rencontre où élèves, familles et équipe
                    éducative se retrouvent.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="news section" id="actualites">
          <div className="container">
            <div className="news-heading">
              <div>
                <div className="section-kicker">À l’agenda</div>
                <h2>
                  Les prochains
                  <br />
                  <em>rendez-vous.</em>
                </h2>
              </div>
              <a className="underlined-link" href="#actualites">
                Voir toute l’actualité <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="news-content">
              <article className="featured-news">
                <div className="featured-news-image">
                  <img
                    src={eventImage}
                    alt="Rencontre institutionnelle de l’École Canadienne de Tunis"
                  />
                </div>
                <div className="featured-news-copy">
                  <span>Vie de l’école</span>
                  <h3>L’ECT, un pont entre Tunis et le Canada</h3>
                  <p>
                    Des rencontres et des partenariats qui enrichissent notre
                    communauté éducative et ouvrent de nouveaux horizons.
                  </p>
                  <a href="#contact">
                    Découvrir <Icon name="arrow" size={18} />
                  </a>
                </div>
              </article>
              <div className="dates-list">
                {dates.map((date) => (
                  <article className="date-row" key={date.title}>
                    <div className="date-block">
                      <strong>{date.day}</strong>
                      <span>{date.month}</span>
                    </div>
                    <div className="date-title">
                      <span>{date.type}</span>
                      <h3>{date.title}</h3>
                    </div>
                    <span className="circle-arrow">
                      <Icon name="arrow" size={19} />
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="admissions" id="admissions">
          <div className="container admissions-inner">
            <div>
              <div className="section-kicker light">Admissions</div>
              <h2>
                Votre parcours ECT
                <br />
                <em>commence ici.</em>
              </h2>
            </div>
            <div className="admissions-copy">
              <p>
                Venez découvrir notre campus, rencontrer notre équipe et
                imaginer la suite avec nous.
              </p>
              <div>
                <a
                  className="button button-white"
                  href="mailto:admissions@ect.tn"
                >
                  Faire une demande <Icon name="arrow" />
                </a>
                <a className="button button-ghost" href="tel:+21670000000">
                  Planifier une visite
                </a>
              </div>
            </div>
          </div>
          <div className="container admissions-steps">
            <article>
              <span>01</span>
              <div>
                <strong>Prendre contact</strong>
                <p>
                  Échangez avec notre équipe pour présenter votre projet
                  familial.
                </p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <strong>Visiter l’école</strong>
                <p>
                  Découvrez les espaces et rencontrez les membres de notre
                  communauté.
                </p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <strong>Finaliser l’inscription</strong>
                <p>
                  Notre équipe vous accompagne dans chaque étape du dossier.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container footer-main">
          <div className="footer-brand">
            <div className="brand brand-light">
              <SchoolLogo light />
            </div>
            <p>
              Former des esprits curieux, confiants et ouverts sur le monde.
            </p>
          </div>
          <div className="footer-column">
            <h3>Explorer</h3>
            <a href="#ecole">Notre école</a>
            <a href="#programmes">Programmes</a>
            <a href="#campus">Campus</a>
            <a href="#admissions">Admissions</a>
            <a href="#actualites">Actualités</a>
          </div>
          <div className="footer-column">
            <h3>Nous trouver</h3>
            <p>
              <Icon name="map" size={18} /> Les Berges du Lac, Tunis
            </p>
            <a href="tel:+21670000000">
              <Icon name="phone" size={18} /> +216 70 000 000
            </a>
            <a href="mailto:contact@ect.tn">
              <Icon name="mail" size={18} /> contact@ect.tn
            </a>
          </div>
        </div>
        <div className="container">
          <div className="download-band">
            <div className="download-copy">
              <span className="download-icon">
                <Icon name="download" size={23} />
              </span>
              <div>
                <strong>Emportez le site avec vous</strong>
                <p>
                  Téléchargez les sources complètes du site de l’ECT au format
                  ZIP.
                </p>
              </div>
            </div>
            <a
              className="button button-download"
              href="/downloads/ect-site.zip"
              download
            >
              Télécharger le site <Icon name="download" size={18} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} École Canadienne de Tunis</span>
          <span>Excellence · Ouverture · Bienveillance</span>
        </div>
      </footer>
    </div>
  )
}
