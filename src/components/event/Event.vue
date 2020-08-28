<template>
  <div>
      test
    <b-nav tabs>
        <b-nav-item            
          v-for="(item, index) in menu" 
          :key="index"
          :active="activeClass(item)"
          @click="activeChange(item)"
        >
          {{item}}
        </b-nav-item>
    </b-nav>
    <component :is="currentComp" />
    
  </div>
</template>

<script>
  import MouseWheel from "./MouseWheel";
  import Scroll from "./Scroll";
  export default {
      components: {
          MouseWheel, Scroll
      },
      data() {
          return {
            menu:['MouseWheel', 'Scroll'],
            currentComp: ''        
          }
      },
      created(){
          this.currentComp=this.menu[0];
      },
      methods: {
        activeChange(item) {
          this.currentComp=item;
        },
        activeClass(item){            
            return this.currentComp==item?true:false;
        }
      },
  }
</script>

<style>

</style>