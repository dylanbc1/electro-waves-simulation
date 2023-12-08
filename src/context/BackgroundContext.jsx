import { createContext, useContext, useState } from 'react';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
    const [backgroundData, setBackgroundData] = useState(1);

    const waves0 = () => {
        setBackgroundData(0)
    }

    const waves1 = () => {
        setBackgroundData(1);
    };

    const waves2 = () => {
        setBackgroundData(2);
    };

    const waves3 = () => {
        setBackgroundData(3)
    }

    return (
        <BackgroundContext.Provider value={{ backgroundData, waves0, waves1, waves2, waves3 }}>
            {children}
        </BackgroundContext.Provider>
    );
};

export const useBackgroundContext = () => {
    return useContext(BackgroundContext);
};
