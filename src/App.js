import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const Card = ({ card }) => {
    return (
        <div className="card">
            <div className="title">{card.title}</div>
            <img src={card.thumbnailUrl} alt={card.title} />
        </div>
    );
};

const Grid = ({ cards }) =>
    cards.map(card => {
        return <Card key={card.id} card={card} />;
    });

export const App = ({ cards }) => {
    return (
        <div className="App">
            <Grid cards={cards} />
        </div>
    );
};

const mapStateToProps = state => ({
    cards: state.cards,
});

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch({ type: 'FETCH' }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
