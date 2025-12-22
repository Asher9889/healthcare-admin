import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, type LoginFormData } from "../schema/LoginForm.schema";
import login from "../api/loginForm.api";
import { useMutation } from "@tanstack/react-query";


export const useLogin = () => {

    const { control, register, handleSubmit } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
        reValidateMode: "onChange",
        mode: "onChange",
    })

    const onSubmit = handleSubmit((data: LoginFormData) => {
       const result = mutation.mutate(data);
       console.log(result);
    })

    const mutation = useMutation({
        mutationKey: ["login"],
        mutationFn: login,
        onSuccess: () => {
            console.log("Api Success");
        },
        onError: () => {
            console.log("Api Error");
        },
    })

    return { control, register, handleSubmit, onSubmit, mutation };
};