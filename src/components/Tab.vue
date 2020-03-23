<template>
  <div>
    <button 
      v-for="tab in tabs" 
      :key="tab"
      :class="{active:tab == currentTab}"
      @click="tabChange(tab)"
      >{{tab}}</button>
      <!-- keep-alive 비활성 컴포넌트 인스턴스를 파괴하지 않고 캐시 -->
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
  </div>
</template>

<script>
import Posts from './tab/Posts'
import Todo from './tab/Todo'
import Contact from './tab/Contact'

export default {
  components: {
    Posts, Todo, Contact
  },
  data() {
    return {
      tabs:['Posts', 'Todo', 'Contact'],
      currentTab:'Posts',      
    }
  },
  computed: {
    currentComponent(){
      return this.currentTab;
    }    
  },
  methods: {
    tabChange(tab){
      this.currentTab=tab;
    }
  },
}
</script>

<style>
.active{
  color:red;
}
</style>
