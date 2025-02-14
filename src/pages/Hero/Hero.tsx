import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import { stagger, motion } from "motion/react";
import { animate } from "motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
  });

  return (
    <Container>
      <div className="flex flex-col sm:flex-row items-center justify-around min-h-dvh">
        <section className="sm:basis-1/3">
          <img
            // width="600px"
            loading="lazy"
            src="src\assets\motherboard-scaled.PNG"
            alt="computer"
          />
        </section>
        <section className="self-end sm:self-center flex flex-col items-end font-roboto">
          <div>
            <div className="text opacity-0">CRISTINA</div>
            <div className="text opacity-0">ZLATOV</div>
            <div className="text opacity-0">/WEB DEVELOPER/</div>
            <div className="text opacity-0">MI</div>
            <div className="text opacity-0">
              Y/EXP<span className="pl-12">2+</span>
            </div>
            <button
              onClick={() => navigate("/skills")}
              className="button blur-xs hover:text-black cursor-pointer transition-all duration-150 ease-in-out py-12"
            >
              LEARN MORE
            </button>
          </div>
          {/* <div>
            <button>
              <a href="https://github.com/C-ZLTV" target="_blank">
                github
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/cristina-zlatov/"
                target="_blank"
              >
                linkedin
              </a>
            </button>
          </div> */}
        </section>
      </div>
    </Container>
  );
};

export default Hero;
