// Composables
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import CreateMeetup from "@/components/MeetUp/CreateMeetup.vue";
import MeetUps from "@/components/MeetUp/MeetUps.vue";
import MeetUp from "@/components/MeetUp/MeetUp.vue";
import SignIn from "@/components/User/SignIn.vue";
import SignUp from "@/components/User/SignUp.vue";
import UserProfile from "@/components/User/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/create-meets",
    name: "CreateMeetup",
    component: CreateMeetup,
  },
  {
    path: "/meet-ups",
    name: "MeetUps",
    component: MeetUps,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: '/meetup/:id',
    name: 'Explore MeetUp',
    props: true,
    component: MeetUp
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
