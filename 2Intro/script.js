const h1 = React.createElement("h1", null, "Me hu vijay");
const h2 = React.createElement("h2", null, "Me hu vijay bnfg");

const div = React.createElement("div", null, [h1,h2]);

const container = document.querySelector("#root");

const root = ReactDOM.createRoot(container);
root.render(div);
