import { HomePage } from "../pages/homepage";
import { RoomsPage } from "../pages/RoomsPage";
import { BookingPage } from "../pages/BookingPage";
import { BudgetPage } from "../pages/CalcultorPage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/signUpPage";
import { DashboardPage } from "../pages/dashboard";
export const RouteDate = [
    {
        path: "",
        element: <HomePage />,
        title:"HomePage"
    },
    {
        path: "/rooms",
        element: <RoomsPage />,
        title:"RoomsPage"
    },
    {
        path: "/booking",
        element: <BookingPage />,
        title:"BookingPage"
    },
    {
        path: "/login",
        element: <LoginPage />,
        title:"LoginPage"
    },
    {
        path: "/signup",
        element: <SignUpPage />,
        title:"SignUp"
    },
    {
        path: "/dashboard/:tabId",
        element: <DashboardPage />,
        title:"ContactPage"
    },
    {
        path: "/budget-calculator",
        element: <BudgetPage />,
        title:"StudentBugetPage"
    },
    
    



]
