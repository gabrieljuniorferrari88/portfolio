/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import Image from 'next/image'

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Props = {
	experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[31.25rem]
			 md:w-[37.5rem] xl:w-[56.25rem] snap-center bg-[#292929] p-10 hover:opacity-100
			 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
		>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.5,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					once: true,
				}}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src={urlFor(experience?.companyImage).url()}
				alt=""
			/>

			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">{experience?.company}</h4>
				<p className="font-bold text-2xl mt-1">{experience?.jobTitle}</p>

				<div className="flex space-x-2 my-2 gap-2">
					{experience.technologies.map((technology) => (
						<Image
							key={technology._id}
							src={urlFor(technology.image).url()}
							width={40}
							height={40}
							className="rounded-full"
						/>
					))}

				</div>
				<p className="uppercase py-5 text-gray-300">
					{' '}
					{(format(new Date(experience.dateStarted), "dd MMM 'de' yy", { locale: ptBR })).toString()} -{' '}
					{experience.isCurrentlyWorkingHere
						? "Atualmente"
						: format(new Date(experience.dateEnded), "dd MMM 'de' yy", { locale: ptBR }).toString()}
				</p>

				<ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5
				scrollbar scrollbar-track-custom-trackScroll scrollbar-thumb-custom-thumbScroll 
			 	scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-custom-DEFAULT">
					{experience.points.map((point) => (
						<li
							key={point}
							// className="break-all"
						>{point}</li>
					))}
				</ul>
			</div>
		</article>
	)
}
