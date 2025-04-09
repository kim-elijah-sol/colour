import ky from 'ky';
import { addTokenInHeader, handleTokenExpired } from './hooks';

export const https = ky.extend({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  retry: {
    limit: 3,
    statusCodes: [401],
  },
  hooks: {
    beforeRequest: [addTokenInHeader],
    beforeRetry: [handleTokenExpired],
  },
});
