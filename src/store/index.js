import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [collectionContext, setCollectionContext] = useState([])

    useEffect(() => {
        //
    }, [])

    const updateCollection = (newCollection) => {
        setCollectionContext(newCollection)
    }

    return (
        <AppContext.Provider value={{collectionContext, updateCollection}}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
  return useContext(AppContext);
}