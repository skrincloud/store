import { useEffect, useState } from 'react';
import Icon from '../../components/Icon'
import './Scanner.css'
import { startQuagga, setOnRead } from './Quagga';

function Scanner() {
  const [barDecoded, setBarDecoded] = useState('initialState')

  const onNewScanResult = (decodedText) => {
    setBarDecoded(decodedText)
    console.log(barDecoded)
  };

  setOnRead(function (result) {
    if (result.codeResult?.code === barDecoded) return
    onNewScanResult(result.codeResult.code)
  });

  const [isScannerActive, setIsScannerActive] = useState(false)

  const startScanner = () => {
    setIsScannerActive(true)
  }

  useEffect(() => {
    if (!isScannerActive) return
    startQuagga()
  }, [isScannerActive]);

  return (
    <section className="Scanner">
      {(!isScannerActive) ?
        <div onClick={startScanner}>
          <Icon name="photo_camera" color="hint"></Icon>
          <p className="Scanner__text">Toca para activar el escaner</p>
        </div> :
        <>
          <div id='scanner-source' className='Scanner__source'></div>
          <div className="Scanner__result">
            <p>{barDecoded}</p>
          </div>
        </>
      }
    </section>
  )
}

export default Scanner
