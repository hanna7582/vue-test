<template>
  <div>
        <div :class="'menu'+[onMenu ? ' on' : '']">
            <button type="button" class="menu_btn" @click="onMenu = !onMenu">
                {{onMenu ? '닫기' : '열기' }}
            </button>
        </div>
        <div v-show="onMenu">
            <button @click="add">추가</button>
            <ul>
                <li v-for="item in list" :key="item" :data-index="item - 1">{{item}}</li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[],
            listIndex:0,
            onMenu:false
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