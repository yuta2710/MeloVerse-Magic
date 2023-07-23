export {};

declare global {
  
  namespace NodeJS {
    interface ProcessEnv {
			PORT: string;
      MONGO_URI: string;
      FILE_UPLOAD_PATH: string;
      MAX_FILE_UPLOAD: string;
      JWT_SECRET: string;
      JWT_EXPIRE: string;
			JWT_COOKIE_EXPIRE: string;
      NODE_ENV: "development" | "production"
    }
  }
}
