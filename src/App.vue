<template>
  <div>
    <nav-bar :menu="menu"/>
  </div>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    "nav-bar": NavBar,
  },
  data(){
    return {
      menu: [
        {id: 1, text: "Market", url: "#"},
        {id: 2, text: "Trade", url: "#"},
        {id: 3, text: "Earn", url: "#"},
        {id: 4, text: "About", url: "#"},
        {id: 5, text: "Career", url: "#"},
      ]
    }
  }
}
</script>

<style>

#app {
  margin: 0;
  padding: 0;
  background: #131517;
}

* {
  color: #ADB3BF;
  margin: 0;
  padding: 0;
}
</style>
