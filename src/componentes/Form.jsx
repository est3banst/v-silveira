import React, {useState} from 'react';

const Form = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const handleBtnModal = (ev) => {
      ev.preventDefault();
      setModalOpen(!modalOpen);
    }
  
  return (
      <>
      <div className='flex mx-2 px-2 justify-center'>
        <h2 className='text-slate-900 border-b-2 text-xl font-bold border-teal-600 w-max'>Déjanos tu consulta!</h2>
      </div>
      <hr className='mt-2'/>
      <form className="form m-auto">
        <div className="flex-form">
          <label>
            <input required type="text" className="input text-slate-900" />
            <span>nombre</span>
          </label>
          <label>
            <input required type="text" className="input text-slate-900" />
            <span>apellido</span>
          </label>
        </div>  
        <label>
          <input required  type="email" className="input text-slate-900" />
          <span>email</span>
        </label> 
        <label>
          <input required type="tel" className="input text-slate-900" />
          <span>número de contacto</span>
        </label>
        <label>
          <textarea required rows={3} className="input01 text-slate-900" defaultValue={""} />
          <span>mensaje</span>
        </label>
        <button onClick={handleBtnModal} className="fancy" href="#">
          <span className="top-key" />
          <span className="text">enviar</span>
          <span className="bottom-key-1" />
          <span className="bottom-key-2" />
        </button>
      </form>
      {modalOpen && (
        <div 
        onClick={handleBtnModal}
        className='h-screen w-full flex inset-0 fixed top-0 z-[99232] justify-center left-0 bg-[#020202cd]'>
        <div
        onClick={(e) => e.stopPropagation()}
        className='relative z-[-1] p-4 w-5/6 md:w-3/6 h-2/3 my-auto text-slate-50'>
            <section className='text-xl p-6 flex flex-col relative z-50 bg-[#24242442] backdrop-blur-sm rounded-2xl gap-4 my-4'>
            <span 
        onClick={handleBtnModal}
        className='absolute top-0 right-0 cursor-pointer'
      >
               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"></path>
                </svg>
               </span>
                <h2 className='font-black'>Esta aplicación es una demostración, no se enviará ningun dato</h2>
                <p className='font-semibold'>Estás en busqueda de una solución como esta para tu negocio ?</p>
                <p className='font-semibold'>Podemos construirla acorde a tu negocio y sus necesidades especificas</p>
                <a className='border bg-[#f2f2f248] hover:scale-105 transition-all duration-150 ease-out border-slate-600 p-3 mx-2 text-center'
                 href='https://kustomdev.com' 
                 target='_blank' 
                 rel='noopener noreferrer'
                 onClick={(e) => e.stopPropagation()}
                 >Visitar Kustom</a>
                <button 
        onClick={handleBtnModal}
        className='border bg-[#f2f2f248] border-slate-600 p-3 mx-2'
      >
                  Quizás después</button>
            </section>
        </div>
    </div>
      ) }
      </>
   
  );
}
export default Form
