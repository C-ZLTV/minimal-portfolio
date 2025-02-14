import React, { useState } from "react";
import Container from "../../components/Container/Container";
import data from "../../utils/skills.json";
import { Skill } from "../../utils/interfaces";

import { easeInOut, motion } from "motion/react";

const SkillsShowcase = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState<Skill>();

  const sizing: Record<number, string> = {
    1: "max-w-28",
    2: "max-w-22",
    3: "max-w-12",
  };

  return (
    <Container>
      {openModal && (
        <div className="absolute top-[50%] left-[50%] z-[99] transform -translate-x-1/2 -translate-y-1/2 bg-[#fbfbfbff] p-6">
          <div>{modalInfo?.skill.toUpperCase()}</div>
          <div>- {modalInfo?.category}</div>
          <div>
            - acquired this skill through: {modalInfo?.acquisitionMethod}
          </div>
          {modalInfo?.builyWith && <div>- helped build this website</div>}
          <button
            className="cursor-pointer bg-red-200 ml-[85%]"
            onClick={() => {
              setOpenModal(false);
              window.document.body.style.backgroundColor = "#fbfbfbff";
            }}
          >
            close
          </button>
        </div>
      )}
      <div className="md:flex justify-around">
        <div className="md:max-w-32">
          <h1 className="pt-6 text-3xl font-bold">LOOK THROUGH</h1>
          <p className="py-4">
            Here you can find the technologies I have worked closely with, for
            work or for personal projects.
          </p>
          <p>
            It is mostly a collection of skills in the
            <span className="italic"> web development </span>department +
            <span className="italic"> dystributed systems </span>
            tools and knowledge applied to micro-frondends.
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 text-xs sm:text-base cursor-pointer">
          {data.skills.map((skill: Skill, index) => {
            return (
              <div
                onClick={() => {
                  setModalInfo(skill);
                  setOpenModal(true);
                  window.document.body.style.backgroundColor =
                    "rgba(0, 0, 0, 0.1)";
                }}
                className={`
                  ${sizing[skill.importance]} 
                  text-[#787878]
                  relative flex flex-col justify-center items-center`}
              >
                <motion.img
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { y: "0px" },
                    animate: {
                      y: "10px",
                      transition: {
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 2,
                        ease: easeInOut,
                        delay: index * 0.5,
                      },
                    },
                  }}
                  src="src\assets\drop.png"
                  width="100%"
                ></motion.img>
                <div className="text-center">
                  {skill.skill.toLocaleUpperCase()}
                </div>
                <div>+</div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default SkillsShowcase;
