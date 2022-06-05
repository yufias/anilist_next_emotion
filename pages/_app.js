import '../styles/globals.css'
import { AppWrapper } from '../src/store'
import { useEffect } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";


const client = new ApolloClient({
    uri: 'https://graphql.anilist.co',
    cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if(!localStorage.getItem('anilist_collection')) {
            localStorage.setItem('anilist_collection', JSON.stringify([]))
        }
    }, [])

  return(
    <AppWrapper>
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    </AppWrapper>
  )
}

export default MyApp
