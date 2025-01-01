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

export const fetchData = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, {
    credentials: 'include',
    ...options,
  });
  return response;
};

const handleError = (error: unknown): Error => {
  console.error(error);
  return new Error('Failed to fetch feature flags');
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

export const createFeatureFlag = async (name: string, description: string) => {
  const baseUrl = getConfig().featureFlagBaseUrl;
  const userId = '';

  const response = await fetchData(`${baseUrl}/feature-flags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Name: name,
      Description: description,
      UserId: userId,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create feature flag');
  }

  return await response.json();
};
