/// <reference types="vite/client" />

export default function BuildImageUrl(url: string) {
  if (!url) return "";
  return `${import.meta.env.VITE_API_URL.replace("/api", "")}${url}`;
}
