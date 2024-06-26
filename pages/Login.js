import { useSession, signIn, signOut } from "next-auth/react"
import font from '../styles/Fonts.module.css'
import { useRouter } from "next/router"
import Head from 'next/head';

export default function Login() {


  const { data: session } = useSession()
  const router = useRouter()

  const handleClick = () => {
    fetch(`https://any-chat-server-gt1k.onrender.com/email?email=${session.user.email}`)
			.then(res => res.json())
			.then(data => {
				if(data.length === 0) {
					const userID = crypto.randomUUID()
					router.push(`/components/Connected?name=${session.user.name}&email=${session.user.email}&userID=${userID}`)
				} else {
          router.push(`/components/Connected?name=${session.user.name}&email=${session.user.email}&userID=${data[0].userID}`)
				}
			})
    }


  if (session) {
    return (
      <>
        <Head>
          <title> Login </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="author" content="Asadullah Samoon" />
          <meta name="description" content="This is Login page for user authorization" />
          <meta charSet="utf-8" />
        </Head>
        <button className={`${font.poppinsSemiBold} text-white hover:text-black hover:cursor-pointer hover:transition-all hover:duration-700 text-xl text-center mx-auto -mt-10 rounded-xl w-[90%] h-12 bg-[#9CAEBC] hover:bg-white hover:border-2 hover:border-solid hover:border-[#9CAEBC] `} onClick={handleClick}> Join </button>
      </>
    )
  }
  return (
    <>
      <Head>
          <title> Login </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="author" content="Asadullah Samoon" />
          <meta name="description" content="This is Login page of any-chat for user authorization" />
          <meta charSet="utf-8" />
      </Head>
      {/* Not signed in <br /> */}
      <button className={`${font.poppinsSemiBold} text-white hover:text-black hover:cursor-pointer hover:transition-all hover:duration-700 text-xl text-center mx-auto -mt-10 rounded-xl w-[90%] h-12 bg-[#9CAEBC] hover:bg-white hover:border-2 hover:border-solid hover:border-[#9CAEBC]`} onClick={() => signIn('google', `https://any-chat-client-99n9.onrender.com/components/Connected`)}> Sign in with Google </button>
    </>
  )

}