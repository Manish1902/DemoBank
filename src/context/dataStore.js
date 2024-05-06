import React, { useState } from 'react';
import { DataContext } from './dataContext';

function DataStore({ children }) {
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <DataContext.Provider value={{ fromAccount, setFromAccount, toAccount, setToAccount, amount, setAmount, selectedDate, setSelectedDate, selectedOption, setSelectedOption }}>
            {children}
        </DataContext.Provider>
    );
}
export default DataStore;