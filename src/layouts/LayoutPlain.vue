<template>
  <v-app id="inspire">
    <v-app-bar app>
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
        {{ new Date().getFullYear() }} — <strong>footer LayoutPlain</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutPlain',
  data: () => ({}),
  created () {
  }
}
</script>

<style lang="scss">
</style>
