import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
	pageInfo: PageInfo
}
export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Olá, meu nome é ${pageInfo.name}`,
			'Developer',
			'Designer',
			'Creator',
			'<ButLovesToCodeMore />',
		],
		loop: true,
		delaySpeed: 2000,
	})
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />

			<Image
				width={128}
				height={128}
				className="relative rounded-full object-cover"
				src={urlFor(pageInfo?.heroImage).url()}
				alt="Gabriel Ferrari"
			/>

			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F4AB0A" />
				</h1>

				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experiencie</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
