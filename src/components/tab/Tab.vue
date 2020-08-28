<template>
  <div>
     <b-nav tabs>
        <b-nav-item            
          v-for="(item, index) in menu" 
          :key="index"
          :active="activeClass(item)"
          @click="activeChange(item)"
        >
          {{item}}
        </b-nav-item>
    </b-nav>
    <!-- keep-alive 비활성 컴포넌트 인스턴스를 파괴하지 않고 캐시 -->
    <keep-alive>
      <component :is="currentComp" class="mt-3"></component>
    </keep-alive>
  </div>
</template>

<script>
import Posts from './Posts'
import Todo from './Todo'
import Contact from './Contact'

export default {
  components: {
    Posts, Todo, Contact
  },
  data() {
    return {
      menu:['Posts', 'Todo', 'Contact'],
      currentComp:'Posts',      
    }
  },
  methods: {
    activeChange(item) {
      this.currentComp=item;
    },
    activeClass(item){            
        return this.currentComp==item?true:false;
    }
  },
}
</script>

<style>
.active{
  color:red;
}
</style>
