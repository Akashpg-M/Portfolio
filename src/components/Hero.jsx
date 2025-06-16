import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return(
    <div className="border-b-2 border-neutral-800 pc-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Akash M
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              3rd Year Computer Science Student At Shiv Nadar University
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero;