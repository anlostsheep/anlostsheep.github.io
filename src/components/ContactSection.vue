<template>
  <section id="contact" class="contact-section section section-dark">
    <div class="container">
      <div class="contact-content">
        <h2 class="section-title">联系我</h2>
        <p class="section-subtitle">欢迎交流黑苹果技术或其他开发话题</p>
        <div class="contact-links">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="contact-link"
          >
            <span class="link-icon">{{ link.icon }}</span>
            <span class="link-text">{{ link.name }}</span>
          </a>
        </div>
        <div class="footer-info">
          <p>&copy; 2025 lostsheep. All rights reserved.</p>
          <p class="footer-note">Built with Vue 3 + Vite</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      links: [
        {
          name: 'GitHub',
          icon: '📦',
          url: 'https://github.com/anlostsheep'
        },
        {
          name: '邮箱',
          icon: '✉️',
          url: 'mailto:13413684909@163.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.contact-section {
  background-color: var(--color-bg-dark);
  color: white;
  padding: var(--spacing-2xl) 0 var(--spacing-lg) 0;
}

.contact-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  font-size: var(--font-size-md);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-xl);
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 12px 24px;
  background: rgba(44, 44, 46, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 980px;
  color: white;
  font-size: var(--font-size-sm);
  transition: all var(--transition-fast);
  backdrop-filter: blur(10px);
}

.contact-link:hover {
  background: rgba(44, 44, 46, 0.8);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
}

.link-icon {
  font-size: 20px;
}

.footer-info {
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--font-size-xs);
}

.footer-info p {
  margin: var(--spacing-xs) 0;
}

.footer-note {
  color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .contact-links {
    flex-direction: column;
    align-items: center;
  }

  .contact-link {
    width: 200px;
    justify-content: center;
  }
}
</style>
