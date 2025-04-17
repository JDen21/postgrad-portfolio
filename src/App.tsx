import { useEffect, useState } from "react";
import styles from "./App.module.css";
import avatarMe from "./assets/avatarMe.png";
import gradMe from "./assets/grad_me.png";
import front from "./assets/front.png";
import icon from './assets/icon.png';
import { motion, AnimatePresence } from "motion/react";

function App() {

  return (
    <>
      <Hero />
      <WhatDoIDo />
      <RandomCarousel />
      <section className={styles['footer']}
        style={{
          backgroundColor: '#030303',
          height: '50vh',
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', flexFlow: 'column'
        }}
      >
        <nav
          style={{
            display: 'flex', justifyContent: 'center',
            columnGap: '8%', minWidth: '250px'
          }}
        >
          <a style={{ backgroundColor: 'transparent', border: 'none',  }}>
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1147 28.6731C12.1147 28.8204 11.9468 28.9382 11.735 28.9382C11.494 28.9603 11.3261 28.8425 11.3261 28.6731C11.3261 28.5259 11.494 28.408 11.7058 28.408C11.9249 28.3859 12.1147 28.5038 12.1147 28.6731ZM9.84366 28.3418C9.79255 28.489 9.93859 28.6584 10.1577 28.7026C10.3475 28.7762 10.5666 28.7026 10.6104 28.5553C10.6542 28.408 10.5155 28.2387 10.2964 28.1724C10.1065 28.1209 9.89478 28.1945 9.84366 28.3418ZM13.0713 28.2166C12.8596 28.2681 12.7135 28.408 12.7354 28.5774C12.7573 28.7247 12.9472 28.8204 13.1663 28.7688C13.378 28.7173 13.5241 28.5774 13.5022 28.4301C13.4803 28.2902 13.2831 28.1945 13.0713 28.2166ZM17.8763 0C7.74787 0 0 7.75367 0 17.9667C0 26.1327 5.09709 33.1206 12.3776 35.58C13.3123 35.7494 13.6409 35.1676 13.6409 34.689C13.6409 34.2325 13.619 31.7142 13.619 30.1679C13.619 30.1679 8.50732 31.2724 7.43386 27.9736C7.43386 27.9736 6.60139 25.8308 5.40379 25.2786C5.40379 25.2786 3.73154 24.1225 5.52063 24.1446C5.52063 24.1446 7.33893 24.2919 8.33936 26.0444C9.93859 28.8867 12.6186 28.0693 13.6628 27.5833C13.8308 26.4052 14.3054 25.5879 14.8312 25.1019C10.7492 24.6453 6.6306 24.0489 6.6306 16.9653C6.6306 14.9404 7.18558 13.9242 8.35397 12.6282C8.16411 12.1496 7.5434 10.1762 8.54383 7.62849C10.07 7.14987 13.5825 9.61661 13.5825 9.61661C15.043 9.20426 16.613 8.99072 18.1684 8.99072C19.7238 8.99072 21.2939 9.20426 22.7543 9.61661C22.7543 9.61661 26.2668 7.14251 27.793 7.62849C28.7934 10.1836 28.1727 12.1496 27.9829 12.6282C29.1513 13.9316 29.8669 14.9477 29.8669 16.9653C29.8669 24.071 25.5658 24.638 21.4837 25.1019C22.1555 25.6836 22.7251 26.7881 22.7251 28.5185C22.7251 31 22.7032 34.0705 22.7032 34.6743C22.7032 35.1529 23.0391 35.7346 23.9665 35.5653C31.269 33.1206 36.22 26.1327 36.22 17.9667C36.22 7.75367 28.0048 0 17.8763 0ZM7.09795 25.3964C7.00302 25.47 7.02493 25.6394 7.14907 25.7793C7.26591 25.8971 7.43386 25.9487 7.52879 25.8529C7.62373 25.7793 7.60182 25.6099 7.47768 25.47C7.36084 25.3522 7.19288 25.3007 7.09795 25.3964ZM6.30929 24.8C6.25817 24.8957 6.3312 25.0135 6.47725 25.0871C6.59409 25.1608 6.74013 25.1387 6.79125 25.0356C6.84237 24.9399 6.76934 24.8221 6.62329 24.7484C6.47725 24.7042 6.36041 24.7263 6.30929 24.8ZM8.67527 27.4213C8.55844 27.5171 8.60225 27.738 8.77021 27.8779C8.93816 28.0472 9.14993 28.0693 9.24486 27.9515C9.3398 27.8558 9.29598 27.6349 9.14993 27.495C8.98928 27.3256 8.77021 27.3035 8.67527 27.4213ZM7.8428 26.3389C7.72596 26.4126 7.72596 26.604 7.8428 26.7734C7.95964 26.9427 8.1568 27.0164 8.25173 26.9427C8.36857 26.847 8.36857 26.6555 8.25173 26.4862C8.1495 26.3168 7.95964 26.2432 7.8428 26.3389Z" fill="white"/>
            </svg>
          </a>
          <a style={{ backgroundColor: 'transparent', border: 'none' }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.58368 33.87H0.559625V11.2567H7.58368V33.87ZM4.06787 8.17208C1.82181 8.17208 0 6.31221 0 4.06676C1.60764e-08 2.98819 0.428578 1.95379 1.19145 1.19113C1.95432 0.428461 2.989 0 4.06787 0C5.14673 0 6.18141 0.428461 6.94429 1.19113C7.70716 1.95379 8.13574 2.98819 8.13574 4.06676C8.13574 6.31221 6.31318 8.17208 4.06787 8.17208ZM33.8724 33.87H26.8635V22.862C26.8635 20.2385 26.8106 16.8741 23.2116 16.8741C19.5597 16.8741 19 19.7244 19 22.673V33.87H11.9835V11.2567H18.7202V14.3414H18.8185C19.7563 12.5647 22.047 10.6897 25.4645 10.6897C32.5732 10.6897 33.88 15.3696 33.88 21.4482V33.87H33.8724Z" fill="white"/>
            </svg>
          </a>
          <a style={{ backgroundColor: 'transparent', border: 'none' }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9488 8.2536C12.1403 8.2536 8.26175 12.1319 8.26175 16.94C8.26175 21.7481 12.1403 25.6264 16.9488 25.6264C21.7573 25.6264 25.6358 21.7481 25.6358 16.94C25.6358 12.1319 21.7573 8.2536 16.9488 8.2536ZM16.9488 22.5873C13.8414 22.5873 11.3011 20.0547 11.3011 16.94C11.3011 13.8253 13.8338 11.2927 16.9488 11.2927C20.0637 11.2927 22.5965 13.8253 22.5965 16.94C22.5965 20.0547 20.0562 22.5873 16.9488 22.5873ZM28.0174 7.89828C28.0174 9.02471 27.1101 9.92435 25.9912 9.92435C24.8646 9.92435 23.9649 9.01715 23.9649 7.89828C23.9649 6.7794 24.8722 5.87221 25.9912 5.87221C27.1101 5.87221 28.0174 6.7794 28.0174 7.89828ZM33.7709 9.95459C33.6424 7.24056 33.0224 4.83649 31.034 2.85578C29.0532 0.875066 26.6489 0.255149 23.9347 0.11907C21.1373 -0.0396898 12.7527 -0.0396898 9.95531 0.11907C7.24864 0.247589 4.8444 0.867506 2.85598 2.84822C0.867569 4.82893 0.255167 7.233 0.119078 9.94703C-0.0396927 12.7442 -0.0396927 21.1282 0.119078 23.9254C0.247607 26.6394 0.867569 29.0435 2.85598 31.0242C4.8444 33.0049 7.24108 33.6249 9.95531 33.7609C12.7527 33.9197 21.1373 33.9197 23.9347 33.7609C26.6489 33.6324 29.0532 33.0125 31.034 31.0242C33.0149 29.0435 33.6348 26.6394 33.7709 23.9254C33.9297 21.1282 33.9297 12.7518 33.7709 9.95459ZM30.157 26.9267C29.5673 28.4085 28.4256 29.55 26.9362 30.1473C24.7059 31.0318 19.4135 30.8277 16.9488 30.8277C14.4841 30.8277 9.18413 31.0242 6.96134 30.1473C5.47948 29.5576 4.33784 28.416 3.74056 26.9267C2.85598 24.6965 3.06012 19.4046 3.06012 16.94C3.06012 14.4755 2.86354 9.17591 3.74056 6.95328C4.33028 5.47153 5.47192 4.32997 6.96134 3.73273C9.19169 2.84822 14.4841 3.05234 16.9488 3.05234C19.4135 3.05234 24.7134 2.85578 26.9362 3.73273C28.4181 4.32241 29.5597 5.46397 30.157 6.95328C31.0416 9.18347 30.8374 14.4755 30.8374 16.94C30.8374 19.4046 31.0416 24.7041 30.157 26.9267Z" fill="white"/>
            </svg>
          </a>
          <a style={{ backgroundColor: 'transparent', border: 'none' }}>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.22 18.1447C36.22 8.12124 28.1143 0 18.11 0C8.10569 0 0 8.12124 0 18.1447C0 27.201 6.62256 34.7077 15.2803 36.07V23.3899H10.6798V18.1447H15.2803V14.147C15.2803 9.59989 17.9822 7.08816 22.1205 7.08816C24.1024 7.08816 26.1748 7.44227 26.1748 7.44227V11.9053H23.8906C21.6415 11.9053 20.9397 13.3042 20.9397 14.7389V18.1447H25.9623L25.159 23.3899H20.9397V36.07C29.5974 34.7077 36.22 27.201 36.22 18.1447Z" fill="white"/>
            </svg>
          </a>
        </nav>
        <div>
          <p>Find out more</p>
          <p>or</p>
          <p>Subscribe on my newsletter</p>
        </div>
        <input />

        <nav>
          <a>Wanna hire me?</a>
          <a>Read my blogs</a>
        </nav>
      </section>
    </>
  );
}

function RandomCarousel () {
  const firstLayer = (
    <div className="layer-1" style={{ width: '80%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ backgroundColor: '#030303', aspectRatio: '1/1', width: '25%' }}></div>
        <div style={{ backgroundColor: '#1842D6', aspectRatio: '1/1', width: '10%' }}></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ backgroundColor: '#18CAD6', aspectRatio: '1/1', width: '10%' }}></div>
        <div style={{ backgroundColor: '#030303', aspectRatio: '1/1', width: '25%' }}></div>
      </div>
    </div>
  );

  const secondLayer = (
    <div
      className="layer-2"
      style={{
        background: `rgba(3, 3, 3, 0.80)`,
        height: '100%',
        width: '100%',
        position: 'absolute'
      }}
    >
      <div
        style={{
          marginLeft: '170px', height: '150px',
          display: 'flex', alignItems: 'center',
          columnGap: '12px'
        }}
      >
        <img src={icon} style={{ maxWidth: '120px' }} />
        <p
          style={{
            color: 'white',
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '1.75rem'
          }}
        >
          Carousel of things you might find interesting.
        </p>
      </div>
    </div>
  );
  return (
    <section style={{ height: '100vh', position: 'relative' }}>
      {firstLayer}
      {secondLayer}
      <div className="layer-3" style={{ borderRadius: '5px', width: '78%', height: '60%',backgroundColor: '#EFEFEF', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>

      </div>
    </section>
  );
}

const lines = [
"Feeling unproductive? Code.",
"Feeling bored? Write.",
"Feeling ambitious? Design.",
'Feeling stress? Binge novels.'
];

function WhatDoIDo () {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true); // for AnimatePresence exit animation

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); // start exit
    }, 1500); // wait 1 second before triggering exit

    return () => clearTimeout(timer);
  }, [index]);

  // When exit animation completes, update index and re-show
  const handleExitComplete = () => {
    setIndex((prev) => (prev + 1) % lines.length);
    setVisible(true); // trigger enter
  };

  return (
    <section id="what-i-do" className={styles['what-i-do']}  style={{ height: "100vh", backgroundColor: "#030303" }}>
      <img src={icon} style={{ maxWidth: '120px', position: 'absolute', right: '50px', top: '50px' }} />
      <div>
        <p>What do I do when I'm...</p>
        <div>
          <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
                  {visible && (
                    <motion.div
                      key={index}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <p>
                        {lines[index]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Hero() {
  const [opacityLeft, setOpacityLeft] = useState(0.4);
  const [opacityRight, setOpacityRight] = useState(0.4);

  const firstLayer = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        columnGap: "12%",
        padding: "12px",
        backgroundColor: "#030303",
      }}
    >
      <div
        className="left"
        style={{ width: "50%", height: "100%", position: "relative" }}
      >
        <div
          onMouseEnter={() => setOpacityLeft(1)}
          onMouseOut={() => setOpacityLeft(0.4)}
          style={{
            width: "80%",
            position: "absolute",
            bottom: "0",
            backgroundColor: "#9DADE9",
            opacity: opacityLeft,
            borderRadius: "5px",
            padding: "12px",
          }}
        >
          <img
            src={avatarMe}
            style={{
              aspectRatio: "1/1",
              width: "100%",
              transform: "scaleX(-1)",
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>
      <div
        className="right"
        style={{ width: "50%", height: "100%", position: "relative" }}
      >
        <div
          onMouseEnter={() => setOpacityRight(1)}
          onMouseOut={() => setOpacityRight(0.4)}
          style={{
            width: "80%",
            position: "absolute",
            right: "0",
            backgroundColor: "#18CAD6",
            opacity: opacityRight,
            borderRadius: "5px",
            padding: "12px",
          }}
        >
          <img
            src={gradMe}
            style={{
              aspectRatio: "1/1",
              width: "100%",
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );

  const secondLayer = (
    <div
      style={{
        pointerEvents: "none",
        width: "95%",
        height: "95%",
        position: "absolute",
        background: `rgba(3, 3, 3, 0.93)`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "5px",
        padding: "12px",
      }}
    >
      <div style={{ height: "100%" }}>
        <p className={styles["top-name"]}>Den Garcia</p>
        <img
          src={front}
          style={{
            display: "block",
            margin: "auto",
            marginTop: "15%",
            width: "45%",
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="hero" style={{ height: "100vh", position: "relative" }}>
      {firstLayer}
      {secondLayer}
    </section>
  );
}

export default App;
