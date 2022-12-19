import React, {useState} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [idOfSelectedCategoryDot, setIdOfSelectedCategoryDot] = useState(1);

  const storeIdOfSelectedCategoryDot = val => {
    setIdOfSelectedCategoryDot(val);
  };
  return (
    <AppContext.Provider value={{idOfSelectedCategoryDot, storeIdOfSelectedCategoryDot}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
