const { VITE_BASE_URL } = import.meta.env;

export const baseUrlServer = VITE_BASE_URL || 'http://localhost:3333';