// app/layout.jsx
import './globals.css';
import { DatePickerProvider } from '../context/DatePickerContext';

export const metadata = {
  title: 'Date Picker App',
  description: 'A reusable date picker with recurrence options',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DatePickerProvider>{children}</DatePickerProvider>
      </body>
    </html>
  );
}
