import { getCurrent } from '@/features/auth/action'
import { SignInCard } from '@/features/auth/components/signInCard'
import { redirect } from 'next/navigation';

type Props = {}

export default async function SignInPage({}: Props) {
  const user=await getCurrent();

  if(user) redirect("/")

  return <SignInCard/>
}