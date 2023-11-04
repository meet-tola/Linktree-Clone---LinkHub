import { useRouter } from "next/router";
import supabase from "@/utils/supabaseClient";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const router = useRouter();

  async function signInWithEmail() {
    try {
      if (email && password) {
        const resp = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (resp.error) throw resp.error;
        const userId = resp.data.user?.id;

        console.log("userId: ", userId)

        const { data, error } = await supabase
          .from("users")
          .select("username")
          .eq("id", userId);
        if (error) throw error;

        const username = data[0]?.username;

        // Set the username using useState
        setUsername(username);
        
        if (username) {
           // Construct the URL for the user's profile page
        const profilePageUrl = `/${username}`; 
        router.push(profilePageUrl);
        }
       
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
      <div className="p-4 sm:p-8 w-full sm:w-[400px] md:w-[500px]">          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission behavior
              signInWithEmail();
            }}
          >
            <div className="mb-4">
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
              className="px-5 py-[6px] text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline no-underline"
              >
              Login
            </button>
            <Link
              href="/signup"
              className="px-4 py-2 ml-3 text-sm font-semibold text-gray-900 bg-gray-100 transition duration-500 ease-in-out transform rounded-lg hover:text-gray-200 focus:text-gray-900 hover:bg-blue-600 focus:outline-none focus:shadow-outline no-underline"
              >
              Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
