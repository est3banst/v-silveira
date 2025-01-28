import React from 'react';

const Form = () => {
  return (
      <>
      <div className='flex mx-2 px-2'>
        <h2 className='text-slate-900 border-b-2 text-xl font-light border-teal-600 w-max'>Déjanos tu consulta!</h2>
      </div>
      <hr className='mt-2'/>
      <form className="form">
        <div className="flex-form">
          <label>
            <input required type="text" className="input" />
            <span>nombre</span>
          </label>
          <label>
            <input required type="text" className="input" />
            <span>apellido</span>
          </label>
        </div>  
        <label>
          <input required  type="email" className="input" />
          <span>email</span>
        </label> 
        <label>
          <input required type="tel" className="input" />
          <span>número de contacto</span>
        </label>
        <label>
          <textarea required rows={3} className="input01" defaultValue={""} />
          <span>mensaje</span>
        </label>
        <button className="fancy" href="#">
          <span className="top-key" />
          <span className="text">enviar</span>
          <span className="bottom-key-1" />
          <span className="bottom-key-2" />
        </button>
      </form>
      </>
   
  );
}
export default Form
