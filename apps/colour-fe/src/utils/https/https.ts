import ky from 'ky';

export const https = ky.extend({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
});
