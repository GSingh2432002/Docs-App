import React, {forwardRef} from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = forwardRef((props, ref) => {
  return (
    <motion.div drag dragConstraints={ref} whileDrag={{scale: 1.1}} dragElastic={0.1} className="relative shrink-0 w-60 h-72 rounded-[45px] bg-[#3d3d3d] text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {props.data.description}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{props.data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {props.data.close ? (
              <IoClose />
            ) : (
              <FiDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {props.data.tag.isOpen && (
          <div className={`tag w-full py-4 ${ props.data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center`}>
            <h3 className="text-sm font-medium">{props.data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
})

export default Card;
