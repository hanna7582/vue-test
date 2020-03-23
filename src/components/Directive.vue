<template>
  <div>
      <!-- 경로가 잘못되었을 때 -->
      <img v-fallback-image src="/assets/logo.png" :alt="altText">
  </div>
</template>

<script>
export default {
    data() {
        return {
            altText:'logo'
        }
    },
    directives:{
        fallbackImage:{
            bind(el){
                el.addEventListener('error',function(){
                    el.src='https://dummyimage.com/200x200/000/ffffff.png&text=no+image';
                })
            },
            update(el, binding){
                console.log('update',binding);
            }
        }
    }
}
</script>

<style>

</style>