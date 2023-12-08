import { createContext, useContext, useState } from 'react';

const AreaContext = createContext();

export const AreaProvider = ({ children }) => {
    const [areaValue, setAreaValue] = useState(0);

    return (
        <AreaContext.Provider value={{ areaValue, setAreaValue }}>
            {children}
        </AreaContext.Provider>
    );
};

export const useAreaContext = () => {
    return useContext(AreaContext);
};
