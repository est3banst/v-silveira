import React, { useState } from 'react';
import BasicDatePicker from './Calendario';
import '../index.css';

const Hero = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [errMsg, setErr] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ nombre: '', correo: '', telefono: '' });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedHour(null);
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const checkFecha = async () => {
    if (!selectedDate || !selectedHour) {
      setErr("Debes seleccionar una fecha y una hora primero.");
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch('192.168.1.2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fecha: selectedDate.toISOString(), hora: selectedHour, ...userInfo }),
      });

      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getAvailableHours = () => {
    if (!selectedDate) return null;
    const hoursByDay = {
      0: "Cerrado",
      1: "10 a.m.–7 p.m.",
      2: "10 a.m.–7 p.m.",
      3: "9 a.m.–6 p.m.",
      4: "10 a.m.–7 p.m.",
      5: "9 a.m.–6 p.m.",
      6: "Cerrado",
    };
    const dayOfWeek = selectedDate.getDay();
    const hours = hoursByDay[dayOfWeek];
    
    if (hours === "Cerrado") {
      return <p className="text-red-500">No hay turnos disponibles.</p>;
    }

    const [start, end] = hours.split("–");
    const convertTo24Hour = (hour, period) => {
      let numericHour = parseInt(hour, 10);
      if (period === "p.m." && numericHour !== 12) numericHour += 12;
      if (period === "a.m." && numericHour === 12) numericHour = 0;
      return numericHour;
    };

    const startTime = convertTo24Hour(...start.split(" "));
    const endTime = convertTo24Hour(...end.split(" "));

    return (
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {Array.from({ length: endTime - startTime }, (_, i) => {
          const hour = startTime + i;
          const formattedHour = hour > 12 ? `${hour - 12} p.m.` : `${hour} a.m.`;
          return (
            <button
              key={hour}
              onClick={() => handleHourSelect(formattedHour)}
              className={`px-4 py-2 rounded-md ${selectedHour === formattedHour ? "bg-blue-700 text-white" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            >
              {formattedHour}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative h-[120vh] overflow-hidden">
      <img className="absolute inset-0 w-full h-full object-cover" src="teeth-pex.jpg" alt="Background" />
      <div className="absolute mt-10 flex flex-col items-center text-center top-1/2 transform -translate-y-1/2 bg-white/50 backdrop-blur-lg p-6 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg">
        <h4 className="text-xl text-slate-900 text-center py-3">Vení a sonreír nuevamente!</h4>
        <p className='text-slate-950 font-semibold my-2 text-sm border-b-2 border-teal-400'>Agenda sin costo tu consulta</p>
        
        <div className="flex flex-col items-center py-2 gap-4">
          <BasicDatePicker onChange={handleDateChange} />
          {!selectedDate && errMsg && <p className="text-red-500">{errMsg}</p>}
        </div>

        {selectedDate && (
          <div className="mt-4">
            <h3 className="text-lg text-left text-slate-700 font-bold">Selecciona una hora:</h3>
            {getAvailableHours()}
          </div>
        )}

        {selectedHour && (
          <div className="mt-4 w-full">
            <h3 className="text-lg text-left my-2 text-slate-700 font-bold">Tus datos de contacto:</h3>
            <form className="flex flex-col gap-2">
              <input type="text" hidden value={selectedHour} name="fecha_sel" onChange={handleInputChange} />
              <input
                type="text"
                name="nombre"
                placeholder="Nombre y Apellido"
                value={userInfo.nombre}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
              />
              <input
                type="email"
                name="correo"
                placeholder="Correo Electrónico"
                value={userInfo.correo}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Número de Teléfono"
                value={userInfo.telefono}
                onChange={handleInputChange}
                className="border p-2 rounded-md w-full"
              />
              <button
              type="submit"
              onClick={checkFecha}
              className="w-full mt-3 py-2 px-4 bg-[#17C3B2] text-white text-lg font-bold rounded-md hover:bg-[#149e91]"
            >
              Agendá hoy
            </button>
            </form>

            
          </div>
        )}

        {loading && <p>Loading...</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default Hero;
