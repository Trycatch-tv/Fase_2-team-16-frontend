import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

export default function Team(team) {
  const dataTeams = [
    {
      name: "Franklin Rodriguez",
      nacionality: "Colombia",
      role: "Team Leader",
      image: "/../public/images/teams/fa.jpg",
      description: "Fundador de TechLeap, Scrum Master en Try Catch.tv",
      link_linkedin:
        "https://www.linkedin.com/in/franklin-andres-rodriguez-gonzalez-7b7663272",
      link_github: "https://github.com/FranklinAndresNegusNet",
    },
    {
      name: "Andres Valencia",
      nacionality: "Ecuador",
      role: "Frontend Developer",
      image: "/../public/images/teams/av.jpg",
      description: "Currently I am studying to be a frontend developer",
      link_linkedin: "https://www.linkedin.com/in/andres-valencia-8b792b103",
      link_github: "https://github.com/sirandresitog",
    },
    {
      name: "Ricardo Mejía",
      nacionality: "Colombia",
      role: "Frontend Developer",
      image: "/../public/images/teams/rm.jpg",
      description: "If a dog chews shoes whose shoes does he choose?",
      link_linkedin: "https://www.linkedin.com/in/ricardo-andres-mejia-cordoba",
      link_github: "https://github.com/ramtako8922",
    },
    {
      name: "Fabrizio Ferroni",
      nacionality: "Argentina",
      role: "Fullstack Developer",
      image: "/../public/images/teams/ff.jpg",
      description: "Passionate about programming and computing",
      link_linkedin: "https://www.linkedin.com/in/fabrizio-ferroni",
      link_github: "https://github.com/FabrizioFerroni",
    },
    {
      name: "Julio Roman",
      nacionality: "Perú",
      role: "Backend Developer",
      image: "/../public/images/teams/jr.jpg",
      description: "If a dog chews shoes whose shoes does he choose?",
      link_linkedin: "#",
      link_github: "https://github.com/jromanz",
    },
    {
      name: "Kevin JH",
      nacionality: "Colombia",
      role: "Backend Developer",
      image: "/../public/images/teams/oig.jpg",
      description: "If a dog chews shoes whose shoes does he choose?",
      link_linkedin: "#",
      link_github: "#",
    },
  ];
  const dataLogs = dataTeams.map((team, index) => (
    <div
      className="card w-80 md:w-96 bg-base-100 shadow-xl border-2 border-base-300"
      key={index + 1}
    >
      <figure>
        <Image
          src={team.image}
          width={1000}
          height={1000}
          alt="Franklin Andres Rodriguez Gonzalez Image"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <div className="flex  justify-between flex-col md:flex-row gap-4 md:gap-0">
          <h2 className="card-title dark:text-gray-200">{team.name}</h2>
          <div className="badge badge-primary text-white text-sm p-4">
            {team.role}
          </div>
        </div>
        <p className="dark:text-gray-200">{team.description}</p>
        <div className="card-actions justify-center md:justify-end pt-4 md:pt-0">
          <div className="badge badge-outline dark:text-gray-200 hover:bg-[#0e76a8] hover:text-white hover:border-[#0e76a8] p-4">
            <Link
              href={team.link_linkedin}
              target="_blank"
              className="flex flex-row gap-1 justify-center items-center"
            >
              <RiLinkedinFill /> Linkedin
            </Link>
          </div>
          <div className="badge badge-outline dark:text-gray-200 hover:bg-[#333] hover:text-white hover:border-[#333] p-4">
            <Link
              href={team.link_github}
              target="_blank"
              className="flex flex-row gap-1 justify-center items-center"
            >
              <RiGithubFill /> Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h3 className=" my-10 dark:text-gray-300 text-center text-gray-500 font-bold text-3xl  uppercase ">
        Our Team
      </h3>

      <div className=" flex flex-col md:flex-row flex-nowrap md:flex-wrap items-center justify-evenly gap-4 mb-8  mt-8 w-9/12 md:w-full m-auto">
        {dataLogs}
      </div>
    </>
  );
}
