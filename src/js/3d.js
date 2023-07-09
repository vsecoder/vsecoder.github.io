import { useFrame, useThree } from '@react-three/fiber'
import { AsciiEffect } from 'three-stdlib'
import { useEffect, useRef, useMemo } from 'react'

function Torusknot(props) {
    const ref = useRef()
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
    return (
        <mesh {...props} ref={ref}>
            <torusKnotGeometry args={[2, 0.3, 149, 32]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    )
}

function AsciiRenderer({ renderIndex = 1, characters = ' .:-+*=&@#', ...options }) {
    const { size, gl, scene, camera } = useThree()

    const effect = useMemo(() => {
        const effect = new AsciiEffect(gl, characters, options)
        effect.domElement.style.position = 'fixed'
        effect.domElement.style.top = '0px'
        effect.domElement.style.left = '0px'
        effect.domElement.style.right = '0px'
        effect.domElement.style.bottom = '0px'
        effect.domElement.style.color = '#272822'
        effect.domElement.style.backgroundColor = 'black'
        effect.domElement.style.pointerEvents = 'none'
        return effect
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [characters, options.invert])

    useEffect(() => {
        gl.domElement.parentNode.appendChild(effect.domElement)
        return () => gl.domElement.parentNode.removeChild(effect.domElement)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [effect])

    useEffect(() => {
        effect.setSize(size.width, size.height)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [effect, size])

    useFrame((state) => {
        effect.render(scene, camera)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, renderIndex)
}

export { Torusknot, AsciiRenderer }