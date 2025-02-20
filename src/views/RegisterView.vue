<template>
    <div class="min-h-screen bg-light d-flex align-items-center justify-content-center p-3">
      <div class="register-container bg-white rounded-4 shadow-lg overflow-hidden">
        <div class="row g-0">
          <!-- Left Section: Image & Welcome Text -->
          <div class="col-md-5 position-relative bg-image">
            <img
              src="@/assets/bg-login.png"
              alt="register Background"
              class="w-100 h-100 object-fit-cover position-absolute"
            />
            <div class="overlay d-flex flex-column align-items-center justify-content-center text-white text-center p-4">
              <h1 class="display-5 fw-bold mb-2">Join us with Bang Travel</h1>
              <p class="lead">Your next adventure is just a wait for you</p>
            </div>
          </div>
  
          <!-- Right Section: register Form -->
          <div class="col-md-7">
            <div class="register-form-wrapper p-4 p-md-5">
              <h2 class="fw-bold mb-4">Register</h2>
  
              <form @submit.prevent="handleRegister">
                <div class="mb-4">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    v-model="formData.email"
                    class="form-control border-0 border-bottom rounded-0 px-0"
                    :class="{ 'is-invalid': errors.email && formSubmitted }"
                    placeholder="Enter Email Address"
                    @input="validateEmail"
                  />
                  <div class="invalid-feedback" v-if="errors.email && formSubmitted">
                    {{ errors.email }}
                  </div>
                </div>
  
                <div class="mb-4">
                  <label class="form-label">Create Password</label>
                  <input
                    type="password"
                    v-model="formData.password"
                    class="form-control border-0 border-bottom rounded-0 px-0"
                    :class="{ 'is-invalid': errors.password && formSubmitted }"
                    placeholder="Password"
                    @input="validatePassword"
                  />
                  <div class="invalid-feedback" v-if="errors.password && formSubmitted">
                    {{ errors.password }}
                  </div>
                  <div class="password-requirements small text-muted mt-1" v-if="formData.password">
                    Password harus memenuhi:
                    <ul class="mb-0">
                      <li :class="{ 'text-success': hasMinLength }">Minimal 8 karakter</li>
                      <li :class="{ 'text-success': hasNumber }">Memiliki angka</li>
                      <li :class="{ 'text-success': hasSpecialChar }">Memiliki karakter spesial (!@#$%^&*)</li>
                    </ul>
                  </div>
                </div>
  
                <div class="mb-4">
                  <label class="form-label">Confirm Password</label>
                  <input
                    type="password"
                    v-model="formData.confirmPassword"
                    class="form-control border-0 border-bottom rounded-0 px-0"
                    :class="{ 'is-invalid': errors.confirmPassword && formSubmitted }"
                    placeholder="Confirm Password"
                    @input="validateConfirmPassword"
                  />
                  <div class="invalid-feedback" v-if="errors.confirmPassword && formSubmitted">
                    {{ errors.confirmPassword }}
                  </div>
                </div>
  
                <button 
                  type="submit" 
                  class="btn btn-danger w-100 py-2 mb-4"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"></span>
                  {{ isLoading ? 'Creating Account...' : 'Sign Up' }}
                </button>
  
                <div class="social-register">
                  <button
                    @click.prevent="registerWithGoogle"
                    class="btn btn-outline-secondary w-100 mb-3"
                  >
                    Register with Google
                  </button>
                  <button
                    @click.prevent="registerWithFacebook"
                    class="btn btn-outline-primary w-100 mb-4"
                  >
                    Register with Facebook
                  </button>
                </div>
  
                <div class="text-center">
                  <a href="/forgot-password" class="text-decoration-none">Forgot Password?</a>
                  <div class="mt-3">
                    Already have an account?
                    <router-link to="login" class="text-danger text-decoration-none fw-bold">
                      Sign in
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
          email: '',
          password: '',
          confirmPassword: ''
        },
        errors: {
          email: '',
          password: '',
          confirmPassword: ''
        },
        formSubmitted: false,
        isLoading: false
      }
    },
    computed: {
      hasMinLength() {
        return this.formData.password.length >= 8
      },
      hasNumber() {
        return /\d/.test(this.formData.password)
      },
      hasSpecialChar() {
        return /[!@#$%^&*]/.test(this.formData.password)
      },
      isPasswordValid() {
        return this.hasMinLength && this.hasNumber && this.hasSpecialChar
      }
    },
    methods: {
      validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!this.formData.email) {
          this.errors.email = 'Email is required'
        } else if (!emailRegex.test(this.formData.email)) {
          this.errors.email = 'Please enter a valid email address'
        } else {
          this.errors.email = ''
        }
      },
      validatePassword() {
        if (!this.formData.password) {
          this.errors.password = 'Password is required'
        } else if (!this.hasMinLength) {
          this.errors.password = 'Password must be at least 8 characters long'
        } else if (!this.hasNumber) {
          this.errors.password = 'Password must contain at least one number'
        } else if (!this.hasSpecialChar) {
          this.errors.password = 'Password must contain at least one special character'
        } else {
          this.errors.password = ''
        }
        
        // Revalidate confirm password when password changes
        if (this.formData.confirmPassword) {
          this.validateConfirmPassword()
        }
      },
      validateConfirmPassword() {
        if (!this.formData.confirmPassword) {
          this.errors.confirmPassword = 'Please confirm your password'
        } else if (this.formData.password !== this.formData.confirmPassword) {
          this.errors.confirmPassword = 'Passwords do not match'
        } else {
          this.errors.confirmPassword = ''
        }
      },
      async handleRegister() {
        this.formSubmitted = true
        
        // Validate all fields
        this.validateEmail()
        this.validatePassword()
        this.validateConfirmPassword()
  
        // Check if there are any errors
        if (Object.values(this.errors).some(error => error !== '')) {
          return
        }
  
        try {
          this.isLoading = true
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500))
          
          // Here you would typically make your API call
          console.log('Registration attempt with:', {
            email: this.formData.email,
            password: this.formData.password
          })
  
          // If registration is successful, redirect to login
          this.$router.push('/login')
        } catch (error) {
          console.error('Registration failed:', error)
        } finally {
          this.isLoading = false
        }
      },
      registerWithGoogle() {
        console.log('Google registration clicked')
      },
      registerWithFacebook() {
        console.log('Facebook registration clicked')
      }
    }
  }
  </script>
  
  <style scoped>
  .register-container {
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
  
  .password-requirements {
    font-size: 0.8rem;
  }
  
  .password-requirements ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;
  }
  
  .text-success {
    color: #198754 !important;
  }
  
  @media (max-width: 768px) {
    .bg-image {
      min-height: 300px;
    }
  
    .register-form-wrapper {
      padding: 2rem !important;
    }
  }
  </style>