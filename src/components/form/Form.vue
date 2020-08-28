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
  import InputSelect from "./InputSelect";
  import Directive from "./Directive";
  export default {
      components: {
          InputSelect, Directive
      },
      data() {
          return {
            menu:['InputSelect', 'Directive'],
            currentComp: 'InputSelect'        
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