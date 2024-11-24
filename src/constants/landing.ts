export const FEATURES = [
  {
    title: 'Progressive Rollouts',
    description: 'Gradually release features to specific user segments to minimize risk and gather feedback.'
  },
  {
    title: 'A/B Testing',
    description: 'Test different versions of features with real users to make data-driven decisions.'
  },
  {
    title: 'Kill Switch',
    description: 'Instantly disable problematic features without deploying new code.'
  },
  {
    title: 'User Targeting',
    description: 'Release features to specific users based upon discord roles, RDS usernames, and other custom criteria.'
  }
] as const;

export const REPO_URL = 'https://github.com/Real-Dev-Squad/feature-flag-frontend'; 

export const WHAT_IS_FEATURE_FLAG = 'Feature flags are toggles that allow you to modify system behavior without changing code. They enable teams to control feature rollouts, conduct experiments, and manage their software with greater flexibility.';

export const WHY_USE_FEATURE_FLAGS = [
    'Separate code deployment from feature release',
    'Reduce risk in production deployments',
    'Enable trunk-based development',
    'Facilitate continuous delivery'
];