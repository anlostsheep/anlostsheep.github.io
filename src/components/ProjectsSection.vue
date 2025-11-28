<template>
  <section id="projects" class="projects-section section section-light">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">其他开源项目</h2>
        <p class="section-subtitle">Java、JavaScript 等技术栈的实践项目</p>
      </div>
      <div class="projects-grid">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          class="project-card"
        >
          <div class="card-header">
            <h3 class="card-title">{{ project.name }}</h3>
            <span class="card-lang">{{ project.language }}</span>
          </div>
          <p class="card-description">{{ project.description }}</p>
          <div class="card-footer">
            <span v-if="project.stars" class="stat">⭐ {{ project.stars }}</span>
            <span v-if="project.forks" class="stat">🔀 {{ project.forks }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          name: 'ripples',
          description: '涟漪微博 - 基于 JavaScript 的社交平台',
          language: 'JavaScript',
          forks: 3,
          url: 'https://github.com/anlostsheep/ripples'
        },
        {
          name: 'java-design-mode',
          description: 'Java 设计模式实践与学习',
          language: 'Java',
          url: 'https://github.com/anlostsheep/java-design-mode'
        },
        {
          name: 'technology-learning',
          description: '技术学习笔记与代码实践',
          language: 'Java',
          url: 'https://github.com/anlostsheep/technology-learning'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-section {
  background-color: var(--color-bg-light);
  padding: var(--spacing-2xl) 0;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
}

.section-subtitle {
  font-size: var(--font-size-md);
  color: rgba(255, 255, 255, 0.8);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-md);
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: rgba(44, 44, 46, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: var(--backdrop-blur);
  -webkit-backdrop-filter: var(--backdrop-blur);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all var(--transition-normal);
  display: block;
  color: var(--color-text-primary);
}

.project-card:hover {
  background: rgba(44, 44, 46, 0.8);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.card-title {
  font-size: var(--font-size-md);
  font-weight: 600;
  color: var(--color-text-primary);
}

.card-lang {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
}

.card-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.card-footer {
  display: flex;
  gap: var(--spacing-sm);
}

.stat {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
