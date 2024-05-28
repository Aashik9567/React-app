import React from 'react'

const TailwindCard = () => {
  return (
    <div className="p-8 rounded-xl backdrop-blur-sm max-w-sm mx-auto border border-sky-500 mt-[100px]">
      <div><img className='mx-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5Ry0uA0wtzBPTu8LqLpw3XUHFGF3_jXlYAcJ2dOpcA&s" alt="" /></div>
      <div>
        <h3 className="font-bold text-2xl mx-auto">Nature</h3>
        <p>
         Nature, the inherent beauty and complexity of the world around us, encompasses diverse ecosystems, plants, animals, and landscapes. It provides vital resources, sustains life, and inspires awe through its intricate balance and resilience. Preserving nature is essential for the health and well-being of all living organisms.</p>
      </div>
    </div>
  )
}

export default TailwindCard
