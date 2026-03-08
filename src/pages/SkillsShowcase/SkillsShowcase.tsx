// import { useState } from "react";
import Container from "../../components/Container/Container";
import data from "../../utils/skills.json";
import { Skill } from "../../utils/interfaces";

import { easeInOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import dropImage from "../../assets/drop.png";
import motherboardImage from "../../assets/motherboard-square.webp";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const SkillsShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      String.fromCharCode(c.charCodeAt(0) + (c.toLowerCase() < "n" ? 13 : -13)),
    );
  };

  const handleContactClick = () => {
    const email = decodeEmail(encodedEmail);
    console.log(email);
    window.location.href = `mailto:${email}`;
  };

  const handleOpenModal = (skill: Skill) => {
    setIsModalOpen(true);
    setModalInfo(skill);
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
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              {`${modalInfo?.skill.toUpperCase()} (${modalInfo?.category})`}
            </h2>
            <div className="mb-4">{modalInfo?.description}</div>
            {modalInfo?.builyWith && (
              <div className="flex gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width="18"
                    height="18"
                  >
                    <path
                      fill="rgb(61, 61, 61)"
                      d="M320.1 32C329.1 32 337.4 37.1 341.5 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32zM320.1 108.8L262.3 222C258.8 228.8 252.3 233.6 244.7 234.8L119.2 254.8L209 344.7C214.4 350.1 216.9 357.8 215.7 365.4L195.9 490.9L309.2 433.3C316 429.8 324.1 429.8 331 433.3L444.3 490.9L424.5 365.4C423.3 357.8 425.8 350.1 431.2 344.7L521 254.8L395.5 234.8C387.9 233.6 381.4 228.8 377.9 222L320.1 108.8z"
                    />
                  </svg>
                </span>
                <span>helped build this website</span>
              </div>
            )}
          </>
        </Modal>
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <section className="pt-8 pb-18 md:pt-6 md:pb-32 md:flex justify-around gap-12">
          <div className="md:max-w-32 pb-8">
            <h1 className="pt-6 text-3xl font-bold">LOOK THROUGH</h1>
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
                    onClick={() => handleOpenModal(skill)}
                    className={`
                        max-w-28
                        text-[#787878]
                        relative flex flex-col justify-center items-center hover:text-[#3d3d3d] transition-all`}
                  >
                    <motion.img
                      loading="lazy"
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
                      src={dropImage}
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
                  src={motherboardImage}
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
                  src={motherboardImage}
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
