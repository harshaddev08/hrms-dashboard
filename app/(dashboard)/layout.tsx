import { Sidebar, Header } from "@/components";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen gap-8 p-5">
      <Sidebar />

      <div className="flex flex-col gap-7.5 flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}
