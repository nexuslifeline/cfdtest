<template>
  <div id="app">    
    <Header />
    <Main>
      <router-view></router-view>
    </Main>
  </div>
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    Header,
    Main
  }
}
</script>

<style>
  html {
    font-size: 16px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto;
  }


</style>
