import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();
// -0.1 - 0.1 make function that returns between thsese numbers
  const getYAxisValue = (mouseY) => {
    // Convert mouse Y position from screen coordinates (0 to 1) to our desired range
    // mouseY is normalized from 0 (top) to 1 (bottom)
    const minY = -0.1;
    const maxY = 0.1;
    const range = maxY - minY;
    
    // Linear interpolation between min and max based on mouse position
    return minY + (mouseY * range);
  }
  // same for x axis
  const getXAxisValue = (mouseX) => {
    const minX = -0.8;
    const maxX = 0.09;
    const range = maxX - minX;
    return minX + (mouseX * range);
  }
  // import { useFrame } from '@react-three/fiber';
  // import { easing } from 'maath';
  
  // const HeroCamera = ({ isMobile, children }) => {
  //   useFrame((state, delta) => {
  //     easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
  //   });
  
  //   return <>{children}</>;
  // };
  
  // export default HeroCamera;
  

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [getXAxisValue(state.pointer.x), getYAxisValue(state.pointer.y), 20], 0.25, delta);
    // easing.damp3(state.camera.position, [getXAxisValue(state.pointer.x), 0, 20], 0.25, delta);
    if (!isMobile) {
      easing.dampE(group.current.rotation, [0, 0, 0], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
