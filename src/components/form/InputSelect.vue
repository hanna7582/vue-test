<template>
  <div>    
    <!-- <b-card
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Title"
    >
      <b-card-text>Header and footers using props.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card> -->

    <b-card-group class="mb-3" deck>
      <b-card 
        header="v-bind:value, v-on:input"
      >
        <input type="text" v-bind:value="message" v-on:input="handleInput" />
        {{message}}
      </b-card>
      <b-card
        header="v-model"
      >
        <b-form-input v-model.lazy="message" />
        {{message}}
      </b-card>
    </b-card-group>

    <b-card-group class="mb-3" deck>
      <b-card
        header="단일 체크"
      >
        <b-form-checkbox v-model="checkOne"> {{ checkOne }}</b-form-checkbox>
      </b-card>
      <b-card
        header="복수 체크"
      >
        <b-form-checkbox v-model="checkList" value="A"> A</b-form-checkbox>
        <b-form-checkbox v-model="checkList" value="B"> B</b-form-checkbox>
        <b-form-checkbox v-model="checkList" value="C"> C</b-form-checkbox>
        <p>{{ checkList }}</p>
      </b-card>
    </b-card-group>

    <b-card-group class="mb-3" deck>
      <b-card
        header="라디오"
      >
        <b-form-radio value="a" v-model="radio"> A</b-form-radio>
        <b-form-radio value="b" v-model="radio"> B</b-form-radio>
        <b-form-radio value="c" v-model="radio"> C</b-form-radio>
        <p>{{ radio }}</p>
      </b-card>
      <b-card
        header="셀렉트"
      >
        <b-form-select v-model="select">
          <b-form-select-option value="" disabled="disabled">선택해 주세요.</b-form-select-option>
          <b-form-select-option value="a">A</b-form-select-option>
          <b-form-select-option value="b">B</b-form-select-option>
          <b-form-select-option value="c">C</b-form-select-option>
        </b-form-select>
        <p>{{ select }}</p>
      </b-card>
    </b-card-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello',
      checkOne:true,
      checkList:['A'],
      radio:'a',
      select:'a'
    }
  },
  methods: {
    handleInput: function (event) {
      // 할당 전에 어떤 처리하기
      this.message = event.target.value
    }
  }
}
</script>

<style>

</style>