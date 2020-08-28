<template>
  <div>
        <div :class="'menu'+[onMenu ? ' on' : '']">
            <b-button class="menu_btn" @click="onMenu = !onMenu">
                {{onMenu ? '닫기' : '열기' }}
            </b-button>
            <b-button v-show="onMenu" @click="add" variant="info">리스트 추가</b-button>
        </div>
        <b-list-group v-show="onMenu">
            <b-list-group-item 
                v-for="item in list" 
                :key="item" 
                :data-index="item - 1"
            >{{item}}</b-list-group-item>
        </b-list-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[],
            listIndex:0,
            onMenu:false,
        }
    },
    methods: {
        add(){
            this.list.push(++this.listIndex);
        }
    },
}
</script>

<style>

</style>