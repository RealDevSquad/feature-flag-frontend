const fetchApi = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, { credentials: 'include', ...options });
  if (!response.ok) {
    throw new Error(`${response.status} (${response.statusText})`);
  }
  return response.json();
};

export default fetchApi; 