/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 nissan_gtr_legendary_customs_nfs_unbound.glb --transformed 
Author: BOOST7 (https://sketchfab.com/bogdanvelia64)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nissan-gtr-legendary-customs-nfs-unbound-75dd22a1ae8441fea6b3fc8bb8e530bc
Title: NISSAN GTR LEGENDARY CUSTOMS NFS UNBOUND
*/
"use client";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export default function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/wizard-transformed.glb")

  const modelRef = useRef();
  const size = 0.3;
  const position = {
    x: 0,
    y: -0.5,
    z: 0,
  }

  const [hovered, setHovered] = useState(false);



    useFrame((state) => {
      modelRef.current.position.y =
        position.y + Math.sin(state.clock.elapsedTime * 1.1) * 0.15;
        //modelRef.current.rotation.y = rotationY;
        //modelRef.current.rotation.y += 0.001;
        modelRef.current.rotation.y += hovered ? 0.02 : 0.001;
    });

  return (
    <>
    <group {...props} dispose={null}  ref={modelRef}
    position={[0, position.y, 0]}
    scale={[size, size, size]}
    rotation={[0.2, -0.7, 0]} 
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group scale={3.246}>
          <mesh geometry={nodes.Object_5.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['Material.048']} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['Material.044']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['Material.046']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Object_11.geometry} material={materials['Material.047']} />
          <mesh geometry={nodes.Object_12.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Object_13.geometry} material={materials['Material.043']} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Object_15.geometry} material={materials['Material.049']} />
          <mesh geometry={nodes.Object_16.geometry} material={materials['Material.015']} />
          <mesh geometry={nodes.Object_17.geometry} material={materials['Material.045']} />
          <mesh geometry={nodes.Object_18.geometry} material={materials['Material.007']} />
          <mesh geometry={nodes.Object_19.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Object_20.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Object_21.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Object_22.geometry} material={materials['Material.039']} />
          <mesh geometry={nodes.Object_23.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.Material} />
          <mesh geometry={nodes.Object_25.geometry} material={materials['Material.040']} />
          <mesh geometry={nodes.Object_26.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Object_27.geometry} material={materials['Material.038']} />
          <mesh geometry={nodes.Object_28.geometry} material={materials['Material.011']} />
          <mesh geometry={nodes.Object_29.geometry} material={materials['Material.018']} />
          <mesh geometry={nodes.Object_30.geometry} material={materials['Material.017']} />
          <mesh geometry={nodes.Object_31.geometry} material={materials['Material.014']} />
          <mesh geometry={nodes.Object_32.geometry} material={materials['Material.013']} />
          <mesh geometry={nodes.Object_33.geometry} material={materials['Material.023']} />
          <mesh geometry={nodes.Object_34.geometry} material={materials['Material.020']} />
          <mesh geometry={nodes.Object_35.geometry} material={materials['Material.019']} />
          <mesh geometry={nodes.Object_36.geometry} material={materials['Material.021']} />
          <mesh geometry={nodes.Object_37.geometry} material={materials['Material.022']} />
          <mesh geometry={nodes.Object_38.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.Object_39.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.Object_40.geometry} material={materials['Material.033']} />
          <mesh geometry={nodes.Object_41.geometry} material={materials['Material.032']} />
          <mesh geometry={nodes.Object_42.geometry} material={materials['Material.041']} />
          <mesh geometry={nodes.Object_43.geometry} material={materials['Material.028']} />
          <mesh geometry={nodes.Object_44.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.Object_45.geometry} material={materials['Material.042']} />
          <mesh geometry={nodes.Object_46.geometry} material={materials['Material.026']} />
          <mesh geometry={nodes.Object_47.geometry} material={materials['Material.030']} />
          <mesh geometry={nodes.Object_48.geometry} material={materials['Material.027']} />
          <mesh geometry={nodes.Object_49.geometry} material={materials['Material.016']} />
          <mesh geometry={nodes.Object_50.geometry} material={materials['Material.029']} />
          <mesh geometry={nodes.Object_51.geometry} material={materials['Material.050']} />
          <mesh geometry={nodes.Object_52.geometry} material={materials['Material.034']} />
          <mesh geometry={nodes.Object_53.geometry} material={materials['Material.035']} />
          <mesh geometry={nodes.Object_54.geometry} material={materials['Material.037']} />
          <mesh geometry={nodes.Object_55.geometry} material={materials['Material.051']} />
          <mesh geometry={nodes.Object_56.geometry} material={materials['Material.053']} />
          <mesh geometry={nodes.Object_57.geometry} material={materials['Material.052']} />
          <mesh geometry={nodes.Object_58.geometry} material={materials.tire} />
          <mesh geometry={nodes.Object_59.geometry} material={materials['Material.054']} />
          <mesh geometry={nodes.Object_60.geometry} material={materials['Material.055']} />
          <mesh geometry={nodes.Object_61.geometry} material={materials['Material.058']} />
          <mesh geometry={nodes.Object_62.geometry} material={materials['Material.057']} />
          <mesh geometry={nodes.Object_63.geometry} material={materials['Material.061']} />
          <mesh geometry={nodes.Object_64.geometry} material={materials['Material.059']} />
          <mesh geometry={nodes.Object_65.geometry} material={materials['Material.060']} />
        </group>
      </group>
    </group>
     </>
  )
}

useGLTF.preload("/models/wizard-transformed.glb")
