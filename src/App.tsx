import { useCallback, useEffect, useRef, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";

import { loadFull } from "tsparticles";

import type { Container, ISourceOptions, Engine } from "@tsparticles/engine";
import { particleConfigs } from "./lib/configs";
import AsciiArt from "./ascii-art";

export function getRandomParticleConfig(): ISourceOptions {
  const index = Math.floor(Math.random() * particleConfigs.length);

  return particleConfigs[index];
}

const particlesInit = async (engine: Engine) => {

  await loadFull(engine);
};

export default function App() {
  const particlesContainer = useRef<Container | undefined>(undefined);  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
    particlesContainer.current = (container)
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({...getRandomParticleConfig(), fullScreen: { enable: false }}),
    [],
  );
  const [isHighPerformance, setIsHighPerformance] = useState(localStorage.getItem("__is_high_performance_mode") === "true")
  const [isLaptop, setIsLaptop] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem("__is_high_performance_mode", String(isHighPerformance))
      console.log("Saved to localStorage:", isHighPerformance)
    } catch (e) {
      console.error("localStorage error:", e)
    }

    if (particlesContainer.current !== undefined) {
      if (isHighPerformance) {
        particlesContainer.current.start()
      } else {
        particlesContainer.current.stop()
      }
    }
  }, [isHighPerformance])



  return (
    <ParticlesProvider init={particlesInit}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className={`${isHighPerformance ? "": "hidden"}`}
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100lvh", zIndex: -1 }}
        />
        
      <div className={`animated-bg overlay ${isHighPerformance ? "hidden" : ""}`}></div>
      
      <div className="pixels"></div>
      <div id="vignette" className="overlay no-select"></div>

      <main className="h-[100vh] flex flex-row justify-center">
        <div className="max-w-[620px] w-full h-fit p-[20px] pt-[16px] pb-[80px] flex flex-col items-center">

          <div className={`bg-black/10 md:bg-black/60 w-full flex flex-col items-center m-8 pb-6 rounded-2xl ${isHighPerformance ? "backdrop-blur md:backdrop-blur-lg" : ""} border-solid border-[#502e40] border-4`}>

            <div className="w-[100%] aspect-3/2 md:aspect-2/1 pt-6">
              <AsciiArt duration={950} containerClassName="h-[100%] w-[100%]" />
            </div>


            <p className="text-4xl underline m-6" style={{ fontFamily: "JetBrains Mono, monospace, sans-serif", fontWeight: "bold", textTransform: "uppercase", marginTop:"3rem" }}>Kerimniy</p>


            <div className="bg-[#2e242f8d] rounded-lg text-lg w-[90%] md:w-[80%] text-start mt-16 mb-4">
              <div className="bg-[#322c3080] rounded-lg w-full h-[3rem] flex flex-row items-center p-4 text-[1.05rem] gap-6">
                <div className="flex flex-row gap-1">
                  <div className="rounded-full bg-[#e5787a] h-[1rem] w-[1rem]"></div>
                  <div className="rounded-full bg-[#d8ae5c] h-[1rem] w-[1rem]"></div>
                  <div className="rounded-full bg-[#7ee787] h-[1rem] w-[1rem]"></div>

                </div>
                <div className="truncate">
                  selo@kerimniy — bash
                </div>
              </div>
              <div className="p-4">


                <div className="mb-10">

                  <div>
                    <span style={{ color: "#7ee787" }}>selo@kerimniy</span>: ~ $ cat about.txt
                  </div>
                  <div>Я село тупое, селюк, рагуль и тд. Пытаюсь сдать егэ и перестать быть селом. Люблю селфхост и бекенд, больше на вики (чек снизу)</div>
                </div>
                <br></br>


                <div className="mb-10">

                  <div>
                    <span style={{ color: "#7ee787" }}>selo@kerimniy</span>: ~ $ performancectl
                  </div>
                  <div>Set performance mode:</div>
                  <div>
                    <button className={`m-2 hover:bg-[#7ee787] hover:text-[#fff] hover:underline ${isHighPerformance ? "text-[#fff] text-bold" : ""}`} onClick={() => setIsHighPerformance(true)}>--high</button>
                    <button className={`m-2 hover:bg-[#7ee787] hover:text-[#fff] hover:underline ${!isHighPerformance ? "text-[#fff] text-bold" : ""}`} onClick={() => setIsHighPerformance(false)}>--low</button>

                  </div>

                </div>
                <br></br>


                <div className="mb-10">

                  <div>
                    <span style={{ color: "#7ee787" }}>selo@kerimniy</span>: ~ $ cat minfetch
                  </div>
                  <div>Choose the system:</div>
                  <div>
                    <button className={`m-2 hover:bg-[#7ee787] hover:text-[#fff] hover:underline ${!isLaptop ? "text-[#fff] text-bold" : ""}`} onClick={() => setIsLaptop(false)}>--pc</button>
                    <button className={`m-2 hover:bg-[#7ee787] hover:text-[#fff] hover:underline ${isLaptop ? "text-[#fff] text-bold" : ""}`} onClick={() => setIsLaptop(true)}>--laptop</button>

                  </div>
                  <br></br>
                  <MinFetch isLaptop={isLaptop}></MinFetch>
                </div>
                <br></br>


                <div className="mb-10">

                  <div>
                    <span style={{ color: "#7ee787" }}>selo@kerimniy</span>: ~ $ cat links.txt
                  </div>
                  <div>
                    <a href="https://t.me/Kerimniy" className={`m-2 hover:bg-[#7ee787] text-[#7ee787] cursor-default hover:text-[#fff] underline`}> {'>'}&nbsp;telegram</a>
                    <a href="https://github.com/Kerimniy" className={`m-2 hover:bg-[#7ee787] text-[#7ee787] cursor-default hover:text-[#fff] underline`}> {'>'}&nbsp;github</a>
                    <a href="https://wiki.kerimniy.qzz.io/" className={`m-2 hover:bg-[#7ee787] text-[#7ee787] cursor-default hover:text-[#fff] underline`}> {'>'}&nbsp;wiki</a>
                    <a href="https://vebls.kerimniy.qzz.io/" className={`m-2 hover:bg-[#7ee787] text-[#7ee787] cursor-default hover:text-[#fff] underline`}> {'>'}&nbsp;vebls</a>
                  </div>
                </div>

              </div>

            </div>

          </div>


        </div>
      </main>

    </ParticlesProvider>
  );
}

