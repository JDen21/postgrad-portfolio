import heroPhoto from './assets/hero_layer.png';
import style from './Hero2.module.css';

export default function Hero2() {

  return (
    <section className={style['main-section']}>
      <section>
        <p>
          Den Garcia
        </p>
        <nav>
          <button> Currently </button>
          <button> Certificates </button>
        </nav>
      </section>
      <section>
        <img src={heroPhoto} />
      </section>
    </section>
  );
}