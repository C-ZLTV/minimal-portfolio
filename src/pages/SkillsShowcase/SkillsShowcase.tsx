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
    <>
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
        <section className="pt-8 pb-18 md:pt-6 md:pb-32 md:flex justify-around gap-12">
          <div className="md:max-w-32">
            <h1 className="pt-6 text-3xl font-bold">LOOK THOUGH</h1>
            <p className="py-4">
              Technologies I have worked closely with, for work or for personal
              projects.
            </p>
            <p>
              Collection of skills in the
              <span className="text-[#787878]"> web development </span>
              department +
              <span className="text-[#787878]"> dystributed systems </span>
              tools and knowledge applied to micro-frondends.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 text-xs sm:text-base cursor-pointer">
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
                        max-w-28
                        text-[#787878]
                        relative flex flex-col justify-center items-center hover:text-[#3d3d3d] transition-all`}
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
                            duration: 1.8,
                            ease: easeInOut,
                            delay: index * 0.35,
                          },
                        },
                      }}
                      src="src\assets\drop.png"
                      // width={`${sizing[skill.importance]}`}
                      className={`hover:scale-120 transition-all ${
                        sizing[skill.importance]
                      }`}
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
        </section>
        <section className="pt-8 pb-18 md:pt-6 md:pb-32 md:flex justify-around gap-12">
          <div className="md:max-w-32">
            <h2 className="md:flex flex-col text-3xl font-bold">
              <span>WORK</span> <span>HISTORY</span>
            </h2>
            <p className="pt-4 pb-12">
              Experienced in architecting, building, and maintaining frontend
              distributed systems in complex banking environments
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center pb-32 gap-[10%]">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={{
                initial: { opacity: 0.3, y: "10px" },
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
              className="max-w-96 pb-12 sm:pb-0"
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
                initial: { opacity: 0.3, y: "10px" },
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
              className="max-w-96"
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
                  performance, accessibility, scalable and modular
                  micro-frontend architectures
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Container>
      <footer className="py-32 bg-[#3d3d3d] text-[#fbfbfbff] font-mono">
        <Container>
          <div>Z.</div>
          <div className="flex gap-4">
            <button className="hover:opacity-70">
              <a
                href="https://www.linkedin.com/in/cristina-zlatov/"
                target="blank"
              >
                linkedin
              </a>
            </button>
            <button className="hover:opacity-70">
              <a href="https://github.com/C-ZLTV" target="blank">
                github
              </a>
            </button>
          </div>
          <div>©2025 Cristina Zlatov</div>
        </Container>
      </footer>
    </>
  );
};

export default SkillsShowcase;
