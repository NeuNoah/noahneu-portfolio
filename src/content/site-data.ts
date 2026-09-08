export type Locale = "de" | "en";

export type Localized<T> = {
  de: T;
  en: T;
};

export type ProjectStatus = "in-progress" | "learning" | "planned";

export type Skill = {
  name: string;
  level: string;
  visible: boolean;
};

export type Experience = {
  company: string;
  period: string;
  type: Localized<string>;
  focus: string[];
  status: "completed" | "ongoing";
  description: Localized<string>;
};

export type Project = {
  slug: string;
  title: Localized<string>;
  status: ProjectStatus;
  shortDescription: Localized<string>;
  description: Localized<string>;
  technologies: string[];
  featured: boolean;
  repositoryUrl?: string;
  demoUrl?: string;
  working: Localized<string[]>;
  learning: Localized<string[]>;
  current: Localized<string[]>;
  limitations: Localized<string[]>;
  nextSteps: Localized<string[]>;
};

export type PortfolioContent = {
  locale: Locale;
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    language: string;
    theme: string;
    menu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    detail: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  about: { eyebrow: string; title: string; body: string; quote: string };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Experience[];
    momentTitle: string;
    moment: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: { title: string; items: Skill[] }[];
  };
  projectSection: {
    eyebrow: string;
    title: string;
    intro: string;
    viewAll: string;
    featuredLabel: string;
    technologiesLabel: string;
    detailsLabel: string;
    status: Record<ProjectStatus, string>;
  };
  learning: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { label: string; state: string }[];
  };
  ai: { eyebrow: string; title: string; body: string; points: string[] };
  volunteering: { eyebrow: string; title: string; body: string; tags: string[] };
  interests: { eyebrow: string; title: string; items: string[] };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    emailWrite: string;
    copy: string;
    copied: string;
    profiles: string;
    evidence: string;
    note: string;
  };
  footer: { legal: string; privacy: string; top: string; status: string };
  legal: {
    noticeTitle: string;
    noticeBody: string;
    privacyTitle: string;
    privacyBody: string;
    sections: { title: string; body: string }[];
  };
  projectsPage: { eyebrow: string; title: string; intro: string; back: string };
};

const deProjects: Project[] = [
  {
    slug: "privacy-oriented-rust-browser",
    title: { de: "Datenschutzorientierter Browser in Rust", en: "Privacy-oriented Rust Browser" },
    status: "in-progress",
    shortDescription: {
      de: "Ein experimentelles Lernprojekt: Browserarchitektur, Oberflächen und Datenschutz mit Rust praktisch verstehen.",
      en: "An experimental learning project for understanding browser architecture, interfaces and privacy with Rust.",
    },
    description: {
      de: "Ein experimenteller, datenschutzorientierter Webbrowser, den ich als Lern- und Entwicklungsprojekt in Rust entwickle. Als Rendering-Engine kommt Servo zum Einsatz, während die Benutzeroberfläche mit winit und egui umgesetzt wird.",
      en: "An experimental, privacy-oriented web browser that I am building as a learning and development project in Rust. Servo provides the rendering engine while winit and egui power the interface.",
    },
    technologies: ["Rust", "Cargo", "Servo", "winit", "egui", "Clippy", "rustfmt"],
    featured: true,
    working: {
      de: [
        "Eingebettetes Servo-WebView",
        "URL-Leiste, Tabs und Navigation",
        "Maus- und Tastatureingaben",
        "Keine Telemetrie oder Benutzerkonten",
      ],
      en: ["Embedded Servo WebView", "URL bar, tabs and navigation", "Mouse and keyboard input", "No telemetry or user accounts"],
    },
    learning: {
      de: [
        "Rust und Browserarchitektur",
        "UI- und Netzwerkverarbeitung",
        "Datenschutz und Softwaretests",
        "Arbeiten mit Clippy und rustfmt",
      ],
      en: ["Rust and browser architecture", "UI and network processing", "Privacy and software testing", "Working with Clippy and rustfmt"],
    },
    current: {
      de: ["Eingabe- und UX-Verbesserungen", "Feinere Regeln für problematische Anfragen", "Stabilere Tab- und Sitzungsgrundlagen"],
      en: ["Input and UX improvements", "More precise rules for problematic requests", "More stable tab and session foundations"],
    },
    limitations: {
      de: [
        "Reader-Modus ist noch nicht vollständig umgesetzt",
        "Proxy-Unterstützung und Downloads fehlen",
        "Noch kein fertiger Alltagsbrowser",
      ],
      en: ["Reader mode is not complete yet", "Proxy support and downloads are not implemented", "Not a finished daily browser"],
    },
    nextSteps: {
      de: ["Echte Screenshots ergänzen", "Weitere Tests und Fehlerbehandlung", "Projekt später öffentlich dokumentieren"],
      en: ["Add real screenshots", "Expand testing and error handling", "Document the project publicly later"],
    },
  },
];

