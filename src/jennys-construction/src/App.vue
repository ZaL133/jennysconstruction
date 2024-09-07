<style scoped>

  @media screen and (max-width: 959px) {
    .jc-header-spacer {
      flex: 0;
      display: none;
    }
  }

  @media screen and (min-width: 960px) {
   .jc-mobile-menu {
    flex: 0;
    display: none;
   } 
  }
</style>
<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon class="jc-mobile-menu" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn text href="#">Jenny's Construction</v-btn>
      </v-toolbar-title>

      <!-- Spacer to push buttons to the right -->
      <v-spacer class="jc-header-spacer"></v-spacer>

      <!-- Desktop Navigation -->
      <v-row class="d-none d-md-flex">
        <v-btn text href="#">Home</v-btn>
        <v-btn text href="#about">About Us</v-btn>
        <v-btn text href="#services">Services</v-btn>
        <v-btn text href="#portfolio">Portfolio</v-btn>
        <v-btn text href="#contact">Contact Us</v-btn>
      </v-row>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item href="#">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item href="#about">
          <v-list-item-title>About Us</v-list-item-title>
        </v-list-item>
        <v-list-item href="#services">
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item href="#portfolio">
          <v-list-item-title>Portfolio</v-list-item-title>
        </v-list-item>
        <v-list-item href="#contact">
          <v-list-item-title>Contact Us</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer app padless>
      <v-col class="text-center">
        © 2024 Jenny's Construction
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // Controls the mobile drawer
    };
  },
};
</script>
