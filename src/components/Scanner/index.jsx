import { useEffect, useState } from 'react';
import Icon from '../../components/Icon'
import './Scanner.css'
import Quagga from 'quagga'; // ES6

function Scanner() {
  const [barDecoded, setBarDecoded] = useState('initialState')

  const onNewScanResult = (decodedText) => {
    setBarDecoded(decodedText)
    console.log(barDecoded)
  };
  const [isScannerActive, setIsScannerActive] = useState(false)

  const startScanner = () => {
    setIsScannerActive(true)

  }

  useEffect(() => {
    if (!isScannerActive) return
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#scanner-source'),
        constraints: {
          width: { min: 640 },
          height: { min: 480 },
          facingMode: "environment",
          aspectRatio: { min: 1, max: 2 }
        }
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      numOfWorkers: 2,
      frequency: 10,
      locate: true,
      decoder: {
        readers: ["code_128_reader"]
      }
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    });
  }, [isScannerActive]);

  return (
    <section className="Scanner">
      {(!isScannerActive) ?
        <div onClick={startScanner}>
          <Icon name="photo_camera" color="hint"></Icon>
          <p className="Scanner__text">Toca para activar el escaner</p>
        </div> :
        <div id='scanner-source' className='Scanner__source'></div>
      }
    </section>
  )
}

export default Scanner
