import './HistoricalCards.css';
import { ReactTinyLink } from 'react-tiny-link';
// import dayjs from 'dayjs';

function HistoricalCards({ id, title, image, details, link }) {
  return (
    <article className='historical-card' id={id}>
      <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={link}
        header={title}
        description={details}
        defaultMedia={image}
      />
      <button>✨</button>
    </article>
    


    //   <p className='title'>{title}</p>
    //   <p className='event-date'>{dayjs(eventDate).format('MM/DD/YYYY')}</p>
    //   <p className='details'>{details}</p>
    //   <a href={link}className='article-link'>Click Here to View Full Article</a>
            
    
  )
}

export default HistoricalCards;

// "links": {
//   "article": "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0"
//   },
//   "title": "Falcon reaches Earth orbit",
//   "event_date_utc": "2008-09-28T23:15:00Z",
//   "event_date_unix": 1222643700,
//   "details": "Falcon 1 becomes the first privately developed liquid-fuel rocket to reach Earth orbit.",
//   "id": "5f6fb2cfdcfdf403df37971e"