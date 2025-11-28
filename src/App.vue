<template>
  <div id="app">
    <NavBar />
    <HeroSection />
    <HackintoshSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import HackintoshSection from './components/HackintoshSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    HackintoshSection,
    ProjectsSection,
    SkillsSection,
    ContactSection
  }
}
</script>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
}
</style>
