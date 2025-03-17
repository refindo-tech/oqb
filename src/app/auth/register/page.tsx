"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import icons from "@/components/atom/icons";
import { useRouter } from "next/navigation";
import fetchAuth from "@/utils/lib/fetchAuth";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
type dataRequest = {
  name: string;
  email: string;
  password: string;
  confirmPassword:string;
};
const schema = z.object({
  name:z.string().nonempty({message: "Kolom nama harus diisi"}),
  email:z.string().nonempty({message: "Kolom email harus diisi dengan sesuai"}),
  password:z.string()
  .min(8, { message: "Password minimal 8 karakter" })
  .regex(/[A-Z]/, { message: "Password harus mengandung minimal satu huruf kapital" })
  .regex(/\d/, { message: "Password harus mengandung minimal satu angka" }) 
  .regex(/[\W_]/, { message: `Password harus mengandung minimal satu karakter khusus (!@#$%^&*()_+[]{}|;:'",.<>?/)` }),
  confirmPassword:z.string()
  .min(8, { message: "Confirmation password minimal 8 karakter" })
  .regex(/[A-Z]/, { message: "Confirmation password harus mengandung minimal satu huruf kapital" })
  .regex(/\d/, { message: "Confirmation password harus mengandung minimal satu angka" }) 
  .regex(/[\W_]/, { message: `Confirmation password harus mengandung minimal satu karakter khusus (!@#$%^&*()_+[]{}|;:'",.<>?/)` })
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: "custom",
      message: "Password dan confirmation password harus sama",
      path: ["password"],
    });
    ctx.addIssue({
      code: "custom",
      message: "Password dan confirmation password harus sama",
      path: ["confirmPassword"],
    });
  }
});
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RegisterPage />
    </QueryClientProvider>
  );
};
const RegisterPage = () => {
  const router = useRouter();
  const { EyeIcon, EyeCloseIcon } = icons;
  const [typePassword, setTypePassword] = useState<boolean>(true);
  const [typeConfirmationPassword, setTypeConfirmationPassword] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataRequest>({
    mode: "onChange",
    resolver: zodResolver(schema)
  });
  const handleChangeTypePassword = () => {
    setTypePassword(!typePassword);
  };
  const handleChangeTypeConfirmationPassword = () => {
    setTypeConfirmationPassword(!typeConfirmationPassword);
  };
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetchAuth.fetchRegistUser(data);
      return response;
    },
    onSuccess: () => {
      router.push("/auth/login");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const submitRegister: SubmitHandler<dataRequest> = (data) => {
    const { name, email, password, confirmPassword } = data;
    console.log(data);
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("password", password);
    if(password === confirmPassword){
      mutation.mutate(form);
    }
  };
  return (
    <main className="w-full min-h-screen font-poppins flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit(submitRegister)}
        method="POST"
        encType="application/json"
        className="rounded-2xl bg-white border-[1px] border-border shadow-md lg:w-[50%] p-5 flex flex-col gap-5"
      >
        <h1 className="text-2xl font-semibold text-center">Register</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              {...register("name", { required: true })}
              type="name"
              placeholder="Please input your full name"
              className="border-2 border-gray-500 h-12 p-5 rounded-2xl"
            />
            <p className="text-xs text-cherryRed">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              {...register("email", { required: true })}
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
                {...register("password", { required: true })}
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
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Confirmation Password:</label>
            <div className="flex justify-between gap-1 border-2 border-gray-500 h-12 rounded-2xl">
              <input
                {...register("confirmPassword", { required: true })}
                type={typeConfirmationPassword ? "password" : "text"}
                placeholder="Please input your confirmation password"
                className="w-full p-5 rounded-2xl focus:outline-none focus:border-0"
              />
              <button
                type="button"
                className="mr-3"
                onClick={handleChangeTypeConfirmationPassword}
              >
                {typeConfirmationPassword ? <EyeIcon /> : <EyeCloseIcon />}
              </button>
            </div>
            <p className="text-xs text-cherryRed">{errors.confirmPassword?.message}</p>
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="h-12 bg-softBlue p-5 rounded-2xl flex items-center justify-center text-white mt-5 hover:bg-primerText/50"
          >
            {mutation.isPending ? "Loading..." : "Submit"}
          </button>
          <p className="text-center text-xs text-primerText font-semibold ">
            Apakah anda sudah memiliki akun?{" "}
            <Link href={"/auth/login"} className="text-softBlue">
              Masuk
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};
export default App;
