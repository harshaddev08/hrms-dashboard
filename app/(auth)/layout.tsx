import Image from "next/image";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-8 flex h-full gap-12 items-center">
      {/* dashboard image */}
      <div className="flex h-full flex-1 justify-end rounded-4xl items-center bg-primary-5">
        <Image
          className="py-24 pl-32"
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
