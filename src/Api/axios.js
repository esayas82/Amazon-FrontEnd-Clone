import axios from "axios";

const axiosInstance = axios.create({
    // local instance of firebase functions
    // baseURL: "http://127.0.0.1:5001/clone-28173/us-central1/api"

    // deployed verstion of firebase functions
    baseURL: "https://api-v2ahjjazua-uc.a.run.app"
    
    // deployed verstion of amazon backend(server) on render.com
    //baseURL: "https://amazon-backend-bakg.onrender.com"
})

export { axiosInstance }