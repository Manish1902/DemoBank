import React, { useState } from 'react';
import { DataContext } from './dataContext';

function DataStore({ children }) {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <DataContext.Provider value={{selectedValue, setSelectedValue}}>
            {children}
        </DataContext.Provider>
    );
}
export default DataStore;