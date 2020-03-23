<template>
  <div id="app"> 
    <!-- 항상보임 -->
    <Header />    
    <!-- url에 따라 컴포넌트 변경 -->
    <div class="container" >
      <keep-alive>
        <transition name="move">
          <router-view class="view" :style="{'background-color':bgColor}"/>    
        </transition>
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
      bgColor:'',      
      bg:['#fff','#009688', '#9C27B0', '#673ab7', '#3f51b5'],  
    }
  },
  computed: {
    changeBg:{
      get(){        
        return this.bgColor;        
      },
      set(color){
        this.bgColor=color
      }                  
    }
  },
  beforeUpdate() {
    // var randomIndex=Math.floor(Math.random()*5);
    // this.changeBg=this.bg[randomIndex];
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;  
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;  
  }
  .container{
    overflow: hidden;
    min-height: calc(100vh - 50px);  
    background: #cccccc;
  }
  .move{
      &-enter-active{
        transition: 0.5s 0.5s;          
      }
      &-leave-active{
        transition: 0.5s;          
      }
      &-enter, &-leave-to{
        transform: translateX(100%);          
      }
      &-leave, &-enter-to{
        transform: translateX(0%);          
      }
  }
</style>
