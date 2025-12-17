import Image from "next/image";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8 flex h-screen gap-12 items-center">
      {/* dashboard image */}
      <div className="flex py-24 pl-32 h-full flex-1 justify-end rounded-4xl items-center bg-primary-5">
        <Image
          className=" h-full w-full object-contain object-right"
          src="/images/dashboard-view.png"
          alt="dashboard"
          width={778}
          height={685}
          priority
        />
      </div>

      {children}
    </div>
  );
}
