"use client";
import { ArrowLeftIcon, Button, OTPInput, Typography } from "@/components";
import { useState } from "react";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

  const handleOTPChange = (value: string) => {
    setOtp(value);
    setError(false); // Clear error when user types
  };

  const handleOTPComplete = (value: string) => {
    console.log("OTP Complete:", value);
    // You can add verification logic here
  };

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError(true);
      return;
    }
    // Add your verification logic here
    console.log("Verifying OTP:", otp);
  };

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
            Enter OTP
          </Typography>
          <Typography variant="body1" className="text-gray-500">
            We have share a code of your registered email address
            robertallen@example.com
          </Typography>
        </div>
        <div className="flex flex-col gap-5 pb-7">
          <OTPInput
            numberOfInputs={6}
            value={otp}
            onChange={handleOTPChange}
            onComplete={handleOTPComplete}
            error={error}
          />
          {error && (
            <Typography variant="body2" className="text-error-500 text-center">
              Please enter a valid 6-digit OTP
            </Typography>
          )}
        </div>
        <Button onClick={handleVerify}>Verify</Button>
      </div>
    </div>
  );
}
