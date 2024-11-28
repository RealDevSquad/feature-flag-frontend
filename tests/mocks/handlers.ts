import { http, HttpResponse } from 'msw';
import { mockFeatureFlags } from './mockData';

export const handlers = [
  http.get('http://localhost:8000/feature-flag/getAllFeatureFlags', () => {
    return HttpResponse.json({
      status: 200,
      message: 'Feature flags retrieved successfully',
      data: mockFeatureFlags,
    });
  }),
];
