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

interface ApiResponse<T> {
  message: string;
  data: T;
}

const apiClient = axios.create({
  baseURL: getConfig().rdsBackendBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const getAllFeatureFlags = async (): Promise<FeatureFlag[]> => {
  try {
    const response = await apiClient.get<ApiResponse<FeatureFlag[]>>(
      '/feature-flag/getAllFeatureFlags',
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || 'Failed to fetch feature flags',
      );
    }
    throw error;
  }
};
