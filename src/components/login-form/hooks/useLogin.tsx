import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, type LoginFormData } from "../schema/loginForm.schema";
import login from "../api/loginForm.api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {

    const navigate = useNavigate();
    const { control, register, handleSubmit, formState  } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
        reValidateMode: "onChange",
        mode: "onChange",
    })

    const onSubmit = handleSubmit((data: LoginFormData) => {
       if (mutation.isPending) return;
       mutation.mutate(data);
      
    })

    const mutation = useMutation({
        mutationKey: ["login"],
        mutationFn: login,
        onSuccess: () => {
            navigate("/")
        },
        onError: (error) => {
            console.log("error is", error)
        },
    })

    return { control, register, handleSubmit, onSubmit, mutation, formState };
};