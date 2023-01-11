import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ComponenteA from './Ejercicios/EjerciciosSesion1_2_3/componenteA';
import Ejemplo01 from './hooks/Ejemplo01';
import Ejemplo02 from './hooks/Ejemplo02';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        {/*Contenido propio Greeting*/ }
        {/* <Greeting name="Martín"></Greeting> */ }
        {/* NotaS:  Componente de ejemplo funcional */ }
        {/* <Greetingf name="Martín"></Greetingf> */ }
        {/* NotaS:  Componente listado de tareas*/ }
        {/* <TaskListComponent></TaskListComponent> */ }
        {/* NotaS:  Ejercicio sesion 1,2,3 */}
        {/* <ComponenteA></ComponenteA> */}
        {/* NotaS:  EJEMPLOS DE HOOKS */}
        {/* <Ejemplo01></Ejemplo01> */}
        <Ejemplo02></Ejemplo02>
      </header>
    </div>
  );
}

export default App;
