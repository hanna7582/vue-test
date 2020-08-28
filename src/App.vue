<template>
  <div id="app" v-cloak> 
    <!-- 항상보임 -->
    <Header />    
    <!-- url에 따라 컴포넌트 변경 -->
    <div class="container-fluid">
      <keep-alive>
        <router-view />    
      </keep-alive>
      <!-- url에 따라 컴포넌트 변경, 특정 컴포넌트에서만 보임 -->
      <router-view name="Footer"/> 
    </div>  
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App', 
  components:{ Header },   
  data() {
    return {
      msg: 'TEST'
    }
  },
}
</script>

<style>
  .container-fluid {
    padding: 20px;
  }
  #app[v-clock]{
    opacity: 0;
  }

  #app{
    animation: clock-in 1s;
  }

  @keyframes clock-in {
    0%{opacity: 0;}
  }
</style>
