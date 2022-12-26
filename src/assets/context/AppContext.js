import React, {useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [idOfSelectedCategoryDot, setIdOfSelectedCategoryDot] = useState(3);
  const [categoriesModalOpen, setCategoriesModal] = useState(false);
  const [openCam, setOpenCam] = useState(false);
  const [callStatus, setCallStatus] = useState('');

  const storeIdOfSelectedCategoryDot = val => {
    setIdOfSelectedCategoryDot(val);
  };

  const storeCategoriesModalOpen = val => {
    setCategoriesModal(val);
  };

  const storeOpenCam = val => {
    setOpenCam(val);
  };

  const storeCallStatus = val => {
    setCallStatus(val);
  };

  return (
    <AppContext.Provider
      value={{
        //getter
        idOfSelectedCategoryDot,
        categoriesModalOpen,
        openCam,
        callStatus,
        //function
        storeIdOfSelectedCategoryDot,
        storeCategoriesModalOpen,
        storeOpenCam,
        storeCallStatus,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
