import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker ({ onChange }) {
  const [value, setValue] = React.useState(null);

  const handleDateChange = (newValue) => {
    setValue(newValue); // Update local state
    if (onChange) {
      onChange(newValue.toDate()); // Pass the selected date as a native Date object
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Selecciona una fecha"
        value={value}
        onChange={handleDateChange} // Call handleDateChange on date selection
      />
    </LocalizationProvider>
  );
}
