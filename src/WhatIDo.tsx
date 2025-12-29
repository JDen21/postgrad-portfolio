
export default function WhatIDo() {
  return (
    <section
      style={{
        height: '110vh',
        backgroundColor: '#030303',
        position: 'relative',
        fontSize: '250%',
        fontFamily: 'Montserrat'

      }}
    >
      <section
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <p> What do I do when I'm... </p>
        <p> Feeling Productive? Code. </p>
        <p> Feeling Bored? Write. </p>
        <p> Feeling Ambitious? Design. </p>
      </section>
    </section>
  );
}