function MinFetch({ isLaptop }: {isLaptop: boolean}) {
  if (isLaptop) {
    return (<div className="grid grid-cols-[auto_1fr] text-lg gap-4 md:gap-x-20">
      <span className="text-[#7ee787]">os</span>
      <div>Cachy OS</div>

      <span className="text-[#7ee787]">host</span>
      <div>ASUS TUF</div>

      <span className="text-[#7ee787]">cpu</span>
      <div>R5 7535HS</div>

      <span className="text-[#7ee787]">ram</span>
      <div>16 GB DDR5</div>

      <span className="text-[#7ee787]">gpu</span>
      <div>Nvidia RTX 4060m</div>

      <span className="text-[#7ee787]">ssd</span>
      <div>512GB NVME</div>


    </div>
    )
  } else {
    return (
      <div className="grid grid-cols-[auto_1fr] text-lg gap-4 md:gap-x-20">
        <span className="text-[#7ee787]">os</span>
        <div>Windows 10 Pro</div>

        <span className="text-[#7ee787]">cpu</span>
        <div>Xeon 2640v4</div>

        <span className="text-[#7ee787]">ram</span>
        <div>24 GB DDR4</div>

        <span className="text-[#7ee787]">gpu</span>
        <div>Nvidia GT 430</div>

        <span className="text-[#7ee787]">ssd</span>
        <div>APACER 120GB</div>

        <span className="text-[#7ee787]">hdd</span>
        <div>TOSHIBA 512GB</div>
      </div>
    )
  }
}

