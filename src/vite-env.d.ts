/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_USE_MOCK_SERVICE: string;
  // Add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
  