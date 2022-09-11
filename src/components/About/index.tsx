/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { Coral } from "../Ccoral";

import { Info } from "phosphor-react";

export function About() {
	return (
		<section className="mt-16 w-full grid md:grid-cols-2 sm:grid-cols-1 pb-2 mb-4" id="about">
			<div className="mt-12 h-[360px] mx-8 flex">

				<Canvas camera={{ zoom: 30 }} className="pt-4 cursor-pointer" >
					<PerspectiveCamera makeDefault fov={45} position={[1, 2.5, 3.2]} />

					<ambientLight intensity={0.5} />

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
							Desenvolvedor Front-End e Mobile - Junior
						</span>
					</div>

					<img
						className="w-[100px] h-[100px] rounded-full"
						src="https://i.pinimg.com/564x/0b/02/d0/0b02d0f8910069b921ba9fb041ca27be.jpg"
						alt="Perfil Image"
					/>

				</header>

				<span data-aos="fade-right" data-aos-once="true" className="flex w-[180px] mb-4 items-center justify-center px-4 py-1 rounded-lg text-lg font-nunito font-medium bg-white text-red dark:bg-darkSecondary transition-all duration-500 gap-2">
					<Info size={22} />
					Sobre Mim
				</span>
				<span data-aos="fade-left" className="text-justify font-nunito text-subText dark:text-primary mb-4 leading-7">
					Olá 👋, meu nome é Ruan, tenho 18 anos e estou no meu último ano do curso de técnico em informática
					pelo Instituto Federal do Paraná <a target="_blank" href="https://goioere.ifpr.edu.br/" className="text-green-900 hover:underline" rel="noreferrer">(IFPR)</a>
					. Me apaixonei pela programação durante o curso integrado e comecei a aprofundar no desenvolvimento para Web,
					assim como desenvolvimento de aplicativos mobile. Atualmente, estou focado em melhorar minhas skills e
					também buscando minha primeira oportunidade de trabalho nessa área.
				</span>
			</div>
		</section>
	);
}
