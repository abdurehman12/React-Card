import logo from './logo.svg';
import './App.css';
import {Button,Form, Container} from 'react-bootstrap';
import { PrimaryButton, TestButton } from './Components/Buttons';
import FormExample from './Components/Form';
import CardExample from './Components/Card';
import Cards from './Components/Card';

function App() {
  return (
    <div className="App">
    <Container>
      {/* React App Demo
      <br/>
      <Button>Demo</Button>
      <TestButton buttonname={"Login"}/>

      <TestButton buttonname={"Sign up"}/>

      <PrimaryButton> </PrimaryButton>

      <FormExample/> */}
      <CardExample></CardExample>

     {/* <Cards 
     imageSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        imageAlt="Example Image"
        title="Example Card"
        description="This is an example card component."
        link="https://google.com"
        buttonText="Learn More"
       /> */}

    </Container>
    </div>
  );
}

export default App;
