import { poppins } from "./fonts";
import Card from "./components/Card";
import Advertisement from "./components/Advertisement";
import Button from "./components/Button";

export default function Home() {

  interface CardData {
    id:number;
    image:string;
    teamName:string;
    totalEvents:number;
    sport:string;
  }

  const cardData: CardData[] = [
    {
      id:1,
      image:"/player1.png",
      teamName:"Sacramento River Cats",
      totalEvents:48,
      sport:"Baseball"
    },
    {id:2,
      image:"/player2.png",
      teamName:"Las Vegas Aviators",
      totalEvents:28,
      sport:"Baseball"
    },
    {id:3,
      image:"/player3.png",
      teamName:"New Jersey Devils",
      totalEvents:15,
      sport:"Ice Hockey"
    },
    {id:4,
      image:"/player2.png",
      teamName:"Las Vegas Aviators",
      totalEvents:28,
      sport:"Baseball"
    }
  ]
  return (
  <div className="bg-[#F7F7F8]">
    <div className="py-[5rem] px-[9rem]">
      {/* inside this box only */}
      <div className="w-[80px] h-[41px] border-b-2 border-b-[#738FFF]">
      <h1 className={`${poppins.className} text-[24px] `}>Sports</h1>
      </div>
      <div className="pt-[25px] flex justify-start items-start gap-[14.09px]">
        {cardData.map((data) => (
          <Card key={data.id} image={data.image} teamName={data.teamName} totalEvents={data.totalEvents} sport={data.sport} />
        ))}
        <Advertisement adImage="/ad.png" adTitle="Advertisement title" adContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
      <div className="pt-[50px]">
      <Button />
      </div>
      {/* second box */}
      <div className="mt-[53px] bg-white w-[1240px] h-[918px] pt-[70px] pb-[49px] px-[78px]">
        <div className={`w-[1085.75px] h-[799px] bg-blue-400`}>csdcfd</div>

      </div>
    </div>
  </div>
  );
}

