<template>
  <div>
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://www.highcharts.com/">
          <img src="/icon.png" width="28" height="28" />
          Data Visualization
        </a>

        <a
          class="navbar-burger burger"
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <nuxt-link class="navbar-item active" to="/">Latest</nuxt-link>
          <nuxt-link class="navbar-item" to="/saved">Saved</nuxt-link>
        </div>
        <div class="navbar-end"></div>
      </div>
    </nav>
    <div id="app">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>
