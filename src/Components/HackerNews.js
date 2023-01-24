import React, { useState } from 'react';
import  useDataApi  from '../Hooks/useDataApi';


function HackerNews() {
    const [query, setQuery] = useState('tesla');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://newsapi.org/v2/everything?q=tesla&from=2022-12-24&sortBy=publishedAt&apiKey=10f721a1533d4c57a17298968044024a',
    { articles: [] },
  );

  return (
    <>
      <form
        onSubmit={event => {
          doFetch(
            `https://newsapi.org/v2/everything?q=${query}&from=2022-12-24&sortBy=publishedAt&apiKey=10f721a1533d4c57a17298968044024a`,
          );

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.articles.map((item, i) => (
            <div className='news-card' key={i}>
              <img className='news-card-image' src={item.urlToImage}/>
              <p className='news-card-title' >{item.title}</p>
              <p className='news-card-content' >{item.content}</p>
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default HackerNews;