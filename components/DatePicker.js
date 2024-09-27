"use client";
// components/DatePicker.jsx
import React, { useState } from 'react';
import { useDatePicker } from '../context/DatePickerContext';

export default function DatePicker() {
    const { selectedDates, setSelectedDates } = useDatePicker();
    const [inputDate, setInputDate] = useState('');

    // Function to add a date to the selected dates
    const addDate = () => {
        if (inputDate) {
            setSelectedDates([...selectedDates, inputDate]);
            setInputDate('');
        }
    };

    return (
        <div className="p-4 border rounded-lg text-black">
            <h2 className="text-xl mb-4">Select Dates</h2>
            <input
                type="date"
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
                className="border p-2 rounded mb-4 w-full"
            />
            <button onClick={addDate} className="bg-blue-500 px-4 py-2 rounded">
                Add Date
            </button>
            <div className="mt-4">
                <h3 className="font-medium">Selected Dates:</h3>
                <ul className="list-disc pl-5">
                    {selectedDates.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
