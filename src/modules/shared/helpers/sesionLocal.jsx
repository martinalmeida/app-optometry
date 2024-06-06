export const SesionLocal = () => {
  const jwt = window.localStorage.getItem("tokenJwt");
  const user = JSON.parse(window.localStorage.getItem("user"));

  if (!jwt || !user) return { id: null, id_comp: null, jwt: null, user: null };

  return { id: user.id, id_comp: user.id_comp, jwt, user };
};
