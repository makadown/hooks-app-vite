
import { useEffect, useState } from 'react';

// We are gonna store the urls as keys in this object with their respective data as values.
const localCache = {};

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null, 
        isLoading: true, 
        hasError: false,
        error: null
    });

    useEffect(() => {
      fetchData(url);
    
      return () => {
        console.log('cleanup');
      }
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }
    

    const fetchData = async(url='') => {

        if (localCache[url]) {
            console.log('Fetching from cache...');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        setLoadingState();
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch(url);
        if (!response.ok) {
            console.log('Fetch Error');
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
            return;
        }
        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });
        // Here we are going the handle the cache
        localCache[url] = data;        
    }

    return {
        ...state
    }
}
