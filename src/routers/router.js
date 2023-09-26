import HomePage from "@/pages/HomePage"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/', 
        component: HomePage
    }
]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router 

