import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	name: string,
	email: string,
	subject: string,
	message: string,
};

function ContactMe() {
	const {
		register,
		handleSubmit,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = FormData => {
		window.location.href = `mailto:gabrieljunior88@hotmail.com?subject=${FormData.subject}
		&body=Hi, my name is ${FormData.name}. ${FormData.message} (${FormData.email})`
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
									 max-w-full justify-evenly mx-auto items-center z-0'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact
			</h3>

			<div className='flex flex-col space-y-10'>
				<h4 className='text-4xl font-semibold text-center'>
					I have got just what you need.{' '}
					<span className='decoration-[#F7AB0A] underline'>Lets Talk.</span>
				</h4>

				<div className='space-y-10'>
					<div className='flex items-center space-x-5 justify-center'>
						<PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>+55 34 99999-9999</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>gabrieljunior88@hotmail.com</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>123 Developer Lane</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col space-y-2 w-fit mx-auto'>
						<div className='flex space-x-2'>
							<input {...register('name')} placeholder='Name' className='contactInput' type="text" />
							<input {...register('email')} placeholder='Email' className='contactInput' type="email" />
						</div>

						<input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

						<textarea {...register('message')} placeholder='Message' className='contactInput' />

						<button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</motion.div>
	)
}

export default ContactMe