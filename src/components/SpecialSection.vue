<template>
  <section class="promo-section">
    <!-- Banner Section -->
    <div class="banner-container position-relative my-5">
      <img
        src="@/assets/beach.png"
        alt="Special Promo Packages"
        class="banner-image w-100"
      />
      <div class="banner-overlay position-absolute w-100 h-100 top-0 start-0">
        <div class="container h-100">
          <div
            class="d-flex flex-column justify-content-center align-items-center h-100 text-center text-white"
          >
            <h2 class="display-3 fw-bold mb-3">Special Promo Packages</h2>
            <p class="fs-4">
              Check out our best packages and book now for an unforgettable
              vacation!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand Section -->
    <!-- <div class="position-relative">
      <div class="background-box rounded-4 position-absolute"></div>
      <div class="container-fluid my-5">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-auto text-center text-md-end mb-3 mb-md-0">
            <div class="brand-logo">
              <img src="@/assets/logo.png" alt="Logo" />
            </div>
          </div>
          <div class="col-md-auto ps-md-5">
            <h2 class="display-5 fw-bold">Your Trusted<br />Partner Travel</h2>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "PromoBanner",
};
</script>

<style scoped>
.banner-container {
  height: 500px;
  overflow: hidden;
  border-radius: 16px;
}

.banner-image {
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}

.brand-logo {
  font-size: 1.2rem;
  font-weight: 500;
}
.position-relative {
  z-index: 1;
}

.background-box {
  background-color: #f0f0f0;
  width: 100%;
  height: 72%;
  top: 40%;
  left: 0;
  z-index: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .banner-container {
    height: 400px;
  }

  .display-3 {
    font-size: 2.5rem;
  }

  .fs-4 {
    font-size: 1.1rem !important;
  }
}
</style>
