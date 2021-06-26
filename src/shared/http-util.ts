import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  withCredentials: true,
});
const getNewHeaders = () => {
  return { Authorization: "bearer " + window.localStorage.getItem("token") };
};
export default class HttpUtil {
  static get(url: string, params: any) {
    return new Promise((resolve, reject) => {
      instance
        .get(url, { params })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }
  static post(url: string, params: any) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, { ...params }, { headers: getNewHeaders() })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((err) => {
          reject({ err: JSON.stringify(err) });
        });
    });
  }
}
