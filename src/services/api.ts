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

type CreateFeatureFlagBody = {
  Name: string;
  Description: string;
  UserId: string;
};

export const fetchData = async (
  url: string,
  options?: globalThis.RequestInit,
) => {
  const response = await fetch(url, {
    credentials: 'include',
    ...options,
  });

  return response;
};

export const getAllFeatureFlags = async (): Promise<FeatureFlag[]> => {
  try {
    const baseUrl = getConfig().featureFlagBaseUrl;
    const response = await fetchData(`${baseUrl}/feature-flags`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch feature flags');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch feature flags');
  }
};

export const createFeatureFlag = async (body: CreateFeatureFlagBody) => {
  const baseUrl = getConfig().featureFlagBaseUrl;

  const response = await fetchData(`${baseUrl}/feature-flags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create feature flag');
  }

  return await response.json();
};
