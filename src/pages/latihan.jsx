import { useState } from "react";
import { Link } from "react-router-dom";

// const CekGanjilGenap = ({number}) => {
//      if (number % 2 == 0) {
//           return <p>{number} adalah genap</p>;
//      } else {
//           return <p>{number} adalah ganjil</p>;
//      }
// }

const CekTerlur = ({num}) => {
     return <h2>{num} telur</h2>;
}



function Latihan(){
     const [angka, setAngka] = useState(0);
     const buah = [
          {nama: 'semangka', icon:'🍉'},
          {nama: 'kelapa', icon:'🥥'},
          {nama: 'jeruk', icon:'🟠'}
     ]
     let ls = angka;
     // const [namaku, setNamaku] = useState("");
     // const [telur, setTelur ] = useState([]);
     return <>
          <h1>Latihan Page</h1>
          <input type="number" placeholder="Jumlah Telur" onChange={(e) => setAngka(e.target.value)} />
          <br />
          <button onClick={(e) => setAngka(angka + 1)}>Click Me +</button>
          {/* <button onClick={(e) => setAngka(angka - 1)}>Click Me -</button> */}

          <br />
          <h2>Current count: {angka}</h2>
          <h2>Previous count: {(ls -1) >= 0 ? angka-1 : 0}</h2>


          {/* <ol>
               {buah && buah.map(({nama, icon}) => <li key={nama}>{nama} {icon}</li>)}
               { buah && buah.map(function({nama, icon}, index) {
                    return <li key={nama}>{index}. {nama} {icon}</li>
               })}
          </ol> */}

          {/* {angka && new Array(parseInt(angka)).fill('🥚').map((item) => item + " ")} */}

          {/* <input type="number" onChange={(e) => setAngka(e.target.value)} /> */}
          {/* { angka != '' ? <CekGanjilGenap number={angka} /> : null} */}
          {/* { angka && <CekGanjilGenap number={angka} />} */}
     </>
}

export default Latihan;