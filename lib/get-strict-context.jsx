// import * as React from 'react';

// function getStrictContext(name) {
//   const Context = React.createContext(undefined);

//   const Provider = ({
//     value,
//     children
//   }) => <Context.Provider value={value}>{children}</Context.Provider>;

//   const useSafeContext = () => {
//     const ctx = React.useContext(Context);
//     if (ctx === undefined) {
//       throw new Error(`useContext must be used within ${name ?? 'a Provider'}`);
//     }
//     return ctx;
//   };

//   return [Provider, useSafeContext];
// }

// export { getStrictContext };

import * as React from "react";

export function getStrictContext(name) {
  const Context = React.createContext(undefined);

  function useStrictContext() {
    const context = React.useContext(Context);

    if (context === undefined) {
      throw new Error(`${name} must be used within its Provider`);
    }

    return context;
  }

  return [Context.Provider, useStrictContext];
}
