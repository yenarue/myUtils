<template>
  <div class="IndentControl container">
    <section class="section">
      <div class="container">
        <h1 class="title">공백제거기</h1>
        <h2 class="subtitle">
          쓸모없는 공백따위 사라져버렷!
        </h2>
      </div>
    </section>
    <div class="container notification">
      블로그로 코드 옮길때마다 귀찮게 없애줘야했던 <strong>공백의 향연들...</strong>
      <br>이 시간부로 공백은 내가 제어한다!
      <br>원클릭으로 쉽고 간단한 제어!
    </div>
    <div class="section content primary">
      <textarea class="textarea code-editor"
                placeholder="코드를 넣어주세요"
                rows="15"
                v-model="code"/>
      <div class="columns has-background-light is-mobile">
        <div class="column">
          <input class="input width-100-percentage"
                 type="number"
                 placeholder="처리할 공백의 개수를 넣어주세요 (ex: 4)"
                 v-model="whiteSpaceCount">
        </div>
        <div class="column">
          <button class="button width-100-percentage is-dark"
                  @click="removeIndent">&#60;&#60;
          </button>
        </div>
        <div class="column">
          <button class="button width-100-percentage is-dark"
                  @click="addIndent">&#62;&#62;
          </button>
        </div>
        <div class="column">
          <button class="button width-100-percentage is-warning"
                  @click="copyToClipboard">복사
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndentControl',
  data () {
    return {
      whiteSpaceCount: 4,
      code: '',
    }
  },
  methods: {
    removeIndent () {
      const regex = new RegExp(`[ ]{${this.whiteSpaceCount}}`)
      const codeLines = this.code.split('\n')
      this.code = codeLines.map(line => line.replace(regex, '')).join('\n')
    },
    addIndent () {
      let whiteSpaces = ''
      for (let i = 0; i < this.whiteSpaceCount; i += 1) {
        whiteSpaces += ' '
      }
      const codeLines = this.code.split('\n')
      this.code = codeLines.map(line => whiteSpaces + line).join('\n')
    },
    copyToClipboard () { },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
