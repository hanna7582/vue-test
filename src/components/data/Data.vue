<template>
  <div>
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
  import Computed from "./Computed";
  import Control from "./Control";
  import ListItem from "./ListItem";
  export default {
      components: {
          Computed, Control, ListItem 
      },
      data() {
          return {
            menu:['Computed', 'Control', 'ListItem'],
            currentComp: 'Computed'        
          }
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