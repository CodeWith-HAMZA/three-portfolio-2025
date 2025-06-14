import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { CgCircleci } from 'react-icons/cg';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hamzajawaidshaikh@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Hamza Jawaid</p>
              <p className="grid-subtext">
              I have rich experience in the MERN & T3 stack, React Native Mobile Development. My current focus these days is on expanding my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.

              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className='relative'>

            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div className='absolute flex justify-center items-center w-full h-full top-0'>

            <CgCircleci size={38} className='bg-white p-1 rounded-full'/>
            </div>
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize primarily in <b className='text-neutral-300  '> JS Ecosystem with Typescript</b>, Here are a few technologies I’ve been working with recently: <br/> 
                <p className='text-white pt-2 flex flex-wrap gap-2 '>
                  {/* make chips in span  */}
                  {['JS (ES6+)', 'TS',  'React', 'Node.js', 'Next', 'SQL', 'MongoDB', 'React Native'].map((tech) => (
                    <span
                      key={tech}
                      className="text-neutral-300 text-sm px-3 bg-neutral-800 py-0.5 rounded-full transition-all duration-200 cursor-pointer hover:bg-white hover:text-neutral-900 hover:scale-105 shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
                <br/>For Deployment, <b>AWS' EC2 Machines, Vercel, Docker Containers with CICD Pipelines.</b> <br/><br/>  Additionally in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexibility</p>
              <p className="grid-subtext">I'm based in Karachi, Pakistan. Enrolled in Sindh University Of Pakistan, where I'm doing my bachelor's in Software Engineering.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My passion as an Engineer</p>
              <p className="grid-subtext">
              I'm a passionate developer who thrives on building smart solutions across the digital landscape. Websites, tools, scripts, APIs, and even generative AI-powered chatbots by utilizing the frameworks, APIs like <b>Langchain, OpenAI, Gemini, etc</b>, I leverage cloud-native technologies to create innovative platforms that adapt and grow. Let's collaborate on your next digital adventure.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">hamzajawaidshaikh@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
