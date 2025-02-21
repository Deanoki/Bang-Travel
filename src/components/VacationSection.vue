<template>
  <section class="vacation-packages py-5">
    <div class="container">
      <!-- Header Section -->
      <div class="row align-items-center mb-5">
        <div class="col-lg-6">
          <p class="text-secondary fs-5 mb-4">
            We offer various travel packages that can be tailored to your needs
            and budget. From budget-friendly backpacking trips to exclusive
            luxury vacations.
          </p>
        </div>
        <div class="col-lg-6">
          <div class="bg-danger text-white p-4 rounded-3">
            <h2 class="display-6 fw-bold text-center mb-0">
              Choose Your Dream<br />
              Vacation Package!
            </h2>
          </div>
        </div>
      </div>

      <!-- Package Cards -->
      <div class="row g-4">
        <!-- Nature & Beach Tour -->
        <div class="col-lg-4">
          <div class="card package-card border-0 rounded-3 overflow-hidden">
            <img
              src="@/assets/beach.png"
              class="card-img"
              alt="Nature & Beach Tour"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end"
            >
              <div class="package-content">
                <h3 class="text-white mb-4">Nature & Beach Tour</h3>
                <div class="d-flex gap-3">
                  <button class="btn btn-outline-light px-4">View all!</button>
                  <button class="btn btn-outline-light rounded-circle">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- City & Cultural Trips -->
        <div class="col-lg-4">
          <div class="card package-card border-0 rounded-3 overflow-hidden">
            <img
              src="@/assets/beach.png"
              class="card-img"
              alt="City & Cultural Trips"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end"
            >
              <div class="package-content">
                <h3 class="text-white mb-4">City & Cultural Trips</h3>
                <div class="d-flex gap-3">
                  <button class="btn btn-outline-light px-4">View all!</button>
                  <button class="btn btn-outline-light rounded-circle">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Family & Honeymoon Package -->
        <div class="col-lg-4">
          <div class="card package-card border-0 rounded-3 overflow-hidden">
            <img
              src="@/assets/beach.png"
              class="card-img"
              alt="Family & Honeymoon Package"
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end"
            >
              <div class="package-content">
                <h3 class="text-white mb-4">Family & Honeymoon<br />Package</h3>
                <div class="d-flex gap-3">
                  <button class="btn btn-outline-light px-4">View all!</button>
                  <button class="btn btn-outline-light rounded-circle">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VacationPackages",
};
</script>

<style scoped>
section {
  margin-top: 5rem;
}

.package-card {
  height: 400px;
  transition: transform 0.3s ease;
}

.package-card:hover {
  transform: translateY(-5px);
}

.card-img {
  height: 100%;
  object-fit: cover;
}

.card-img-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 50%
  );
}

.package-content {
  padding: 20px;
}

.btn-outline-light {
  border-width: 2px;
}

.btn-outline-light.rounded-circle {
  width: 46px;
  height: 46px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
