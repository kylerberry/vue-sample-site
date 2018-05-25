<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader'
import SiteMain from './components/SiteMain'
import SiteFooter from './components/SiteFooter'

export default {
  name: 'App',
  components: {
    SiteHeader, SiteMain, SiteFooter
  }
}
</script>

<style lang="scss">
@import "./sass/base";
</style>
