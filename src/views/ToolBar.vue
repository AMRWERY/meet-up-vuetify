<template>
  <v-layout>
    <v-navigation-drawer v-model="sideNave">
      <v-list>
        <router-link to="/meet-ups"><v-list-item prepend-icon="mdi mdi-account-group-outline" title="View MeetUp"
            value="View MeetUp"></v-list-item></router-link>
        <router-link to="/create-meets"><v-list-item prepend-icon="mdi mdi-map-marker" title="Organize MeetUp"
            value="Organize MeetUp"></v-list-item></router-link>
        <router-link to="/user-profile"><v-list-item prepend-icon="mdi mdi-account-circle" title="Profile"
            value="Profile"></v-list-item></router-link>
        <router-link to="/sign-in"><v-list-item prepend-icon="mdi mdi-login" title="Sign in"
            value="Sign in"></v-list-item></router-link>
        <router-link to="/sign-up"><v-list-item prepend-icon="mdi mdi-lock-open" title="Sign up"
            value="Sign up"></v-list-item></router-link>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
  <v-toolbar class="bg-green-lighten-3">
    <v-app-bar-nav-icon @click="sideNave = !sideNave" class="d-sm-none .d-md-flex"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link to="/">Meet Up</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="d-none d-lg-block">
      <v-btn><svg-icon type="mdi" :path="path"></svg-icon><router-link to="/meet-ups">View MeetUp</router-link></v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="d-none d-lg-block">
      <v-btn><svg-icon type="mdi" :path="path2"></svg-icon><router-link to="/create-meets">Organize
          MeetUp</router-link></v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="d-none d-lg-block">
      <v-btn><svg-icon type="mdi" :path="path3"></svg-icon><router-link to="/user-profile">Profile</router-link></v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="d-none d-lg-block">
      <v-btn><svg-icon type="mdi" :path="path4"></svg-icon><router-link to="/sign-in">Sign in</router-link></v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="d-none d-lg-block">
      <v-btn><svg-icon type="mdi" :path="path5"></svg-icon><router-link to="/sign-up">Sign up</router-link></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountGroupOutline, mdiMapMarker, mdiAccountCircle, mdiLogin, mdiLockOpen } from '@mdi/js';

export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiAccountGroupOutline,
      path2: mdiMapMarker,
      path3: mdiAccountCircle,
      path4: mdiLogin,
      path5: mdiLockOpen,
      sideNave: false,
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
