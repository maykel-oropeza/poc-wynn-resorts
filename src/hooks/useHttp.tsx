import Axios from "axios"
import { useRef } from "react"

const baseURL = "http://demo9016160.mockable.io";

export const useHttp = () => {
    const http = useRef(Axios.create({ baseURL }));

    return http.current;
}