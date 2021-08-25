
import './App.css';
import ClickCounter from './components/ClickCounter';
import ConditionalRenderingIfElse from './components/ConditioanlRenderingIfElse';
import ConditionalRenderingResponse from './components/ConditionalRenderingResponse';
import ConditionalRenderTernary from './components/ConditionalRenderTernary';
import ConditionalShortCircuitOperator from './components/ConditionalShortCircuitOperator';
import EmpCard from './components/EmpCard';
import EmployeeCard from './components/EmployeeCard';
import EventBindingConstructor from './components/EventBindingConstructor';
import EventBindingFatArrow from './components/EventBindingFatArrow';
import EventBindingProperty from './components/EventBindingProperty';
import EventBindingRender from './components/EventBindingRender';
import { default as EventHandlingCC, default as EventHandlingFC } from './components/EventHandlingCC';
import GreetClassC, { ClassComponent, GCC } from './components/GreetCC';
import { default as Greeting, default as Greetingalias, Greet, Hello } from './components/GreetFC';
import HoverCount from './components/HoverCount';
import LifeCycle1 from './components/LifeCycle1';
import PropsCC from './components/PropsCC';
//import * as CC from './components/GreetCC';
import PropsFC from './components/PropsFC';
import RoutingDemo from './components/RoutingDemo';
import StateCC from './components/StateCC';
import StateFC from './components/StateFC';
import Cards from './components/EmployeeID/Cards';
import FormDemo from './components/FormDemo';
import { SignUpValidation } from './components/SignUpValidation';

import {Employee} from './components/Employee'

// App is Parent and rest our children
function App() {
  return (
    <div className="App">
      Welcome to React JS 
      {/* <EventBindingRender/> 
      <EventHandlingCC/>
      <EventHandlingFC/>
      <EventBindingConstructor/> 
      <EventBindingFatArrow/>
      <EventBindingProperty/>
      <Greet/> 
      <Hello/> 
      <GreetClassC/>
      <Greeting/>
      <Greetingalias/>
      <GCC/>
      <ClassComponent/>
      
      <PropsFC uname = "John" city = "Pune"/>
      <PropsFC uname = "Ramesh" />
      <PropsFC>Hello using child prop </PropsFC>

      <PropsCC uname = "Ayu" city = "Jammu"/>
      <PropsCC city = "Maharashtra"> He is a smart person </PropsCC>

      <StateCC/>
      <StateFC/>
      <StateFC uname = "Ankita" city = "Pune"/>
      <ConditionalRenderingIfElse/>
      <ConditionalRenderTernary/>
      <ConditionalRenderingResponse/>
      <ConditionalShortCircuitOperator/>
      
      
      <HoverCount/>
      <ClickCounter/>*/}
      
      
      <RoutingDemo/>
      {/* <EmpCard employeeCode = {101}/>
      <EmployeeCard  empCode ={2905}  /> 
      <Cards employeeId="64974" /> */}
      {/* <SignUpValidation/>
      <FormDemo/> */}
      
      {/* <LifeCycle1/>  */}
     <EmpCard employeeCode = {101}/>
      <Employee/>
      

      
     
    </div>
  );
}

// loose coulping 
export default App
