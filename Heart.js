/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'
import * as NEW from '.assets/heart.glb'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(heartModel)

 
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Thoracic_aorta.geometry} material={materials['Artery.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Superior_vena_cava001.geometry} material={materials['Vein.001']} position={[0, 0.08, 0]} scale={1.03}>
        <mesh geometry={nodes.Left_brachiocephalic_vein001.geometry} material={materials['Vein.001']} />
        <mesh geometry={nodes.Right_brachiocephalic_vein001.geometry} material={materials['Vein.001']} />
      </mesh>
      <mesh geometry={nodes.Septal_leaflet_of_right_atrioventricular_valve001.geometry} material={materials['Ligament.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Right_ventricle001.geometry} material={materials['Trapezius.001']} position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.03}>
        <mesh geometry={nodes.Anterior_papillary_muscle_of_right_ventricle001.geometry} material={materials['Trapezius.001']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Inferior_papillary_muscle_of_right_ventricle001.geometry} material={materials['Trapezius.001']} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Septal_papillary_muscle_of_right_ventricle001.geometry} material={materials['Trapezius.001']} rotation={[-Math.PI / 2, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.Right_semilunar_leaflet_of_pulmonary_valve001.geometry} material={materials['Cartilage.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Right_pulmonary_artery001.geometry} material={materials['Pulmonary artery.001']} position={[0, 0.08, 0]} scale={1.03}>
        <mesh geometry={nodes.Superior_lobar_artery_of_right_lung001.geometry} material={materials['Pulmonary artery.001']} />
      </mesh>
      <mesh geometry={nodes.Right_coronary_leaflet001.geometry} material={materials['Cartilage.001']} position={[0, 0.08, 0]} rotation={[0.04, 0.01, -0.18]} scale={1.03} />
      <mesh geometry={nodes.Right_coronary_artery001.geometry} material={materials['Artery.001']} position={[0, 0.08, 0]} scale={1.03}>
        <mesh geometry={nodes.Right_posterolateral_branch.geometry} material={materials['Artery.001']} />
      </mesh>
      <mesh geometry={nodes.Right_atrium001.geometry} position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.03}>
      <meshStandardMaterial transparent opacity={0.5} color="#E77F55"/>
      </mesh>
      <mesh geometry={nodes.Pulmonary_trunk001.geometry} material={materials['Pulmonary artery.001']} position={[0, 0.08, 0]} scale={1.03}>
        <mesh geometry={nodes.Bifurcation_of_pulmonary_trunk001.geometry} material={materials['Pulmonary artery.001']} />
      </mesh>
      <mesh geometry={nodes.Posterior_leaflet_of_left_atrioventricular_valve001.geometry} material={materials['Ligament.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes['Non-coronary_leaflet001'].geometry} material={materials['Cartilage.001']} position={[0, 0.08, 0]} rotation={[0.04, 0.01, -0.18]} scale={1.03} />
      <mesh geometry={nodes.Left_ventricle001.geometry} material={materials['Trapezius.001']} position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.03}>
        <mesh geometry={nodes.Inferior_papillary_muscle_of_left_ventricle001.geometry} material={materials['Trapezius.001']} rotation={[-Math.PI / 2, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.Left_semilunar_leaflet_of_pulmonary_valve001.geometry} material={materials['Cartilage.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Left_coronary_leaflet001.geometry} material={materials['Cartilage.001']} position={[0, 0.08, 0]} rotation={[0.04, 0.01, -0.18]} scale={1.03} />
      <mesh geometry={nodes.Left_coronary_artery001.geometry} material={materials['Artery.001']} position={[0, 0.08, 0]} scale={1.03}>
        <mesh geometry={nodes.Anterior_interventricular_artery_Left_ant_descending_artery.geometry} material={materials['Artery.001']}>
          <mesh geometry={nodes.Septal_branches_of_anterior_interventricular_artery001.geometry} material={materials['Artery.001']} />
        </mesh>
        <mesh geometry={nodes.Circumflex_artery_of_heart001.geometry} material={materials['Artery.001']} />
      </mesh>
      <mesh geometry={nodes.Left_atrium001.geometry} material={materials['Trapezius.001']} position={[0, 0.08, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.03} />
      <mesh geometry={nodes.Interatrial_septumt001.geometry} material={materials['Text.001']} position={[0, 0.08, -0.03]} rotation={[1.38, 0, -0.02]} scale={1.03} />
      <mesh geometry={nodes.Inferior_leaflet_of_right_atrioventricular_valve001.geometry} material={materials['Ligament.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Coronary_sinus001.geometry} material={materials['Vein.001']} position={[0, 0.08, 0]} scale={1.03}>
        <mesh geometry={nodes.Great_cardiac_vein001.geometry} material={materials['Vein.001']} />
        <mesh geometry={nodes.Inferior_vein_of_left_ventricle_Posterior_.geometry} material={materials['Vein.001']} />
        <mesh geometry={nodes.Inferior_vein_of_left_ventricle001.geometry} material={materials['Vein.001']} />
        <mesh geometry={nodes.Middle_cardiac_vein001.geometry} material={materials['Vein.001']}>
          <mesh geometry={nodes.unknown.geometry} material={materials['Vein.001']} />
        </mesh>
      </mesh>
      <mesh geometry={nodes.Ascending_aorta001.geometry} material={materials['Artery.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Aortic_arch001.geometry} material={materials['Artery.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Anterior_semilunar_leaflet_of_pulmonary_valve001.geometry} material={materials['Cartilage.001']} position={[0, 0.08, 0]} scale={1.03} />
      <mesh geometry={nodes.Left_subclavian_vein.geometry} material={materials['Vein.001']} position={[0, 0.08, 0]} />
    </group>
  )
}

useGLTF.preload('/heart.glb')
