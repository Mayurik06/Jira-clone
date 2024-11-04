
import { getCurrent } from '@/features/auth/action'
import { SignUpCard } from '@/features/auth/components/signUpCard'
import {redirect} from "next/navigation"

type Props = {}

export default async function SignUpPage({}: Props) {
  const user =await getCurrent();
  if(user) redirect("/")
  return <SignUpCard/>
}