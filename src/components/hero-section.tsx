import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/ui/magic-button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSection = () => {
	return (
		<section id="hero" className="pb-20 pt-36">
			<div>
				<Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />

				<Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />

				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			<div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black-100/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
				{/* radial gradient for the container to give a faded look */}
				<div
					/* change the bg to bg-black-100, so it matches the bg color and will blend in */
					className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"
				/>
			</div>

			<div className="relative z-10 my-20 flex justify-center">
				<div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
					<p className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
						Dynamic Web Magic with Next.js
					</p>

					<TextGenerateEffect
						words="Transforming Concepts into Seamless User Experiences"
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
					/>

					<p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
						Hi! I&apos;m Michael, a Next.js Developer based in Kenya.
					</p>

					<a href="#about">
						<MagicButton title="SHOW MY WORK" icon={<FaLocationArrow />} position="right" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
