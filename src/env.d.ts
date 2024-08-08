interface ImportMetaEnv extends Readonly<Record<string, string>> {
  VITE_SITE_LANGUAGE: 'HEB' | 'ENG';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
