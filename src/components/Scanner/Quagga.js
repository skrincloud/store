import Quagga from 'quagga'; // ES6

export function setOnRead(onRead) {
  Quagga.onDetected(onRead);
}

export async function startQuagga() {
  try {
    const camera = await getCamera();
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#scanner-source'),
        constraints: {
          deviceId: camera.deviceId,
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
        alert(`Error al iniciar tu camara  ${camera.label} \n ${err}`);
        console.log(err);
        return
      }
      Quagga.start();
    });
  } catch (error) {
    console.log(error);
    alert(`Error al iniciar tu camara \n ${error}`);
  }
}

async function getCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const videoDevices = await navigator.mediaDevices.enumerateDevices();
  const filterDevices = videoDevices.filter(device => !!device.deviceId && device.kind === 'videoinput');
  stream.getTracks().forEach(track => track.stop());
  return filterDevices[filterDevices.length - 1];
}