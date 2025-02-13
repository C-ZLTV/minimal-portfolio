import React from "react";
import Container from "../../components/Container/Container";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col sm:flex-row sm:items-center justify-around min-h-dvh">
        <section>
          <img
            className="w-[100%] sm:w-[85%]"
            src="src\assets\gameboy-no-bg.png"
            alt="computer"
          />
        </section>
        <section className="flex flex-col items-end font-roboto">
          <div>
            <div>CRISTINA</div>
            <div>ZLATOV</div>
            <div>/WEB DEVELOPER/</div>
            <div>MI</div>
            <div className="pb-12">
              EXP<span className="pl-12">2+</span>
            </div>
            <button className="hover:text-black cursor-pointer transition-all duration-150 ease-in-out">
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
