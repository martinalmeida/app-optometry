import axios from "axios";

/**
 * Returns an instance of axios with the baseURL and headers set.
 *
 * @return {Object} An instance of axios with the baseURL and headers set.
 */
export const coreApi = () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("tokenJwt")}`,
  };

  return axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER,
    headers,
  });
};
