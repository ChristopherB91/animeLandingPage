import "./App.css";
import ippo from "./assets/Makunouchi_Ippo.jpg";
import takamura from "./assets/Mamoru_Takamura_-_Anime.jpg";
import kamagowa from "./assets/Genji_Kamogawa.jpg";
import miyata from "./assets/Miyata_Ichiro.jpg";
import aoki from "./assets/AokiMasaru.jpg";
import kimura from "./assets/Kimura_Tatsuya.jpg";
import aokiMura from "./assets/Aokimura.jpg";
import { Bio } from "./components/charBio";
import { Logo } from "./components/ippoLogo";
import { useState } from "react";
import { motion } from "framer-motion";

interface Boxer {
  name: string;
  age: number;
  weightClass: string;
  desc: string;
  img: string;
  ageNote?: string;
}

function App() {
  const boxers: Boxer[] = [
    {
      name: "Makunouchi_Ippo",
      age: 15,
      weightClass: "Featherweight",
      desc: "Makunouchi Ippo is high school kid who is picked on by bullies. On one fateful day he meets a professional boxer name Takamura who steps in to help. It is a little to late as ippo falls unconscious from the bullies beating. He awakens later to the sounds of a heavy bag being hit. After some convincing and a bad drawing he decides to hit the bag as well shocking, the bystanders in the gym and damaging his hand in the process. He recieves tapes of boxing footage that then inspires him to be a new person and answer a question he longs for...what is strength?",
      img: `${ippo}`,
    },
    {
      name: "Takamura_Mamoru",
      age: 19,
      weightClass: "Middleweight",
      desc: "Takamura Mamoru is a delinquent with a terrifying amount of potential. After seeing Takamura destroys a group of people and throws a pro class punch with no training coach Kamogawa decided to introduce him to the world of boxing. His natural instincts plus coach Kamogawa's wellspring of boxing knowledge gives him the right tools and skills needed, as he pursues his goal of conquering six different weight classes.",
      img: `${takamura}`,
    },
    {
      name: "Kamogawa_Genji",
      age: 72,
      weightClass: "Bantamweight",
      desc: "Kamogawa Genji is a former prize fighter and coach/owner of Kamogawa gym, he is also the trainer of Takamura and Ippo. after fighting a pro boxer from america and making a promise to a friend he decided to devote his life to learning boxing and raising up a world champion boxer. While on this path he has met many boxers not many with the potential and instincts of Takamura Mamoru or the determination and heart of Makunouchi Ippo. He believes these two are the ones who help fulfill his promise.",
      img: `${kamagowa}`,
    },
    {
      name: "Miyata_Ichiro",
      age: 15,
      weightClass: "Featherweight",
      desc: "Miyata Ichiro is Ippo's first opponent and one of his greatest rivals, he is also a boxing prodigy and son of professional boxer who couldn't reach the world stage. Seeing his father defeated and feeling as if his boxing style has failed him, Miyata has been determined ever since he was a child to prove that his father's boxing style can work not just on a national level, not just on a regional level, but on the world level as well.",
      img: `${miyata}`,
    },
    {
      name: "Kimura_Tatsuya",
      age: 17,
      weightClass: "Junior LightWeight",
      desc: "Kimura Tatsuya one of Ippo's gymmates and a talented boxer. He is a smart out boxer who uses his head. Most of Ippos advice and new techniques come from Kamogawa or Takamura but once in a while Kimura's insight is just what Ippo needs. He was introduced to boxing when he met Takamura with his friend Aoki and was brutally beat. After that Aoki and him joined the gym with the goal of beating Takamura.",
      img: `${kimura}`,
    },
    {
      name: "Aoki_Masaru",
      age: 17,
      weightClass: "LightWeight",
      desc: "Aoki Masaru creator of the frog punch and an A-class boxer. He has the most unorthodox style boxing ever seen but that does not mean he doesn't have determination. Like Kimura he was beaten and later scouted by Takamura. With this introduction to boxing he had the goal of beating Takamura.",
      img: `${aoki}`,
    },
    {
      name: "Aokimura",
      age: 34,
      weightClass: "Heavyweight (combined)",
      desc: "Aoki and Kimura are inseparable so much so that people(characters in the manga and fans in real life) have taken to calling them Aokimura",
      img: `${aokiMura}`,
      ageNote: "(combined)",
    },
  ];

  const themes = ["light", "dark"];
  const [theme, setTheme] = useState<string>(themes[1]);
  const [visible, setVisible] = useState<boolean>(false);
  const [boxer, setBoxer] = useState<number>(0);

  return (
    <div
      className={`theme-${theme} bg-primary ease-in duration-100 lg:overflow-y-hidden lg:hover:overflow-y-scroll overflow-y-scroll flex flex-col items-center`}
    >
      <Logo />
      <p className="text-secondary bg-primary border-tertiary border-double border-2 text-3xl w-3/4 p-2">
        This is a fanmade landing page for the anime Hajime no Ippo by mangaka
        George Morikawa. In this anime meet an unpopular high school student who
        falls in love with boxing after an encounter with a pro boxer. Join him
        on this journey as he fights to answer the question...
        <span className="font-bold block">What is strength?</span>
      </p>
      <button
        onClick={() => setTheme(theme === themes[0] ? themes[1] : themes[0])}
        className="text-secondary border-solid border-2 border-tertiary rounded-3xl p-3 text-2xl font-bold"
      >
        THEME CHANGER
      </button>
      <div className="min-h-screen part1">
        <Bio imgUrl={boxers[boxer].img} visible={visible}>
          <motion.div
            className="font-bold text-4xl underline italic lg:text-6xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
          >
            {boxers[boxer].name.split("").map((l, i) => {
              return (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: "-100%" },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    ease: "easeIn",
                    duration: 1,
                    delay: 0.05 * i,
                  }}
                  className="inline-block underline"
                >
                  {l}
                </motion.span>
              );
            })}
          </motion.div>
          Age: {boxers[boxer].age} {boxers[boxer].ageNote ?? ""}
          <br />
          WeightClass: {boxers[boxer].weightClass}
          <br />
          {boxers[boxer].desc}
          <br />
          <button
            className="border-solid border-2 border-secondary rounded-2xl font-normal text-2xl p-3"
            onClick={() => setVisible(!visible)}
          >
            Quote
          </button>
        </Bio>
        {boxers.map((box, i) => {
          return (
            <input
              type="image"
              key={i}
              src={box.img}
              alt="image of boxer you want to select"
              className="h-3/4 max-w-full self-center place-self-center"
              style={{ gridArea: `boxer${i}` }}
              onClick={() => setBoxer(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
