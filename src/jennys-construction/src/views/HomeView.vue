<template>
  <v-container>
    <!-- Hero Section -->
    <v-row class="hero-section">
      <v-col class="text-center">
        
        <v-btn color="primary" large href="#contact">Get in Touch</v-btn>
      </v-col>
    </v-row>

    <!-- Services Section -->
    <v-row class="services-section my-12">
      <v-col cols="12" md="4" class="text-center">
        <v-icon large color="primary">mdi-domain</v-icon>
        <h3>Modular Hotel Construction</h3>
        <p>Efficient, sustainable, and customizable hotel construction solutions.</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon large color="primary">mdi-truck-delivery</v-icon>
        <h3>Logistics Management</h3>
        <p>Complete logistics management for seamless construction execution.</p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon large color="primary">mdi-chart-timeline</v-icon>
        <h3>Project Planning</h3>
        <p>Comprehensive project planning from concept to completion.</p>
      </v-col>
    </v-row>

    <!-- Portfolio Section -->
    <v-row class="portfolio-section my-12">
      <v-col class="text-center">
        <h2>Our Work</h2>
        <p>Check out our completed modular hotel projects.</p>
      </v-col>
    </v-row>

    <!-- Call to Action -->
    <v-row class="cta-section my-12 text-center">
      <v-col>
        <h3>Ready to start your next project?</h3>
        <v-btn color="primary" large href="#contact">Contact Us</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.hero-section {
  background-image: url('/public/content/img/logo.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  height: 100%;
}

.services-section {
  padding: 60px 0;
}

.portfolio-section {
  padding: 60px 0;
}

.cta-section {
  padding: 60px 0;
  background-color: #f5f5f5;
}
</style>
