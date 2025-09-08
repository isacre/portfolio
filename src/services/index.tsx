import axios from "axios";
import { StrapiResponse, Tecnology } from "../types";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getTecnologies(): Promise<StrapiResponse<Tecnology>> {
  const response = await api.get(
    "/tecnologies?pagination[pageSize]=1000&populate=icon"
  );
  return response.data;
}

export default api;
