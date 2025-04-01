declare global {
  const process: {
    env: {
      NODE_ENV: string
    }
  }
}

declare const PROD: boolean;
declare const DEV: boolean;
declare const TEST: boolean;

export {}