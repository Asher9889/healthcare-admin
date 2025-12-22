import { api, endPoints } from "@/api";
import type { LoginFormData } from "../schema/LoginForm.schema";
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
                return error.response.data;
            }
            if(error.request){
                return new Error("Network Error! Try again.");
            }
        } else {
            return new Error("Something went wrong");
        }
    }
}