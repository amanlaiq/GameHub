import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9392b94df00548b5906b700cd43e39cb",
  },
});
