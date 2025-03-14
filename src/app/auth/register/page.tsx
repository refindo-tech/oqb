"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import icons from "@/components/atom/icons";
import fetchAuth from "@/utils/lib/fetchAuth";
import { useMutation } from "@tanstack/react-query";
type dataRequest = {
  name: string;
  email: string;
  password: string;
};
const queryClient = new QueryClient()
const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
      <RegisterPage />
    </QueryClientProvider>
  )
}
const RegisterPage = () => {
  const router = useRouter()
  const { EyeIcon, EyeCloseIcon } = icons;
  const [typePassword, setTypePassword] = useState<boolean>(true);
  const [dataForm, setDataForm] = useState<dataRequest>({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  const handleChangeTypePassword = () => {
    setTypePassword(!typePassword);
  };
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetchAuth.fetchRegistUser(data);
      return response;
    },
    onSuccess:() => {
      router.push('/create/blog')
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", dataForm.name);
    form.append("email", dataForm.email);
    form.append("password", dataForm.password);
    mutation.mutate(form)
  };
  return (
    <main className="w-full min-h-screen font-poppins flex items-center justify-center p-5">
      <form onSubmit={handleSubmitRegister} method="POST" encType="application/json" className="rounded-2xl bg-white border-[1px] border-border shadow-md lg:w-[50%] p-5 flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-center">Register</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              placeholder="Please input your full name"
              value={dataForm.name}
              onChange={handleChange}
              className="border-2 border-gray-500 h-12 p-5 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Please input your email"
              value={dataForm.email}
              onChange={handleChange}
              className="border-2 border-gray-500 h-12 p-5 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pasword">Password:</label>
            <div className="flex justify-between gap-1 border-2 border-gray-500 h-12 rounded-2xl">
              <input
                type={typePassword ? "password" : "text"}
                name="password"
                placeholder="Please input your password"
                value={dataForm.password}
                onChange={handleChange}
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
          </div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="h-12 bg-softBlue p-5 rounded-2xl flex items-center justify-center text-white mt-5 hover:bg-primerText/50"
          >
            {mutation.isPending ? "Loading..." : "Submit"}
          </button>
          <p className="text-center text-xs text-primerText font-semibold ">Apakah anda sudah memiliki akun? <Link href={"/auth/login"} className="text-softBlue">Masuk</Link></p>
        </div>
      </form>
    </main>
  );
};
export default App;
