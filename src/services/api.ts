import { getConfig } from '../config';
import axios from 'axios';

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
    const response = await fetchData(`${baseUrl}/feature-flags`);
    const data = await response.json();

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'Failed to fetch feature flags',
      );
    }
    throw error as Error;
  }
};
