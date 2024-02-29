import axios from "axios";

export const Api = axios.create({
  baseURL: "https://www.brasiluz.net.br/webApiRestFrame/api/Query",
  timeout: 1000,
});
export const token = 'dGVjbmV3czp0ZWNuZXdzMTA='