<template>
  <div>
    <!-- 상대경로 : 파일 명칭이 변경-->
    <!-- <img src="../assets/logo.png" alt=""> -->
    <!-- 동적 경로 : 파일 명칭이 변경-->
    <!-- <img src="@/assets/logo.png" alt=""> -->
    <!-- 정적 경로 : 파일 명칭이 동일 -->
    <!-- <img src="/assets/logo.png" alt=""> -->
    <b-button-group>
      <b-button :variant="btn_class[index]"
        v-for="(item, index) in btn_name" 
        v-bind:key="index" 
        v-on:click="handle(item)">
        {{ item }}
      </b-button>
    </b-button-group>    
    <transition-group name="list" tag="div">
      <b-badge v-for="item in items" v-bind:key="item" class="m-1" variant="primary">
        {{ item }}
      </b-badge>
    </transition-group>        
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      btn_class:['primary','danger','info','success'],
      btn_name:['add','remove','shuffle','edit'],
      nextNum: 6,
      items: [1,2,3,4,5],
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    handle(name){
      if(name=='add'){
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      }else if(name=='remove'){
        // this.items.splice(this.randomIndex(), 1)
        this.$delete(this.items, this.randomIndex())
      }else if(name=='shuffle'){
        this.items = _.shuffle(this.items)
      }else{          
        // this.$set(변경할 데이터, 키 또는 인덱스, 값)         
        this.$set(this.items, this.randomIndex(), this.nextNum++)
      }
    },  
  }
}
</script>

<style>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-move {
    transition: transform 1s;
  }
</style>