import { useState } from "react";
import Container from "../../components/Container/Container";
import data from "../../utils/skills.json";
import { Skill } from "../../utils/interfaces";

import { easeInOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const SkillsShowcase = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState<Skill>();

  const navigate = useNavigate();

  const sizing: Record<number, string> = {
    1: "max-w-28",
    2: "max-w-22",
    3: "max-w-12",
  };

  //DECODE EMAIL
  const encodedEmail = "pevfgvanmygi.qri@tznvy.pbz"; // ROT13 of yourname@example.com

  const decodeEmail = (encoded: string) => {
    return encoded.replace(/[a-zA-Z]/g, (c) =>
      String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < "n" ? 13 : -13))
    );
  };

  const handleContactClick = () => {
    const email = decodeEmail(encodedEmail);
    console.log(email);
    window.location.href = `mailto:${email}`;
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Helmet>
        <title>Cristina Zlatov Portfolio</title>
        <meta
          name="Cristina Zlatov Web Developer"
          content="Cristina Zlatov | Specializing in React, modern web development and dystributed systems"
        />
        <meta
          name="Cristina Zlatov Frontend Develper"
          content="Cristina Zlatov, Web Developer, React, Portfolio, Frontend, Distributed Systems, Front-end"
        />
      </Helmet>
      <Container>
        <button
          className="absolute p-6 pl-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        {openModal && (
          <div className="absolute top-[50%] left-[50%] z-[99] transform -translate-x-1/2 -translate-y-1/2 bg-[#fbfbfbff] p-6 pb-2 w-[100%] max-w-[450px]">
            <div>{modalInfo?.skill.toUpperCase()}</div>
            <div>- {modalInfo?.category}</div>
            <div>
              - acquired this skill through: {modalInfo?.acquisitionMethod}
            </div>
            {modalInfo?.builyWith && <div>- helped build this website</div>}
            <button
              className="cursor-pointer ml-[85%] p-2"
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
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[10%]">
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
                <div>WEB DEVELOPER IN FINTECH</div>
                <div>2023 - current</div>
                <div className="text-xs">
                  performance, accessibility, scalable and modular
                  micro-frontend architectures
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
              className="max-w-96 pb-12 sm:pb-0 grayscale"
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
          </div>
        </section>
      </Container>
      <footer className="py-8 bg-[#3d3d3d] text-[#fbfbfbff] font-mono">
        <Container>
          <div className="flex flex-col items-end gap-16 text-left pr-[10%] sm:pr-[5%]">
            <div className="flex flex-col items-end sm:flex-row gap-12">
              <button className="hover:opacity-70 transition-all ease-in">
                <a
                  href="https://www.linkedin.com/in/cristina-zlatov/"
                  target="blank"
                  className="relative"
                >
                  LINKEDIN
                  <span className="absolute left-[-18px] text-xs">01</span>
                </a>
              </button>
              <button className="hover:opacity-70 transition-all ease-in relative">
                <a
                  href="https://github.com/C-ZLTV"
                  target="blank"
                  className="relative"
                >
                  GITHUB
                  <span className="absolute left-[-18px] text-xs">02</span>
                </a>
              </button>
              <button
                onClick={handleContactClick}
                className="cursor-pointer hover:opacity-70 transition-all ease-in relative"
              >
                CONTACT ME
                <span className="absolute left-[-18px] text-xs">03</span>
              </button>
            </div>
            <div className="text-xs text-right sm:flex gap-2">
              ©{year} Cristina Zlatov
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default SkillsShowcase;
