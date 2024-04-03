import { inter200, poppins } from "./fonts";
import Card from "./components/Card";
import Advertisement from "./components/Advertisement";
import Button from "./components/Button";
import Ticket from "./components/Ticket";
import { ModeToggle } from "./components/ModeToggle";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  interface CardData {
    id: number;
    image: string;
    teamName: string;
    totalEvents: number;
    sport: string;
  }
  interface AdData {
    id: number;
    image: string;
    title: string;
    content: string;
  }

  interface TicketData {
    id: number;
    image: string;
    teamName: string;
    dateAndTime: string;
    place: string;
    buttonText: string;
  }

  const cardData: CardData[] = [
    {
      id: 1,
      image: "/player1.png",
      teamName: "Sacramento River Cats",
      totalEvents: 48,
      sport: "Baseball",
    },
    {
      id: 2,
      image: "/player2.png",
      teamName: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
    },
    {
      id: 3,
      image: "/player3.png",
      teamName: "New Jersey Devils",
      totalEvents: 15,
      sport: "Ice Hockey",
    },
    {
      id: 4,
      image: "/player2.png",
      teamName: "Las Vegas Aviators",
      totalEvents: 28,
      sport: "Baseball",
    },
  ];
  const adData: AdData[] = [
    {
      id: 1,
      image: "/ad.png",
      title: "Advertisement title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const ticketData: TicketData[] = [
    {
      id: 1,
      image: "/ticket1.png",
      teamName: "Las Vegas Aviators",
      dateAndTime: "Oct 15 | Sun | 4:30 PM",
      place: "Las Vegas Ballpark, Las Vegas, Nevada",
      buttonText: "Take Flight Collection",
    },
    {
      id: 2,
      image: "/ticket2.png",
      teamName: "Sacramento River Cats",
      dateAndTime: "Oct 15 | Sun | 4:30 PM",
      place: "Sutter Health Park, Sacramento, California",
      buttonText: "Orange Collection",
    },
    {
      id: 3,
      image: "/ticket1.png",
      teamName: "Las Vegas Aviators",
      dateAndTime: "Oct 15 | Sun | 4:30 PM",
      place: "Las Vegas Ballpark, Las Vegas, Nevada",
      buttonText: "Take Flight Collection",
    },
    {
      id: 4,
      image: "/ticket2.png",
      teamName: "Sacramento River Cats",
      dateAndTime: "Oct 15 | Sun | 4:30 PM",
      place: "Sutter Health Park, Sacramento, California",
      buttonText: "Orange Collection",
    },
    {
      id: 5,
      image: "/ticket1.png",
      teamName: "Las Vegas Aviators",
      dateAndTime: "Oct 15 | Sun | 4:30 PM",
      place: "Las Vegas Ballpark, Las Vegas, Nevada",
      buttonText: "Take Flight Collection",
    },
  ];
  return (
    <div className="bg-[#F7F7F8] dark:bg-[#292B32] md:py-[4rem] py-[2rem] px-[1rem] md:px-[9rem] overflow-x-hidden">
      <div className="">
        {/* inside this box only */}
        <div className="flex justify-between items-center">
          <div className="w-[80px] h-[41px] border-b-2 border-b-[#738FFF]">
            <h1 className={`${poppins.className} font-bold text-[24px] `}>
              Sports
            </h1>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pt-[25px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[14.09px] md:gap-[14.09px] gap-[14.09px] xl:grid-cols-5">
            {cardData.map((data) => (
              <Card
                key={data.id}
                image={data.image}
                teamName={data.teamName}
                totalEvents={data.totalEvents}
                sport={data.sport}
              />
            ))}
            {adData.map((ad) => (
              <Advertisement
                key={ad.id}
                adImage={ad.image}
                adTitle={ad.title}
                adContent={ad.content}
              />
            ))}
          </div>
        </div>
        <div className="pt-[50px]">
          <Button />
        </div>
        {/* second box */}
        <div className="flex justify-center items-center">
          <div className="mt-[53px] bg-[#F9F8FF] dark:bg-gradient-to-t from-[#221A2C] to-[#18282A] w-[350px] md:w-[1240px] md:h-[950px] pt-[70px] pb-[49px] px-0 md:px-[78px] flex justify-center">
            <div
              className={`md:w-[1085.75px] w-[300px] md:h-[799px] bg-white dark:bg-transparent`}
            >
              <div>
                <h1
                  className={`text-center text-[30px] md:text-[50px] ${poppins.className} text-black font-bold dark:text-white`}
                >
                  Collection Spotlight
                </h1>
                <h4
                  className={`text-center mx-auto ${inter200.className} text-[12px] md:text-[14px] pt-[25px] md:w-[917px] w-[250px] h-[80px] md:h-[46px] dark:text-white`}
                >
                  Discover extraordinary moments with our Spotlight Collection
                  metatickets—exclusive access to premium events for an
                  unforgettable experience. Grab yours today!
                </h4>
                {/* cards */}
                {/*  */}
                <div className="flex justify-center items-center mt-[5rem] ml-7">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-[100%] md:w-[50%] lg:w-[80%] relative"
                  >
                    <CarouselContent>
                      {ticketData.map((ticket) => (
                        <CarouselItem
                          key={ticket.id}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <Ticket
                            image={ticket.image}
                            teamName={ticket.teamName}
                            dateAndTime={ticket.dateAndTime}
                            buttonText={ticket.buttonText}
                            place={ticket.place}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious
                      variant={"rectangle"}
                      className="hidden lg:flex"
                    />
                    <CarouselNext
                      variant={"rectangle"}
                      className="hidden lg:flex"
                    />
                  </Carousel>
                </div>

                <div className="flex justify-center items-center pt-8 lg:hidden">
                  <ChevronLeft />
                  <p>Swipe</p>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
