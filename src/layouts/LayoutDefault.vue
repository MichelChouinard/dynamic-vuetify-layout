<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot/>
    </v-main>
    <v-footer
      padless
      app
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>footer LayoutDefault</strong>
      </v-col>
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
