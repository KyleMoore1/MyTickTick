<template>
  <v-app>
    <v-navigation-drawer id="nav" app>
      <h1>Navigation</h1>
    </v-navigation-drawer>

    <v-container fluid>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>

  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: blue;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
