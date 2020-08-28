<template>
  <div>
    <b-card-group class="mb-3" deck>
      <b-card 
        header="산출속성"
      >
       <b-list-group>
        <b-list-group-item>{{computedData}}</b-list-group-item>
        <b-list-group-item>{{computedData}}</b-list-group-item>
        </b-list-group>
        </b-card>
        <b-card 
          header="메서드"
        >
          <b-list-group>
          <b-list-group-item>{{methodsData()}}</b-list-group-item>
          <b-list-group-item>{{methodsData()}}</b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>

    <b-card-group class="mb-3" deck>
      <b-card 
        header="산출속성 조합"
      >
        <p>X: {{ halfPoint.x }}</p>
        <p>Y: {{ halfPoint.y }}</p>
      </b-card>
      <b-card 
        header="게터와 세터"
      >
        <b-input-group prepend="width">
            <b-form-input v-model.number="width"></b-form-input>
        </b-input-group>
         <b-input-group prepend="halfWidth">
            <b-form-input v-model.number="halfWidth"></b-form-input>
        </b-input-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 800,
      height: 600
    }
  },
  computed: {
    computedData() {
      return Math.random() 
    },
    halfWidth: {
      get: function() {
        return this.width / 2
      },
      // halfWidth를 2 배수한 숫자를 width에 할당하기
      set: function(val) {
        this.width = val * 2
      }
    },
    // halfWidth: function() {
    //   return this.width / 2
    // },
    halfHeight: function() {
      return this.height / 2
    },
    // 'width×height'의 중심 좌표 객체 리턴하기
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    }
  },
  methods: {
    methodsData() {
      return Math.random() 
    }
  },
}
</script>

<style>

</style>