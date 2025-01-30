import React, { useState } from 'react';
import BasicDatePicker from './Calendario';
import '../index.css';

const Hero = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [errMsg, setErr] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_URL = "http://18.228.42.163/";


 const checkFecha = async () => {
    
    if (!selectedDate) {
      setErr("Debes seleccionar una fecha primero.")
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fecha: selectedDate.toISOString() }),

      });
      const result = await response.json();
      console.log(result)
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const months = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Setiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre'
  }
  const hoursByDay = {
    0: "Cerrado",
    1: "10 a.m.–7 p.m.",
    2: "10 a.m.–7 p.m.",
    3: "9 a.m.–6 p.m.",
    4: "10 a.m.–7 p.m.",
    5: "9 a.m.–6 p.m.", 
    6: "Cerrado",
  };
  const daysSpan = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miércoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sábado'
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getAvailableHours = () => {
    if (!selectedDate) return null;
    
    const dayOfWeek = selectedDate.getDay();
    const hours = hoursByDay[dayOfWeek];
    
    if (hours === "Cerrado") {
      return <p className="text-red-500">No hay turnos disponibles.</p>;
    }

    const [start, end] = hours.split("–");
    const [startHour, startPeriod] = start.split(" ");
    const [endHour, endPeriod] = end.split(" ");
    const startTime = convertTo24Hour(startHour, startPeriod);
    const endTime = convertTo24Hour(endHour, endPeriod);

    const availableTurns = [];
    for (let hour = startTime; hour < endTime; hour++) {
      const time = hour > 12 ? `${hour - 12} p.m.` : `${hour} a.m.`;
      availableTurns.push(time);
    }

    return (
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {availableTurns.map((turn, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {turn}
          </button>
        ))}
      </div>
    );
  };

  const convertTo24Hour = (hour, period) => {
    let numericHour = parseInt(hour, 10);
    if (period === "p.m." && numericHour !== 12) {
      numericHour += 12;
    }
    if (period === "a.m." && numericHour === 12) {
      numericHour = 0;
    }
    return numericHour;
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="teeth-pex.jpg"
        alt="Background"
      />

      <div className="absolute flex flex-col items-center text-center top-1/2 transform -translate-y-1/2 bg-white/50 backdrop-blur-lg p-6 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg">
       <h4 className='text-xl text-slate-900 text-center py-3'
       >Vení a sonreír nuevamente!</h4>
        <div className="flex flex-col items-center gap-4">
          <BasicDatePicker onChange={handleDateChange} />
        {!selectedDate && errMsg != '' && (<p className='text-red-500'>{errMsg}</p>)}
        </div>
        {selectedDate && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">
              Horas disponibles para {
              daysSpan[selectedDate.getDay()] 
              +" " +selectedDate.toString().split(' ')[2] 
              +' de ' + months[selectedDate.getMonth()]}:
            </h3>
            {getAvailableHours()}
          </div>
        )}
        <div>
      
    </div>
        <button
        onClick={checkFecha}
        className="w-full m-3 py-2 px-4 bg-[#17C3B2] text-white text-lg font-bold rounded-md hover:bg-[#149e91]">
            Agendá hoy
          </button>
          {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default Hero;
