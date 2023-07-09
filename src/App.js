import './css/App.css';

import { Canvas } from '@react-three/fiber';
import { Torusknot, AsciiRenderer } from './js/3d';
import { myAge } from './js/age';

import { useEffect, useState } from 'react';


const logo_big = `
                                _             
  __   _____  ___  ___ ___   __| | ___ _ __   
  \\ \\ / / __|/ _ \\/ __/ _ \\ / _\` |/ _ \\ '__|  
   \\ V /\\__ \\  __/ (_| (_) | (_| |  __/ |     
    \\_/ |___/\\___|\\___\\___/ \\__,_|\\___|_|     
`

const logo_small = '<h1>vsecoder</h1>'


function App() {
  const isMobile = window.innerWidth < 450;

  const hr = '-'.repeat(isMobile ? window.innerWidth / 15 : 60);
  const space = ' '.repeat(isMobile ? 1 : 35);

  const [metrikaData, setMetrikaData] = useState('Visits is undefined');
  let token = process.env.YANDEX_METRIKA_TOKEN;


  useEffect(() => {
    if (!token) return setMetrikaData('Visits is undefined');
    fetch(
      'https://api-metrika.yandex.net/stat/v1/data?metrics=ym:s:visits&id=94252682', {
      headers: {
        "Authorization": `OAuth ${token}`
      }
    }
    )
      .then(r => r.json())
      .then(metrikaApiJSON => {
        console.log(metrikaApiJSON);
        setMetrikaData(metrikaApiJSON.data[0].metrics[0]);
      })
      .catch(e => {
        console.log(e);
        setMetrikaData('-');
      });
  }, [token]);

  return (
    <>
      <section>
        <header>
          <pre>
            <var>
              {isMobile ? (
                logo_small
              ) : (
                logo_big
              )}
            </var> {space} <b>resume</b></pre>
          <p>
            [<a href="https://t.me/vsecoder">Telegram</a>]
            [<a href="https://github.com/vsecoder">Github</a>]
          </p>
        </header>
        <p className='line'>
          {hr}
        </p>
        <main>
          <b>Web design, JavaScript, Python</b>
          <p>Hello, I'm a ~{myAge} years old developer! I have been developing since an early age, and I fell in love with coding.</p>
          <p>My resume contains a bunch of different rubbish that I'm too lazy to list, it's better to look at Github for yourself)))</p>
          <p>P.S. this whole page is written for the sake of interest without any special styles on React.js and THREE.js!</p>
        </main>
        <p className='line'>{hr}</p>
        <footer>
          <p> More links:<br />
            [<a href="https://github.com/vsecoder/vsecoder.github.io">PAGE SOURCES</a>]
            [<a href="https://t.me/vsecoder_bio">BIO</a>]
            [<a href="https://wakatime.com/@vsecoder">WAKATIME</a>]
            [<a href="https://projects.vsecoder.me/">PROJECTS</a>]
          </p>
        </footer>
        <p className='line'>{hr}</p>
        <footer>
          <p>Made with ❤️ by vsecoder. {metrikaData}</p>
        </footer>
      </section>
      <Canvas>
        <color attach="background" args={['black']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Torusknot />
        <AsciiRenderer invert />
      </Canvas>
    </>
  );
}

export default App;