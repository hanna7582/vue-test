<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/" @click.prevent="menuActive('/')">Vue Test</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item 
                    :href="item" 
                    v-for="(item, index) in menu" 
                    :key="index" 
                    class="nav-item nav-link"
                    @click.prevent="menuActive(item)"
                    :class="{active:isActive(item)}"
                    >{{item | filterName }}</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <!-- exact 붙이면 다른 화면 전환시 active 비활성화  https://jsfiddle.net/8xrk1n9f/
    <router-link to="/" exact>Home</router-link>  
    <router-link 
        v-for="(item, index) in menu" 
        :key="index" 
        :to="item"
        class="nav-item nav-link"
        >{{item | filterName }}</router-link> -->    
</template>

<script>
export default {
    data() {
        return {
            menu:[
                // '/Home',
                // '/Home/Child',
                // '/LifeCycle',
                // '/Mixin',
                '/CompChange',
                '/Swiper',
                '/Tab',
                '/Animation',
                '/Event',
                '/Form',
                '/Data',
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
    }
}
</script>

<style>  
    
</style>