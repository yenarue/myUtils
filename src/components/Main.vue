<template>
  <div class="Main">
    <h1>예나르의 개인 유틸 페이지 :-D</h1>
    <p>아무거나 만듭니다</p>
    <button @click="moveToIndentControl">공백제거기</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    moveToIndentControl () {
      this.$router.push({ name: 'IndentControl' })
    },
  },
}
</script>

<style scoped>

</style>
