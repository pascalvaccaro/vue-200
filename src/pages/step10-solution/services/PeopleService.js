import axios from "axios";

const BACKEND_URL = process.env.VUE_APP_BACKEND_URL;

export default {
  fetch() {
    return axios
      .get(BACKEND_URL)
      .then(({ data }) => data)
      .catch(console.log);
  },
  fetchRandom() {
    return axios
      .get(`${BACKEND_URL}/random`)
      .then(({ data }) => data)
      .catch(console.log);
  },
  delete(id) {
    return axios
      .delete(`${BACKEND_URL}/${id}`)
      .then(({ data }) => data)
      .catch(console.log);
  }
};
