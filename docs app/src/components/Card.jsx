import React, { useState, useRef, forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { motion } from "framer-motion";

const tagColorOptions = {
  green: "bg-green-600",
  blue: "bg-blue-600",
  red: "bg-red-600",
  purple: "bg-purple-600",
  orange: "bg-orange-600",
  pink: "bg-pink-600",
  yellow: "bg-yellow-500",
  teal: "bg-teal-600",
  indigo: "bg-indigo-600",
  cyan: "bg-cyan-600"
};

const Card = forwardRef(({ data, onDelete, onUpdate }, ref) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleSave = () => {
    onUpdate(data.id, editedData);
    setIsEditing(false);
  };

  return (
    <motion.div
      drag
      dragConstraints={ref}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      className="relative shrink-0 w-64 h-82 rounded-[45px] bg-[#3d3d3d] text-white px-8 py-10 overflow-hidden"
    >
      {isEditing ? (
        <div className="h-full flex flex-col gap-3">
          <button
            onClick={() => setIsEditing(false)}
            className="absolute top-4 right-4 p-1 hover:bg-zinc-600 rounded-full transition-colors"
          >
            <IoClose />
          </button>
          <textarea
            className="bg-zinc-700 rounded p-2 text-sm resize-none flex-grow"
            value={editedData.description}
            placeholder="Enter description"
            onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
          />
          <div className="space-y-2">
            <input
              className="bg-zinc-700 rounded p-2 text-sm w-full"
              value={editedData.tag.tagTitle}
              placeholder="Enter tag title"
              onChange={(e) => setEditedData({
                ...editedData,
                tag: { ...editedData.tag, tagTitle: e.target.value }
              })}
            />
            <div className="flex flex-col gap-2">
              <label className="text-sm">Select Tag Color</label>
              <div className="grid grid-cols-5 gap-2">
                {Object.keys(tagColorOptions).map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full ${tagColorOptions[color]} ${
                      editedData.tag.tagColor === color 
                        ? 'ring-2 ring-white' 
                        : 'hover:opacity-80'
                    }`}
                    onClick={() => setEditedData({
                      ...editedData,
                      tag: { ...editedData.tag, tagColor: color }
                    })}
                  />
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={editedData.tag.isOpen}
                onChange={(e) => setEditedData({
                  ...editedData,
                  tag: { ...editedData.tag, isOpen: e.target.checked }
                })}
              />
              Show Tag
            </label>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm w-full"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={onDelete}
            className="absolute top-4 right-4 p-1 hover:bg-zinc-600 rounded-full transition-colors"
          >
            <IoClose />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-4 right-12 p-1 hover:bg-zinc-600 rounded-full transition-colors"
          >
            <IoAdd />
          </button>
          {data.description && (
            <p className="text-sm leading-tight mt-5 font-semibold whitespace-pre-wrap break-words max-h-[calc(100%-80px)] overflow-y-hidden">
              {data.description}
            </p>
          )}
          <div className="footer absolute bottom-0 left-0 w-full">
            {data.tag.isOpen && data.tag.tagTitle && (
              <div
                className={`tag w-full py-4 ${tagColorOptions[data.tag.tagColor]} flex items-center justify-center`}
              >
                <h3 className="text-sm font-medium">{data.tag.tagTitle}</h3>
              </div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
});

export default Card;