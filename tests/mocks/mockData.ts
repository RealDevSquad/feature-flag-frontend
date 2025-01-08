import { FeatureFlag } from '../../src/services/api';

export const mockFeatureFlags: FeatureFlag[] = [
  {
    id: '1',
    name: 'Test Feature Flag',
    description: 'This is a test feature flag',
    status: 'ENABLED',
    createdAt: 17095440000,
    createdBy: 'test.user',
    updatedAt: 17095440000,
    updatedBy: 'test.user',
  },
  {
    id: '2',
    name: 'Demo Feature Flag',
    description: 'This is demo test flag',
    status: 'DISABLED',
    createdAt: 17094576000,
    createdBy: 'test.user',
    updatedAt: 17094576000,
    updatedBy: 'test.user',
  },
];

export const featureFlagService = {
  getFeatureFlags: async () => mockFeatureFlags,
  getFeatureFlag: async (id: string) =>
    mockFeatureFlags.find((flag) => flag.id === id),
};
