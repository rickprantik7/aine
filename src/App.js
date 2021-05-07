
import './App.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import SettingsIcon from '@material-ui/icons/Settings';
function App() {
  return (
    <div className="App">
    <div className="sidebar">
      <div className="logo">

      </div>
      <div className="classes">
     <div className="cls">
       <SettingsIcon/>
       <p>Settings</p>
       </div>
     <div className="cls">
       <CallToActionIcon/>
       <p>Lessons</p>
       </div>
     <div className="cls">
        <PermIdentityIcon/>
        <p>Student</p>
        </div>
     </div>
    </div>
    <div className="main">
   <h3>▶  Videos</h3> 
   <input placeholder="Insert URL Here" />
   <div className="upload">
    <p>Upload</p>
   </div>

    </div>
    
    
    </div>
  );
}

export default App;
