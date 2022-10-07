import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
	experiences: Experience[]
}

{/* https://youtu.be/urgi2iz9P6U?t=12483 parei aqui */ }

export default function WorkExperience({ experiences }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			transition={{
				duration: 1.8,
			}}
			whileInView={{
				opacity: 1,
			}}
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
			max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Experience
			</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar
			 scrollbar-track-custom-trackScroll scrollbar-thumb-custom-thumbScroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-custom-DEFAULT">

				{experiences?.map(experience => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}


			</div>
		</motion.div>
	)
}
