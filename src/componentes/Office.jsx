import React from 'react';

const Office = () => {
  return (
    <>
    <hr />
    <div className='relative w-full p-6 mt-6'>
      <h2 className='text-slate-900 text-xl py-3 mx-4 border-b-8 border-teal-600 w-max'>La oficina</h2>
      <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className='w-full my-4'>
      <iframe 
      width="100%" 
      height="350" 
      src="https://www.openstreetmap.org/export/embed.html?bbox=-56.1827301979065%2C-34.90043334957238%2C-56.157195568084724%2C-34.88879994561951&amp;layer=mapnik&amp;marker=-34.89461685352922%2C-56.169962882995605" style={{ border: '1px solid black' }}>
        </iframe><br/>
        <small>
          <a href="https://www.openstreetmap.org/?mlat=-34.89462&amp;mlon=-56.16996#map=16/-34.89462/-56.16996&amp;layers=N">Ver mapa completo</a>
      </small>
      </div>
      <section className='text-slate-900 w-full flex flex-col items-center p-4'>
        <h2 className='font-black monts text-2xl'>Horarios de atención</h2>
        <hr className='px-4' />
        <div className='p-4 flex flex-col gap-4'>
        <p className='text-base underline'>Lunes, martes y jueves: 10:00 AM - 7:00 PM</p>
        <p className='text-base underline'>Miércoles, Viernes : 9:00 AM - 6:00 PM</p>
        
        </div>
      </section>
      </div>
    </div>
    </>
  );
};

export default Office;
