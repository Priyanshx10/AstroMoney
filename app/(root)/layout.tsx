import Sidebar  from "@/components/ui/SideBar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const LoggedIn = {firstName : 'Priyansh', lastName: 'Y'}

    return (
      <main className="flex h-screen w-full font-inter">
        <Sidebar user= {LoggedIn}/>
          {children}
      </main>
    );
  }
  