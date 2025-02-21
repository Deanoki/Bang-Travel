<template>
  <section class="features-section py-5">
    <div class="container">
      <!-- Header Section -->
      <div class="row mb-5">
        <div class="col-lg-6">
          <div class="bg-danger text-white p-4 rounded-3">
            <h2 class="display-6 fw-bold">
              Your Perfect Travel Partner<br />
              for Unforgettable Experiences!
            </h2>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center mt-4 mt-lg-0">
          <div class="text-secondary">
            <p class="mb-2 fs-5">
              Bang Project is here to make your dream vacation a reality with
              professional and reliable travel services.
            </p>
            <p class="mb-0 fs-5">
              We are dedicated to providing unforgettable travel experiences at
              the best prices with complete facilities.
            </p>
          </div>
        </div>
      </div>

      <!-- Features Cards Container with Background -->
      <div class="position-relative">
        <!-- Background Box -->
        <div class="background-box rounded-4 position-absolute"></div>

        <!-- Features Cards -->
        <div class="row g-4 position-relative">
          <!-- Mission Card -->
          <div class="col-lg-4">
            <div
              class="card h-100 bg-danger bg-opacity-10 border-0 rounded-3 p-4"
            >
              <div class="card-body">
                <div class="mb-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    class="text-danger"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="currentColor"
                      stroke-width="10"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      stroke="currentColor"
                      stroke-width="10"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 class="card-title h4 text-danger mb-3">Our Mission</h3>
                <p class="card-text text-secondary">
                  We make to travel seamless and enjoyable by offering
                  well-organized, all-inclusive holiday packages that cater to
                  various travel styles and preferences. Our goal is to take the
                  stress out of trip planning so you can focus on making
                  unforgettable memories
                </p>
              </div>
            </div>
          </div>

          <!-- Professional Team Card -->
          <div class="col-lg-4">
            <div
              class="card h-100 bg-danger bg-opacity-10 border-0 rounded-3 p-4"
            >
              <div class="card-body">
                <div class="mb-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    class="text-danger"
                  >
                    <circle cx="50" cy="35" r="25" fill="currentColor" />
                    <path
                      d="M15,90 Q50,70 85,90"
                      stroke="currentColor"
                      stroke-width="10"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 class="card-title h4 text-danger mb-3">
                  A Professional Team
                </h3>
                <p class="card-text text-secondary">
                  Our experience travel are dedicated to providing personalized
                  service and curated travel recommendations. With years of
                  industry knowledge, we ensure every trip is smooth, enjoyable,
                  perfectly suited to your expectation
                </p>
              </div>
            </div>
          </div>

          <!-- Destinations Card -->
          <div class="col-lg-4">
            <div
              class="card h-100 bg-danger bg-opacity-10 border-0 rounded-3 p-4"
            >
              <div class="card-body">
                <div class="mb-3">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    class="text-danger"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="10"
                    />
                    <path
                      d="M50,10 L50,90 M10,50 L90,50"
                      stroke="currentColor"
                      stroke-width="10"
                    />
                  </svg>
                </div>
                <h3 class="card-title h4 text-danger mb-3">
                  So Many Destinastion
                </h3>
                <p class="card-text text-secondary">
                  Whether your dreaming of a relaxing getaway whit in the
                  country or a excitng international adventure, Bang Project
                  offers a wide range of destinations with high-quality
                  services, accommodations and exclusive experience
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center mt-5 position-relative">
          <button class="btn btn-danger btn-lg px-4">
            Ready for an adventure?
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TravelFeatures",
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.features-section {
  background-color: #f8f9fa;
  margin-top: 7rem;
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

.position-relative {
  z-index: 1;
}
</style>
