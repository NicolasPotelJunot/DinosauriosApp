import React from 'react'
import { BrowserRouter  } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <DashboardRoutes />
    </BrowserRouter>
  )
}
