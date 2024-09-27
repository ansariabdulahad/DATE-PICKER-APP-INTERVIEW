"use client";
// context/DatePickerContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the DatePicker context
const DatePickerContext = createContext();

// Create a provider component
export function DatePickerProvider({ children }) {
    const [selectedDates, setSelectedDates] = useState([]);

    return (
        <DatePickerContext.Provider value={{ selectedDates, setSelectedDates }}>
            {children}
        </DatePickerContext.Provider>
    );
}

// Custom hook to use the DatePicker context
export function useDatePicker() {
    return useContext(DatePickerContext);
}
