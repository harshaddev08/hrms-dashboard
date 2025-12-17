import { Sidebar } from "@/components";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen gap-8 p-5">
      <Sidebar />

      <div className="flex-1">{children}</div>
    </div>
  );
}
