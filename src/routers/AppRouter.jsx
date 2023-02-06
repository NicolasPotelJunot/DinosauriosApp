import { HashRouter  } from "react-router-dom";
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <HashRouter>
        <DashboardRoutes />
    </HashRouter>
  )
}
