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

const apiClient = axios.create({
  baseURL: getConfig().rdsBackendBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    credentials: 'include',
  },
  withCredentials: true,
});

export const getAllFeatureFlags = async () => {
  const response = await apiClient.get<{data: FeatureFlag[]}>('/feature-flag/getAllFeatureFlags');
  return response.data.data;
};