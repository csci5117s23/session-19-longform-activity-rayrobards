import { useState } from "react";

export default function FlashCard() {
    const [cardSide, setSide] = useState(false);
    const [cardStatus, setStatus] = useState("front")
    const [cardList, setCardList] = useState([{front: "question1", back:"answer1"},
                                                {front: "question2", back:"answer2"},
                                                {front: "question3", back:"answer3"},
                                            ])
    const [newCard, setNewCard] = useState({front: "", back: ""})
    function changeSide() {
        setSide(!cardSide)
        if(cardStatus === "front")
        {
            setStatus("back")
        }
        else
        {
            setStatus("front")
        }
    }

    function addCard() {
        console.log(newCard.front)
        setCardList(cardList.concat(newCard))
    }

    return (
        <div className ="CardContainer">
            <div className="AddCard">
                    {/* spread(...) operator copies front:e.target.value into the existing newCard object */}
                    <input placeholder="front" value={newCard.front} onChange={(e) => setNewCard({...newCard, front:e.target.value})}></input>
                    <input placeholder="back" value={newCard.back} onChange={(e) => setNewCard({...newCard, back:e.target.value})}></input>
                    <button onClick={addCard}>Add new flashcard</button>
            </div>
            <div className="Cards">
                {cardList.map(card => (
                    <span className="FlashCard" onClick={changeSide}>{card[cardStatus]}</span>
                ))}
            </div>
        </div>
    );
}