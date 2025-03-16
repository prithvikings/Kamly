import { IoIosReturnRight } from "react-icons/io";

const ButtonHover14 = (prop) => {
  const { content } = prop;
  const buttontext = content ? content : "Get started";
  return (
    <>
      <button
        className="group cursor-pointer slide-anime px-4 py-2 rounded-full w-[180px] bg-white 
      border-[1px] border-zinc-300 text-black flex justify-between items-center font-regular  hover:bg-zinc-900 hover:text-white transition-all"
      >
        {buttontext}{" "}
        <div className="group-hover:translate-x-2 transition-all text-xl">
          <IoIosReturnRight />
        </div>
      </button>
    </>
  );
};
export default ButtonHover14;
