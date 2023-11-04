import supabase from "@/utils/supabaseClient";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();

  async function signUpWithEmail() {
    try {
      if (email && password) {
        const resp = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (resp.error) throw resp.error;
        const userId = resp.data.user?.id;
        if (userId) {
            await createUser(userId); 
        console.log("userId: ", userId);
        alert("Please check your email for verification");
        }    
      }
    } catch (error) {
      console.error("error: ", error);
    }
  }

  async function createUser(userId: string) {
    try {
       const {error} = await supabase
       .from("users")
       .insert({id: userId, username: username});
       if (error) throw error;
    } catch (error) {
     console.log("error: ", error)   
    }
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 w-full sm:w-[500px]">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signUpWithEmail();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block pt-3 text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="mt-3 p-3 w-full rounded-xl border bg-[rgb(37,37,37)] border-none focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
                autoComplete="current-password"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block pt-3 text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-3 p-3 w-full rounded-xl border bg-[rgb(37,37,37)] border-none focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                autoComplete="current-email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block pt-3 text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="mt-3 p-3 w-full rounded-xl border bg-[rgb(37,37,37)] border-none focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 ml-3 text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline no-underline"
              >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}