import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, hasError: null  });

    const getData = async () => {

        setState({
            ...state,
            hasError: null
        });

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setState({
            data: data,
            loading: false,
            hasError: null
        });
    };

    useEffect(() => {
        getData();
    }, [url]);

    return {
        data: state.data,
        loading: state.loading,
        hasError: state.hasError
    };
};