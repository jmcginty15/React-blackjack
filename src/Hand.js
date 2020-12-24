import Card from './Card';
import cards from './cards';
import './Hand.css';

const Hand = () => {
    const index1 = Math.floor(Math.random() * 51);
    let index2 = Math.floor(Math.random() * 51);
    while (index1 === index2) index2 = Math.floor(Math.random() * 51);

    const hand = [cards[index1], cards[index2]];
    const totalScore = hand[0].score + hand[1].score;

    return (
        <div className="Hand">
            <div className="grid-container">
                {hand.map(card => <Card key={card.card} card={card.card} />)}
            </div>
            <h2 className="footer">Score: {totalScore}</h2>
            {totalScore === 21 ? <h2 className="footer">Blackjack!</h2> : null}
        </div>
    )
}

export default Hand;