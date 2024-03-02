"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMyContext } from "@/Context/context";

interface CardProps {
  id: string;
  image: string;
  name: string;
  selectCard: string | null;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: React.Dispatch<React.SetStateAction<string>>;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  image,
  selectCard,
  onSelectCard,
  onDeleteCard,
}: CardProps) => {

  return (

    
    //Card
    <div
      onClick={() => {
        // Unselect Card
        if (selectCard === id) {
          onSelectCard("");
        } else {
          // Select Card
          onSelectCard(id);
        }
      }}
      className={
        selectCard === id
          ? "flex justify-between items-start w-[420px] bg-gray-200 text-white  m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg shadow-xl "
          : "flex justify-between items-start w-[420px]   m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg hover:bg-gray-200 shadow-xl"
      }
    >
      <div className="flex flex-row justify-center gap-2 ">
        <div className="flex flex-auto">
          <Image
            src={image}
            width={90}
            height={90}
            className="border rounded-full"
            alt="User's Photo"
          ></Image>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <p className="text-lg font-semibold text-[#33363F] font-sans ">
            {name}
          </p>

          <Link
            href={`/${name}`}
            className="text-xs font-normal border text-slate-600 hover:text-white opacity-[60%] font-sans p-1 hover:bg-gray-400 rounded-lg text-center"
          >
            Preveiw
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            onDeleteCard(id);
            e.stopPropagation();
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export { Card };
