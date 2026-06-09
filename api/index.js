import server from "./server.js";

export const config = {
  runtime: "edge",
};

export default (request, context) => {
  return server.fetch(request, {}, context);
};
