<template>
  <div id="Building">
    <h1>
      <u>{{ featureName }}</u>
      <br>아직 만드는 중이에요 :-D
    </h1>
    조금만 기다려 주세요!
  </div>
</template>

<script>
export default {
  name: 'Building',
  props: {
    featureName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
