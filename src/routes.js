// const { default: Contacts} = import("./pages/Contacts.vue");
// const { default: Home} = import("./pages/Home.vue");
import Category from "./pages/Category.vue"
import Contacts from "./pages/Contacts.vue"
import Error404 from "./pages/Error404.vue"
import Home from "./pages/Home.vue"

let routes = [
    { path: '/', component: Home },
    { path: '/contacts', component: Contacts },
    { path: '/category/:id', component: Category },
    { path: '/:pathMatch(.*)*', component: Error404 },
]

export default routes
