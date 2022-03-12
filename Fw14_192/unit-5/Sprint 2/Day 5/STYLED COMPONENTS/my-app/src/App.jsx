
import { Button } from './components/button';
import "./App.css";

function App() {
  return (
    <div className='App'>
       <Button primary>Primary Button</Button>
       <Button default>Default Button</Button>
       <Button dashed>Dashed Button</Button>
       <Button text>Text Button</Button>
       <Button link as="a" href="#">Link Button</Button>
      
    </div>
  );
}

export default App;
