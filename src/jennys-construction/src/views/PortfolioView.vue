<template>
  <v-container>
    <!-- Page Title -->
    <v-row class="my-12 text-center">
      <v-col>
        <h1>Our Portfolio</h1>
        <p>
          Here are some of the modular hotel projects we’ve completed. Explore our
          work and see how Jenny's Construction delivers quality, efficiency, and
          innovation in every build.
        </p>
      </v-col>
    </v-row>

    <!-- Portfolio Grid -->
    <v-row>
      <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
        <v-card outlined>
          <!-- Placeholder for Image -->
          <v-img
            :src="project.image"
            height="200px"
            alt="Modular Hotel Project Image"
          ></v-img>
          
          <!-- Project Info -->
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Placeholder Call to Action (Optional) -->
    <v-row class="my-12 text-center">
      <v-col>
        <h3>Interested in our work?</h3>
        <v-btn color="primary" large href="#contact">Get in Touch</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PortfolioView",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Modular Hotel Project 1",
          description: "A fully customized modular hotel built with sustainability and efficiency in mind.",
          image: "https://via.placeholder.com/400x200.png?text=Project+1",
        },
        {
          id: 2,
          title: "Modular Hotel Project 2",
          description: "A luxury modular hotel showcasing the versatility of our building methods.",
          image: "https://via.placeholder.com/400x200.png?text=Project+2",
        },
        {
          id: 3,
          title: "Modular Hotel Project 3",
          description: "A mid-scale modular hotel designed for quick delivery and cost savings.",
          image: "https://via.placeholder.com/400x200.png?text=Project+3",
        },
        // Add more placeholder projects here as needed
      ],
    };
  },
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
</style>
