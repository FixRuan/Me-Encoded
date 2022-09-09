/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Coral(props: any) {
	const { nodes, materials } = useGLTF("/ccoral.glb");
	const group = useRef(null);

	useFrame(() => {
		if (!group.current) {
			return;
		}

		group.current.rotation.y += 0.003;
	});

	return (
		<group ref={group} {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
					<group position={[12.8, 22.14, 26.64]} rotation={[-Math.PI / 2, 0, 0]} scale={[37.04, 37.04, 20.42]}>
						<mesh geometry={nodes.Cube002_Rock_0.geometry} material={materials.Rock} />
					</group>
					<group position={[42.33, 23.58, 80.22]} rotation={[Math.PI, 0.65, -Math.PI]} scale={36.48}>
						<mesh geometry={nodes.Plane002_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[62.52, 38.69, 23.84]} rotation={[-1.82, -0.19, 0]} scale={27.02}>
						<mesh geometry={nodes.Cylinder_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[56.92, 54.74, -7.95]} rotation={[-Math.PI / 2, 0, -0.33]} scale={100.55}>
						<mesh geometry={nodes.Cylinder001_Material002_0.geometry} material={materials["Material.002"]} />
					</group>
					<group position={[52.65, 54.76, -8.49]} rotation={[-Math.PI / 2, 0, 2.17]} scale={67.76}>
						<mesh geometry={nodes.Cylinder002_Material002_0.geometry} material={materials["Material.002"]} />
					</group>
					<group position={[43, 19.9, 81.46]} rotation={[-Math.PI / 2, 0, 0]} scale={13.79}>
						<mesh geometry={nodes.Icosphere_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[52.4, 21.43, 71.44]} rotation={[-Math.PI / 2, 0, 2.28]} scale={16.55}>
						<mesh geometry={nodes.Icosphere002_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[57.3, 19.91, 85.38]} rotation={[-Math.PI / 2, 0, 2.28]} scale={13.59}>
						<mesh geometry={nodes.Icosphere003_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[-20.3, 23.93, 40.4]} rotation={[-1.33, 0.01, -0.1]} scale={22.97}>
						<mesh geometry={nodes.Cube004_Material004_0.geometry} material={materials.material_0} />
					</group>
					<group position={[-54.17, 59.26, -32.75]} rotation={[-Math.PI / 2, 0, -0.48]} scale={41.94}>
						<mesh geometry={nodes.Cylinder003_Material006_0.geometry} material={materials["Material.006"]} />
					</group>
					<group position={[-2.46, -29, 25.26]} rotation={[-Math.PI / 2, 0, 0]} scale={46.77}>
						<mesh geometry={nodes.Sand_Sand_0.geometry} material={materials.Sand} />
					</group>
					<group position={[-2.63, 51.78, 34.21]} rotation={[-Math.PI / 2, 0, 0]} scale={[46.77, 46.77, 51.14]}>
						<mesh geometry={nodes.Sea_Material005_0.geometry} material={materials["Material.005"]} />
					</group>
					<group position={[-28.59, 18.75, -20.26]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[22.4, 22.4, 12.35]}>
						<mesh geometry={nodes.Cube001_Rock_0.geometry} material={materials.Rock} />
					</group>
					<group position={[-57.11, 27.85, -2.12]} rotation={[-1.48, -0.13, 0.79]} scale={9.54}>
						<mesh geometry={nodes.Cylinder006_Material007_0.geometry} material={materials["Material.007"]} />
					</group>
					<group position={[46.69, 49.23, 15.5]} rotation={[-1.48, -0.13, 0.79]} scale={12.04}>
						<mesh geometry={nodes.Cylinder004_Material008_0.geometry} material={materials["Material.008"]} />
					</group>
					<group position={[64.05, 49.23, 7.3]} rotation={[-1.64, 0.14, -2.5]} scale={12.04}>
						<mesh geometry={nodes.Cylinder005_Material008_0.geometry} material={materials["Material.008"]} />
					</group>
					<group position={[-71.4, 27.85, -20.58]} rotation={[-1.41, 0, 1.73]} scale={9.54}>
						<mesh geometry={nodes.Cylinder007_Material007_0.geometry} material={materials["Material.007"]} />
					</group>
					<group position={[30.09, 41.74, 12.66]} rotation={[-Math.PI / 2, 0, 0.87]} scale={6.67}>
						<mesh geometry={nodes.Icosphere004_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[34.18, 41.74, 20.31]} rotation={[-Math.PI / 2, 0, 2.56]} scale={4.19}>
						<mesh geometry={nodes.Icosphere005_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[29.84, 41.74, 20.87]} rotation={[-Math.PI / 2, 0, -2.59]} scale={4.19}>
						<mesh geometry={nodes.Icosphere006_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[10.42, 41.2, -26.38]} rotation={[0, -0.56, 0]} scale={21.92}>
						<mesh geometry={nodes.Plane003_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[8.69, 40.54, -17.33]} rotation={[Math.PI, 1.33, -Math.PI]} scale={13.99}>
						<mesh geometry={nodes.Plane004_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-28.69, 19.5, 88.38]} rotation={[-Math.PI / 2, 0, -1.31]} scale={6.67}>
						<mesh geometry={nodes.Icosphere007_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-37.3, 19.74, 87.31]} rotation={[-Math.PI / 2, 0, 0.37]} scale={4.19}>
						<mesh geometry={nodes.Icosphere008_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-35.26, 19.5, 83.44]} rotation={[-Math.PI / 2, 0, 1.5]} scale={4.19}>
						<mesh geometry={nodes.Icosphere009_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[24.54, 18.12, 73.23]} rotation={[-Math.PI / 2, 0, -0.33]} scale={100.55}>
						<mesh geometry={nodes.Cylinder008_Neon_Green_0.geometry} material={materials.Neon_Green} />
					</group>
					<group position={[20.27, 18.14, 72.68]} rotation={[-Math.PI / 2, 0, 2.17]} scale={67.76}>
						<mesh geometry={nodes.Cylinder009_Neon_Green_0.geometry} material={materials.Neon_Green} />
					</group>
					<group position={[-61.19, 20.2, -17.19]} rotation={[-Math.PI / 2, 0, 2.13]} scale={40.93}>
						<mesh geometry={nodes.Cylinder010_Neon_Green_0.geometry} material={materials.Neon_Green} />
					</group>
					<group position={[-59.99, 20.2, -15.92]} rotation={[-Math.PI / 2, 0, -1.65]} scale={27.58}>
						<mesh geometry={nodes.Cylinder011_Neon_Green_0.geometry} material={materials.Neon_Green} />
					</group>
					<group position={[62.12, 38.88, 34.26]} rotation={[-1.41, 0.07, -0.08]} scale={25.3}>
						<mesh geometry={nodes.Cylinder012_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[69.94, 38.88, 29.77]} rotation={[-1.54, 0.27, -0.09]} scale={25.3}>
						<mesh geometry={nodes.Cylinder013_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[-25.9, 33.37, 22.15]} rotation={[-1.31, 0.19, 3.11]} scale={40.3}>
						<mesh geometry={nodes.Cylinder014_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[-24.71, 32.41, 8.27]} rotation={[-1.74, -0.07, 3.03]} scale={37.74}>
						<mesh geometry={nodes.Cylinder015_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[-36.67, 33.66, 12.94]} rotation={[-1.61, -0.27, 3.02]} scale={37.74}>
						<mesh geometry={nodes.Cylinder016_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[23.9, 38.85, 94.51]} rotation={[-Math.PI / 2, 0, 1.47]} scale={20.39}>
						<mesh geometry={nodes.Cylinder017_Material006_0.geometry} material={materials["Material.006"]} />
					</group>
					<group position={[-0.61, 29.03, 72.44]} rotation={[-1.48, -0.13, 0.79]} scale={9.54}>
						<mesh geometry={nodes.Cylinder018_Material002_0.geometry} material={materials["Material.002"]} />
					</group>
					<group position={[-65.26, 20.73, 11.38]} rotation={[-1.45, 0, 0.89]} scale={4.1}>
						<mesh geometry={nodes.Icosphere010_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-62.68, 20.31, 16.03]} rotation={[-1.45, 0, 2.57]} scale={2.58}>
						<mesh geometry={nodes.Icosphere011_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-65.34, 19.62, 16.39]} rotation={[-1.45, 0, -2.58]} scale={2.58}>
						<mesh geometry={nodes.Icosphere012_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[20.84, 20.33, 84.36]} rotation={[-1.45, 0, 0.89]} scale={2.31}>
						<mesh geometry={nodes.Icosphere013_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[23.3, 20.44, 87.17]} rotation={[-1.49, -0.03, 2.59]} scale={2.58}>
						<mesh geometry={nodes.Icosphere014_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[16.36, 20.39, 79.11]} rotation={[-1.62, -0.13, -2.52]} scale={2.58}>
						<mesh geometry={nodes.Icosphere015_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-14.78, 20.21, 71.02]} rotation={[-1.41, 0.2, -2.64]} scale={2.58}>
						<mesh geometry={nodes.Icosphere016_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-42.81, 21.29, 26.66]} rotation={[-1.56, 0.1, -1.22]} scale={2.51}>
						<mesh geometry={nodes.Icosphere017_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[64.86, 18.84, 60.41]} rotation={[Math.PI, 1.33, -Math.PI]} scale={24.48}>
						<mesh geometry={nodes.Plane005_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-32.13, 21.51, -38.92]} rotation={[0, -0.56, 0]} scale={21.92}>
						<mesh geometry={nodes.Plane006_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[16.37, 18.4, 92.39]} rotation={[Math.PI, 1.36, -Math.PI]} scale={12.55}>
						<mesh geometry={nodes.Plane007_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[19.28, 20.03, 86.78]} rotation={[0, -1.56, 0]} scale={12.55}>
						<mesh geometry={nodes.Plane008_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-30.62, 58.7, 89.97]} rotation={[-2.3, 1.14, 0.39]} scale={3.59}>
						<mesh geometry={nodes.BezierCurve002_Material016_0.geometry} material={materials["Material.016"]} />
					</group>
					<group position={[-31.41, 60.71, 86.99]} rotation={[-1.9, -0.28, 1.56]} scale={7.97}>
						<mesh geometry={nodes.Sphere002_Material016_0.geometry} material={materials["Material.016"]} />
					</group>
					<group position={[-49.93, 87.52, 8]} rotation={[-0.4, -0.65, -2.21]} scale={3.59}>
						<mesh geometry={nodes.BezierCurve001_Material016_0.geometry} material={materials["Material.016"]} />
					</group>
					<group position={[-47.62, 89.53, 10.04]} rotation={[-1.45, 0.41, -0.97]} scale={7.97}>
						<mesh geometry={nodes.Sphere001_Material016_0.geometry} material={materials["Material.016"]} />
					</group>
					<group position={[-19.43, 23.07, 38.6]} rotation={[-1.56, -0.03, -0.01]} scale={10.12}>
						<mesh geometry={nodes.Icosphere018_Material010_0.geometry} material={materials["Material.010"]} />
					</group>
					<group position={[23.85, 56.42, -30.12]} rotation={[-1.47, -0.18, 0.03]} scale={16.13}>
						<mesh geometry={nodes.Cube003_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[35.96, 56.55, -32.87]} rotation={[-1.17, -0.06, 0.25]} scale={16.13}>
						<mesh geometry={nodes.Cube006_Material009_0.geometry} material={materials["Material.009"]} />
					</group>
					<group position={[-8.67, 31, 16.43]} rotation={[-Math.PI / 2, 0, 2.74]} scale={40.93}>
						<mesh geometry={nodes.Cylinder019_Material008_0.geometry} material={materials["Material.008"]} />
					</group>
					<group position={[28.92, 29.51, 48.32]} rotation={[-Math.PI / 2, 0, -1.04]} scale={27.58}>
						<mesh geometry={nodes.Cylinder020_Material008_0.geometry} material={materials["Material.008"]} />
					</group>
					<group position={[21.06, 61.23, 11.14]} rotation={[-Math.PI / 2, 0, 2.2]} scale={20.39}>
						<mesh geometry={nodes.Cylinder021_Material007_0.geometry} material={materials["Material.007"]} />
					</group>
					<group position={[52.8, 65.64, -37.25]} rotation={[-1.56, 0.22, 0.91]} scale={9.22}>
						<mesh geometry={nodes.Cylinder022_Neon_Green_0.geometry} material={materials.Neon_Green} />
					</group>
					<group position={[-19.8, 41.23, -24.83]} rotation={[-1.67, 0.23, 1.4]} scale={9.22}>
						<mesh geometry={nodes.Cylinder023_Material006_0.geometry} material={materials["Material.006"]} />
					</group>
					<group position={[-23.45, 41.47, -27.67]} rotation={[-1.81, -0.09, 2.91]} scale={9.22}>
						<mesh geometry={nodes.Cylinder024_Material006_0.geometry} material={materials["Material.006"]} />
					</group>
					<group position={[-68.52, 19.6, 21.25]} rotation={[-1.33, 0.01, -0.1]} scale={7.79}>
						<mesh geometry={nodes.Cube007_Material008_0.geometry} material={materials["Material.008"]} />
					</group>
					<group position={[-63.27, 19.76, 24.56]} rotation={[-1.33, 0.01, -0.1]} scale={7.79}>
						<mesh geometry={nodes.Cube008_Material008_0.geometry} material={materials["Material.008"]} />
					</group>
					<group position={[-47.31, 19.42, 57.85]} rotation={[-1.48, 0.2, -1.06]} scale={3.79}>
						<mesh geometry={nodes.Icosphere019_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-45.84, 21.01, 12.76]} rotation={[-Math.PI / 2, 0, 2.56]} scale={5.72}>
						<mesh geometry={nodes.Icosphere020_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[-51.75, 20.54, 13.53]} rotation={[-Math.PI / 2, 0, -2.59]} scale={5.72}>
						<mesh geometry={nodes.Icosphere021_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[-69.46, 20.82, -14.42]} rotation={[-1.46, 0.04, -1.21]} scale={3.55}>
						<mesh geometry={nodes.Icosphere022_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[-66.7, 19.86, -12.93]} rotation={[-1.46, 0.04, -0.08]} scale={3.55}>
						<mesh geometry={nodes.Icosphere023_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[-69.63, 21.57, 57.45]} rotation={[-1.46, 0.04, -0.08]} scale={3.55}>
						<mesh geometry={nodes.Icosphere024_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[-11.49, 39.46, -26.01]} rotation={[-1.82, -0.19, 0]} scale={14.8}>
						<mesh geometry={nodes.Cylinder025_Material002_0.geometry} material={materials["Material.002"]} />
					</group>
					<group position={[8.69, 29.2, 48.36]} rotation={[Math.PI, 1.33, -Math.PI]} scale={13.99}>
						<mesh geometry={nodes.Plane009_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[9.45, 48.44, 12.47]} rotation={[-1.45, 0.1, 2.4]} scale={7.5}>
						<mesh geometry={nodes.Cylinder026_Neon_Green_0.geometry} material={materials.Neon_Green} />
					</group>
					<group position={[46.53, 42.62, 42.09]} rotation={[-1.55, 0.16, -3.11]} scale={6.07}>
						<mesh geometry={nodes.Cylinder027_Material006_0.geometry} material={materials["Material.006"]} />
					</group>
					<group position={[39.88, 55.79, -18.69]} rotation={[-Math.PI / 2, 0, -1.03]} scale={8.09}>
						<mesh geometry={nodes.Icosphere025_Rock_0.geometry} material={materials.Rock} />
					</group>
					<group position={[-19.88, 32.68, -11.74]} rotation={[-Math.PI / 2, 0, -2.94]} scale={4.09}>
						<mesh geometry={nodes.Icosphere026_Rock_0.geometry} material={materials.Rock} />
					</group>
					<group position={[-28.08, 33.1, -19.62]} rotation={[-Math.PI / 2, 0, -1.44]} scale={2.17}>
						<mesh geometry={nodes.Icosphere027_Rock_0.geometry} material={materials.Rock} />
					</group>
					<group position={[-67.11, 20.39, -37.96]} rotation={[-1.8, 0, -2.59]} scale={3.96}>
						<mesh geometry={nodes.Icosphere028_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[60.28, 35.76, 11.81]} rotation={[-Math.PI / 2, 0, 0.36]} scale={8.09}>
						<mesh geometry={nodes.Icosphere029_Rock_0.geometry} material={materials.Rock} />
					</group>
					<group position={[62.48, 15.81, 93.13]} rotation={[0, -1.38, 0]} scale={36.48}>
						<mesh geometry={nodes.Plane010_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-34.69, 18.82, 33.59]} rotation={[Math.PI, 1.23, -Math.PI]} scale={16.17}>
						<mesh geometry={nodes.Plane011_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-34.69, 18.82, 42.04]} rotation={[Math.PI, 0.51, -Math.PI]} scale={11.25}>
						<mesh geometry={nodes.Plane012_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[59.33, 52.41, -19.93]} rotation={[0, -1.03, 0]} scale={20.29}>
						<mesh geometry={nodes.Plane013_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[57.27, 52.41, -30.34]} rotation={[0, -0.32, 0]} scale={14.11}>
						<mesh geometry={nodes.Plane014_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-22.58, 18.55, 74.11]} rotation={[0, -0.32, 0]} scale={6.32}>
						<mesh geometry={nodes.Plane016_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-22.58, 19.98, 74.97]} rotation={[Math.PI, 0.84, -Math.PI]} scale={5.17}>
						<mesh geometry={nodes.Plane015_Material001_0.geometry} material={materials["Material.001"]} />
					</group>
					<group position={[-15.06, 19.59, 55.57]} rotation={[-Math.PI / 2, 0, 1.33]} scale={4.77}>
						<mesh geometry={nodes.Icosphere030_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-10.04, 19.77, 59.2]} rotation={[-Math.PI / 2, 0, 3.01]} scale={3}>
						<mesh geometry={nodes.Icosphere031_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-58, 19.56, 37.25]} rotation={[-1.73, -0.03, 0.15]} scale={2.15}>
						<mesh geometry={nodes.Icosphere032_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-6.26, 20.06, 99.03]} rotation={[-1.52, -0.08, 1.81]} scale={2.15}>
						<mesh geometry={nodes.Icosphere033_Sand_Rocks_0.geometry} material={materials.Sand_Rocks} />
					</group>
					<group position={[-20.56, 21.46, 89.69]} rotation={[-1.64, -0.01, 2.97]} scale={37.74}>
						<mesh geometry={nodes.Cylinder028_Material008_0.geometry} material={materials["Material.008"]} />
					</group>
					<group position={[-48.15, 25.16, 34.99]} rotation={[-1.42, -0.04, 1.44]} scale={5.34}>
						<mesh geometry={nodes.Cylinder029_Material002_0.geometry} material={materials["Material.002"]} />
					</group>
					<group position={[-48.15, 25.16, 29.44]} rotation={[-1.43, 0.07, 2.19]} scale={5.34}>
						<mesh geometry={nodes.Cylinder030_Material002_0.geometry} material={materials["Material.002"]} />
					</group>
					<group position={[-20.39, 21.06, 61.08]} rotation={[-1.28, 0.12, 2.89]} scale={18.86}>
						<mesh geometry={nodes.Cylinder031_Material006_0.geometry} material={materials["Material.006"]} />
					</group>
					<group position={[10.6, 43.74, -7.7]} rotation={[-1.43, -0.15, 0.14]} scale={12.34}>
						<mesh geometry={nodes.Cube009_Material007_0.geometry} material={materials["Material.007"]} />
					</group>
					<group position={[11.06, 43.28, -8.67]} rotation={[-1.56, -0.03, -0.01]} scale={5.43}>
						<mesh geometry={nodes.Icosphere034_Material003_0.geometry} material={materials["Material.003"]} />
					</group>
					<group position={[-49.58, 18.62, 76.43]} rotation={[-1.98, -0.05, 1.21]} scale={13.64}>
						<mesh geometry={nodes.Plane017_Material003_0.geometry} material={materials["Material.003"]} />
						<mesh geometry={nodes.Plane017_Brown_0.geometry} material={materials.Brown} />
					</group>
					<group position={[-44.16, 24.62, 75.01]} rotation={[-1.4, -0.03, 2.16]} scale={26.76}>
						<mesh geometry={nodes.Circle_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-44.81, 24.62, 79.35]} rotation={[-1.41, 0.05, 2.63]} scale={26.76}>
						<mesh geometry={nodes.Circle001_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-56.1, 22.01, 72.2]} rotation={[-1.4, 0.04, 2.58]} scale={26.76}>
						<mesh geometry={nodes.Circle002_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-57.01, 23.57, 75.88]} rotation={[-1.64, -0.16, -3.05]} scale={26.76}>
						<mesh geometry={nodes.Circle003_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-48.25, 24.21, 73.72]} rotation={[-1.54, 0.07, 2.77]} scale={26.76}>
						<mesh geometry={nodes.Circle004_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-46.27, 23.89, 77.71]} rotation={[-1.47, 0.13, -3.04]} scale={26.76}>
						<mesh geometry={nodes.Circle005_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-59.59, 22.75, 71.21]} rotation={[-1.65, -0.11, 2.67]} scale={26.76}>
						<mesh geometry={nodes.Circle006_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-51.33, 24.39, 77.84]} rotation={[-1.44, 0.11, 3.06]} scale={26.76}>
						<mesh geometry={nodes.Circle007_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-60.6, 22.24, 74.34]} rotation={[-1.6, 0.06, -2.72]} scale={26.76}>
						<mesh geometry={nodes.Circle008_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-57.91, 22.03, 70.2]} rotation={[-1.69, 0.07, -2.23]} scale={26.76}>
						<mesh geometry={nodes.Circle009_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-47.39, 22.72, 74.36]} rotation={[-1.81, -0.2, -0.24]} scale={26.76}>
						<mesh geometry={nodes.Circle010_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-50.95, 22.9, 72.59]} rotation={[-1.75, -0.25, 0.25]} scale={26.76}>
						<mesh geometry={nodes.Circle011_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-53.13, 23.77, 75.98]} rotation={[-1.79, -0.22, -0.06]} scale={26.76}>
						<mesh geometry={nodes.Circle012_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-55.96, 22.55, 77.02]} rotation={[-1.72, -0.27, 0.44]} scale={26.76}>
						<mesh geometry={nodes.Circle013_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-49.19, 23.29, 73.96]} rotation={[-1.81, -0.2, -0.24]} scale={26.76}>
						<mesh geometry={nodes.Circle014_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-53.92, 23.02, 71.26]} rotation={[-1.75, -0.25, 0.25]} scale={26.76}>
						<mesh geometry={nodes.Circle015_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-40.52, 24.41, 76.5]} rotation={[-1.4, -0.03, 2.16]} scale={26.76}>
						<mesh geometry={nodes.Circle016_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-41.52, 25.2, 80.05]} rotation={[-1.41, 0.05, 2.63]} scale={26.76}>
						<mesh geometry={nodes.Circle017_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-44.47, 25.72, 77.69]} rotation={[-1.68, -0.13, 2.73]} scale={26.76}>
						<mesh geometry={nodes.Circle018_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-61.6, 19.64, 80.53]} rotation={[-1.37, -0.11, 2.67]} scale={26.76}>
						<mesh geometry={nodes.Circle019_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-64.21, 19.76, 80.66]} rotation={[-1.36, -0.3, 2.71]} scale={26.76}>
						<mesh geometry={nodes.Circle020_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-55.59, 20.2, 89.34]} rotation={[-0.71, 0.08, 2.04]} scale={26.76}>
						<mesh geometry={nodes.Circle021_Material012_0.geometry} material={materials["Material.012"]} />
					</group>
					<group position={[-52.68, 25.47, 82.29]} rotation={[3.03, 0.34, 1.37]} scale={14.74}>
						<mesh geometry={nodes.Plane018_Material003_0.geometry} material={materials["Material.003"]} />
						<mesh geometry={nodes.Plane018_Brown_0.geometry} material={materials.Brown} />
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/ccoral.glb");

