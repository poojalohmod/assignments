import Component2 from "./Component2";
import AppContext from "./AppContext";

function Component1() {
  const values = {
    a: "Alpha",
    b: "Beta",
    c: "Gamma",
    d: "Delta",
    e: "Epsilon",
    f: "Phi"
  };

  return (
    <AppContext.Provider value={values}>
      <div>
        <h2>Component1</h2>
        <Component2 />
      </div>
    </AppContext.Provider>
  );
}

export default Component1;
