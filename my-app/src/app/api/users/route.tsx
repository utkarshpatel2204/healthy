import { NextResponse } from 'next/server';
import users from '../../../../public/users.json';

export async function GET() {
  return NextResponse.json(users);
}