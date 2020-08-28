<template>
  <div>
        <FaceBookShareButton class="mr-2"></FaceBookShareButton>
        <TwitterShareButton></TwitterShareButton>
  </div>
</template>

<script>
// 지역변수 설정시 vue.config.js 에 runtimeCompiler: true설정 필요
var Sharable={
    data(){
        return {_isProcessing:false}
    },
    created(){
        console.log('Sharable 믹스인 전');        
    },
    methods: {
        share(name){
            if(this._isProcessing){
                return
            }
            if(!window.confirm(name+'에 공유하시겠습니까?')){
                return
            }
            this._isProcessing=true; 
            setTimeout(()=>{
                window.alert('공유되었습니다.')
                this._isProcessing=false
            },300)
        }
    },
}

var FaceBookShareButton={
    mixins:[Sharable],
    created(){
        console.log('FaceBookShare');        
    },
    template:`<b-button @click="share('페이스북')" variant="primary">페이스북 공유</b-button>`
}

var TwitterShareButton={
    mixins:[Sharable],
    created(){
        console.log('TwitterShare');        
    },
    template:`<b-button @click="share('트위터')" variant="info">트위터 공유</b-button>`
}

var mixin={
    created(){
        console.log('믹스인 전 create', this.num++);        
    }
}
export default {
    data() {
        return {
            num:1
        }
    },
    created(){
       console.log('믹스인 후 create', this.num++);              
    },
    mixins:[mixin],
    components:{FaceBookShareButton,TwitterShareButton}     
}
</script>

<style>

</style>