import { http, HttpResponse } from 'msw';
import { mockFeatureFlags } from './mockData';

export const handlers = [
  http.get('http://localhost:8000/feature-flags', () => {
    return HttpResponse.json(mockFeatureFlags, { status: 200 });
  }),
];
