import Quagga from 'quagga'; // ES6

export function setOnRead(onRead) {
  Quagga.onDetected(onRead);
}

export async function startQuagga() {
  await navigator.mediaDevices
    .getUserMedia({ video: true })
  const deviceId = await getCameraId();
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#scanner-source'),
      constraints: {
        deviceId
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

async function getCameraId() {
  const videoDevices = await navigator.mediaDevices.enumerateDevices();
  const filterDevices = videoDevices.filter(device => !!device.deviceId && device.kind === 'videoinput');
  return filterDevices[filterDevices.length - 1].deviceId;
}