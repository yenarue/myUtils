<template>
  <div class="Main">
    <p>아무거나 <b>만듭니다</b></p>
    <button class="button"
            @click="moveToIndentControl">공백제거기</button>
    <button class="button"
            @click="moveToBuilding($event)">세줄일기</button>
    <button class="button"
            @click="moveToBuilding">서재관리</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    moveToIndentControl () {
      this.$router.push({
        name: 'IndentControl',
      })
    },
    moveToBuilding (event) {
      this.$router.push({
        name: 'Building',
        params: {featureName: event.target.firstChild.data},
      })
    },
  },
}
</script>

<style scoped>
</style>
