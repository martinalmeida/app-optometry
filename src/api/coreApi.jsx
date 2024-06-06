import axios from "axios";
import { SesionLocal } from "../modules/shared/helpers/sesionLocal";

/**
 * Returns an instance of axios with the baseURL and headers set.
 *
 * @return {Object} An instance of axios with the baseURL and headers set.
 */
export const coreApi = () => {
  const { jwt } = SesionLocal();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwt}`,
  };

  return axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER,
    headers,
  });
};
