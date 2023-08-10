export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: number;
      TOKEN_SECRET: string;
      URI_MONGODB: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
