<template>
  <section id="skills" class="skills-section section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">技能栈</h2>
        <p class="section-subtitle">专注的技术领域</p>
      </div>
      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
          :class="{ featured: skill.featured }"
        >
          <div class="skill-icon">{{ skill.icon }}</div>
          <h3 class="skill-name">{{ skill.name }}</h3>
          <p class="skill-description">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        {
          name: 'OpenCore',
          icon: '🍎',
          description: '黑苹果引导配置专家',
          featured: true
        },
        {
          name: 'macOS / Hackintosh',
          icon: '💻',
          description: '系统调优与驱动适配',
          featured: true
        },
        {
          name: 'Java',
          icon: '☕',
          description: '后端开发与设计模式',
          featured: false
        },
        {
          name: 'JavaScript',
          icon: '⚡',
          description: '前端开发与框架应用',
          featured: false
        },
        {
          name: 'Git',
          icon: '🔀',
          description: '版本控制与协作',
          featured: false
        },
        {
          name: 'Linux',
          icon: '🐧',
          description: '服务器运维经验',
          featured: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills-section {
  padding: var(--spacing-2xl) 0;
  background: var(--color-bg-dark);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1000px;
  margin: 0 auto;
}

.skill-card {
  text-align: center;
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  background: rgba(44, 44, 46, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: var(--backdrop-blur);
  -webkit-backdrop-filter: var(--backdrop-blur);
}

.skill-card.featured {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.skill-card.featured .skill-description {
  color: rgba(255, 255, 255, 0.9);
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.skill-icon {
  font-size: 64px;
  margin-bottom: var(--spacing-sm);
}

.skill-name {
  font-size: var(--font-size-md);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
}

.skill-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-md);
  }

  .skill-icon {
    font-size: 48px;
  }
}
</style>
