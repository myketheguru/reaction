import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { TbNotes, TbSend, TbPaperclip } from "react-icons/tb";
import { BiMicrophone } from "react-icons/bi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { CgImage } from "react-icons/cg";
import Img from "../Conversations-Images/IMG_0394.jpg";

const Conversations = () => {
  return (
    <div className="conversations text-white p-2 grid grid-rows-[auto_1fr_auto] overflow-auto">
      {/* Conversations */}
      <nav className="flex justify-between h-20 items-center p-8">
        <div className="flex gap-4">
          <div>
            <AiOutlineAppstore size={24} />
          </div>
          <div className="flex gap-2">
            <div>Chat</div>
            <div>{24}</div>
          </div>
        </div>
        <div className="flex gap-6">
          <figure>
            {" "}
            <HiOutlineVideoCamera size={24} />
          </figure>
          <figure>
            <FiPhoneCall size={24} />
          </figure>
          <figure>
            <CgImage size={24} />
          </figure>
          <figure>
            <TbNotes size={24} />
          </figure>
        </div>

        <div className="flex gap-2">
          <figure className="h-[24px] w-[24px] bg-white rounded-full overflow-hidden">
          <img src={Img} alt="" />
          </figure>
          <figure className="h-[24px] w-[24px] bg-white rounded-full overflow-hidden">
          <img src={Img} alt="" />
          </figure>
          <figure className="h-[24px] w-[24px] bg-white rounded-full overflow-hidden">
          6+
          </figure>
        </div>
      </nav>

      <div className="px-16 flex flex-col gap-4">
        <p className="flex justify-center">Wed 27 Jul 1:25pm</p>
        <div className="flex flex-col items-end relative gap-2">
          <div>
            <span> 2:00pm</span>
            <span> You</span>
            <figure className="h-[32px] w-[32px] bg-white rounded-full absolute -right-10 -top-[3px]"></figure>
          </div>
          <p className="bg-[#43A0FF] py-2 px-4 rounded-full">
            Lorem ipsum dolor sit amet consectetur adipi
          </p>
          <p className="bg-[#43A0FF] py-2 px-4 rounded-full">
            {" "}
            amet consectetur adipi
          </p>
          {/* images come here */}
          <figure className="h-[250px] w-[200px] bg-white rounded-lg overflow-hidden">
          <img src={Img} alt="" />
          </figure>
        </div>

        <div className="flex flex-col items-start relative gap-2">
          <div>
            <span> 2:00pm</span>
            <span> You</span>
            <figure className="h-[32px] w-[32px] bg-white rounded-full absolute -left-10 -top-[3px]"></figure>
          </div>
          <p className="bg-[#2c3436] py-2 px-4 rounded-full">
            Lorem ipsum dolor sit amet consectetur adipi
          </p>
          <p className="bg-[#2c3436] py-2 px-4 rounded-full">
            {" "}
            amet consectetur adipi
          </p>
          <figure className="h-[250px] w-[200px] bg-white rounded-lg overflow-hidden">
          <img src={Img} alt="" />
          </figure>
        </div>
      </div>

      <footer className="flex gap-4 bg-[#2c3436] rounded-lg mx-8 my-2 h-12 items-center p-4">
        <figure className="h-[32px] w-[32px] bg-white rounded-full"></figure>
        <input
          type="text"
          placeholder="Your Message"
          className="bg-[#2c3436] outline-none"
        />

        <div className="flex gap-2 items-center ml-40">
          <TbNotes />
          <p>1 unsaved draft</p>
        </div>
        <span>.</span>
        <div className="flex gap-2">
          <BiMicrophone size={24} />
          <TbPaperclip size={24} />
          <TbSend size={24} />
        </div>
      </footer>
    </div>
  );
};

export default Conversations;
