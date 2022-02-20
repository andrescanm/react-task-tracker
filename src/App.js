import Header from "./components/header";

function App() {

  const appName = `Task Tracker`;
  const appDescription = `A funny React App in the stack!`;

  return (
    <div className="container">
      <h1>React {appName}</h1>
      <small> {appDescription} </small>
      <Header />
    </div>
  );
}

export default App;
