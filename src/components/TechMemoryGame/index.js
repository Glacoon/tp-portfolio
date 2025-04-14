import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './TechMemoryGame.css';

// Liste des technologies populaires avec leurs icônes (utilisant des caractères emoji pour simplifier)
const techIcons = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'Git', icon: '📊' }
];

const TechMemoryGame = () => {
  // États du jeu
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  // Mémorisation du tableau de cartes mélangées
  // Utilisation de useMemo pour créer le tableau de cartes une seule fois
  const initializeCards = useCallback(() => {
    // Dupliquer chaque technologie pour créer des paires
    const duplicatedTechs = [...techIcons, ...techIcons];
    
    // Mélanger le tableau
    const shuffledCards = duplicatedTechs
      .map(tech => ({ ...tech, id: Math.random() }))
      .sort(() => Math.random() - 0.5);
    
    setCards(shuffledCards);
    setFlippedIndices([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameCompleted(false);
    setStartTime(Date.now());
    setCurrentTime(0);
  }, []);

  // Démarrer le chronomètre quand le jeu commence
  useEffect(() => {
    let interval;
    if (gameStarted && !gameCompleted && startTime) {
      interval = setInterval(() => {
        setCurrentTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted, startTime]);

  // Vérifier si le jeu est terminé
  useEffect(() => {
    if (matchedPairs.length === techIcons.length && gameStarted) {
      setGameCompleted(true);
    }
  }, [matchedPairs, gameStarted]);

  // Gérer le retournement des cartes
  // Utilisation de useCallback pour mémoriser la fonction
  const handleCardClick = useCallback((index) => {
    // Ignorer le clic si la carte est déjà retournée ou si 2 cartes sont déjà retournées
    if (flippedIndices.includes(index) || matchedPairs.includes(index) || flippedIndices.length >= 2) {
      return;
    }

    // Si c'est la première carte du tour, démarrer le jeu
    if (!gameStarted) {
      setGameStarted(true);
    }

    // Ajouter l'index à la liste des cartes retournées
    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    // Si c'est la deuxième carte, vérifier si c'est une paire
    if (newFlippedIndices.length === 2) {
      setMoves(moves => moves + 1);
      
      const [firstIndex, secondIndex] = newFlippedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.name === secondCard.name) {
        // C'est une paire
        setMatchedPairs([...matchedPairs, firstIndex, secondIndex]);
        setFlippedIndices([]);
      } else {
        // Ce n'est pas une paire, retourner les cartes après un délai
        setTimeout(() => {
          setFlippedIndices([]);
        }, 1000);
      }
    }
  }, [flippedIndices, matchedPairs, cards, gameStarted]);

  // Score mémorisé basé sur le nombre de mouvements et le temps
  const score = useMemo(() => {
    if (!gameCompleted) return null;
    const baseScore = 1000;
    const movesPenalty = moves * 10;
    const timePenalty = currentTime * 2;
    return Math.max(baseScore - movesPenalty - timePenalty, 0);
  }, [gameCompleted, moves, currentTime]);

  // Formatage du temps pour l'affichage
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, [currentTime]);

  // Démarrer ou redémarrer le jeu
  const startGame = useCallback(() => {
    initializeCards();
    setGameStarted(true);
  }, [initializeCards]);

  return (
    <div className="memory-game-container">
      <h2 className="game-title">Tech Memory Game</h2>
      
      <div className="game-info">
        <p>Mouvements: {moves}</p>
        <p>Temps: {formattedTime}</p>
        {gameCompleted && <p className="game-score">Score final: {score}</p>}
      </div>
      
      {!gameStarted ? (
        <div className="game-start">
          <p>Testez votre mémoire avec ce jeu de cartes de technologies!</p>
          <button className="game-button" onClick={startGame}>Commencer le jeu</button>
        </div>
      ) : (
        <>
          <div className="memory-grid">
            {cards.map((card, index) => (
              <div 
                key={card.id}
                className={`memory-card ${flippedIndices.includes(index) || matchedPairs.includes(index) ? 'flipped' : ''} ${matchedPairs.includes(index) ? 'matched' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-inner">
                  <div className="card-front">?</div>
                  <div className="card-back">
                    <span className="tech-icon">{card.icon}</span>
                    <span className="tech-name">{card.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {gameCompleted && (
            <div className="game-completed">
              <h3>Félicitations!</h3>
              <p>Vous avez terminé le jeu en {moves} mouvements et {formattedTime}.</p>
              <button className="game-button" onClick={startGame}>Rejouer</button>
            </div>
          )}
          
          {!gameCompleted && (
            <button className="game-button restart" onClick={startGame}>Redémarrer</button>
          )}
        </>
      )}
      
      <div className="game-explanation">
        <h3>Comment ce jeu démontre mes compétences React:</h3>
        <ul>
          <li><strong>useState:</strong> Gestion de multiples états (cartes, paires, score, etc.)</li>
          <li><strong>useEffect:</strong> Effets secondaires pour le chronomètre et la détection de fin de jeu</li>
          <li><strong>useCallback:</strong> Mémorisation des fonctions pour éviter les re-rendus inutiles</li>
          <li><strong>useMemo:</strong> Mémorisation des valeurs calculées comme le score et le formatage du temps</li>
        </ul>
      </div>
    </div>
  );
};

export default TechMemoryGame; 