<template>
  <div class="container">
    <h1 class="title notification">출퇴근 체크</h1>
    <div class="section content primary">
      <div v-if="isWorking"><b>업무중!</b><br></div>
      <div v-if="startWorkingDate === ''">
        아직 출근 전 입니다 :-D
      </div>
      <div v-else>
        출근 : {{ startWorkingDate.getHours() }}:{{ startWorkingDate.getMinutes() }}:{{ startWorkingDate.getSeconds() }}
        <div v-if="endWorkingDate !== ''">
          퇴근 : {{ endWorkingDate.getHours() }}:{{ endWorkingDate.getMinutes() }}:{{ endWorkingDate.getSeconds() }}
        </div>
      </div>
      <button v-if="!isWorking"
              class="button"
              @click="onStartWorkButton">
        출근
      </button>
      <button v-else
              class="button"
              @click="onEndWorkButton">
        퇴근
      </button>
      {{ totalWorkingTime }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkStatusCheck',
  data () {
    return {
      startWorkingDate: '',
      endWorkingDate: '',
      isWorking: false,
      totalWorkingTime: 0,
    }
  },
  methods: {
    onStartWorkButton () {
      if (this.startWorkingDate === '') {
        this.startWorkingDate = new Date()
      } else {
        this.endWorkingDate = ''
      }
      this.isWorking = true
      this.$options.interval = setInterval(this.updateTotalWorkingTime, 1000)
    },
    onEndWorkButton () {
      this.endWorkingDate = new Date()
      clearInterval(this.$options.interval)
      this.totalWorkingTime = this.endWorkingDate - this.startWorkingDate
      this.isWorking = false
    },
    updateTotalWorkingTime () {
      this.totalWorkingTime = this.totalWorkingTime + 1
    },
  },
}
</script>

<style scoped>

</style>
