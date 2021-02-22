<template>
  <div class="LayoutDefault">
    <nav class="LayoutDefault__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <footer class="LayoutDefault__footer">
      &copy; Plain Awesome Company
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayoutPlain',
  data () {
    return {
      user: null
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
.LayoutDefault {
  max-width: 42em;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;

  &__nav {
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c0c0c0;
  }

  &__user {
    float: right;
  }

  &__main {
    padding-top: 1.5em;
    padding-bottom: 2em;
  }

  &__footer {
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
  }
}
</style>
