<template>
  <div>
    <div>{{directionValue}}</div>
    <img 
      src="@/assets/logo.png" 
      @load="show=true" 
      :class="{hide:!show}" 
      @mousewheel="direction" 
      @dragend="drag" draggable
      :style="position"
      >       
  </div>
</template>

<script>
export default {
  data() {
    return {      
      show:false,
      directionValue:'이미지 위에서 마우스 휠을 움직이자.',
      position:{
        top:0,
        left:0
      },
      move:0
    }
  },
    methods: {
        direction($event) {
            console.log($event);
            if($event.deltaY>0){                
                this.directionValue='아래'
                this.move+=10;
            }else{                
                this.directionValue='위'
                this.move-=10;
            }            
            this.position.top=this.move+'px';                   
        },
        drag($event){
          this.directionValue='드래그'
          // console.log('drag',$event); 
          // console.log($event.offsetY, $event.offsetY);           
          this.position.top=$event.offsetY+'px';       
          this.position.left=$event.offsetX+'px';          
        },        
    },
}
</script>

<style>
    img{
        position: relative;
        opacity: 1;
        transition: 1s;
    }
    img.hide{
        opacity: 0;
    }
</style>