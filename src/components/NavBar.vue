<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-content">
      <div class="navbar-brand">
        <a href="#hero">lostsheep</a>
      </div>
      <div class="navbar-links">
        <a href="#hackintosh" class="nav-link">Hackintosh</a>
        <a href="#projects" class="nav-link">项目</a>
        <a href="#skills" class="nav-link">技能</a>
        <a href="#contact" class="nav-link">联系</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 48px;
  transition: background-color var(--transition-normal), backdrop-filter var(--transition-normal);
}

.navbar.scrolled {
  background: rgba(28, 28, 30, 0.8);
  backdrop-filter: var(--backdrop-blur);
  -webkit-backdrop-filter: var(--backdrop-blur);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand a {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
}

.navbar-links {
  display: flex;
  gap: var(--spacing-md);
}

.nav-link {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .navbar-links {
    gap: var(--spacing-sm);
  }

  .nav-link {
    font-size: 12px;
  }
}
</style>
