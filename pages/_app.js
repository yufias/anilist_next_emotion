import '../styles/globals.css'
import { AppWrapper } from '../src/store'
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
  return(
    <AppWrapper>
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    </AppWrapper>
  )
}

export default MyApp
