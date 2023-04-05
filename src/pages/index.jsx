import Home from "./home";
import About from "./about";
import Gallery from "./gallery";
import Hentai from "./hentai";

//Public routes
const publicRoutes = [
    { path: '/', component: Home, id: 1 },
    { path: '/about', component: About, id: 2 },
    { path: '/gallery', component: Gallery, id: 3 },
    { path: '/hentai', component: Hentai, id:4}
]

export { publicRoutes }