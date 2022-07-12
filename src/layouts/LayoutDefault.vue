<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      elevation="0"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot/>
    </v-main>
    <v-footer
      :padless="false"
      app
      color="white"
      class="d-flex justify-center"
    >
      <div
      >
        {{ new Date().getFullYear() }} — <strong>footer LayoutDefault</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data: () => ({
    drawer: null
  }),
  created () {
  }
}
</script>

<style lang="scss">
</style>
