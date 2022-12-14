import React, { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <button onClick={() => setValue((prevState) => prevState + 1)}>
        {value}
      </button>
    </div>
  )
}

export default Counter
