import { ArrowLeftIcon, Button, Input, Typography } from "@/components";

export default function ForgotPassword({}) {
  return (
    <div className="flex flex-1 w-full">
      <div className="flex flex-col justify-center max-w-[445px] ">
        <button className="flex items-center gap-2 pb-7 cursor-pointer">
          <ArrowLeftIcon />
          <Typography variant="body1" className="text-dark-500">
            Back
          </Typography>
        </button>
        <div className="flex flex-col pb-7">
          <Typography variant="h4" weight="bold" className="text-dark-500">
            Forgot Password
          </Typography>
          <Typography variant="body1" className="text-gray-500">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </Typography>
        </div>
        <div className="flex flex-col gap-5 pb-7">
          <Input label="Email Address" placeholder="Enter Email" />
        </div>
        <Button>Send OTP</Button>
      </div>
    </div>
  );
}
