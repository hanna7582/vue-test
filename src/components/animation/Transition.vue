<template>
  <div>
      <b-button variant="primary" @click="ani">토글</b-button>
      <transition name="fade">
        <b-card v-show="active">내용</b-card>          
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