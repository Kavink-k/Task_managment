// Simple localStorage helpers (JSON safe)

export const lsGet = (key, fallback = null) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const lsSet = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const lsRemove = (key) => {
  localStorage.removeItem(key);
};
