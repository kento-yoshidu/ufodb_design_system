import MenuPanel from "./_components/layout/MenuPanel";
import "./styles/styles.css";

function App() {
  return (
    <MenuPanel
      active={"merge"}
      onSelect={() => {}}
      onChangeMode={() => {}}
      mode="graph"
    >
    </MenuPanel>
  );
}

export default App;
