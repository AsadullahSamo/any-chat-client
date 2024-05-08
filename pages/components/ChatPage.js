
import Image from 'next/image'
import logo from '../../public/assets/icons/logo.svg'
import font from '../../styles/Fonts.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Login from '../Login'
import { useSession } from 'next-auth/react'

export default function ChatPage() {

	const router = useRouter()
	const [userDetails, setUserDetails] = useState({name: '', email: ''})
	const [showMessage, setShowMessage] = useState(false)
	const [fieldMessage, setFieldMessage] = useState('')	
	
	const handleChange = (e) => {
		setUserDetails({...userDetails, [e.target.name]: e.target.value})
	} // end of handleChange

	const handleClick = () => {
		let {name, email} = userDetails
		if(!name || !email) {
		  handleMessage('Please fill in all the fields')
		  return
		}
		if (!isValidEmail(email)) {
		  handleMessage('Please enter a valid email address')
		  return
		} else {
			console.log(email)
			fetch(`https://any-chat-server-gt1k.onrender.com/email?email=${email}`)
			.then(res => res.json())
			.then(data => {
				if(data.length === 0) {
					const userID = crypto.randomUUID()
					router.push(`/components/Connected?name=${name}&email=${email}&userID=${userID}`)
					console.log('new user')
				} else {
					router.push(`/components/Connected?name=${name}&email=${email}&userID=${data[0].userID}`)
					console.log(data[0].userID)
				}
			})
			setUserDetails({ name: '', email: '' })
		}
	} // end of handleClick
	
	const handleMessage = (message) => {
		setFieldMessage(message)
		setShowMessage(true)
	} // end of handleMessage
	
	const isValidEmail = (email) => {
		const pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
		return pattern.test(email)
	} // end of isValidEmail

	const { data: session } = useSession()
  
	return (
		<div className={`min-h-screen w-[100%] bg-[#edf0f8]`}>
				<Image src={logo} alt="logo" className={`pt-10 mx-10`}/>  

				<div className={`${session ? 'mt-[15rem]' : 'mt-[1.5rem]'} w-[90%] md:w-[40%] ${session ? 'h-[200px]' : 'h-[610px]'} bg-white mx-auto rounded-xl shadow-2xl pt-10 flex flex-col items-center`}>
					{!session &&
					<>
					<h2 className={`mb-8 md:mb-16 text-xl md:text-3xl w-[90%] md:w-[70%] leading-relaxed text-center mx-auto ${font.poppinsSemiBold}`}> Create your account </h2>
					
					<label className={`pl-5 md:pl-12 self-start md:-ml-2 ${font.poppinsSemiBold}`}> Name* <br/>
						<input name="name" value={userDetails.name} placeholder='Enter your name' onChange={handleChange} type='text' maxLength={1000} className={`self-start ${font.poppinsMedium} bg-[#edf0f8] rounded-full shadow-lg md:mx-2 -mx-2 md:-ml-2 mt-2 pl-4 w-[20rem] md:w-[39rem] h-12 border-2 border-solid border-[#d8dbe3] focus:outline-none focus:border-2 focus:border-solid focus:border-[#edf0f8] focus:transition-all focus:duration-500`} required/>
					</label>
					<label className={`mt-5 pl-5 md:pl-12 self-start md:-ml-2 ${font.poppinsSemiBold}`}> Email* <br/>
						<input name="email" value={userDetails.email} placeholder='Enter your email' onChange={handleChange} type='email' className='self-start ${font.poppinsMedium} bg-[#edf0f8] rounded-full shadow-lg md:mx-2 -mx-2 md:-ml-2 mt-2 pl-4 w-[20rem] md:w-[39rem] h-12 border-2 border-solid border-[#d8dbe3] focus:outline-none focus:border-2 focus:border-solid focus:border-[#edf0f8] focus:transition-all focus:duration-500' required/>
					</label>
			
					{showMessage && <p className='text-red-500 text-center text-sm my-5'> {fieldMessage} </p> }
					<button className={`${font.poppinsSemiBold} text-white hover:text-black hover:cursor-pointer hover:transition-all hover:duration-700 text-xl text-center mx-auto ${showMessage ? '-mt-3' : 'mt-10'} rounded-xl w-[90%] h-12 bg-[#9CAEBC] hover:bg-white hover:border-2 hover:border-solid hover:border-[#9CAEBC] `} onClick={handleClick}> Join Chat </button>
					
					<p className={`mt-5 mb-8 md:mb-16 text-xl md:text-3xl w-[90%] md:w-[70%] leading-relaxed text-center mx-auto ${font.poppinsRegular}`}> OR </p>
					<Login />
					</>
					}
					
					{session && 
						<>
							<p className={`mt-2 text-6xl mb-16 ${font.poppinsMedium} md:text-xl leading-relaxed text-center mx-auto ${font.poppinsRegular}`}> Signed in successful, click on Join button to join the chat </p> 
							<Login />
						</>
					}
				</div>

		</div>
  )

}
