import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
export function Footer() {
  return (
    <>
      <div className="bg-black text-white flex justify-between py-6 px-10">
        <div className="font-bold">www.mongolnft.com</div>
        <div className="">
          <div className="text-4xl italic font-bold font-mono cursor-pointer">
            MNFT WOLVES
          </div>
        </div>
        <div className="flex text-xl space-x-4">
          <div>
            <FaFacebookSquare className="hover:text-yellow-300 " />
          </div>
          <div>
            <FaInstagram className="hover:text-yellow-300 " />
          </div>
          <div>
            <FaYoutube className="hover:text-yellow-300 " />
          </div>
          <div>
            <FaDiscord className="hover:text-yellow-300 " />
          </div>
        </div>
      </div>
      <div className="bg-yellow-300 h-2" />
    </>
  );
}
