import React, { useState } from 'react';
import HistoricalCards from '../HistoricalCards/HistoricalCards';
import './HistoricalContainer.css';

function HistoricalContainer({ theHistory, launchImages }) {
  const [favoritesList, setFavoritesList] = useState([])
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleDisplay = () => {
    setIsFavorited(!isFavorited)
  }

  const updateFavorites = (story) => {
    let foundFavorite = favoritesList.find(favorite => favorite.id === story.id)

    if (foundFavorite) {
      removeFromFavorites(foundFavorite)
    } else {
      addToFavorites(story)
    }
  }
  
  const addToFavorites = (story) => {
    let newFavorite = {
      id: Date.now(), ...story
    }
    setFavoritesList([...favoritesList, newFavorite])
  }

  const removeFromFavorites = (story) => {
    let itemsToKeep = favoritesList.filter(favorite => favorite.id !== story.id)
    setFavoritesList(itemsToKeep)
  }

  const displayArticles = (array) => {
    let hisTory = array.filter(story => {
      return story.links.article && !story.links.article.includes('www.spacex.com')      
    }).map((story, i) => (
      <HistoricalCards 
        key={story.id}
        story={story}
        image={launchImages[i]} 
        updateFavorites={updateFavorites}
      /> 
    ))
    console.log('hisTory', hisTory)
    return hisTory
  }
    
  return(
    <section className='historical-cards-section'>
      <button 
        onClick={() => toggleDisplay()}
        >View Favorites
      </button>
      <button 
        onClick={() => toggleDisplay()}
        >View All
      </button>
      {!isFavorited && displayArticles(theHistory)}
      {isFavorited && displayArticles(favoritesList)}
    </section>
  )
}

export default HistoricalContainer;