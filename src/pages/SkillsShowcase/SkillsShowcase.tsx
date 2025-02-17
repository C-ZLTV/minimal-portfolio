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
    <Container size="9">
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
      <section>
        <div className="md:flex justify-between pb-12">
          <div className="md:max-w-32">
            <h1 className="pt-6 text-3xl font-bold">LOOK THOUGH</h1>
            <p className="py-4">
              Technologies I have worked closely with, for work or for personal
              projects.
            </p>
            <p>
              It is a collection of skills in the
              <span className="text-[#787878]"> web development </span>
              department +
              <span className="text-[#787878]"> dystributed systems </span>
              tools and knowledge applied to micro-frondends.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 text-xs sm:text-base cursor-pointer pb-32">
              {data.skills.map((skill: Skill, index) => {
                return (
                  <div
                    key={index}
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
        </div>
      </section>
      <section>
        <h2 className="pb-12 text-3xl font-bold">PROFESSIONAL EXPERIENCE</h2>
        <div className="sm:flex justify-around pb-32">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={{
              initial: { opacity: 0.2, y: "10px" },
              animate: {
                y: "0px",
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: easeInOut,
                  // delay: 0.1,
                },
              },
            }}
            className="basis-1/3"
          >
            <div className="pb-2">
              <img
                className="rounded-sm"
                src="src\assets\motherboard-scaled.PNG"
                width="100%"
                loading="lazy"
              ></img>
            </div>
            <div>
              <div>BUSINESS PROJECT LEAD</div>
              <div>2022 - 2023</div>
              <div className="text-xs">
                cross-functional teams leadership, client communications,
                strategy, budgeting
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={{
              initial: { opacity: 0.2, y: "10px" },
              animate: {
                y: "0px",
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: easeInOut,
                  // delay: 0.1,
                },
              },
            }}
            className="basis-1/3"
          >
            <div className="pb-2">
              <img
                className="rounded-sm"
                src="src\assets\motherboard-scaled.PNG"
                width="100%"
                loading="lazy"
              ></img>
            </div>
            <div>
              <div>WEB DEVELOPER IN FINTECH</div>
              <div>2023 - current</div>
              <div className="text-xs">
                performance, accessibility, scalable and modular micro-frontend
                architectures
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default SkillsShowcase;
