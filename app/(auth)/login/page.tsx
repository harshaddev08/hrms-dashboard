import { LoginForm, Typography } from "@/components";
import Image from "next/image";

export default function Login() {
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
          className="pb-10 "
        />
        <div className="flex flex-col pb-7">
          <Typography variant="h4" weight="bold" className="text-dark-500">
            Welcome 👋
          </Typography>
          <Typography variant="body1" className="text-gray-500">
            Please login here
          </Typography>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
