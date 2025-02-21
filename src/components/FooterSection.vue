<template>
  <footer>
    <!-- Main Footer -->
    <div class="footer-main bg-danger text-white py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Office Address -->
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">Office Address:</h5>
            <p class="mb-0">
              Jl. Raya Adventure No. 99, Jakarta,<br />Indonesia
            </p>
          </div>

          <!-- Contact Information -->
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">Contact Us:</h5>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a
                  href="tel:+6281234567890"
                  class="text-white text-decoration-none"
                >
                  <i class="bi bi-telephone-fill me-2"></i>Phone: +62
                  812-3456-7890
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="mailto:support@bangproject.com"
                  class="text-white text-decoration-none"
                >
                  <i class="bi bi-envelope-fill me-2"></i>Email:
                  support@bangproject.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  class="text-white text-decoration-none"
                >
                  <i class="bi bi-whatsapp me-2"></i>WhatsApp: +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>

          <!-- Business Hours -->
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">Business Hours:</h5>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">Monday - Friday: 09:00 AM - 06:00 PM</li>
              <li class="mb-2">Saturday: 09:00 AM - 02:00 PM</li>
              <li>Sunday & Public Holidays: Closed</li>
            </ul>
          </div>

          <!-- Customer Support -->
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">Customer Support:</h5>
            <ul class="list-unstyled mb-4">
              <li class="mb-2">
                <a href="#" class="text-white text-decoration-none">
                  <i class="bi bi-chat-dots-fill me-2"></i>Live Chat: Available
                  on our website
                </a>
              </li>
              <li>
                <a
                  href="https://support.bangproject.com"
                  class="text-white text-decoration-none"
                >
                  <i class="bi bi-question-circle-fill me-2"></i>Help Center:
                  support.bangproject.com
                </a>
              </li>
            </ul>

            <h5 class="fw-bold mb-3">Follow Us:</h5>
            <div class="social-links">
              <a
                href="https://instagram.com/bangproject.travel"
                class="text-white text-decoration-none me-3"
              >
                <i class="bi bi-instagram fs-5"></i>
              </a>
              <a
                href="https://facebook.com/BangProjectTravel"
                class="text-white text-decoration-none me-3"
              >
                <i class="bi bi-facebook fs-5"></i>
              </a>
              <a
                href="https://twitter.com/bangproject"
                class="text-white text-decoration-none"
              >
                <i class="bi bi-twitter-x fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Travel Blog Section -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="border-top pt-4">
              <h5 class="fw-bold mb-3">Travel Blog & Guides:</h5>
              <p class="mb-0">
                Visit
                <a href="https://blog.bangproject.com" class="text-white"
                  >blog.bangproject.com</a
                >
                for the latest travel tips, destination guides, and exclusive
                offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="footer-bottom py-3 bg-white">
      <div class="container">
        <div class="text-center">
          <p class="mb-0">&copy; 2025 Bang Project. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer-main {
  background-color: #cd4b56 !important;
}

.footer-main a:hover {
  opacity: 0.8;
}

.social-links a {
  transition: transform 0.3s ease;
  display: inline-block;
}

.social-links a:hover {
  transform: translateY(-3px);
}

.list-unstyled li {
  transition: transform 0.2s ease;
}

.list-unstyled li:hover {
  transform: translateX(5px);
}
</style>
