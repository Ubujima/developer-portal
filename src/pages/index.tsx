import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const ecosystemProjects = [
  {
    title: 'AfroCom',
    description:
      'Community and opportunity infrastructure connecting Africa and the global Afro-community.',
    link: '/docs/projects/afrocom',
    action: 'Explore AfroCom',
  },
  {
    title: "Ma'at AI",
    description:
      'Human-centered AI and collective intelligence for the Ubujima ecosystem.',
    link: '/docs/projects/maat',
    action: "Explore Ma'at",
  },
  {
    title: 'Maji',
    description:
      'Exploring blockchain and decentralized infrastructure for ownership, participation, and value exchange.',
    link: '/docs/projects/maji',
    action: 'Explore Maji',
  },
];

const opportunities = [
  {
    eyebrow: 'Featured Challenge',
    title: 'React App Challenge',
    description:
      'Join developers exploring and building new React experiences for the Ubujima ecosystem.',
    link: '/docs/opportunities/react-app-challenge',
    action: 'View Challenge',
  },
  {
    eyebrow: 'Collaborate',
    title: 'Partner Projects',
    description:
      'Discover selected projects from founders, organizations, agencies, and ecosystem partners looking for technical collaborators.',
    link: '/docs/opportunities/partner-projects',
    action: 'Explore Projects',
  },
  {
    eyebrow: 'Bring Your Idea',
    title: 'Submit a Project',
    description:
      'Have a technology project that could benefit from community collaboration? Submit it for consideration within the Ubujima developer ecosystem.',
    link: '/docs/opportunities/submit-project',
    action: 'Submit a Project',
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>UBUJIMA DEVELOPER HUB</span>

          <Heading as="h1" className={styles.heroTitle}>
            Build. Collaborate.
            <br />
            Create Impact.
          </Heading>

          <p className={styles.heroSubtitle}>
            A home for developers, builders, researchers, and technical
            contributors building across the Ubujima ecosystem and
            collaborative projects.
          </p>

          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/welcome">
              Explore the Ecosystem
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/docs/getting-started/developer-onboarding">
              Start Contributing
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Ecosystem() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>OUR ECOSYSTEM</span>
          <Heading as="h2">Build with Ubujima</Heading>
          <p>
            Explore the core technology initiatives being developed across the
            Ubujima ecosystem.
          </p>
        </div>

        <div className={styles.gridThree}>
          {ecosystemProjects.map((project) => (
            <article className={styles.card} key={project.title}>
              <Heading as="h3">{project.title}</Heading>
              <p>{project.description}</p>
              <Link to={project.link}>{project.action} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Opportunities() {
  return (
    <section className={styles.altSection}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>OPPORTUNITIES</span>
          <Heading as="h2">Find something worth building</Heading>
          <p>
            Join an Ubujima initiative, collaborate with an ecosystem partner,
            or bring a project of your own.
          </p>
        </div>

        <div className={styles.gridThree}>
          {opportunities.map((opportunity) => (
            <article className={styles.card} key={opportunity.title}>
              <span className={styles.cardEyebrow}>
                {opportunity.eyebrow}
              </span>
              <Heading as="h3">{opportunity.title}</Heading>
              <p>{opportunity.description}</p>
              <Link to={opportunity.link}>{opportunity.action} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContributorJourney() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>GET INVOLVED</span>
          <Heading as="h2">From interest to contribution</Heading>
        </div>

        <div className={styles.steps}>
          <div>
            <strong>01</strong>
            <Heading as="h3">Explore</Heading>
            <p>Understand Ubujima, our ecosystem, and current projects.</p>
          </div>

          <div>
            <strong>02</strong>
            <Heading as="h3">Connect</Heading>
            <p>Find the project, challenge, or community that fits you.</p>
          </div>

          <div>
            <strong>03</strong>
            <Heading as="h3">Contribute</Heading>
            <p>Work on issues, projects, research, documentation, or code.</p>
          </div>

          <div>
            <strong>04</strong>
            <Heading as="h3">Grow</Heading>
            <p>
              Build relationships, experience, responsibility, and new
              opportunities.
            </p>
          </div>
        </div>

        <div className={styles.centerAction}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/developer-onboarding">
            Developer Onboarding
          </Link>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className={styles.altSection}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>DEVELOPER RESOURCES</span>
          <Heading as="h2">Understand how we build</Heading>
        </div>

        <div className={styles.gridTwo}>
          <article className={styles.card}>
            <Heading as="h3">Getting Started</Heading>
            <p>
              Learn about Ubujima, explore the ecosystem, understand onboarding,
              and prepare your first contribution.
            </p>
            <Link to="/docs/getting-started/welcome">
              Start Here →
            </Link>
          </article>

          <article className={styles.card}>
            <Heading as="h3">Engineering</Heading>
            <p>
              Explore our architecture, APIs, infrastructure, security, and
              development standards.
            </p>
            <Link to="/docs/engineering/architecture">
              Engineering Docs →
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function OpenCollaboration() {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <span className={styles.eyebrow}>CO-CREATION</span>

        <Heading as="h2">
          Build in the open. Collaborate globally.
        </Heading>

        <p>
          Ubujima brings together developers, communities, founders, and
          organizations to build useful technology and expand opportunity
          through collaboration.
        </p>

        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/contribution-guide">
            Contribution Guide
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/opportunities/submit-project">
            Submit a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Developer Hub"
      description="Build, collaborate, and contribute across the Ubujima technology ecosystem.">
      <Hero />
      <main>
        <Ecosystem />
        <Opportunities />
        <ContributorJourney />
        <Resources />
        <OpenCollaboration />
      </main>
    </Layout>
  );
}