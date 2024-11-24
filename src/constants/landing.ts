export const FEATURES = [
  {
    title: 'Progressive Rollouts',
    description:
      'Gradually release features to specific user segments to minimize risk and gather feedback.',
  },
  {
    title: 'A/B Testing',
    description:
      'Test different versions of features with real users to make data-driven decisions.',
  },
  {
    title: 'Kill Switch',
    description:
      'Instantly disable problematic features without deploying new code.',
  },
  {
    title: 'User Targeting',
    description:
      'Release features to specific users based upon discord roles, RDS usernames, and other custom criteria.',
  },
] as const;

export const REPO_URL =
  'https://github.com/Real-Dev-Squad/feature-flag-frontend';

export const WHAT_IS_FEATURE_FLAG =
  'Feature flags are a software development tool that allow you to enable or disable a feature without modifying the source code or performing a new deployment.';

export const WHY_USE_FEATURE_FLAGS = [
  'Test new features safely in production',
  'Control feature access for specific users or groups',
  'Quick rollback without code deployment',
  'Easier A/B testing and experimentation',
];
