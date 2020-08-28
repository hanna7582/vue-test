<template>
    <div class="w-50">
        <b-form-file 
            v-model="file" 
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3" v-show="file != null">{{ file ? file.name : '' }}</div>
            <!-- 경로가 잘못되었을 때 -->
            <img v-fallback-image :src="preview" :alt="altText">
    </div>
</template>

<script>
export default {
    data() {
        return {
            altText:'logo',
            preview:'/assets/logo.png',
            file: null,
        }
    },
    watch:{
        file(file){
            if(file && file.type.match(/^image\/(png|jpeg)$/)){
                this.preview=window.URL.createObjectURL(file);
            }                  
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
        },
        // imageLoad(event){
        //     var file=event.target.files[0];
        //     if(file && file.type.match(/^image\/(png|jpeg)$/)){
        //         this.preview=window.URL.createObjectURL(file);
        //     }
        // }
    }
}
</script>

<style>
    
</style>