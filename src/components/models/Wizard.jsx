/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ejohnson967 (https://sketchfab.com/ejohnson967)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/son-goku-117fe1c12ffe44f698fe5d68f94a61ad
Title: son goku
*/
"use client"
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Wizard(props) {
  const modelRef = useRef()
  const { nodes, materials, animations } = useGLTF('/models/son_goku.glb')
  const { actions } = useAnimations(animations, modelRef)
  const size = 1;
  const position = {
    x: 0,
    y: -1.5,
    z: 0,
  }
    console.log(actions)
    useEffect(() => {
        if (actions["mixamo.com"]) { // Remplace "Idle" par le nom de ton animation
            actions["mixamo.com"].timeScale = 0.9;
          actions["mixamo.com"].play();
        }
      }, [actions]);
      const playAnimation = (name) => {
        Object.values(actions).forEach(action => action.stop()); // Stoppe toutes les animations
        if (actions[name]) actions[name].play();
      };
      useFrame((state) => {
            modelRef.current.position.y =
              position.y + Math.sin(state.clock.elapsedTime * 1.1) * 0.15;
              //modelRef.current.rotation.y = rotationY;
              modelRef.current.rotation.y += 0.01;
             // modelRef.current.rotation.y += hovered ? 0.02 : 0.001;
          });
      
      
  return (
    
    <group ref={modelRef} {...props} dispose={null} actions={actions}
    position={[0, position.y, 0]}
    scale={[size, size, size]}
    rotation={[0.2, 0, 0]} 
      >
        
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.0400576}
          userData={{ name: 'Sketchfab_model' }}>
          <group
            name="gokufbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.0254}
            userData={{ name: 'goku.fbx' }}>
            <group name="Object_2" userData={{ name: 'Object_2' }}>
              <group name="RootNode" userData={{ name: 'RootNode' }}>
                <group name="Object_4" userData={{ name: 'Object_4' }}>
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['tex1.png']}
                    skeleton={nodes.Object_7.skeleton}
                    userData={{ name: 'Object_7' }}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials['tex2.png']}
                    skeleton={nodes.Object_8.skeleton}
                    userData={{ name: 'Object_8' }}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials['tex4.png']}
                    skeleton={nodes.Object_10.skeleton}
                    userData={{ name: 'Object_10' }}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials['tex1.png']}
                    skeleton={nodes.Object_12.skeleton}
                    userData={{ name: 'Object_12' }}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials['tex2.png']}
                    skeleton={nodes.Object_13.skeleton}
                    userData={{ name: 'Object_13' }}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials['tex3.png']}
                    skeleton={nodes.Object_15.skeleton}
                    userData={{ name: 'Object_15' }}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials['tex4.png']}
                    skeleton={nodes.Object_16.skeleton}
                    userData={{ name: 'Object_16' }}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials['face1.png']}
                    skeleton={nodes.Object_18.skeleton}
                    userData={{ name: 'Object_18' }}
                  />
                  <group
                    name="Object_6"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Object_6' }}
                  />
                  <group
                    name="Object_9"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Object_9' }}
                  />
                  <group
                    name="Object_11"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Object_11' }}
                  />
                  <group
                    name="Object_14"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Object_14' }}
                  />
                  <group
                    name="Object_17"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Object_17' }}
                  />
                  <group
                    name="Right_Hand"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Right_Hand' }}
                  />
                  <group
                    name="Hair"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Hair' }}
                  />
                  <group
                    name="Left_Hand"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Left_Hand' }}
                  />
                  <group
                    name="Body"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Body' }}
                  />
                  <group
                    name="Face"
                    rotation={[2e-7, 0, 0]}
                    scale={39.370079}
                    userData={{ name: 'Face' }}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/son_goku.glb')