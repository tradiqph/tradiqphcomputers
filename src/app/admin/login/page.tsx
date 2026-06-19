"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Invalid username or password");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <BackgroundBeams />
      <Card className="relative z-10 w-full max-w-md border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <Link href="/" className="mx-auto mb-4 inline-block cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="TRADIQPH logo"
              width={200}
              height={80}
              className="h-auto w-44"
            />
          </Link>
          <CardTitle className="font-heading text-2xl text-gradient-gold">
            Admin Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
                required
                className="transition-colors duration-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                required
                className="transition-colors duration-200"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
            <ShimmerButton
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Signing in..." : "Sign In"}
            </ShimmerButton>
            <Link
              href="/"
              className="flex w-full cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
            >
              Back to site
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
