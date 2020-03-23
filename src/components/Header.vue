<template>
    <nav>
        <h1>Vue Test</h1>
        <button 
                v-for="(item, index) in menu" 
                :key="index" 
                @click="menuActive(item)"
                :class="{active:isActive(item)}"
                >{{item | filterName }}</button>

        <!-- exact 붙이면 다른 화면 전환시 active 비활성화  https://jsfiddle.net/8xrk1n9f/ -->
        <!-- <router-link to="/" exact>Home</router-link>
        <router-link to="/Home">Home</router-link>
        <router-link to="/Home/Child">Child</router-link>
        <router-link to="/Tab">Tab</router-link>
        <router-link to="/LifeCycle">LifeCycle</router-link>
        <router-link to="/ListItem">ListItem</router-link>
        <router-link to="/Control">Control</router-link> -->      
        </nav>
</template>

<script>
export default {
    data() {
        return {
            menu:[
                // '/',
                // '/Home',
                // '/Home/Child',
                '/LifeCycle',
                '/Control',
                // '/Tab',
                // '/Transition',
                // '/Animate',
                // '/Directive',
                // '/Mixin'
            ],
            activeMenu:'/'
        }
    },
    mounted() {        
        this.activeMenu=window.location.pathname;        
    },
    filters:{
        filterName(value){
            if(value=='/'){
                return 'Root'
            }
            return value.replace(/\//g,'');
        }
    },
    methods: {
        menuActive(item){
            this.activeMenu=item;            
            if(this.$route.path==item){
                return
            }            
            this.$router.push(item);
        },
        isActive(name){
            return name==this.activeMenu;
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log(to, from, next);
    }
}
</script>

<style lang="scss" scoped>  
    nav{
        display: flex;
        height: 49px;
        border-bottom:1px solid #000;
    }
    
    h1{
        line-height: 50px;
        padding: 0 10px;
    }
    button{
        border:0;
        padding: 0 5px;
        background:white;
        &.active{
            background: #03A9F4;
            color:white;
        }
    }
</style>