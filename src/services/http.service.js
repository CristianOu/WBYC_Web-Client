import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
    console.log("interceptor called");
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        toast.error("Unexpected error occured");
        console.log("logging unexpected error", error);
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    delete: axios.delete,
    post: axios.post,
    put: axios.put,
    all: axios.all,
    spread: axios.spread
};