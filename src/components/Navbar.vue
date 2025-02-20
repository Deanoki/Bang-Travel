<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="@/assets/logo.png" alt="Logo" />
        <div class="ms-3">
          <strong>BANG<br />Travel</strong>
        </div>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Booking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Terms of Service</a>
          </li>
          <li class="nav-item ms-2">
            <router-link to="/login">
              <button class="btn btn-danger px-4">login</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style>
.navbar {
  position: absolute;
  width: 100%;
  z-index: 1000;
}
</style>
