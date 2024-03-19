import React from 'react'

function MapHome() {
  return (
    <>
    <div className="mx-auto max-w-[92%] mt-8">
     <div className="text-center my-8">
      <p className="text-[44px] tracking-[0.88px] max-md:text-[36px] max-[500px]:text-[32px] font-semibold">Map</p>
      <p className="text-[#C1C1C1] font-semibold text-[20px] max-[500px]:text-[16px]">Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
          suspendisse eu vel quis. Integer</p>
     </div>
       <iframe
       className="mt-2 mb-8"
       width="100%"
       height="500"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59808.48593004786!2d49.795051815686385!3d40.4112576907353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403088032671a5cd%3A0xf31a12d60b93e856!2sNarimanov%2C%20Baku!5e1!3m2!1sen!2saz!4v1708605929437!5m2!1sen!2saz" referrerPolicy="no-referrer-when-downgrade"
       title="Map"
       ></iframe>
    </div>
    </>
    
  )
}

export default MapHome;