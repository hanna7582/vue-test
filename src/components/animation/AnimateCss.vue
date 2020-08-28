<template>
  <div>   
      test       
        <b-input-group prepend="animation" class="w-50">            
            <b-form-select v-model="selected" :options="options"></b-form-select>
            <b-input-group-append>                        
                <b-button @click="isShown = !isShown">토글</b-button>        
                <b-button @click="isShown = true">보이기</b-button>        
                <b-button @click="isShown = false">숨기기</b-button>
            </b-input-group-append>
        </b-input-group>      
        <!-- <select v-model="selected">
            <option v-for="(item, index) in options" :key="index">{{item}}</option>
        </select>
        <b-button @click="isShown = !isShown">실행</b-button> -->

        <transition :enter-active-class="activeClass" :leave-active-class="activeClass">
            <b-img v-show="isShown" src="https://picsum.photos/400/400/?image=41" fluid alt="Responsive image"></b-img>
        </transition>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            selected: 'fadeIn',
            isShown: false,
            //https://github.com/daneden/animate.css
            options:[
                'fadeIn',
                'fadeOut',
                'rollIn',
                'rollOut',
                'zoomInDown',
                'zoomOutUp',
                'slideInUp',
                'slideOutUp',
                'slideInLeft',
                'slideOutLeft'
            ],
        };
    },
    computed: {
        activeClass: function() {
        // 활성화할 클래스가 무엇인지 계산. input 필드의 입력값에 따라 바뀐다.
            return this.selected + ' animated';
        },
    }
}
</script>

<style>
</style>