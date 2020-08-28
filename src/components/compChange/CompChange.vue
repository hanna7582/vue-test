<template>
    <div class="wrap">
        <b-nav tabs>
            <b-nav-item            
                v-for="(item, index) in menu" 
                :key="index"
                :active="activeClass(item)"
                @click="activeChange(item, index)"
            >
                {{item}}
            </b-nav-item>
        </b-nav>
        <!-- <b-button-group tabs> 
            <b-button
                v-for="(item, index) in menu" 
                :key="index"
                :class="{active:activeClass(item)}"
                @click="activeChange(item, index)"
            >{{item}}</b-button>
        </b-button-group> -->
        <transition name="move">
            <!-- keep-alive 비활성 컴포넌트 인스턴스를 파괴하지 않고 캐시 -->
            <keep-alive>
                <component :is="currentComp" class="view" :style="{'background-color':bgColor}"/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import Acomp from './Acomp'
import Bcomp from './Bcomp'
import Ccomp from './Ccomp'

export default {   
    components: {
        Acomp, Bcomp, Ccomp
    }, 
    data() {
        return {
            menu:['Acomp','Bcomp','Ccomp'],
            currentComp:'',
            currentIndex:0,
            bgColor:'',      
            bg:['#2196f3', '#03a9f4', '#17a2b8'],  
        }
    },
    
    methods: {
        activeChange(name,index) {
            this.currentComp=name;
            this.currentIndex=index;
        },
        activeClass(name){
            return this.currentComp==name?true:false;
            // return {active:this.currentComp==name?true:false}
        }
    },
    created() {
        this.currentComp=this.menu[0];
        this.bgColor=this.bg[0];
    },
    beforeUpdate() {
        // var randomIndex=Math.floor(Math.random()*3);
        this.bgColor=this.bg[this.currentIndex];
    }
}
</script>

<style lang="scss">
    .wrap{
        overflow: hidden;
        position: relative;
        height: 500px;
    }
    .view{
        position: absolute;
        left:0;
        width: 100%;
        height: 100%;     
        color:#fff;   
    }
    .move{
        &-enter-active{
            transition: 0.5s;          
        }
        &-leave-active{
            transition: 0.5s;    
        }
        &-enter{//, &-leave-to
            transform: translateX(100%);          
        }
        &-enter-to{//, &-leave
            transform: translateX(0%);          
        }
    }
</style>