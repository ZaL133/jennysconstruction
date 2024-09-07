<template>
  <v-container>
    <!-- Page Title -->
    <v-row class="my-12 text-center">
      <v-col>
        <h1>Contact Us</h1>
        <p>Have a question or want to start a project? We're here to help!</p>
      </v-col>
    </v-row>

    <!-- Contact Form -->
    <v-row class="my-12">
      <v-col cols="12" md="8" class="mx-auto">
        <v-form>
          <v-text-field
            label="Your Name"
            required
            outlined
            v-model="name"
          ></v-text-field>

          <v-text-field
            label="Your Email"
            required
            outlined
            v-model="email"
            type="email"
          ></v-text-field>

          <v-text-field
            label="Your Phone"
            outlined
            v-model="phone"
            type="tel"
          ></v-text-field>

          <v-textarea
            label="Your Message"
            required
            outlined
            v-model="message"
          ></v-textarea>

          <v-btn color="primary" @click="submitForm">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <!-- Direct Contact Information -->
    <v-row class="my-12 text-center">
      <v-col>
        <p>
          Prefer direct contact? Email us at
          <a href="mailto:andrew@jennysconstruction.com">andrew@jennysconstruction.com</a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.message) {
        // Handle form submission logic here (e.g., send email or submit to API)
        alert(`Thanks for reaching out, ${this.name}! We'll be in touch soon.`);
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
      } else {
        alert('Please fill in the required fields.');
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.v-btn {
  margin-top: 20px;
}
</style>
