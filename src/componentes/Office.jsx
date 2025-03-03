import React from 'react';

const Office = () => {
  return (
    <>
    <hr />
    <div className='relative w-full p-6 mt-6'>
      <h2 className='text-slate-900 text-xl py-3 mx-4 border-b-8 border-teal-600 w-max'>La oficina</h2>
      <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className='w-full my-4'>
        <a 
          className='w-full flex'
          target='_blank'
          href="https://www.google.com/maps/place/Sinton%C3%ADa+dental/@-34.8867113,-56.1265788,18.53z/data=!4m6!3m5!1s0x959f8127c32e3ae3:0x3df93632dfc64a96!8m2!3d-34.8865528!4d-56.1259186!16s%2Fg%2F11hd9nd42k?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D">
          <img 
            className='max-w-md h-auto object-contain'
            src="new_map.png" 
            alt="Ubicación de la clínica Odontológica" />
        </a>
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
