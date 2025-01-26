import { useGLTF } from "@react-three/drei";

export function HackerRoom() {
  const { scene } = useGLTF('/models/razer_huntsman.glb'); // Load the GLB model
  return <primitive object={scene} dispose={null} position={[5,-6, 22]} scale={3} />; // Render the loaded scene
}