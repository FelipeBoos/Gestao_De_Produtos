import { Routes } from '@angular/router';
import { Home } from './components/home/home'
import { Login } from './pages/login/login';

export const routes: Routes = [
    {
        path: "login",
        component: Login
    },
    {
        path: "",
        component: Home
    }

];
