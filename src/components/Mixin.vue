<template>
  <div>
        <IconShareButton></IconShareButton>
        <TextShareButton></TextShareButton>

        <span>{{num}}</span>
  </div>
</template>

<script>
// 지역변수 설정시 vue.config.js 에 runtimeCompiler: true설정 필요
var Sharable={
    data(){
        return {_isProcessing:false}
    },
    created(){
        console.log('Sharable 믹스인');        
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

var IconShareButton={
    mixins:[Sharable],
    created(){
        console.log('IconShareButton');        
    },
    template:`<button @click="share('페이스북')">페이스북 공유</button>`
}

var TextShareButton={
    mixins:[Sharable],
    created(){
        console.log('TextShareButton');        
    },
    template:`<button @click="share('트위터')">트위터 공유</button>`
}


var mixin={
    created(){
        console.log('믹스인',this.num);        
    }
}
export default {
    data() {
        return {
            num:1
        }
    },
    created(){
        this.num+=1;        
    },
    mixins:[mixin],
    components:{IconShareButton,TextShareButton}     
}
</script>

<style>

</style>