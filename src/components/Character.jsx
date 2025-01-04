import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Character(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('https://modelviewer.dev/shared-assets/models/RobotExpressive.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions['Idle']?.play();
    }
  }, [actions]);

  console.log('Character component loaded');

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('https://modelviewer.dev/shared-assets/models/RobotExpressive.glb');