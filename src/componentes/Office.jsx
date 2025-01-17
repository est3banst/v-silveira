import React from 'react';

const Office = () => {
  return (
    <>
    <hr />
    <div className='relative w-full mt-6'>
      <h2 className='text-slate-900 text-xl py-3 mx-6 border-b-8 border-teal-600 w-max'>La oficina</h2>
      <div className='w-full p-4'>
        <a 
          className='w-full flex'
          target='_blank'
          href="https://www.google.com/maps/place/Sinton%C3%ADa+dental/@-34.8867113,-56.1265788,18.53z/data=!4m6!3m5!1s0x959f8127c32e3ae3:0x3df93632dfc64a96!8m2!3d-34.8865528!4d-56.1259186!16s%2Fg%2F11hd9nd42k?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D">
          <img 
            className='w-full h-auto object-contain'
            src="map.png" 
            alt="Ubicación de la clínica Sintonia Dental" />
        </a>
      </div>
      <section className='text-slate-900 w-full p-4'>
        <h2 className='text-xl'>Horarios de atención</h2>
        <hr className='px-4' />
        <div className='py-4'>
        <p>Lunes, martes y jueves: 11:00 AM - 7:00 PM</p>
        <p>Miércoles : 9:00 AM - 6:00 PM</p>
        <p>Viernes: 9:00 AM - 7:00 PM</p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Office;
