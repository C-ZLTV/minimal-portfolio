import { useEffect } from "react";
import Container from "../../components/Container/Container";
import { stagger, motion } from "motion/react";
import { animate, easeInOut } from "motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import gameboyImage from "../../assets/gameboy-no-bg.png";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    animate(
      ".gameboy",
      { y: "10px" },
      {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: easeInOut,
        delay: 2,
      }
    );
    animate(
      ".text",
      { y: "-10px", opacity: 1 },
      { delay: stagger(0.4), ease: "easeOut", duration: 0.4 }
    );
    animate(
      ".button",
      { filter: ["blur(4px)", "blur(0px)"] },
      { delay: 2, ease: "easeOut", duration: 0.5 }
    );
    animate(
      "svg",
      { x: "4px" },
      {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.4,
        ease: easeInOut,
        delay: 2.5,
      }
    );
  }, []);

  const variants = {
    initial: { x: "-20px" },
    animate: {
      x: "0px",
      transition: {
        duration: 2,
        ease: easeInOut,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Cristina Zlatov Portfolio</title>
        <meta
          name="Cristina Zlatov Web Developer"
          content="Cristina Zlatov | Specializing in React and modern web development."
        />
        <meta
          name="Cristina Zlatov Frontend Develper"
          content="Cristina Zlatov, Web Developer, React, Portfolio, Frontend, Distributed Systems, Front-end"
        />
      </Helmet>
      <Container>
        <div className="pt-4 md:pt-0 flex flex-col sm:flex-row items-center justify-around min-h-dvh gap-6">
          <section className="sm:basis-1/3 max-w-[80%]">
            <motion.img
              initial="initial"
              animate="animate"
              variants={variants}
              className=" gameboy sm:w-[80%]"
              loading="lazy"
              src={gameboyImage}
              alt="computer"
            />
          </section>
          <section className="self-end sm:self-center flex flex-col items-end font-roboto">
            <div>
              <div className="text opacity-0">CRISTINA</div>
              <div className="text opacity-0">ZLATOV</div>
              <div className="text opacity-0">/WEB DEVELOPER/</div>
              <div className="text opacity-0">MI, ITALY</div>
              <div className="text opacity-0">
                Y/EXP<span className="pl-12">2+</span>
              </div>
              <button
                //#297349
                onClick={() => navigate("/experience")}
                className="text-[#1e5a37] flex items-center button blur-xs hover:text-[#787878] cursor-pointer transition-all duration-150 ease-in-out py-12"
              >
                LEARN MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevrons-left"
                >
                  <path d="m11 17-5-5 5-5" />
                  <path d="m18 17-5-5 5-5" />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Hero;
