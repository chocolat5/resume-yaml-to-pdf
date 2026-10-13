const STORAGE_NAME = "resumeYamlToPdfData";

export const setLocalStorageYaml = (yaml: string) => {
  try {
    localStorage.setItem(STORAGE_NAME, yaml);
  } catch {
    // error
  }
};

export const getLocalStorageYaml = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_NAME);
  } catch {
    return null;
  }
};
