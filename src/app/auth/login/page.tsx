"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import icons from "@/components/atom/icons";
import fetchAuth from "@/utils/lib/fetchAuth";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
type dataRequest = {
  email: string;
  password: string;
};
const queryClient = new QueryClient();
const schema = z.object({
    email:z.string().email({ message: "Email tidak valid" }).nonempty({message:"Kolom email wajib diisi"}),
    password:z.string()
    .min(8, { message: "Password minimal 8 karakter" })
    .regex(/[A-Z]/, { message: "Password harus mengandung minimal satu huruf kapital" })
    .regex(/\d/, { message: "Password harus mengandung minimal satu angka" }) 
    .regex(/[\W_]/, { message: `Password harus mengandung minimal satu karakter khusus (!@#$%^&*()_+[]{}|;:'",.<>?/)` })
})
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginPage />
    </QueryClientProvider>
  );
};
const LoginPage = () => {
    const {
        EyeIcon,
        EyeCloseIcon
    } = icons;
    const [typePassword, setTypePassword] = useState<boolean>(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<dataRequest>({
        mode:"onChange",
        defaultValues:{
            email:"",
            password:""
        },
        resolver:zodResolver(schema)
    });
    const handleChangeTypePassword = () => {
        setTypePassword(!typePassword);
    };
    const mutation = useMutation({
      mutationFn: async (data: FormData) => {
        const response = await fetchAuth.fetchLoginUser(data);
        return response;
      },
      onSuccess: () => {
        window.location.href="/create/blog"
      },
      onError: (error) => {
        console.log(error);
      },
    });
    const submitLogin: SubmitHandler<dataRequest> = (data) => {
        const {email, password} = data
        const form = new FormData()
        form.append("email", email)
        form.append("password",password)
        mutation.mutate(form)
    }
  return (
    <main className="w-full min-h-screen font-poppins flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit(submitLogin)}
        method="POST"
        className="rounded-2xl bg-white border-[1px] border-border shadow-md lg:w-[50%] p-5 flex flex-col gap-5"
      >
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Please input your email"
              className="border-2 border-gray-500 h-12 p-5 rounded-2xl"
            />
            <p className="text-xs text-cherryRed">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pasword">Password:</label>
            <div className="flex justify-between gap-1 border-2 border-gray-500 h-12 rounded-2xl">
              <input
                {...register("password")}
                type={typePassword ? "password" : "text"}
                placeholder="Please input your password"
                className="w-full p-5 rounded-2xl focus:outline-none focus:border-0"
              />
              <button
                type="button"
                className="mr-3"
                onClick={handleChangeTypePassword}
              >
                {typePassword ? <EyeIcon /> : <EyeCloseIcon />}
              </button>
            </div>
            <p className="text-xs text-cherryRed">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="h-12 bg-softBlue p-5 rounded-2xl flex items-center justify-center text-white mt-5 hover:bg-primerText/50"
          >
            {mutation.isPending ? "Loading..." : "Submit"}
          </button>
          <p className="text-center text-xs text-primerText font-semibold ">
            Apakah anda belum memiliki akun?{" "}
            <Link href={"/auth/register"} className="text-softBlue">
              Daftar
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
export default App;