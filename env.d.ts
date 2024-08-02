declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGODB_URI: string;
        MONGODB_NAME: string;
        MONGODB_COL_CERT: string;
        MONGODB_COL_COMP: string;
        MONGODB_COL_EXP: string;
        MONGODB_COL_SKILL: string;
        NEXT_PUBLIC_API_URL: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {};
  