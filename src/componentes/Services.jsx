import React from 'react'

const Services = () => {
  return (
    <>
    <hr />
    <div className='bg-slate-50 mt-2 p-2 h-screen'>
        <h2 className='text-slate-900 text-xl py-3 mx-6 border-b-8 border-teal-600 w-max'>Servicios</h2>
        <div className='flex flex-col md:flex-row justify-around h-[70vh] gap-4 items-center'>
        <section className='w-3/5 flex custom-shadow bg-slate-100 hover:scale-[102%] flex-col-reverse items-center justify-center border-[1px] border-teal-600 p-3 gap-4'>
            <p className='text-slate-700 font-extrabold md:text-xl'>Ortodoncia</p>
            <img 
                src="data:image/png;base64,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"
                alt="external-teeth-orthodontics-flaticons-flat-flat-icons-5" />
        </section>
        <section className='w-3/5 flex bg-slate-100 custom-shadow hover:scale-[102%] flex-col-reverse items-center justify-center border-[1px] border-teal-600 p-3 gap-4'>
            <p className='text-slate-900 font-extrabold md:text-xl'>Limpiezas</p>
            <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPUlEQVR4nO2WS08TURiGZ6Nu/Af+A3XjP6BL49q/gHNMxA1hpsTEaMCNweBlo+y8VAGDFwIYxGgoA1bElkunltpL2ulEYmmnFElmLHzmDBQapqWnTWhPO+dNvqTttO/7ned8Zzocx8TExMTExNQI6XKbpMsON2dXGQEH4OLsKsOOAHS5TTq88MJ7WxwHXXa4ywIItE1zdpJhxyNQLNsD0GWH23Zj3xLSKXuAqXs/BmU3r7r3Y9gRgE7ZA0zd+9Epe4BpaD+GHY9AsWwPQKfsAYa2fpiYWkWrq3AqkMx2yMmMR1a1rYCqZWQ1IwXUTCcu/NobTW1MLSeNEU9044NXGf68snaadh8iBeOpM7Kq+QKqBiT1I5aCodkIvPZEtr74lQu0+hDvvKxqvsT6JvzLb5sVX9+sHBpNgWsmbIZi8rT5EAMIJLMd2AAHFWTkt4nITy4m4YX7F0z4lCHafIgByMmMp9bA75E/ZuDI12iONp8qJkDL4R/jMcOhBuHI4fIrGTPw5Ux4hzafIxcNAroEAlJARBCMrRGZl6qVvcBBKUydD14biHwCuviLVgAin9j9AoLYwlLNgfN7IzcqBanzKawPBD5eAgDa/0La9azmwMml3ZuOd3SSOp/iNR4JYKf7GkQX5arDFvDfjjsM72ZDkL9xnTofYgAgIjB6RAiF4sRhS4k0DM9FYEgKQ/bubWp9iAGAiEB7OkAcOOFLmKPmH3lPvQ8xgPytTotxfO4b/OsRwOh1mq8Lnw9KETPwb2839T7EAEBElkActD+Wvc79z3EYrmbxqRkAlLlebeON9mEADguaZOfYBKj1PgJKumKgvBfomjli5yjzIQYQWQ5WDPTGUmbgm9kQNIsPMYDckwcH1JW05bqspGHMGzdph1yD0Cw+xABARLDVfwd+j4/D+qvnlms/347B9Kd5UAcel/09jT6lAGxUCm6ZEvisFYCA/PYBgJZLTADfb6MJ6LMCcPLnQUT5hjd3/JUH55WzFgBYIKJHrb/76D5XTnDz8kkQ+KmGN3l89RHa20+UBXAAAT1sseOQxztfcfHFgq6r50Dk7+E7Jgh8joJFVFe4593e+8qeeSYmJiYmJs7W+g/9qXfBlkMjaAAAAABJRU5ErkJggg==" 
                alt="external-teeth-anatomy-flaticons-flat-flat-icons" />
        </section>
        <section className='w-3/5 bg-slate-100 flex custom-shadow hover:scale-[102%] flex-col-reverse items-center justify-center border-[1px] border-teal-600 p-3 gap-4'>
            <p className='text-slate-900 font-extrabold md:text-xl'>Implantes</p>
            <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWUlEQVR4nNWaS0gVURjHf2ktzd4SIUGkUWS2aFGIWFISUbSIgpKoVZBIbsQ2hht7EGmJIj1ErQhbRBTZQnriIig1MKNFUVlhtcjEXtLL4tBfGMy5zsyde+/xBx8yd77XOfOdM2fOEbwzDdgBnAUeAv3AH+AL8ApoA8qAzHH8LAL2S/+17Iflz/htBrYDqYTIdKAa+KykfwCPgCtAE3AVuO9olJEOYKPDxyRgE9Dp0DH6t4GLQKP89ci/uf8JqFL8qMgF3sjpTWALkOKimwSsBI4CAw6bVcAtXX8ADgHZEWKmKM6IjXlaOUEbsFy9YQKv9Wmbqsb8UiLm7/EIHeBGgeIPjtNw1159IgcZBMPU/nslkEdwMlV6j1WWntmsHtwTMPAK4B3wFVhD9OxVPmZceaZRA8zv4zc9tRv4pnERuJZHMRX4CTTgAzNrvPChP0Ulc1c99hTIIlxearB75p6mOy9sA747pt/qAE/QCz3KKyaNWArUASXAXGJHj99G3FFJ2MQz5eWZy5pebaIfuOTHoEGzga95OYYk6YV5xo/RAQ3UhdhBpvIp92O0XkZm1WoDO5WPWYZ4ZqaWx7XYQZ3ymeHX8AHQBySTWCYDb7Xc982+II8wBmxQHsVBjGfrTXyNxHJdecwK6qBWvZBPYshT/JponMzRh1FHAsZGsuIOqiqioky9UUp8KVVcEz+UHunUB04a8SFN8UKtgHz1ivlEvBEH6VG81YSIWUO1Ah+BIQUY0HVYMiC/Q7pujeXa7ZiChbq5xT9/f+Q/5ow0okI7eWFJRTwbUeLYxYuFlBAn0oEFoyRXSVSNcc8pVdLLHeNeOglmvsc1f7n0jL5VZAOHlVzbOLXfJj2jvwyLOB2w/k9hEckBx0Siv1X+O4ApVHJN2kV3kybpFcrOGpoDlpNpkDXMA4qUWAuwNYK0SK9IdlaRpeQqdUTlJpXSC3vDOWpqApbTCSwiB6hXYu3AkQjSLr36EM8vQmPCv7GLgV7H0e7zCDJyVNwbdBsmVuwCupVcnz5n3aRPet2ys4oJX04FwAUl16U1kZt0Sc/or8MiDmrD18/0Oiw761gM/AbOudw/r/vWvehG06JTHfMfBU4ydPpk7lvPEvV2x6ix0KHfzf0JwUmXcWB+D52/yq6F87G5DlcAAAAASUVORK5CYII=" 
                alt="external-crown-dentistry-prettycons-lineal-prettycons" />
        </section>
        </div>

    
    </div>
    <hr />
    </>
  )
}

export default Services