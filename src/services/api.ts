import { getConfig } from '../config';

const { rdsBackendBaseUrl } = getConfig();

export const signInUrl = `${rdsBackendBaseUrl}/auth/github/login?redirectURL=${window.location.href}`;

export const fetchData = async (url: string) => {
  const response = await fetch(url, {
    credentials: 'include',
  });
  return response;
};

export const fetchUserProfile = async () => {
  const response = await fetchData(`${rdsBackendBaseUrl}/users?profile=true`);
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return response.json();
};

export const signOut = async () => {
  const response = await fetchData(`${rdsBackendBaseUrl}/auth/signout`);
  if (!response.ok) {
    throw new Error('Failed to sign out');
  }
  return response.json();
};
