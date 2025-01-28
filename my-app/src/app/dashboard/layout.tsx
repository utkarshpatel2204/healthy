import  Side  from "../components/Side";
import Navbar2 from "../components/Navbar2";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Side />
      <Navbar2/>
      <main className="flex-grow mx-[30px] mb-[50px] md:ml-[300px]  lg:ml-[300px] mt-[150px]">{children}</main>
    </div>
  );
}
