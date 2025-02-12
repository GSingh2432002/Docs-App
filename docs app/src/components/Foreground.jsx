import React, { useState, useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const [cards, setCards] = useState([
    {
      id: 1,
      description: "",
      close: false,
      tag: { isOpen: true, tagTitle: "", tagColor: "" },
    }
  ]);

  const addNewCard = () => {
    const newCard = {
      id: Date.now(),
      description: "",
      close: false,
      tag: { isOpen: true, tagTitle: "", tagColor: "green" },
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
  };

  const updateCard = (cardId, updatedData) => {
    setCards(cards.map(card => 
      card.id === cardId ? updatedData : card
    ));
  };

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {cards.map((item) => (
          <Card
            key={item.id}
            data={item}
            ref={ref}
            onDelete={() => deleteCard(item.id)}
            onUpdate={updateCard}
          />
        ))}
      </div>
      <button
        onClick={addNewCard}
        className="fixed bottom-8 right-8 z-[4] bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
      >
        + Add Card
      </button>
    </>
  );
};

export default Foreground;