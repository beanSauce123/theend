import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber/native'
import Heart from './Heart'


export default function Why(){

    return(
        <Canvas>
            <Suspense>
                <Heart/>
            </Suspense>
        </Canvas>
    )
}