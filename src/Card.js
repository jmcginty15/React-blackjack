const Card = ({ card }) => {
    const imgSrc = `https://deckofcardsapi.com/static/img/${card}.png`;
    if (card === 'AD') {
        console.log(card);
        console.log(imgSrc);
    }

    return (
        <div className="Card">
            <img src={imgSrc} alt={card} />
        </div>
    )
}

export default Card;