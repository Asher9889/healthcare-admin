import { api, endPoints } from "@/api";
import type { LoginFormData } from "../schema/loginForm.schema";
import { AxiosError } from "axios";

export default async function login(data: LoginFormData){
    try {
        const result = await api.request({
          url: endPoints.login.url,
          method: endPoints.login.method,
          data 
        })
        return result.data.data ?? [];
    } catch (error:any) {
        if(error instanceof AxiosError){
            // The request was made and the server responded with a status code
            if(error.response){
                throw new Error(error.response.data.message);
            }
            if(error.request){
                throw new Error("Network Error! Try again.");
            }
        } else {
            return new Error("Something went wrong");
        }
    }
}