import { useSession, signIn, signOut } from "next-auth/react"
import font from '../styles/Fonts.module.css'
import { useEffect, useState } from "react"
import useLocalStorage from "use-local-storage"
import { useRouter } from "next/router"

export default function Login() {


  const { data: session } = useSession()
  const [myDetails, setMyDetails] = useLocalStorage('myDetails', {name: '', email: '', userID: ''})
  const [userID, setUserID] = useState('')
  const router = useRouter()

  const handleClick = () => {

    fetch(`https://any-chat-server.onrender.com/email?email=${session.user.email}`)
			.then(res => res.json())
			.then(data => {
				if(data.length === 0) {
					// localStorage.setItem('myDetails', JSON.stringify({ name, email, userID: crypto.randomUUID() }));
					const userID = crypto.randomUUID()
					router.push(`/components/Connected?name=${session.user.name}&email=${session.user.email}&userID=${userID}`)
				} else {
					// localStorage.setItem('myDetails', JSON.stringify({ name, email, userID: data[0].userID }));
					// setMyDetails({ name, email, userID: data[0].userID })
          router.push(`/components/Connected?name=${session.user.name}&email=${session.user.email}&userID=${data[0].userID}`)
				}
			})
    }


  if (session) {
    return (
      <>
        
        <button className={`${font.poppinsSemiBold} text-white hover:text-black hover:cursor-pointer hover:transition-all hover:duration-700 text-xl text-center mx-auto -mt-10 rounded-xl w-[90%] h-12 bg-[#9CAEBC] hover:bg-white hover:border-2 hover:border-solid hover:border-[#9CAEBC] `} onClick={handleClick}> Join the chat </button>
      </>
    )
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <button className={`${font.poppinsSemiBold} text-white hover:text-black hover:cursor-pointer hover:transition-all hover:duration-700 text-xl text-center mx-auto -mt-10 rounded-xl w-[90%] h-12 bg-[#9CAEBC] hover:bg-white hover:border-2 hover:border-solid hover:border-[#9CAEBC]`} onClick={() => signIn('google', `https://any-chat-client.onrender.com/components/Connected`)}> Sign in with Google </button>
    </>
  )

}