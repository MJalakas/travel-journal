import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });

  return (
    <div className="App">
      <div className="App--content">
        <Header />
        {cards}
      </div>
    </div>
  );
}

export default App;
