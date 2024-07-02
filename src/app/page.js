"use client"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import BlogList from "../../Components/BlogList";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";


export default function Home() {
  return (
   <>
   <ToastContainer theme="dark"/>
   <Header/>
   <BlogList/>
   <Footer/>

   </>
      
  );
}
