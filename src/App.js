import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import TasksList from './pages/Tasks/TasksList';
import SetTaskTiming from './pages/Tasks/SetTaskTiming';
import ProtectedRoute from "./routes/ProtectedRoute";
import {useSelector} from 'react-redux';
import ReduxPractice from './pages/ReduxPractice/ReduxPractice';
import AssignTask from './pages/Tasks/AssignTask';


function App() {
  const state = useSelector(state => state);
  console.log(state);
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        
        {/* Protected Routes (Accessible only after login) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/tasks-list" element={<TasksList/>}></Route>
          <Route path="/set-task-timing" element={<SetTaskTiming/>}></Route>
          <Route path="/redux-practice" element={<ReduxPractice/>}></Route>
          <Route path="/assign-task" element={<AssignTask/>}></Route>
          
          
        </Route>
        {/* Protected Routes (Accessible only after login) */}
      </Routes>
    </Router>
    
  );
}

export default App;
