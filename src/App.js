import './App.css';
import {Routes,Route } from 'react-router-dom'
import MainBoard from './DashBoard/Main';
import Login from './Login';
import Contruction from './Link/Contruction';
import Email from './Link/Email';
import ChooseAnEmail from './Link/ChooseAnEmail';
import ChooseEmail from './Link/ChooseEmail';
import MailDetail from './Link/MailDetail';
import Summary from './Link/Summary';
function App() {
    
    // console.log(mailId)
  return (
    <Routes>
            
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/main" element={<MainBoard/>}>
            <Route path="/main/home" element={<Contruction />}/>
            <Route path="/main/email" element={<Email/>}>
                <Route path="/main/email" element={<ChooseEmail/>}/>
                <Route path="/main/email/inbox" element={<Summary type ='inbox'/>}>
                    <Route path="/main/email/inbox" element={<ChooseAnEmail/>}/>
                    <Route path="/main/email/inbox/:mailId" element={<MailDetail/>}/>
                </Route>

                <Route path="/main/email/sent" element={<Summary type ='sent'/>}>
                    <Route path="/main/email/sent" element={<ChooseAnEmail/>}/>
                    <Route path="/main/email/sent/:mailId" element={<MailDetail/>}/>
                </Route>

                <Route path="/main/email/drafts" element={<Summary type ='drafts'/>}>
                    <Route path="/main/email/drafts" element={<ChooseAnEmail/>}/>
                    <Route path="/main/email/drafts/:mailId" element={<MailDetail/>}/>
                </Route>

                <Route path="/main/email/junks" element={<Summary type ='junks'/>}>
                    <Route path="/main/email/junks" element={<ChooseAnEmail/>}/>
                    <Route path="/main/email/junks/:mailId" element={<MailDetail/>}/>
                </Route>

                <Route path="/main/email/favorite" element={<Summary type ='favorite'/>}>
                    <Route path="/main/email/favorite" element={<ChooseAnEmail/>}/>
                    <Route path="/main/email/favorite/:mailId" element={<MailDetail/>}/>
                </Route>

                <Route path="/main/email/spam" element={<Summary type ='spam'/>}>
                    <Route path="/main/email/spam" element={<ChooseAnEmail/>}/>
                    <Route path="/main/email/spam/:mailId" element={<MailDetail/>}/>
                </Route>

                <Route path="/main/email/reminder" element={<Summary type ='reminder'/>}>
                    <Route path="/main/email/reminder" element={<ChooseAnEmail/>}/>
                    <Route path="/main/email/reminder/:mailId" element={<MailDetail/>}/>
                </Route>
            </Route>
            <Route path="/main/contact" element={<Contruction/>}/>
            </Route>
           
            
        </Routes>
  // <div>
  //   <MainBoard/>
  //   {/* <Routes>
  //     {publesRoutes.map((route ,index) =>{
  //       const Page = route.component
  //       return <Route key={index} 
  //                     path={route.path}
  //                     element ={<Page/>}/>
  //     })}
      
  //   </Routes> */}
    
  // </div>  
  );
}

export default App;
