/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Icon from "@mdi/react";
import { mdiInformationVariant } from "@mdi/js";
import { Coral } from "../Ccoral";

//camera={{ zoom: 12, position: [12, 10, 20] }}

export function About() {
	return (
		<section className="mt-16 w-full grid md:grid-cols-2 sm:grid-cols-1 pb-2 mb-4" id="about">
			<div className="mt-12 h-[360px] mx-8 flex">
				<Canvas camera={{ zoom: 12, position: [12, 10, 20] }} className="pt-4 cursor-pointer" >
					<PerspectiveCamera makeDefault fov={52} position={[1, 3, 3]} />
					<ambientLight intensity={0.2} />
					<pointLight position={[35, 15, 10]} />
					<Suspense fallback={null}>
						<Coral />
					</Suspense>

					<OrbitControls />
				</Canvas>
			</div>
			<div className="mt-12 h-[360px] mx-8 flex flex-col">
				<header data-aos-once="true" data-aos="fade-left" className="flex gap-4 justify-end">

					<div className="flex flex-col">
						<h2 className="font-nunito text-sm md:text-base font-bold text-text text-right dark:text-white">
							Ruan Pablo Gomes Rocha
						</h2>
						<span className="font-nunito font-medium text-subText text-right dark:text-secondary text-sm md:text-base ">
							Junior FrontEnd and Mobile Developer
						</span>
					</div>

					<img
						className="w-[100px] h-[100px] rounded-full"
						src="https://i.pinimg.com/564x/0b/02/d0/0b02d0f8910069b921ba9fb041ca27be.jpg"
						alt="Perfil Image"
					/>

				</header>

				<span data-aos="fade-right" data-aos-once="true" className="flex w-[140px] mb-4 items-center justify-center px-4 py-1 rounded-lg text-lg font-nunito font-medium bg-white text-red dark:bg-darkSecondary transition-all duration-500">
					<Icon
						path={mdiInformationVariant}
						size={1}
					/>
					About ME
				</span>
				<span data-aos="fade-left" className="text-justify font-nunito text-subText dark:text-primary mb-4">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industrys
					standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book.
					It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages.
				</span>
			</div>
		</section>
	);
}
