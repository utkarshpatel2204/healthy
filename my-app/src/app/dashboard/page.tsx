import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = (await cookies()).get('user');

  if (!user) {
    redirect('/login');
  }

  return (
    <div>
      
    </div>
  );
}