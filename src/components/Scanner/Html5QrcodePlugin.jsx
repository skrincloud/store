// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';
import './Html5QrcodePlugin.css'

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    const config = {
        fps: 10,
        qrbox: function(viewfinderWidth, viewfinderHeight) {
            return {
                width: viewfinderWidth * 0.8,
                height: viewfinderHeight * 0.8,
            };
        },
    };

    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

const Html5QrcodePlugin = (props) => {

    useEffect(() => {
        const config = createConfig(props);
        const verbose = props.verbose === true;
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

        return () => {
            html5QrcodeScanner.clear();
        };
    });

    return (
        <div className='Html5QrcodePlugin' id={qrcodeRegionId} />
    );
};

export default Html5QrcodePlugin;