import "./App.css";
import amsPhoto from './assets/AMS-min.png';
import logo from './assets/icon2.png';
import Footer2 from "./Footer2";
import GlassCard from "./GlassCard";
import WhatIDo from "./WhatIDo";
import Hero2 from "./Hero2";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      <Hero2 />
      <WhatIDo />
      <Footer2 />
    </>
  );
}

export default App;

function BoredomBoard () {
  return (
    <section
      style={{
          height: '110vh',
          backgroundColor: 'white',
          position: 'relative'
      }}
    >
    <div className="container"></div>
    <section style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 9999 }}>
      <div style={{ marginBottom: '5%', paddingTop: '1%', paddingLeft: '2%', display: 'flex', alignItems: 'center', width: '250px' }}>
        <img src={logo} style={{ width: '30%' }} />
        <p style={{ fontSize: '1.25rem', paddingLeft: '5%' }}> Boredom Board </p>
      </div>
      <div style={{ paddingLeft: '2%', paddingRight: '2%' }}>
        <GlassCard titleImage={<img src={amsPhoto} style={{ backgroundColor: 'white', borderRadius: '5px', width: '90%', marginLeft: '8px' }} />}>
          <p style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
            Accident Monitoring System AMS
          </p>
        </GlassCard>
      </div>
    </section>
    </section>
  );
}

