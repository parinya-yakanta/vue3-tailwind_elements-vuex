import { createRouter, createWebHistory } from "vue-router";
import authentication from "@/middleware/authentication";
//auth
import RegisterView from "@/views/auth/RegisterView.vue";
import LoginView from "@/views/auth/LoginView.vue";
// webs
import HomeView from "@/views/webs/HomeView.vue";
import ShopView from "@/views/webs/ShopView.vue";
import DetailProductView from "@/views/webs/DetailProductView.vue";
import DetailShopView from "@/views/webs/DetailShopView.vue";
//customers
import Profile from "@/views/customers/Profile.vue";
import MyShop from "@/views/customers/MyShop.vue";
import MyChat from "@/views/customers/MyChat.vue";
import AddProduct from "../views/customers/product/AddProduct.vue";
import AddShop from "@/views/customers/shop/AddShop.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shops",
    name: "shops",
    component: ShopView,
  },
  {
    path: "/detail-product",
    name: "detail-product",
    component: DetailProductView,
  },
  {
    path: "/detail-shop",
    name: "detail-shop",
    component: DetailShopView,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      middleware: [authentication],
    },
  },
  {
    path: "/my-shop",
    name: "my-shop",
    component: MyShop,
    meta: {
      middleware: [authentication],
    },
  },
  {
    path: "/my-chat",
    name: "my-chat",
    component: MyChat,
    meta: {
      middleware: [authentication],
    },
  },
  {
    path: "/add-product",
    name: "add-product",
    component: AddProduct,
    meta: {
      middleware: [authentication],
    },
  },
  {
    path: "/add-shop",
    name: "add-shop",
    component: AddShop,
    meta: {
      middleware: [authentication],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
