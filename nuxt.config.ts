import path from 'path';
import fs from 'fs';

const loadPem = (env: any, fileName: any) => {
  if (env) {
    return env;
  }
  const pemPath = path.resolve(__dirname, fileName);
  if (fs.existsSync(pemPath)) {
    return pemPath;
  }
  return '';
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  devServer: {
    port: 3000,
    https: {
      key: loadPem(process.env.SERVER_HTTPS_KEY, 'localhost-key.pem'),
      cert: loadPem(process.env.SERVER_HTTPS_CERT, 'localhost.pem'),
    },
  },
});
