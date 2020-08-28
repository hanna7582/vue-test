<template>
  <div class="scroll"  @scroll="targetScroll">
    <div class="wrap">
      <div class="box" :style="{top:move}">box</div>    
    </div>
  </div>
</template>

<script>
// https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md
import Scrollbar from 'smooth-scrollbar'

export default {
  data() {
    return {      
      scrollY: 0,
      timer: null,   
      move:0,
      scrollbar:null 
    }
  },  
  created(){
    // 핸들러 등록하기
    // window.addEventListener('scroll', this.handleScroll)   
  },
  beforeDestroy: function () {
    // 핸들러 제거하기(컴포넌트 또는 SPA의 경우 절대 잊지 말아 주세요!)
    // window.removeEventListener('scroll', this.handleScroll)
  },
  mounted(){
    this.scrollbar=Scrollbar.init(this.$el,{
      alwaysShowTracks:true,
    });
     this.scrollbar.addListener((s) => {
       let scrollTop=s.offset.y;
      //  console.log('스크롤', scrollTop);
       this.move=scrollTop+'px'; 
    })
  },
  methods: {
    handleScroll: function () {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null          
        }.bind(this), 200)
      }
    },
    targetScroll(){       
      console.log('스크롤');
      this.move=this.$el.scrollTop;            
    }
  },  
}
</script>

<style>
    .scroll{
      height: 500px;
      overflow-y: scroll;      
      background: coral;
    }
    .wrap{      
      height: 1000px;
    }
    .box{
      position: relative;      
      transition: top 0.5s;
      width: 100px;
      height: 100px;
      margin:10px;
      background: #fff;
    }
</style>
