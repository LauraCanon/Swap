import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.10.16:9000/api",
});

export default apiClient;
