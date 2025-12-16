"use client";
import { Button, Checkbox, Input, Typography } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleForgotPassword = () => {
    router.push("forgot-password");
  };

  return (
    <div className="flex flex-1 w-full">
      <div className="flex flex-col justify-center min-w-[445px] ">
        <Image
          src="/images/hrms-logo.png"
          alt="hrms-logo"
          width={179}
          height={53}
          quality={100}
          priority
          className="pb-10"
        />
        <div className="flex flex-col pb-7">
          <Typography variant="h4" weight="bold" className="text-dark-500">
            Welcome 👋
          </Typography>
          <Typography variant="body1" className="text-gray-500">
            Please login here
          </Typography>
        </div>
        <div className="flex flex-col gap-5 pb-7">
          <Input label="Username" placeholder="Enter username" />
          <Input
            label="Password"
            placeholder="Enter password"
            type="password"
          />
          <div className="flex justify-between">
            <Checkbox label="Remember me" />
            <button className="cursor-pointer" onClick={handleForgotPassword}>
              <Typography variant="body2" className="text-primary-500">
                Forgot Password?
              </Typography>
            </button>
          </div>
        </div>
        <Button>Login</Button>
      </div>
    </div>
  );
}
