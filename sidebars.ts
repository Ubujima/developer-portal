import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Ubujima Developer Hub documentation structure.
 */
const sidebars: SidebarsConfig = {
  gettingStartedSidebar: [
    'getting-started/welcome',
    'getting-started/about-ubujima',
    'getting-started/ecosystem',
    'getting-started/developer-onboarding',
    'getting-started/contribution-guide',
  ],

  projectsSidebar: [
    'projects/afrocom',
    'projects/maat',
    'projects/maji',
  ],

  engineeringSidebar: [
    'engineering/architecture',
    'engineering/api',
    'engineering/infrastructure',
    'engineering/security',
    'engineering/development-standards',
  ],
};

export default sidebars;