import { WolfImageGallery } from "../components/image_gallery";
import ImageChanger from "../components/image_changer";
import Bounce from "react-reveal/Bounce";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export function Home() {
  return (
    <div>
      <div className="bg-black">
        <img alt="home_image" src="/assets/cover.jpeg" />
      </div>
      <div className="-mt-10 py-12">
        <div className="xl:mx-40 my-10 mx-10">
          <div className="italic font-bold xl:text-4xl text-2xl my-10">
            INTRODUCING MNFT WOLVES
          </div>
          <div className="text-base">
            Улмаар wolf-society/сүргийн-н эрүүл экосистемийг бүрдүүлж
            culture/соёлыг бий болгон Монголдоо (High Priority) төдийгүй дэлхийд
            толгой цохих NFT Collectible болгох
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="xl:mx-40 my-10 lg:flex mx-10 text-white">
          <div className="xl:w-1/2 m-auto py-10">
            <div className="italic font-bold text-4xl text-2xl mt-20">
              THE SPECS
            </div>
            <div className="text-base my-10">
              "MNFT WOLVES" Society нь () систем дээр оршдог тус бүр нь дахин
              давтагдашгүй 60'000 дижитал чононы цуглуулга юм. Чонон сүргийн нэг
              болсноор та зөвхөн "MNFT WOLVES" NFT -г эзэмшихээс гадна
              "wolf-society" экосистемийн нэг болж MongolNFT компани, MongolNFT
              marketplace болон MNFT Coin зэрэг төслүүдийн хүрээнд хийгдэх
              эвент, үйл ажиллагаа, уралдаан тэмцээн болон бүтээгдэхүүнээс
              хөнгөлөлт урамшуулал хүртэх гэх мэт маш олон төрлийн utility буюу
              хэрэглээнүүдийг өөрийн болгох болно.
            </div>
          </div>
          <div className="xl:w-1/2 mt-auto mb-auto xl:ml-10 mr-4">
            <div className="flex 2xl:w-1/3 w-2/6 my-10">
              <img
                className="m-2 rounded-lg hover:rotate-2"
                src="https://nfts-media.mongolnft.xyz/mnft_wolves/0/2/images/1.png"
              />
              <img
                className="m-2 rounded-lg hover:rotate-2"
                src="https://nfts-media.mongolnft.xyz/mnft_wolves/0/4/images/2.png"
              />
              <img
                className="m-2 rounded-lg hover:rotate-2"
                src="https://nfts-media.mongolnft.xyz/mnft_wolves/0/0/images/2.png"
              />
            </div>
            <div className="flex 2xl:w-1/3 w-2/6">
              <img
                className="m-2 rounded-lg hover:rotate-2"
                src="https://nfts-media.mongolnft.xyz/mnft_wolves/0/1/images/3.png"
              />
              <img
                className="m-2 rounded-lg hover:rotate-2"
                src="https://nfts-media.mongolnft.xyz/mnft_wolves/0/5/images/1.png"
              />
              <img
                className="m-2 rounded-lg hover:rotate-2"
                src="https://nfts-media.mongolnft.xyz/mnft_wolves/0/3/images/2.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black -mt-10 py-10">
        <WolfImageGallery />
      </div>
      <div className="bg-black -mt-10 py-20">
        <div className="text-black flex text-center xl:mx-40 xl:justify-center rounded-md flex-col xl:flex-row bg-yellow-300 p-10 mx-5">
          <div className="xl:w-1/4 font-bold text-xl xl:mt-auto xl:mb-auto my-4">
            BUY A WOLF
          </div>
          <div className="xl:w-2/4 text-xl my-4">
            Quisque rutrum, magna vel rhoncus tincidunt, leo risus iaculis elit,
            sed malesuada velit nibh vel risus.
          </div>
          <div className="mt-6 xl:w-1/4 xl:text-lg p-2 text-md rounded-xl mt-auto mb-auto bg-black text-yellow-300 cursor-pointer m-10 hover:bg-white hover:text-black">
            BUY FROM MONGOL NFT
          </div>
        </div>
      </div>
      <div className="lg:mx-40 my-10 lg:flex mx-10">
        <div className="lg:w-1/2 mx-auto">
          <div className="italic font-bold 2xl:text-3xl my-10 text:md">
            WOLF NFT MINTING
          </div>
          <div className="text-base md:text-lg">
            MNFT IEO-д оролцсон, хоёрдогч зах зээлээс худалдан авалт хийсэн,
            үнэн ч MNFT holders болон MongolNFT маркетплэйс дэх идэвхитэй
            хэрэглэгчид гэх мэт тусгай нөхцөл хангасан бүх хүмүүст тараагдсан
            "MNFT WOLVES" NFT 'mint' хийгдэж хоёрдогч зах зээлд гарахад бэлэн
            болно.
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-auto lg:ml-20 lg:mb-auto">
          <ImageChanger />
        </div>
      </div>
      <div className="bg-black">
        <VerticalTimeline layout="left">
          <div className="">
            <VerticalTimelineElement
              position="left"
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "black",
                color: "#fff",
                border: "1px solid #fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              // date="2011 - present"
              iconStyle={{ background: "rgb(253 224 71)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <Bounce left>
                <div className="font-bold italic text-2xl text-yellow-300">
                  WOLF NFT MINTING
                </div>
              </Bounce>
              <Bounce right>
                <div className="text-base my-10">
                  MNFT IEO-д оролцсон, хоёрдогч зах зээлээс худалдан авалт
                  хийсэн, үнэн ч MNFT holders болон MongolNFT маркетплэйс дэх
                  идэвхитэй хэрэглэгчид гэх мэт тусгай нөхцөл хангасан бүх
                  хүмүүст тараагдсан "MNFT WOLVES" NFT 'mint' хийгдэж хоёрдогч
                  зах зээлд гарахад бэлэн болно.
                </div>
              </Bounce>
            </VerticalTimelineElement>
          </div>
          <VerticalTimelineElement
            position="left"
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "#fff", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce right>
              <div className="font-bold italic text-2xl text-yellow-300	">
                MNFT WOLVES ADDITIONAL MARKET SUPPLY W/ FLOOR PRICE
              </div>
            </Bounce>
            <Bounce left>
              <div className="text-base my-10">
                Нэмэлтээр common, rare, very rare төрлийн "MNFT WOLVES" NFT нь
                floor-price буюу шал үнэтэйгээр хоёрдогч зах зээлд
                нийлүүлэгдэнэ.
              </div>
            </Bounce>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position="left"
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "rgb(253 224 71)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce left>
              <div className="font-bold italic text-2xl text-yellow-300">
                DAO (First stage/proposal - “Өвлийн идэш”)
              </div>
            </Bounce>
            <Bounce right>
              <div className="text-base my-10">
                MongolNFT нь цаашдаа DAO буюу "Төвлөрсөн бус бие даасан
                байгууллага" консепцийн хүрээнд MNFT WOLF holders-уудруугаа
                чиглэсэн олон ажил хийхээр төлөвлөж байгаа бөгөөд анхны хөрөнгө
                оруулалтын санал болох "Өвлийн идэш" proposal-г нийт чоно
                эзэмшигчдийн дунд явуулна.
              </div>
            </Bounce>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position="left"
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "#fff", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce left>
              <div className="font-bold italic text-2xl text-yellow-300">
                Wolf Serum - ​​The Mutant Wolf (NFT Breeding)
              </div>
            </Bounce>
            <Bounce right>
              <div className="text-base my-10">
                MNFT Wolves - чонон сүрэг бий болж, улам өргөжин тэлэхэд бид
                язгуур үндэс угсаагаа мэдэх нь хамгаас чухал билээ. Зөвхөн чоно
                эзэмшдэг чонон сүргийн гишүүд өөрийн чоныг (Бөртэ чино), гэргий
                нь Гоо марал -н хамт serum буюу тусгай шингэнийг ашиглан
                'breeding' хийн хувиргаснаар шинэ төрлийн NFT үүсгэх боломжтой
                болно.
              </div>
            </Bounce>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position="left"
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "rgb(253 224 71)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce right>
              <div className="font-bold italic text-2xl text-yellow-300">
                Exclusive Events only available for “WOLF SOCIETY” members
              </div>
            </Bounce>
            <Bounce left>
              <div className="text-base my-10">
                Зөвхөн чоно эзэмшдэг дэлхийд тархсан чонон сүргийн бүхий л
                гишүүдэд зориулагдсан MongolNFT team, ambassadors, NFT creators,
                болон сүргийн гишүүдтэйгээ уулзаж танилцах, хүрээгээ тэлэх
                боломжтой exclusive эвент, үдэшлэгүүд Монголын байгалийн
                үзэсгэлэнт, дурсгалт газруудад зохион байгуулагдана.
              </div>
            </Bounce>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position="left"
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "#fff", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce left>
              <div className="font-bold italic text-2xl text-yellow-300">
                Member-Exclusive “MNFT WOLVES” Merch Store gets unlocked,
                featuring Limited Edition tees, hoodies, and other goodies.
              </div>
            </Bounce>
            <Bounce right>
              <div className="text-base my-10">
                MongolNFT нь дотоодын(93//KiDULT, Michel&Amazonka) болон
                гадаадын (“Bored & Mutant Ape Yacht Club X MongolNFT Wolves”
                Merch) брэндингүүдтэй хамтран ажиллах мөн “International
                Exposure” хийх ажлын хүрээнд зөвхөн "MNFT WOLVES" NFT эзэмшдэг
                чонон сүргийнхаа гишүүдэд зориулсан Merch Store нээгдэж, эзэмшиж
                буй чононы тань зэрэг дэвээс хамааран зөвхөн чонон сүрэгт
                зориулагдсан бүтээгдэхүүнүүдийг худалдаанд гаргахад бэлэн болно.
              </div>
            </Bounce>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "#fff", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce left>
              <div className="font-bold italic text-2xl text-yellow-300">
                MongolNFT Streaming
              </div>
            </Bounce>
            <Bounce right>
              <div className="text-base my-10">
                MongolNFT Streaming Service -д та зөвхөн өөрийн чоноороо нэвтрэн
                орох бөгөөд чононы төрлөөс хамааран exclusive контентуудыг
                сонсох мөн үзэх боломжтой болно.
              </div>
            </Bounce>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "rgb(253 224 71)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce left>
              <div className="font-bold italic text-2xl text-yellow-300">
                MongolNFT WOLF CARD
              </div>
            </Bounce>
            <Bounce right>
              <div className="text-base my-10">
                MongolNFT card -г зах зээлд эхний ээлжинд худалдаанд гаргах
                бөгөөд зөвхөн MNFT WOLVES NFT эзэмшигчид нь gyms, clubs, cinema,
                booking flights, vacations гэх мэт өдөр тутмын хэрэглээнүүдээс
                бодит өгөөжийг бусдаас түрүүлж хамгийн түрүүнд хүртэх болно.
              </div>
            </Bounce>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "black",
              color: "#fff",
              border: "1px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            // date="2011 - present"
            iconStyle={{ background: "rgb(253 224 71)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <Bounce left>
              <div className="font-bold italic text-2xl text-yellow-300">
                MongolNFT Gaming
              </div>
            </Bounce>
            <Bounce right>
              <div className="text-base my-10">
                MongolNFT Gaming Service -н хүрээнд удахгүй шинээр гарч буй
                Wolf-HUNT тоглоомд өөрийн чоныг ашиглан бусад чононуудтай
                тулалдаж урамшуулалд MNFT хожих боломжтой бөгөөд өөрийн чоныг
                сайжруулах serum буюу ерөндөгийг MongolNFT marketplace-с чононы
                хэрэм зэргээс хамааран илүү давуу талтай худалдан авалт хийж
                сайжруулах боломж бий болно.
              </div>
            </Bounce>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
