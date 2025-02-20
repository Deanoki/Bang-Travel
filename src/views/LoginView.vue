<template>
  <div
    class="min-h-screen bg-light d-flex align-items-center justify-content-center p-3"
  >
    <div class="login-container bg-white rounded-4 shadow-lg overflow-hidden">
      <div class="row g-0">
        <!-- Left Section: Image & Welcome Text -->
        <div class="col-md-5 position-relative bg-image">
          <img
            src="@/assets/bg-login.png"
            alt="Login Background"
            class="w-100 h-100 object-fit-cover position-absolute"
          />
          <div
            class="overlay d-flex flex-column align-items-center justify-content-center text-white text-center p-4"
          >
            <h1 class="display-5 fw-bold mb-2">Welcome Back!</h1>
            <p class="lead">Your next adventure is just a login away</p>
          </div>
        </div>

        <!-- Right Section: Login Form -->
        <div class="col-md-7">
          <div class="login-form-wrapper p-4 p-md-5">
            <h2 class="fw-bold mb-4">Login</h2>

            <form @submit.prevent="handleLogin">
              <div class="mb-4">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  v-model="formData.email"
                  class="form-control border-0 border-bottom rounded-0 px-0"
                  :class="{ 'is-invalid': errors.email && formSubmitted }"
                  placeholder="Enter Email Address"
                  @input="validateEmail"
                  required
                />
                <div
                  class="invalid-feedback"
                  v-if="errors.email && formSubmitted"
                >
                  {{ errors.email }}
                </div>
              </div>

              <div class="mb-4">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  v-model="formData.password"
                  class="form-control border-0 border-bottom rounded-0 px-0"
                  :class="{ 'is-invalid': errors.password && formSubmitted }"
                  placeholder="Password"
                  @input="validatePassword"
                  required
                />
                <div
                  class="invalid-feedback"
                  v-if="errors.password && formSubmitted"
                >
                  {{ errors.password }}
                </div>
              </div>

              <div class="mb-4">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="rememberMe"
                    v-model="formData.rememberMe"
                  />
                  <label class="form-check-label" for="rememberMe"
                    >Remember Me</label
                  >
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-danger w-100 py-2 mb-4"
                :disabled="isLoading"
              >
                <span
                  v-if="isLoading"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                ></span>
                {{ isLoading ? "Signing in..." : "Sign In" }}
              </button>

              <div class="social-login">
                <button
                  @click.prevent="loginWithGoogle"
                  class="btn btn-outline-secondary w-100 mb-3"
                >
                  Login with Google
                </button>
                <button
                  @click.prevent="loginWithFacebook"
                  class="btn btn-outline-primary w-100 mb-4"
                >
                  Login with Facebook
                </button>
              </div>

              <div class="text-center">
                <a href="/forgot-password" class="text-decoration-none"
                  >Forgot Password?</a
                >
                <div class="mt-3">
                  Dont have an account?
                  <router-link
                    to="/register"
                    class="text-danger text-decoration-none fw-bold"
                  >
                    Sign up
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        rememberMe: false,
      },
      errors: {
        email: "",
        password: "",
      },
      formSubmitted: false,
      isLoading: false,
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email) {
        this.errors.email = "Email is required";
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = "Please enter a valid email address";
      } else {
        this.errors.email = "";
      }
    },
    validatePassword() {
      if (!this.formData.password) {
        this.errors.password = "Password is required";
      } else if (this.formData.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters";
      } else {
        this.errors.password = "";
      }
    },
    async handleLogin() {
      this.formSubmitted = true;
      this.validateEmail();
      this.validatePassword();

      // Check if there are any errors
      if (this.errors.email || this.errors.password) {
        return;
      }

      try {
        this.isLoading = true;
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Here you would typically make your API call
        console.log("Login attempt with:", {
          email: this.formData.email,
          password: this.formData.password,
          rememberMe: this.formData.rememberMe,
        });

        // If login is successful, redirect to home
        this.$router.push("/");
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        this.isLoading = false;
      }
    },
    loginWithGoogle() {
      // Implement Google login
      console.log("Google login clicked");
    },
    loginWithFacebook() {
      // Implement Facebook login
      console.log("Facebook login clicked");
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  max-width: 1000px;
  margin: 10vh auto;
}

.bg-image {
  min-height: 600px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.form-control:focus {
  box-shadow: none;
  border-color: #dc3545;
}

.form-check-input:checked {
  background-color: #dc3545;
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #dc3545;
}

@media (max-width: 768px) {
  .bg-image {
    min-height: 300px;
  }

  .login-form-wrapper {
    padding: 2rem !important;
  }
}
</style>
