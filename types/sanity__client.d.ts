declare module '@sanity/client' {
    // Define the configuration options for the Sanity client
    export interface ClientConfig {
      projectId: string;
      dataset: string;
      apiVersion?: string;
      useCdn?: boolean;
      token?: string;
      useGlobalCache?: boolean;
    }
  
    // Define the type for a Sanity document
    export interface SanityDocument {
      _id: string;
      _type: string;
      [key: string]: any; // Allows for additional properties
    }
  
    // Define the type for a Sanity client instance
    export interface SanityClient {
      config: ClientConfig;
      fetch: (query: string, params?: Record<string, any>) => Promise<any>;
      create: (doc: SanityDocument) => Promise<SanityDocument>;
      // Add more methods and types as needed
    }
  
    // Export the client factory function
    export default function createClient(config: ClientConfig): SanityClient;
  }
  