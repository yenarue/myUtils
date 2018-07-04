<template>
  <div class="IndentControl">
    <h1>공백제거기</h1>
    <p>쓸모없는 공백따위 사라져버렷!</p>
    <p>
      블로그로 코드 옮길때마다 거슬리던 Indent의 흔적들....
      <br>이 시간부로 공백은 내가 제어한다!
      <br>원클릭으로 쉽고 간단한 제어!
    </p>
    white-space 갯수 : <input v-model="whiteSpaceCount">
    <br><br>
    <textarea
      v-model="code"
      class="code-editor" />
    <br>
    <button @click="removeIndent">&#60;&#60;</button>
    <button @click="addIndent">&#62;&#62;</button>
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

.code-editor {
  width: 100%;
  height: 300px;
}
</style>
