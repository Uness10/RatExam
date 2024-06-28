<template>
  <footer class="footer mt-4">
    <div class="about">
      <h2 class="text-xl font-bold mb-4">About Us</h2>
      <div class="flex justify-center space-x-6 mb-8">
        <a href="https://ma.linkedin.com/in/youness-anouar-129681231?trk=public_profile_samename-profile" class="social-link">
          <svg class="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20.25 0h-16.5c-1.24 0-2.25 1.01-2.25 2.25v19.5c0 1.24 1.01 2.25 2.25 2.25h16.5c1.24 0 2.25-1.01 2.25-2.25v-19.5c0-1.24-1.01-2.25-2.25-2.25zm-14.25 21h-2v-12h2v12zm-1-13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm15.5 13.5h-2v-6.75c0-1.47-1.19-2.67-2.67-2.67s-2.67 1.19-2.67 2.67v6.75h-2v-12h2v1.81c.79-1.21 2.08-1.98 3.5-1.98 2.49 0 4.5 2.01 4.5 4.5v6.67z"/>
          </svg>
        </a>
        <a href="https://github.com/Uness10" class="social-link">
          <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.807 8.205 11.432.6.11.82-.26.82-.58 0-.29-.01-1.05-.01-2.06-3.002.65-3.738-1.45-3.738-1.45-.504-1.279-1.23-1.62-1.23-1.62-1.005-.685.076-.67.076-.67 1.11.078 1.695 1.14 1.695 1.14.987 1.692 2.59 1.202 3.23.918.1-.71.384-1.202.7-1.482-2.46-.278-5.04-1.23-5.04-5.48 0-1.21.42-2.2 1.1-2.98-.1-.28-.48-1.41.11-2.94 0 0 .93-.3 3.05 1.14.88-.25 1.82-.37 2.76-.37s1.88.12 2.76.37c2.12-1.44 3.05-1.14 3.05-1.14.59 1.53.21 2.66.11 2.94.68.78 1.1 1.77 1.1 2.98 0 4.26-2.58 5.2-5.05 5.47.4.34.75 1.02.75 2.06 0 1.49-.01 2.69-.01 3.06 0 .32.22.7.83.58 4.765-1.625 8.203-6.134 8.203-11.43 0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
      <h2 class="text-xl font-bold">Contact Us</h2>
    </div>
    <p class="footer-text mt-4">© 2024 QuickCV. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.footer {
  background: linear-gradient(to right, #1e3c72, #101e36);
  color: #fff;
  text-align: center;
  padding: 40px 20px;
  font-family: 'Nunito', sans-serif;
}

.footer-text {
  color: #fff;
  font-size: 0.875rem;
}

.about {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 10px;
}

.social-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-link svg {
  width: 44px;
  height: 44px;
}

.social-link:hover {
  transform: scale(1.2);
}
</style>
