import { useState } from 'react';

const Salam = () => {
  const [nama, setNama] = useState('');

  return (
    <>
      <input type="text" id='nama' onChange={e => setNama(e.target.value)} />
      <br />
      <p>{nama}</p>
      <button type='button' onClick={() => alert(`hi ${nama}, good night!`)}>Salam</button>
    </>
  )
}

export default Salam;