<template>
  <section id="hackintosh" class="hackintosh-section section section-dark">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Hackintosh EFI 分享</h2>
        <p class="section-subtitle">为主流硬件平台提供稳定可靠的黑苹果引导配置</p>
      </div>
      <div class="hackintosh-grid">
        <div
          v-for="project in projects"
          :key="project.name"
          class="hackintosh-card"
        >
          <div class="card-badge" v-if="project.stars">
            <span>⭐ {{ project.stars }}</span>
          </div>
          <h3 class="card-title">{{ project.board }}</h3>
          <p class="card-cpu">{{ project.cpu }}</p>
          <p class="card-description">{{ project.description }}</p>
          <div class="card-tags">
            <span class="tag" v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
          <a :href="project.url" target="_blank" class="card-link">
            查看详情 →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HackintoshSection',
  data() {
    return {
      projects: [
        {
          name: 'hackintosh-colorful-b460i',
          board: '七彩虹 B460I CVN Frozen',
          cpu: 'Intel Core i5-10400',
          description: '完美支持 macOS Sonoma，所有功能正常运行',
          tags: ['OpenCore', 'B460', '10代 Intel'],
          stars: 24,
          url: 'https://github.com/anlostsheep/hackintosh-colorful-b460i'
        },
        {
          name: 'hackintosh-rog-z490-g',
          board: 'ROG STRIX Z490-G',
          cpu: 'Intel Core i7-10700K',
          description: '高性能游戏主板黑苹果方案',
          tags: ['OpenCore', 'Z490', '10代 Intel'],
          stars: 10,
          url: 'https://github.com/anlostsheep/hackintosh-rog-z490-g'
        },
        {
          name: 'ms-icraft-z790itx-hackintosh',
          board: 'MS-iCraft Z790ITX',
          cpu: 'Intel Core i5-14600KF',
          description: 'ITX 小钢炮黑苹果配置',
          tags: ['OpenCore', 'Z790', '14代 Intel'],
          stars: 0,
          url: 'https://github.com/anlostsheep/ms-icraft-z790itx-hackintosh'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hackintosh-section {
  background-color: var(--color-bg-dark);
  color: var(--color-bg-light);
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

.hackintosh-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.hackintosh-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  position: relative;
  transition: all var(--transition-normal);
}

.hackintosh-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-badge {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background: rgba(255, 200, 0, 0.15);
  border: 1px solid rgba(255, 200, 0, 0.3);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  color: #ffc800;
  backdrop-filter: blur(10px);
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  margin-top: var(--spacing-md);
  color: var(--color-text-primary);
}

.card-cpu {
  font-size: var(--font-size-sm);
  color: #c9d1d9;
  margin-bottom: var(--spacing-sm);
}

.card-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.tag {
  background: rgba(0, 113, 227, 0.2);
  color: #4da2ff;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.card-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-accent);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.card-link:hover {
  color: var(--color-accent-hover);
}

@media (max-width: 768px) {
  .hackintosh-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: var(--font-size-xl);
  }
}
</style>
