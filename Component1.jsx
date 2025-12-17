import Component2 from "./Component2";

function Component1() {
  const props = {
    a: "Alpha",
    b: "Beta",
    c: "Gamma",
    d: "Delta",
    e: "Epsilon",
    f: "Phi"
  };

  return (
    <div>
      <h2>Component1</h2>
      <Component2 {...props} />
    </div>
  );
}

export default Component1;

