import { Sidebar, Header } from "@/components";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen gap-8 p-5 overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto pr-2 pb-5 pt-7.5">
          {children}
        </div>
      </div>
    </div>
  );
}
