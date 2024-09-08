<template>
  <v-container>
    <!-- Main Heading -->
    <v-row class="my-12">
      <v-col>
        <h1>About Jenny's Construction</h1>
        
        <p>
          At Jenny's Construction, we bring years of expertise in modular hotel
          construction to deliver innovative, efficient, and high-quality
          building solutions. Although we’re a new name in the construction
          world, our team is powered by a wealth of experience in managing
          complex, large-scale modular projects. We specialize in building hotels
          that combine speed, sustainability, and cost-efficiency without
          compromising on quality.
        </p>
      </v-col>
    </v-row>

    <v-row class="text-center" theme="dark">
      <img src="/content/img/logo.png" style="height: 25vh;">
    </v-row>

    <!-- Mission Statement -->
    <v-row class="my-12">
      <v-col>
        <v-card outlined>
          <v-card-title class="text-h5">Our Mission</v-card-title>
          <v-card-text>
            Our mission is simple: To build the future of hospitality, one module
            at a time. At Jenny's Construction, we strive to provide innovative,
            tailored solutions for each project, ensuring every hotel we construct
            is not only functional but built to last.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Core Values Section -->
    <v-row class="my-12">
      <v-col>
        <h2 class="text-center">Our Core Values</h2>
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col cols="12" md="4">
        <v-card outlined>
          <v-card-title>Hard Work and Dedication</v-card-title>
          <v-card-text>
            We believe that there’s no substitute for hard work. Every project we
            take on is approached with focus and energy, ensuring the best possible
            outcome for our clients. No shortcuts, no compromises.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card outlined>
          <v-card-title>Solution-Oriented</v-card-title>
          <v-card-text>
            At Jenny's Construction, we don’t just solve problems—we anticipate
            them. Our team thrives on finding the best solutions to complex
            construction challenges, ensuring your project stays on time and
            within budget.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card outlined>
          <v-card-title>Quality and Craftsmanship</v-card-title>
          <v-card-text>
            We uphold the highest standards of craftsmanship, delivering a finished
            product that meets or exceeds expectations, while maintaining speed and
            efficiency.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Additional Values -->
    <v-row class="my-12">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title>Client-Centered Approach</v-card-title>
          <v-card-text>
            We work closely with our clients to understand their needs, customizing
            each project to fit specific goals. From concept to completion, clear
            communication and collaboration are key.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title>Innovation and Sustainability</v-card-title>
          <v-card-text>
            We continually invest in new technologies and sustainable building
            practices to reduce waste, minimize environmental impact, and offer
            flexible design options for modern hospitality needs.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Vision Section -->
    <v-row class="my-12">
      <v-col>
        <v-card outlined>
          <v-card-title class="text-h5">Looking Forward</v-card-title>
          <v-card-text>
            As we continue to grow, Jenny's Construction aims to become a leader
            in modular construction. Our vision is to expand beyond hotel
            construction, exploring new opportunities in industries like healthcare
            and education while maintaining our commitment to innovation and client
            satisfaction.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.v-card {
  margin-bottom: 20px;
}

img { 
  margin: auto; 
}
</style>
