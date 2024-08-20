import Image from "next/image";
import style from "@/styles/hero.module.css";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.image}>
        <Image
          src="/images/site/koduck.png"
          alt="An image showing koduck"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi I&apos;m Duck</h1>
      <p>
        I blog about web development - especially frontend framework like React
      </p>
    </section>
  );
};

export default Hero;
