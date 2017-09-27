import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';

export const config = {
    ROUTES: [
        { path: '',      component: Home },
        { path: 'home',  component: Home },
        { path: 'login',  component: Login }
    ],

    DECLARATIONS: [
        Home,
        Login
    ]
}
