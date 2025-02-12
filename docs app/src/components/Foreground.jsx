import React, {useRef} from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    // filesize: ".9mb",
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
  },
  {
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    // filesize: ".9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
  },
  {
    description: "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.",
    // filesize: ".9mb",
    close: true,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
  }
]

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} ref={ref} />
      ))}
    </div>
  );
}

export default Foreground;
