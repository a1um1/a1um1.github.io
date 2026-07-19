type Project = {
  imageSrc: string;
  title: string;
  role: string;
  description?: string;
  tags: Tag[];
  year: number;
  siteLink?: string;
};

type Tag = { name: string; iconSrc: string };

const TagLists: { [key: string]: Tag } = {
  react: {
    name: "React",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/react/default.svg",
  },
  tailwindCss: {
    name: "Tailwind CSS",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/tailwindcss/default.svg",
  },
  nextjs: {
    name: "Next.js",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextjs/default.svg",
  },
  typescript: {
    name: "TypeScript",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/typescript/default.svg",
  },
  antDesign: {
    name: "Ant Design",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/ant-design/default.svg",
  },
  wordpress: {
    name: "WordPress",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/wordpress/default.svg",
  },
  graphql: {
    name: "GraphQL",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/graphql/default.svg",
  },
  bun: {
    name: "Bun",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/bun/default.svg",
  },
  postgres: {
    name: "PostgreSQL",
    iconSrc: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/postgresql/default.svg",
  },
  googleCloud: {
    name: "Google Cloud",
    iconSrc:
      "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-cloud/default.svg",
  },
};

const ProjectsData: Project[] = [
  {
    imageSrc: "/simummuangmarket.png",
    title: "Simum Muang Market",
    role: "Outsource Frontend Developer",
    tags: [
      TagLists.react,
      TagLists.tailwindCss,
      TagLists.nextjs,
      TagLists.typescript,
      TagLists.bun,
    ],
    year: 2025,
    siteLink: "https://www.simummuangmarket.com/",
  },
  {
    imageSrc: "/starmoney.png",
    title: "Star Money",
    role: "Outsource Frontend Developer",
    tags: [
      TagLists.react,
      TagLists.tailwindCss,
      TagLists.nextjs,
      TagLists.typescript,
      TagLists.bun,
      TagLists.antDesign,
    ],

    year: 2025,
    siteLink: "https://shop.starmoney.co.th/",
  },
  {
    imageSrc: "/adchariya.png",
    title: "Adchariya",
    role: "Outsource Full Stack Developer",
    tags: [
      TagLists.react,
      TagLists.tailwindCss,
      TagLists.nextjs,
      TagLists.typescript,
      TagLists.wordpress,
      TagLists.graphql,
    ],
    year: 2023,
    siteLink: "https://www.adchariya.co.th/",
  },
  {
    imageSrc: "/Freeratsadorn.png",
    title: "Freeratsadorn",
    role: "Outsource Full Stack Developer",
    tags: [
      TagLists.react,
      TagLists.tailwindCss,
      TagLists.nextjs,
      TagLists.typescript,
      TagLists.postgres,
      TagLists.googleCloud,
    ],
    year: 2024,
    siteLink: "https://freeratsadon.amnesty.or.th/",
  },
  {
    imageSrc: "/campus-ride.png",
    title: "Campus Ride",
    role: "Outsource Full Stack Developer",
    tags: [
      TagLists.react,
      TagLists.tailwindCss,
      TagLists.nextjs,
      TagLists.typescript,
      TagLists.postgres,
    ],
    year: 2025,
  },
];

const ProjectCard = ({ imageSrc, title, role, description, tags, year, siteLink }: Project) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt="Project Image" className="thumbnail" />
      <h2>{title}</h2>
      <p className="role">{role}</p>
      <div className="description">
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <div key={index}>
              <img src={tag.iconSrc} alt={tag.name} />
              {tag.name}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <p>{year}</p>
        {siteLink && (
          <a
            href={siteLink}
            className="button sm primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {ProjectsData.map((project) => (
          <ProjectCard key={`project-${project.title}`} {...project} />
        ))}
      </div>
    </section>
  );
}
