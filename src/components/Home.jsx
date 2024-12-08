import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown, BsTwitch, BsTwitterX } from "react-icons/bs";
import me from "../assets/logo2.jpg";
import { SiTwitter } from "react-icons/si";

const Home = () => {


  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br />
            Ganesh Varma
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                '<span style="color: #FF651C;">A Frontend  Developer</span>',
                '<span style="color: #f12e2e;">Aspiring MERN Stack Developer</span>',
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:ganeshbodakuntla@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <aside>
            <a
              href="https://github.com/ganeshbodakuntla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>

            <a
              href="https://www.linkedin.com/in/ganesh-bodakuntla-b9411828a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              // style={{  color: '#0077B5' }}
              className="linkedin-link"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://twitter.com/ganeshgane05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="twitter-link"
            >
              <BsTwitterX size={32} />
            </a>
            {/* <article data-special>
              <span></span>
            </article> */}
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Pradyumna" />
      </section>
      {/* <BsChevronDown /> */}
    </div>
  );
};

export default Home;
