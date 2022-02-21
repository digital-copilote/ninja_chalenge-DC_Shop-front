import NavBar from 'components/header/NavBar';
import AboutUs from 'components/pages/aboutus/AboutUs';
import Collections from 'components/pages/collections/Collections';
import OneCollection from 'components/pages/collections/OneCollection';
import Contact from 'components/pages/contact/Contact';
import Home from 'components/pages/home/Home';
import Profile from 'components/pages/Profile/Profile';
import ProfileSettings from 'components/pages/Profile/ProfileSettings';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const routes = [
  { path: '/home', component: <Home /> },
  { path: '/collections', component: <Collections /> },
  { path: '/collections/:idTheme', component: <OneCollection /> },
  { path: '/aboutus', component: <AboutUs /> },
  { path: '/contact', component: <Contact /> },
  { path: '/profile', component: <Profile /> },
  { path: '/profile/settings', component: <ProfileSettings /> },
];

function App() {
  return (
    <div className="text-text">
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
