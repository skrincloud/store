import Quagga from 'quagga'; // ES6

export function setOnRead(onRead) {
  Quagga.onDetected(onRead);
}

export async function startQuagga() {
  await navigator.mediaDevices
    .getUserMedia({ video: true })
  const videoDevices = await Quagga.CameraAccess.enumerateVideoDevices();
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#scanner-source'),
      constraints: {
        deviceId: videoDevices[videoDevices.length - 1].deviceId
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
      readers: ["ean_reader"]
    }
  }, function (err) {
    if (err) {
      console.log(err);
      return
    }
    Quagga.start();
  });
}