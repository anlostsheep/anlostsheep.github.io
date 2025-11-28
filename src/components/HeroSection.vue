<template>
  <section id="hero" class="hero-section section">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">lostsheep</h1>
        <p class="hero-subtitle">Hackintosh 爱好者 & 开发者</p>
        <p class="hero-description">专注于黑苹果 EFI 开发与分享</p>
        <div class="hero-actions">
          <a href="#hackintosh" class="btn btn-primary">查看项目</a>
          <a href="https://github.com/anlostsheep" target="_blank" class="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 48px; /* navbar height */
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--font-size-hero);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.hero-description {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border-radius: 980px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all var(--transition-fast);
  display: inline-block;
}

.btn-primary {
  background-color: var(--color-accent);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
  transform: scale(1.02);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
}

.btn-secondary:hover {
  background-color: var(--color-accent);
  color: white;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-2xl);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  .hero-description {
    font-size: var(--font-size-sm);
  }
}
</style>
