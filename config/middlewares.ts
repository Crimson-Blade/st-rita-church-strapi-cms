export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://saintritamaina.org'], // replace with your actual frontend URLs
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: '*',
      exposeHeaders: ['Content-Disposition', 'Content-Type'],
      credentials: true,
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// scp -r ./uploads/ azureuser@20.244.24.17:/home/azureuser/rita-strapi-cms/public/