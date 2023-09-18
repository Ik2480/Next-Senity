// sanity/sanity.client.ts

import createClient, { ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: "9vbdvyqv",
  dataset: "production",
  apiVersion: "2023-09-10",
  useCdn: false,
};

const client = createClient(config);

export default client;