// app/page.jsx
import React from 'react';
import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <DatePicker />
    </div>
  );
}
