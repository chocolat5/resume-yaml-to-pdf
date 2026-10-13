const STORAGE_KEY = "resumeYamlToPdfData";

export const setLocalStorageYaml = (yaml: string) => {
  try {
    localStorage.setItem(STORAGE_KEY, yaml);
  } catch {
    // do nothing
  }
};

export const getLocalStorageYaml = (): string | null => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

export const deleteLocalStorageYaml = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // do nothing
  }
};
