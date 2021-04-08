<template>
  <v-app>
    <v-navigation-drawer id="nav" app>
      <h1>Navigation</h1>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid style="height: 100%">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getTodos")
  }
}
</script>

<style>
#app {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.5;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: rgba(44,66,118,.06);
  border-right: 1px solid rgba(0,0,0,.07);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
