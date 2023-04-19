import './App.css';

import { useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiEffect } from 'three-stdlib'

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

let header, hr, l;
let vsecoder_big = `
                                _             
  __   _____  ___  ___ ___   __| | ___ _ __   
  \\ \\ / / __|/ _ \\/ __/ _ \\ / _\` |/ _ \\ '__|  
   \\ V /\\__ \\  __/ (_| (_) | (_| |  __/ |     
    \\_/ |___/\\___|\\___\\___/ \\__,_|\\___|_|     
`

let vsecoder_small = '<h1>vsecoder</h1>'

function App() {
  if (window.innerWidth >= 450) {
    header = vsecoder_big
    hr = '-'.repeat(60)
    l = ' '.repeat(35)
  } else {
    header = vsecoder_small
    hr = '-'.repeat(window.innerWidth / 15)
    l = ''
  }

  return (
    <main>
      <section>
        <page>
          <header>
            <pre><h>{header}</h> {l} <b>resume</b></pre>
            <p>[<a href="https://t.me/vsecoder">Telegram</a>]   [<a href="https://github.com/vsecoder">Github</a>]</p>
          </header>
          <p className='line'>{hr}</p>
          <main>
            <b>Web design, JavaScript, Python</b>
            <p>Hello, I'm a developer! I have been developing since an early age, and I fell in love with coding.</p>
            <p>My resume contains a bunch of different rubbish that I'm too lazy to list, it's better to look at Github for yourself)))</p>
            <p>P.S. this whole page is written for the sake of interest without any special styles on React.js, Socket.io and THREE.js!</p>
          </main>
          <p className='line'>{hr}</p>
          <footer>
            <p> More links:<br />
              [<a href="https://github.com/vsecoder/resume">PAGE SOURCES</a>]
              [<a href="https://t.me/vsecoder_bio">BIO</a>]
              [<a href="https://wakatime.com/@vsecoder">WAKATIME</a>]
              [<a href="https://t.me/C0deWizard">CHANNEL</a>]
            </p>
          </footer>
          <p className='line'>{hr}</p>
          <footer>
            <p>Made with ❤️ by vsecoder</p>
          </footer>
        </page>
      </section>
      <Canvas>
        <color attach="background" args={['black']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Torusknot />
        <AsciiRenderer invert />
      </Canvas>
    </main>
  );
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

export default App;
