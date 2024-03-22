import { useState } from 'react';
import Icon from '../../components/Icon'
import Html5QrcodePlugin from "./Html5QrcodePlugin"
import './Scanner.css'

function Scanner() {
  const [barDecoded, setBarDecoded] = useState('initialState')

  const onNewScanResult = (decodedText) => {
    setBarDecoded(decodedText)
  };

  return (
    <section className="Scanner">
      <Icon name="photo_camera" color="hint"></Icon>
      <p className="Scanner__text">Toca para activar el escaner</p>
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      { barDecoded }
    </section>
  )
}

export default Scanner
