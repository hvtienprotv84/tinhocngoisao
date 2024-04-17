import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './Menu';
import NewAccessory from './component/NewAccessory';
import OldAccessory from './component/OldAccessory';
import SSD_HDD_USB from './component/SSD_HDD_USB';
import Laptop from './component/Laptop';
import PCGaming from './component/PCGaming';
import PC_VP from './component/PC_VP';
import PC_DH from './component/PC_DH';
import ComputerScreen from './component/ComputerScreen';
import Accessory from './component/Accessory';
import TablesandChairs from './component/TablesandChairs';
import HeadsetMouse from './component/HeadsetMouse';
import NetworkEquipment from './component/NetworkEquipment';
import AudioEquipments from './component/AudioEquipments';
import CameraWebcam from './component/CameraWebcam';

// import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Menu />
    <div className='ml-[75px] mt-[60px]'>
    </div>
    <div className='absolute '>
    <NewAccessory/>
    </div>
    <div className='absolute mt-[-50px]'>
    <OldAccessory/>
    </div>
    <div className='absolute mt-[-10px]'>
    <SSD_HDD_USB/>
    </div>
    <div className='absolute mt-[138px]'>
    <Laptop/>
    </div>
    <div className='absolute mt-[182px]'>
    <PCGaming/>
    </div>
    <div className='absolute mt-[228px]'>
    <PC_VP/>
    </div>
    <div className='absolute mt-[275px]'>
    <PC_DH/>
    </div>
    <div className='absolute mt-[320px]'>
    <ComputerScreen/>
    </div>
    <div className='absolute mt-[365px]'>
    <Accessory/>
    </div>
    <div className='absolute mt-[410px]'>
    <TablesandChairs/>
    </div>
    <div className='absolute mt-[455px]'>
    <HeadsetMouse/>
    </div>
    <div className='absolute mt-[505px]'>
    <NetworkEquipment/>
    </div>
    <div className='absolute mt-[550px]'>
    <AudioEquipments/>
    </div>
    <div className='absolute mt-[595px]'>
    <CameraWebcam/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
