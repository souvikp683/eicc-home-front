"use client"
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/Components/Header'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from './toast';


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <ToastContainer/>
        {children}
        </body>
    </html>
  )
}
