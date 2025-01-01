import { getConfig } from '../config';

export interface FeatureFlag {
  id: string;
  name: string;
  description: string;
  status: 'ENABLED' | 'DISABLED';
  createdAt: number;
  createdBy: string;
  updatedAt: number;
  updatedBy: string;
}

export const fetchData = async (url: string) => {
  const response = await fetch(url, {
    credentials: 'include'
  });
  return response;
};

export const getAllFeatureFlags = async (): Promise<FeatureFlag[]> => {
  try {
    const baseUrl = getConfig().featureFlagBaseUrl;
    const response = await fetch(`${baseUrl}/feature-flags`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || 'Failed to fetch feature flags'
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch feature flags');
  }
};