export const siteData: Record<Locale, PortfolioContent> = {
  de: {
    locale: "de",
    nav: {
      home: "Start",
      about: "Über mich",
      experience: "Praxis",
      skills: "Fähigkeiten",
      projects: "Projekte",
      contact: "Kontakt",
      language: "Sprache",
      theme: "Darstellung",
      menu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    hero: {
      eyebrow: "Ausbildungsplatz gesucht · Start am 01.08.2027",
      title: "Technik verstehen. Probleme lösen. Menschen unterstützen.",
      intro:
        "Ich bin Noah Neu und absolviere derzeit mein Fachabitur mit Schwerpunkt Informatik. Für August 2027 suche ich eine Ausbildung zum Fachinformatiker – offen für Systemintegration und Anwendungsentwicklung.",
      detail:
        "Besonders interessieren mich praktische IT-Lösungen, Hardware, moderne Softwareentwicklung, Homelabbing und der sinnvolle Einsatz von KI.",
      primaryCta: "Praxis und Projekte ansehen",
      secondaryCta: "E-Mail schreiben",
      facts: [
        { label: "Ziel", value: "Fachinformatiker" },
        { label: "Start", value: "01.08.2027" },
        { label: "Region", value: "Ahrtal · RLP · NRW" },
        { label: "Fachrichtungen", value: "Systemintegration oder Entwicklung" },
      ],
    },
    about: {
      eyebrow: "Über mich",
      title: "Ich lerne am liebsten dort, wo Technik einen konkreten Unterschied macht.",
      body: "Computer und technische Zusammenhänge begleiten mich schon seit meiner Jugend. Vieles habe ich mir selbst erschlossen: Geräte einrichten, PCs zusammenbauen und reparieren, Software verstehen und Schritt für Schritt herausfinden, warum etwas nicht funktioniert. Heute verbinde ich dieses praktische Interesse mit meinem Fachabitur Informatik und ersten Erfahrungen aus mehreren IT-Praktika.",
      quote:
        "Meine Entscheidung für eine berufliche Zukunft in der IT ist klar und langfristig. Ich möchte Lösungen bauen, die im Alltag wirklich helfen.",
    },
    experience: {
      eyebrow: "Praktische Erfahrung",
      title: "Einblicke, die nach Arbeit aussehen – nicht nach Behauptungen.",
      intro:
        "In Praktika und im schulbegleitenden Jahrespraktikum lerne ich IT dort kennen, wo Geräte, Menschen und Abläufe zusammenkommen.",
      items: [
        {
          company: "CYTEQ GmbH",
          period: "10.08.2026 – 22.06.2027",
          type: { de: "Schulbegleitendes Jahrespraktikum", en: "School-based year internship" },
          focus: ["IT-Support", "Systemadministration", "Geräte einrichten und warten"],
          status: "ongoing",
          description: {
            de: "Praktische Aufgaben im IT-Alltag, Unterstützung bei Geräten und systemnahen Tätigkeiten.",
            en: "Practical IT work, supporting devices and system-related tasks.",
          },
        },
        {
          company: "CYTEQ GmbH",
          period: "15.06.2026 – 25.06.2026",
          type: { de: "Zweiwöchiges IT-Praktikum", en: "Two-week IT internship" },
          focus: ["Systemadministration", "Allgemeine IT-Aufgaben", "IT-Support"],
          status: "completed",
          description: {
            de: "Ein erster vertiefter Einblick in die Abläufe eines IT-Arbeitsplatzes.",
            en: "A first in-depth look at how an IT workplace operates.",
          },
        },
        {
          company: "FRUTANIA GmbH",
          period: "Während der Realschulzeit",
          type: { de: "Zweiwöchiges IT-Praktikum", en: "Two-week IT internship" },
          focus: ["Systemadministration", "Technische Unterstützung"],
          status: "completed",
          description: {
            de: "Ein früher Praxiseinblick in Systemadministration. Das genaue Datum ergänze ich, sobald es bestätigt ist.",
            en: "An early practical insight into system administration. I will add the exact date once confirmed.",
          },
        },
      ],
      momentTitle: "Ein Moment aus der Praxis",
      moment:
        "Bei einem Außeneinsatz erhielt ich eine technische Aufgabe, die ich selbstständig bearbeiten konnte, während mein Kollege in einem anderen Gebäudeteil tätig war. Die erfolgreiche Lösung und das positive Feedback des unterstützten Unternehmens haben mir gezeigt, dass mir verantwortungsvolles Arbeiten im praktischen IT-Alltag liegt.",
    },
    skills: {
      eyebrow: "Fähigkeiten",
      title: "Ein realistischer Stand ist die beste Grundlage zum Weiterlernen.",
      intro:
        "Ich zeige bewusst qualitative Einschätzungen statt Prozentbalken. So bleibt sichtbar, was bereits praktisch sitzt – und wo ich gerade weiterarbeite.",
      categories: [
        {
          title: "Betriebssysteme",
          items: [
            { name: "Windows 11", level: "praktische Erfahrungen", visible: true },
            { name: "Windows 10", level: "praktische Erfahrungen", visible: true },
            { name: "Linux", level: "Grundkenntnisse", visible: true },
            { name: "Android", level: "Grundkenntnisse", visible: true },
          ],
        },
        {
          title: "Programmierung",
          items: [
            { name: "HTML", level: "gute Grundkenntnisse", visible: true },
            { name: "CSS", level: "Grundkenntnisse", visible: true },
            { name: "JavaScript", level: "Grundkenntnisse", visible: true },
            { name: "C#", level: "gute Grundkenntnisse", visible: true },
            { name: "C++", level: "Grundkenntnisse", visible: true },
            { name: "SQL", level: "gute Grundkenntnisse", visible: true },
            { name: "PHP", level: "erste Erfahrungen", visible: true },
            { name: "Rust", level: "erste Erfahrungen · aktueller Lernfokus", visible: true },
            { name: "Python", level: "Noch zu bestätigen", visible: false },
          ],
        },
        {
          title: "Tools und Hardware",
          items: [
            { name: "Visual Studio · VS Code", level: "regelmäßig genutzt", visible: true },
            { name: "VMware · Proxmox · Docker", level: "erste praktische Erfahrungen", visible: true },
            { name: "Git und GitHub", level: "aktuell in Einarbeitung", visible: true },
            { name: "PCs · Raspberry Pi · Server", level: "praktische Erfahrungen", visible: true },
          ],
        },
        {
          title: "Arbeitsweise",
          items: [
            { name: "Fehler untersuchen", level: "praktische Erfahrungen", visible: true },
            { name: "Geräte einrichten", level: "praktische Erfahrungen", visible: true },
            { name: "Selbstständige Lösungsfindung", level: "erste selbstständig gelöste Aufgaben", visible: true },
            { name: "Zusammenarbeit", level: "ruhig, zuverlässig und teamfähig", visible: true },
          ],
        },
      ],
    },
    projectSection: {
      eyebrow: "Hervorgehobenes Projekt",
      title: "Ein Browser, gebaut um Rust wirklich zu verstehen.",
      intro: "Kein fertiges Produkt, sondern ein ehrliches Lernprojekt mit klaren Grenzen und echten technischen Fragen.",
      viewAll: "Alle Projekte",
      featuredLabel: "In Entwicklung",
      technologiesLabel: "Technologien",
      detailsLabel: "Projekt ansehen",
      status: { "in-progress": "In Entwicklung", learning: "Lernprojekt", planned: "Geplant" },
    },
    learning: {
      eyebrow: "Aktuell lerne ich",
      title: "Neugier braucht Richtung.",
      intro: "Diese Themen stehen gerade bewusst auf meiner Lernliste.",
      items: [
        { label: "Rust und Browserarchitektur", state: "aktuell im Fokus" },
        { label: "Servo und UI-Entwicklung", state: "in Einarbeitung" },
        { label: "Homelabbing und Proxmox", state: "erste Erfahrungen" },
        { label: "Lokale KI-Modelle und LLMs", state: "langfristiges Interesse" },
        { label: "Git und GitHub", state: "nächster Schritt" },
      ],
    },
    ai: {
      eyebrow: "KI als Werkzeug zum Lernen und Entwickeln",
      title: "Transparent arbeiten heißt: Ergebnisse verstehen.",
      body: "Ich nutze KI gezielt als Lern- und Entwicklungswerkzeug. Sie hilft mir dabei, Ideen zu strukturieren, Fehler zu analysieren und neue Technologien kennenzulernen. Entscheidend ist für mich, die Ergebnisse zu verstehen, zu testen und selbst weiterzuentwickeln.",
      points: [
        "Ideen strukturieren und Alternativen prüfen",
        "Fehler analysieren und neue Konzepte recherchieren",
        "Ergebnisse nachvollziehen, testen und anpassen",
        "Interesse an LLMs, lokalen Modellen und Datenschutz",
      ],
    },
    volunteering: {
      eyebrow: "Ehrenamt",
      title: "Verantwortung zeigt sich auch außerhalb von Technik.",
      body: "Seit 2024 unterstütze ich ehrenamtlich das Kinder- und Jugendbüro Grafschaft. Bei Veranstaltungen, in der Betreuung sowie bei Planung, Organisation und Auf- und Abbau arbeite ich zuverlässig und ruhig mit Kindern, Jugendlichen und dem Team.",
      tags: ["Organisation", "Betreuung", "Teamarbeit", "Zuverlässigkeit"],
    },
    interests: {
      eyebrow: "Persönlich",
      title: "Was mich neben IT interessiert",
      items: [
        "PC-Hardware und Gaming",
        "Homelabbing und Datenschutz",
        "Rust und künstliche Intelligenz",
        "Fahrradfahren und Mountainbiken",
        "Zeit mit Freunden",
        "Ehrenamtliche Arbeit",
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lernen Sie Noah kennen.",
      body: "Wenn Sie einen motivierten Bewerber für eine Fachinformatiker-Ausbildung ab August 2027 suchen, freue ich mich über eine Nachricht. Lebenslauf, Zeugnisse und weitere Nachweise stelle ich bei Interesse gerne auf Anfrage zur Verfügung.",
      emailLabel: "neu.noah [at] web.de",
      emailWrite: "E-Mail schreiben",
      copy: "Adresse kopieren",
      copied: "Adresse kopiert",
      profiles: "Öffentliche Profile",
      evidence: "Nachweise auf Anfrage",
      note: "Die Adresse wird erst beim Schreiben oder Kopieren im Browser zusammengesetzt.",
    },
    footer: { legal: "Impressum", privacy: "Datenschutz", top: "Nach oben", status: "Portfolio · Stand 2026" },
    legal: {
      noticeTitle: "Impressum",
      noticeBody:
        "Diese Seite ist als Portfolio-Projekt vorbereitet. Pflichtangaben wie die ladungsfähige Anschrift werden vor einer Veröffentlichung ergänzt und rechtlich geprüft.",
      privacyTitle: "Datenschutz",
      privacyBody:
        "Diese Website ist bewusst datensparsam. Es gibt kein Tracking, keine Analyse-Tools, kein Kontaktformular und keine eingebetteten sozialen Feeds.",
      sections: [
        {
          title: "Verantwortliche Person",
          body: "Die vollständigen Angaben werden vor der Veröffentlichung in der Konfiguration ergänzt. Bis dahin ist diese Seite nicht als fertiges Rechtsdokument gedacht.",
        },
        {
          title: "Technisch notwendige Speicherung",
          body: "Eine lokale Präferenz kann für Sprache und Darstellung (Light, Dark oder System) gespeichert werden. Es werden keine Nutzungsprofile erstellt.",
        },
        {
          title: "Externe Dienste",
          body: "GitHub und LinkedIn werden nur als normale externe Links geöffnet. Sanity ist für die spätere redaktionelle Pflege vorbereitet, aber ohne Projektverbindung werden ausschließlich lokale Fallback-Inhalte verwendet.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "Projekte",
      title: "Lernen wird sichtbar, wenn etwas funktioniert.",
      intro: "Eine kleine Auswahl echter Lern- und Entwicklungsprojekte. Unfertiges bleibt als unfertig markiert.",
      back: "Zurück zur Startseite",
    },
  },
  en: {
    locale: "en",
    nav: {
      home: "Home",
      about: "About",
      experience: "Practice",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      theme: "Appearance",
      menu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      eyebrow: "Looking for an apprenticeship · Start 01 Aug 2027",
      title: "Understand technology. Solve problems. Support people.",
      intro:
        "I am Noah Neu, currently completing my university of applied sciences entrance qualification with a focus on computer science. For August 2027, I am looking for an IT specialist apprenticeship, open to systems integration and application development.",
      detail:
        "I am especially interested in practical IT solutions, hardware, modern software development, homelabbing and thoughtful uses of AI.",
      primaryCta: "Explore practice and projects",
      secondaryCta: "Write an email",
      facts: [
        { label: "Goal", value: "IT specialist" },
        { label: "Start", value: "01 Aug 2027" },
        { label: "Region", value: "Ahr Valley · RLP · NRW" },
        { label: "Tracks", value: "Systems integration or development" },
      ],
    },
    about: {
      eyebrow: "About me",
      title: "I learn best where technology makes a concrete difference.",
      body: "Computers and technical systems have been part of my life since my early teens. I taught myself many things along the way: setting up devices, building and repairing PCs, understanding software and working out why something fails. Today I combine that practical curiosity with my computer-science focused qualification and first-hand experience from several IT internships.",
      quote:
        "My decision to build a long-term career in IT is clear. I want to create solutions that genuinely help people in their everyday work.",
    },
    experience: {
      eyebrow: "Practical experience",
      title: "Experience that looks like work, not claims.",
      intro: "Through internships and a school-based year placement, I am learning IT where devices, people and processes meet.",
      items: [
        {
          company: "CYTEQ GmbH",
          period: "10 Aug 2026 – 22 Jun 2027",
          type: { de: "Schulbegleitendes Jahrespraktikum", en: "School-based year internship" },
          focus: ["IT support", "Systems administration", "Setting up and maintaining devices"],
          status: "ongoing",
          description: { de: "", en: "Practical IT work, supporting devices and system-related tasks." },
        },
        {
          company: "CYTEQ GmbH",
          period: "15 Jun 2026 – 25 Jun 2026",
          type: { de: "Zweiwöchiges IT-Praktikum", en: "Two-week IT internship" },
          focus: ["Systems administration", "General IT tasks", "IT support"],
          status: "completed",
          description: { de: "", en: "A first in-depth look at how an IT workplace operates." },
        },
        {
          company: "FRUTANIA GmbH",
          period: "During secondary school",
          type: { de: "Zweiwöchiges IT-Praktikum", en: "Two-week IT internship" },
          focus: ["Systems administration", "Technical support"],
          status: "completed",
          description: { de: "", en: "An early practical insight into system administration. I will add the exact date once confirmed." },
        },
      ],
      momentTitle: "A moment from practice",
      moment:
        "During an on-site assignment, I received a technical task I could complete independently while my colleague was working in another part of the building. Solving it successfully and receiving positive feedback showed me that I enjoy taking responsibility in practical IT work.",
    },
    skills: {
      eyebrow: "Skills",
      title: "An honest baseline is the best place to keep learning.",
      intro:
        "I use qualitative descriptions instead of percentage bars. They show what I have already used in practice and where I am still building confidence.",
      categories: [
        {
          title: "Operating systems",
          items: [
            { name: "Windows 11", level: "practical experience", visible: true },
            { name: "Windows 10", level: "practical experience", visible: true },
            { name: "Linux", level: "basic knowledge", visible: true },
            { name: "Android", level: "basic knowledge", visible: true },
          ],
        },
        {
          title: "Programming",
          items: [
            { name: "HTML", level: "good basic knowledge", visible: true },
            { name: "CSS", level: "basic knowledge", visible: true },
            { name: "JavaScript", level: "basic knowledge", visible: true },
            { name: "C#", level: "good basic knowledge", visible: true },
            { name: "C++", level: "basic knowledge", visible: true },
            { name: "SQL", level: "good basic knowledge", visible: true },
            { name: "PHP", level: "first experience", visible: true },
            { name: "Rust", level: "first experience · current focus", visible: true },
            { name: "Python", level: "To be confirmed", visible: false },
          ],
        },
        {
          title: "Tools and hardware",
          items: [
            { name: "Visual Studio · VS Code", level: "used regularly", visible: true },
            { name: "VMware · Proxmox · Docker", level: "first practical experience", visible: true },
            { name: "Git and GitHub", level: "currently learning", visible: true },
            { name: "PCs · Raspberry Pi · servers", level: "practical experience", visible: true },
          ],
        },
        {
          title: "Working style",
          items: [
            { name: "Investigating faults", level: "practical experience", visible: true },
            { name: "Setting up devices", level: "practical experience", visible: true },
            { name: "Independent problem solving", level: "first independently solved tasks", visible: true },
            { name: "Collaboration", level: "calm, reliable and team-oriented", visible: true },
          ],
        },
      ],
    },
    projectSection: {
      eyebrow: "Featured project",
      title: "A browser built to understand Rust for real.",
      intro: "Not a finished product, but an honest learning project with real technical questions and clear boundaries.",
      viewAll: "All projects",
      featuredLabel: "In development",
      technologiesLabel: "Technologies",
      detailsLabel: "View project",
      status: { "in-progress": "In development", learning: "Learning project", planned: "Planned" },
    },
    learning: {
      eyebrow: "Currently learning",
      title: "Curiosity needs direction.",
      intro: "These are the topics I am deliberately working on right now.",
      items: [
        { label: "Rust and browser architecture", state: "current focus" },
        { label: "Servo and UI development", state: "getting started" },
        { label: "Homelabbing and Proxmox", state: "first experience" },
        { label: "Local AI models and LLMs", state: "long-term interest" },
        { label: "Git and GitHub", state: "next step" },
      ],
    },
    ai: {
      eyebrow: "AI as a learning and development tool",
      title: "Working transparently means understanding the result.",
      body: "I use AI deliberately as a learning and development tool. It helps me structure ideas, analyse errors and get familiar with new technologies. What matters to me is understanding, testing and continuing to develop the result myself.",
      points: [
        "Structure ideas and compare approaches",
        "Analyse errors and research new concepts",
        "Understand, test and adapt the output",
        "Interest in LLMs, local models and privacy",
      ],
    },
    volunteering: {
      eyebrow: "Volunteering",
      title: "Responsibility also shows outside of technology.",
      body: "Since 2024 I have volunteered with the Kinder- und Jugendbüro Grafschaft. I support events, supervision, planning, organisation and set-up/tear-down work with children, young people and the team.",
      tags: ["Organisation", "Supervision", "Teamwork", "Reliability"],
    },
    interests: {
      eyebrow: "Beyond the screen",
      title: "What interests me outside IT",
      items: [
        "PC hardware and gaming",
        "Homelabbing and privacy",
        "Rust and artificial intelligence",
        "Cycling and mountain biking",
        "Time with friends",
        "Volunteering",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Get to know Noah.",
      body: "If you are looking for a motivated applicant for an IT specialist apprenticeship from August 2027, I would be happy to hear from you. I can provide my CV, references and other documents on request.",
      emailLabel: "neu.noah [at] web.de",
      emailWrite: "Write an email",
      copy: "Copy address",
      copied: "Address copied",
      profiles: "Public profiles",
      evidence: "Documents on request",
      note: "The address is assembled in the browser only when you write or copy it.",
    },
    footer: { legal: "Legal notice", privacy: "Privacy", top: "Back to top", status: "Portfolio · Updated 2026" },
    legal: {
      noticeTitle: "Legal notice",
      noticeBody:
        "This portfolio is prepared as a project. Mandatory details such as a full service address will be added and legally reviewed before publication.",
      privacyTitle: "Privacy",
      privacyBody: "This website is intentionally data-minimal. There is no tracking, analytics, contact form or embedded social feed.",
      sections: [
        {
          title: "Responsible person",
          body: "Complete details will be added to the configuration before publication. Until then, this page is not intended as a finished legal document.",
        },
        {
          title: "Necessary local storage",
          body: "A local preference may store language and appearance (light, dark or system). No usage profiles are created.",
        },
        {
          title: "External services",
          body: "GitHub and LinkedIn are opened as ordinary external links. Sanity is prepared for future editorial work; without a project connection, only local fallback content is used.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "Learning becomes visible when something works.",
      intro: "A small selection of real learning and development projects. Anything unfinished stays clearly labelled.",
      back: "Back to home",
    },
  },
};

export const projects = deProjects;

export function getContent(locale: Locale): PortfolioContent {
  return siteData[locale];
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
