import Fitnessgoal from "@/app/components/Fitnessgoal";
export default function FitnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>

  <Fitnessgoal children={undefined}/>
  {children}</>;
}