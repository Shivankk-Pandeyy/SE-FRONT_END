import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import LoginPage from './Pages/LoginPage';
import LoginPageStudent from './Pages/LoginStudent';
import LoginPageTeacher from './Pages/LoginTeacher';
import SignupPage from './Pages/SignupPage';
import SignupTeacher from './Pages/SignupTeacher';
import SignupStudent from './Pages/SignupStudent';
import Welcome from './FacultyPannel/Welcome'
import WelcomeStudent from './StudentPannel/Welcome'
import ProfileFaculty from './FacultyPannel/Profile';
import ProfileStudent from './StudentPannel/Profile';
import MemberListFaculty from './FacultyPannel/MemberList';
import MemberListStudent from './StudentPannel/MemberList';
import UpdatingStudent from './StudentPannel/Updating';
import UpdatingFaculty from './FacultyPannel/Updating';
import ProfileCardStudent from './StudentPannel/ProfileCard';
import ProfileCardFaculty from './FacultyPannel/ProfileCard';
import ClassroomFaculty from './FacultyPannel/Classroom';
import ClassroomStudent from './StudentPannel/ClassroomStudent'
import ClassroomFormFaculty from './FacultyPannel/ClassroomForm';
import ClassroomFormStudent from './StudentPannel/ClassroomFormStudent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/LoginPage' element={<LoginPage/>}/>
  <Route path='/LoginPageStudent' element={<LoginPageStudent/>}></Route>
  <Route path='/LoginPageFaculty' element={<LoginPageTeacher/>}></Route>
  <Route path='/SignupPage' element={<SignupPage/>}/>
  <Route path='/SignupFaculty' element={<SignupTeacher/>}></Route>
  <Route path='/SignupStudent' element={<SignupStudent/>}></Route>
  <Route path='/WelcomeFaculty/:id' element={<Welcome/>}></Route>
  <Route path='/WelcomeStudent/:id' element={<WelcomeStudent/>}/>
  <Route path='/ProfileFaculty/:id' element={<ProfileFaculty/>}></Route>
  <Route path='/ProfileStudent/:id' element={<ProfileStudent/>}></Route>
  <Route path='/ProfileStudentView/:id' element={<ProfileCardStudent/>}></Route>
  <Route path='/ProfileFacultyView/:id' element={<ProfileCardFaculty/>}></Route>
  <Route path='/ProfileUpdateStudent/:id' element={<UpdatingStudent/>}></Route>
  <Route path='/ProfileUpdateFaculty/:id' element={<UpdatingFaculty/>}></Route>
  <Route path='/MemberListFaculty/:id' element={<MemberListFaculty/>}></Route>
  <Route path='/MemberListStudent/:id' element={<MemberListStudent/>}></Route>
  <Route path='/FacultyClassroom/:id' element={<ClassroomFaculty/>}></Route>
  <Route path='/StudentClassroom/:id' element={<ClassroomStudent/>}></Route>
  <Route path='/ClassroomForm/:id' element={<ClassroomFormFaculty/>}></Route>
  <Route path='/ClassroomFormStudent/:id' element={<ClassroomFormStudent/>}></Route>
  
  </Routes>
  </BrowserRouter>
);
