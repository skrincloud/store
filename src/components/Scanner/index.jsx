import { useState } from 'react';
import Html5QrcodePlugin from "./Html5QrcodePlugin"
import './Scanner.css'

function Scanner() {
  const [barDecoded, setBarDecoded] = useState('initialState')

  const onNewScanResult = (decodedText) => {
    setBarDecoded(decodedText)
    console.log(barDecoded)
  };

  return (
    <section className="Scanner">
      <Html5QrcodePlugin
          qrCodeSuccessCallback={onNewScanResult}
        />
    </section>
  )
}

export default Scanner
