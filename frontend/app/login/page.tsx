"use client";

import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the login/signup logic
    console.log(isLogin ? "Logging in" : "Signing up", { email, password });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1
          className={`text-4xl font-bold text-center mb-8 ${playfair.className}`}
        >
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <Button type="submit" className="w-full mb-4">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
        <p className="text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#FADADD] hover:text-[#F8C8CB] transition-colors"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </Layout>
  );
}
