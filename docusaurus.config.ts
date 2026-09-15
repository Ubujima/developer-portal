import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ubujima Developer Hub',
  tagline: 'Co-create technology that shapes the Global Afro-community',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Custom production domain
  url: 'https://tech.ubujima.com',
  baseUrl: '/',

  organizationName: 'Ubujima',
  projectName: 'developer-portal',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Ubujima/developer-portal/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/Ubujima/developer-portal/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Ubujima',
      logo: {
        alt: 'Ubujima Logo',
        src: 'img/ubulogo-black.png',
        srcDark: 'img/ubujimalogo-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStartedSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'engineeringSidebar',
          position: 'left',
          label: 'Engineering',
        },
        {
          type: 'docSidebar',
          sidebarId: 'opportunitiesSidebar',
          position: 'left',
          label: 'Opportunities',
        },
        {
          href: 'https://github.com/Ubujima',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Developer Hub',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/welcome',
            },
            {
              label: 'Projects',
              to: '/docs/projects/afrocom',
            },
            {
              label: 'Engineering',
              to: '/docs/engineering/architecture',
            },
          ],
        },
        {
          title: 'Build & Collaborate',
          items: [
            {
              label: 'Opportunities',
              to: '/docs/opportunities/overview',
            },
            {
              label: 'React App Challenge',
              to: '/docs/opportunities/react-app-challenge',
            },
            {
              label: 'Partner Projects',
              to: '/docs/opportunities/partner-projects',
            },
            {
              label: 'Submit a Project',
              to: '/docs/opportunities/submit-project',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Ubujima',
            },
            {
              label: 'AfroCom',
              href: 'https://afrocom.app',
            },
            {
              label: 'X',
              href: 'https://x.com/ubujima',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ubujima Corporation. Built through Co-creation.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;