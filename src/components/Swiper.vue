<template>
  <div>
    <!-- component -->
    <!-- <swiper
      ref="swiperComponent"
      :options="swiperOptions"
      @click-slide="onSwiperClickSlide"
      @set-translate="onSetTranslate"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-next"  slot="button-next"></div>
      <div class="swiper-button-prev"  slot="button-prev"></div>
    </swiper> -->

    <!-- directive -->
    <div v-swiper:mySwiper="swiperOptions" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="img" v-for="img in images">
          <img :src="'//picsum.photos/1000/300/?image='+img">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="page">{{current}}/{{total}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [ '40', '50', '60' ],
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          // type:'custom',
          // renderCustom: function (swiper, current, total) {
          //   console.log(current, total);            
          //     return current + ' / ' + total;
          // }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }        
      },
      current:1,
      total:0
    }
  },
  methods: {
     onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
    onSetTranslate() {
      console.log('onSetTranslate')
    },
  },
  created () {
    this.total=this.images.length;    
  },
  mounted() {
    // console.log('Swiper instances:', this.$refs.swiperComponent.$swiper, this.swiper)
    // this.mySwiper.slideTo(3, 1000, false)  
    const swiper=this.mySwiper;
    swiper.on('slideChange',()=>{
      this.current=swiper.realIndex+1;
    })   
  }
}
</script>

<style>
  .swiper-container {
    height: 300px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>