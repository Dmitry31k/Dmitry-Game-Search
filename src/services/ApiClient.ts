import { create } from "axios";

export default create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fake key",
  },
});
