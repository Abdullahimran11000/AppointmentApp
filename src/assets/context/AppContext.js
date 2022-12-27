import React, {useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [idOfSelectedCategoryDot, setIdOfSelectedCategoryDot] = useState(1);
  const [categoriesModalOpen, setCategoriesModal] = useState(false);
  const [openCam, setOpenCam] = useState(false);
  const [callStatus, setCallStatus] = useState('');
  const [selectedCategoryResult, setSelectedCategoryResult] = useState('cardiology');

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

  const storeSelectedCategoryResult = val => {
    setSelectedCategoryResult(val);
  };

  return (
    <AppContext.Provider
      value={{
        //getter
        idOfSelectedCategoryDot,
        categoriesModalOpen,
        openCam,
        callStatus,
        selectedCategoryResult,
        //function
        storeIdOfSelectedCategoryDot,
        storeCategoriesModalOpen,
        storeOpenCam,
        storeCallStatus,
        storeSelectedCategoryResult,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
