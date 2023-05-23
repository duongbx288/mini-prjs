interface ImportMetaEnv {
    readonly VITE_REACT_APP_FIREBASE_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }