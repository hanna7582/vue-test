<template>
  <div>
      <button @click="ani">토글</button>
      <transition name="fade">
        <div v-show="active">화면</div>          
      </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active:false
        }
    },
    methods: {
        ani(){
            this.active=!this.active;
        }
    },
}
</script>

<style lang="scss">        
    .fade{
        &-enter-active, &-leave-active{
            transition: 1s;
        }
        &-enter, &-leave-to{
            opacity: 0;
        }
        &-leave, &-enter-to{
            opacity: 1;
        }
    }
</style>