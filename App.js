import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import FreeConsultation from "./components/free-consultation";
import RequestDemo from "./components/request-demo";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
/*import Navbar from "./components/Navbar";*/
import About from "./components/About";
import "./index.css";
import AiSolutions from "./components/AiSolutions";
import LegacyModernization from "./components/LegacyModernization";
import Cybersecurity from "./components/Cybersecurity";
import DataAnalytics from "./components/DataAnalytics";
import ProductEngineering from "./components/ProductEngineering";
import CloudTransformation from "./components/CloudTransformation";
import Careers from "./components/Careers";
import CareerJobDetail from "./components/CareerJobDetail";
import CookieBanner from "./components/CookieBanner";
import ITServices from "./components/ITServices";
import NonITServices from "./components/NonItServices";


import HRMS from "./components/products/HRMS";
import CRM from "./components/products/CRM";
import Messaging from "./components/products/Messaging";
import FoodDelivery from "./components/products/FoodDelivery";
import Contact from "./components/Contact";

import AdminApplications from "./components/AdminApplications";
import AdminHome from "./components/AdminHome";
import AdminJobDetail from "./components/AdminJobDetail";
import AdminJobs from "./components/AdminJobs";

function App() {
  return (

      <BrowserRouter>
      <SplashScreen>
        <CookieBanner />
      <div className="page-wrapper"></div>
      
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/request-demo" element={<RequestDemo />} />
<Route path="/about" element={<About />} />
<Route path="/solutions/ai-solutions" element={<AiSolutions />} />
<Route path="/solutions/legacy-modernization" element={<LegacyModernization />} />
<Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
<Route path="/solutions/data-analytics" element={<DataAnalytics />} />
<Route path="/solutions/product-engineering" element={<ProductEngineering />} />
<Route path="/solutions/cloud-transformation" element={<CloudTransformation />} />
<Route path="/careers" element={<Careers />} />
 <Route path="/services/it" element={<ITServices />} />
  <Route path="/services/non-it" element={<NonITServices />} />
<Route path="/products/hrms" element={<HRMS />} />
        <Route path="/products/crm" element={<CRM />} />
        <Route path="/products/messaging" element={<Messaging />} />
        <Route path="/products/food-delivery" element={<FoodDelivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers/:id" element ={<CareerJobDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<AdminHome />} />
              <Route path="jobs" element={<AdminJobs />} />
              <Route path="jobs/:id" element={<AdminJobDetail />} />
              <Route path="applications" element={<AdminApplications />} />
            </Route>
        </Routes>
        </SplashScreen>
      </BrowserRouter>
    
  );
}

export default App;