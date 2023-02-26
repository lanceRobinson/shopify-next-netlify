import Link from 'next/link';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { useEffect } from 'react';

const url = 'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js'


export default function Header() {
  const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_API_KEY);
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
  return (
    <header className="app-header">
      <h1>
        <Link href="/">
          <a>Life Fitness</a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
          {/* <li className="main-nav-item">
            <Link href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/boards"><a>Boards</a></Link>
          </li> */}
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Shopping Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
      {/*<InstantSearch searchClient={searchClient} >*/}
      {/*  <SearchBox />*/}
      {/*  <Hits />*/}
      {/*</InstantSearch>*/}
    </header>
  );
}
