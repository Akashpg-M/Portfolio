import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi'; // fixed incorrect import

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <RiReactjsLine className="text-6xl text-cyan-500" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <TbBrandNextjs className="text-6xl" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <SiMongodb className="text-6xl text-green-500" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <FaNodeJs className="text-6xl text-green-500" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <BiLogoPostgresql className="text-6xl text-sky-500" />
        </div>
      </div>
      
    </div>
  );
};

export default Technologies;
