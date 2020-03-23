<template>
  <div>        
        <!-- <input type="text" v-model="animationClass"> -->
        <select v-model="animationClass">
            <option v-for="(item, index) in items" :key="index">{{item}}</option>
        </select>
        <button @click="isShown = !isShown">실행</button>
        <transition :enter-active-class="activeClass" :leave-active-class="activeClass">
            <div class="box" v-show="isShown">Hello, world!</div>
        </transition>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            animationClass: 'bounce',
            isShown: false,
            items:[
                'bounce',
                'flash',
                'rubberBand',
                'flipInY',
                'zoomInDown',
                'slideInUp',
                'expandOpen',
                'slideLeft',
                'slideRight'
            ],
        };
    },
    computed: {
        activeClass: function() {
        // 활성화할 클래스가 무엇인지 계산. input 필드의 입력값에 따라 바뀐다.
            return this.animationClass + ' animated';
        },
    },
}
</script>

<style>
    .box{
        background: #fff;
        padding: 20px;
    }
</style>