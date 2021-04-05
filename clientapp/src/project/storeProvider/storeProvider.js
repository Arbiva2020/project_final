import React, { useState } from "react";
const storeProviderObject = {
  userName: "user",
  email: "user123@gmail.com",
  cart: [],
  wishlist: [],
};
export const StoreProviderContext = React.createContext(storeProviderObject);
const StoreProvider = ({ children }) => {
  const [storeProvider, updateStoreProvider] = useState(storeProviderObject);
  return (
    <StoreProviderContext.Provider value={[storeProvider, updateStoreProvider]}>
      {children}
    </StoreProviderContext.Provider>
  );
};
export default StoreProvider;
//storeProvider is just like a state - The state object is where you store property
//values that belongs to the component. When the state object changes, the
//component re-renders.
// All components that consume the StoreProviderContext.Provider will have
//access to the storeProvider state and the updateStoreProvider function
