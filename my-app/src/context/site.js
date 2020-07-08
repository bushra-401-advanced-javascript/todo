import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [display, setDisplay] = useState(false);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);
  const [sort, setSort] = useState('none');
  
  const state = {
    display,
    setDisplay,
    itemsPerScreen,
    changePageTo: setItemsPerScreen,
    sort,
    changeSortTo: setSort
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;