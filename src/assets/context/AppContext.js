import React, {useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [idOfSelectedCategoryDot, setIdOfSelectedCategoryDot] = useState(3);
  const [categoriesModalOpen, setCategoriesModal] = useState(false);

  const storeIdOfSelectedCategoryDot = val => {
    setIdOfSelectedCategoryDot(val);
  };

  const storeCategoriesModalOpen = val => {
    setCategoriesModal(val);
  };
  return (
    <AppContext.Provider
      value={{
        //getter
        idOfSelectedCategoryDot,
        categoriesModalOpen,
        //function
        storeIdOfSelectedCategoryDot,
        storeCategoriesModalOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
