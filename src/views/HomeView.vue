<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <main>
    <div>
      <Navbar />

      <!-- Hero Section -->
      <section class="hero position-relative">
        <div class="hero-image position-absolute w-100 h-100">
          <img
            src="@/assets/beach.png"
            class="w-100 h-100 object-fit-cover rounded-3"
            alt="Luxury Beach"
          />
        </div>

        <div
          class="container position-relative min-vh-100 d-flex flex-column justify-content-center text-white"
        >
          <div class="text-center mb-4 title">
            <h1 class="display-4 fw-bold mb-3">Explore Luxury Destinations</h1>
            <h2 class="h3 mb-4">Is Just One Click Away</h2>
            <button class="btn btn-danger btn-lg px-4 my-2">Booking</button>
          </div>

          <!-- Stats Cards -->
          <div class="cards">
            <div class="row justify-content-center">
              <div class="col-md-3">
                <div class="card bg-white text-center p-4 shadow rounded">
                  <h3 class="display-6 fw-bold text-dark">100+</h3>
                  <p class="text-dark mb-0">Total Destination</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card bg-white text-center p-4 shadow rounded">
                  <h3 class="display-6 fw-bold text-dark">5.0</h3>
                  <p class="text-dark mb-0">Average Rating</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card bg-white text-center p-4 shadow rounded">
                  <h3 class="display-6 fw-bold text-dark">5M</h3>
                  <p class="text-dark mb-0">Total Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

<style scoped>
.hero {
  max-height: 80vh;
  width: 90vw;
  margin: auto;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-image {
  z-index: -1;
}

.title {
  margin: 10rem auto;
  z-index: 0;
}

.cards {
  z-index: 1;
  margin-top: 10rem;
}

.hero-image img {
  filter: brightness(0.7);
  .card {
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }
}
</style>
