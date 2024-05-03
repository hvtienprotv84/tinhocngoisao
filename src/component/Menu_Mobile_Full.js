import React from 'react';
import MenuMobile from './Menu_Mobile';
import MenuMobile2 from './Menu_Mobile_2';
import MenuMobile3 from './Menu_Mobile_3';
import MenuMobileNewAccessory from './Menu_Mobile_NewAccessory';
import MenuMobileOldAccessory from './Menu_Mobile_OldAccessory';
import MenuMobileSSDHDDUSB from './Menu_Mobile_SSD_HDD_USB';
import MenuMobileLaptop from './Menu_Mobile_Laptop';
import MenuMobileGaming from './Menu_Mobile_PCGaming';
import MenuMobilePCVP from './Menu_Mobile_PC_VP';
import MenuMobilePCDH from './Menu_Mobile_PC_DH';
import MenuMobileComputerScreen from './Menu_Mobile_ComputerScreen';
import MenuMobileAccessory from './Menu_Mobile_Accessory';
import MenuMobileTablesandChairs from './Menu_Mobile_TablesandChairs';
import MenuMobileHeadsetMouse from './Menu_Mobile_HeadsetMouse';
import MenuMobileNetworkEquipment from './Menu_Mobile_NetworkEquipment';
import MenuMobileAudioEquipments from './Menu_Mobile_AudioEquipments';
import MenuMobileCameraWebcam from './Menu_Mobile_CameraWebcam';


function Menu_Mobile_Full() {
    return (
        <div className="max-h-[900px] overflow-y-auto">
      <div className="pt-10">
        <MenuMobile />
        <MenuMobile2 />
        <MenuMobile3 />
        <MenuMobileNewAccessory />
        <MenuMobileOldAccessory />
        <MenuMobileSSDHDDUSB />
        <MenuMobileLaptop />
        <MenuMobileGaming />
        <MenuMobilePCVP />
        <MenuMobilePCDH />
        <MenuMobileComputerScreen />
        <MenuMobileAccessory />
        <MenuMobileTablesandChairs />
        <MenuMobileHeadsetMouse />
        <MenuMobileNetworkEquipment />
        <MenuMobileAudioEquipments />
        <MenuMobileCameraWebcam />
      </div>
    </div>

    );
}

export default Menu_Mobile_Full;
