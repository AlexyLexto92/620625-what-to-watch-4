const extend = (a, b) => {
  return Object.assign({}, a, b);
};
export default extend;

export const RouteConst = {
  ROOT: `/`,
  MAIN: `/main`,
  SING_IN: `/login`,
  FILM_DETAILS: `/film-details`,
  PLAYER: `/player`,
};
