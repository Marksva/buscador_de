import axios from "axios";

// 31742114/json/ 

const api = axios.create ({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;