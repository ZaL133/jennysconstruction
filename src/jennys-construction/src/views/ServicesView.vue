<template>
  <v-container>
    <!-- Page Title -->
    <v-row class="my-12 text-center">
      <v-col>
        <h1>Our Services</h1>
        <p>At Jenny's Construction, we offer a range of specialized services to meet the unique needs of the modular hotel industry.</p>
      </v-col>
    </v-row>

    <!-- Services Section -->
    <v-row class="my-12">
      <!-- Modular Hotel Construction -->
      <v-col cols="12" md="4" class="text-center">
        <v-card outlined>
          <v-card-title>Modular Hotel Construction</v-card-title>
          <v-card-text>
            We specialize in efficient, sustainable, and customizable modular hotel construction. By leveraging modular technology, we reduce construction timelines, minimize disruption, and ensure consistent quality across all projects.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Logistics Management -->
      <v-col cols="12" md="4" class="text-center">
        <v-card outlined>
          <v-card-title>Logistics Management</v-card-title>
          <v-card-text>
            Our logistics management services ensure that all aspects of the project are executed seamlessly. From material delivery to construction site coordination, we make sure everything runs like clockwork.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Project Planning -->
      <v-col cols="12" md="4" class="text-center">
        <v-card outlined>
          <v-card-title>Project Planning</v-card-title>
          <v-card-text>
            We provide comprehensive project planning services that take you from concept to completion. Our team works closely with clients to understand their goals, develop detailed plans, and execute flawlessly.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Services (Optional) -->
    <v-row class="my-12">
      <v-col cols="12" md="6" class="text-center">
        <v-card outlined>
          <v-card-title>Sustainability Consulting</v-card-title>
          <v-card-text>
            We believe in sustainable building practices. Our team advises clients on how to incorporate eco-friendly solutions into their modular construction projects to minimize environmental impact.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="text-center">
        <v-card outlined>
          <v-card-title>Custom Design Solutions</v-card-title>
          <v-card-text>
            We understand that every project is unique. Our custom design solutions allow clients to tailor their modular hotel to fit their specific needs, from layout to aesthetics.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Call to Action -->
    <v-row class="my-12 text-center">
      <v-col>
        <h3>Ready to work with Jenny's Construction?</h3>
        <v-btn color="primary" large href="#contact">Get in Touch</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ServicesView",
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.v-card {
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 20px;
}
</style>
