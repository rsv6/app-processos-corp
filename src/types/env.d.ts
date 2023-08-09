export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: number;
      TOKEN_SECRET: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
