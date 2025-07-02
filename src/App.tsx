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

  return (
    <div className="lg:overflow-y-hidden lg:hover:overflow-y-scroll overflow-y-scroll bg-inherit flex flex-col items-center gap-96">
      <Logo />
      {boxers.map((box, i) => {
        return (
          <Bio imgUrl={box.img} name={box.name} key={i}>
            Age: {box.age} {box.ageNote ?? ""}
            <br />
            WeightClass: {box.weightClass}
            <br />
            {box.desc}
          </Bio>
        );
      })}
    </div>
  );
}

export default App;
