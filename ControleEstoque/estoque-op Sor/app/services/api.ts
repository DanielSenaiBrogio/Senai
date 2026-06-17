import axios from "axios";


const api = axios.create({
    baseURL: "https://vistoque.runasp.net/api"
});

export default api;