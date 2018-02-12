<template>
  <div class="IndentControl">
    <h1>indent 조절하기</h1>
    white-space 갯수 : <input v-model="whiteSpaceCount"/>
    <br/><br/>
    <textarea class="code-editor" v-model="code"></textarea>
    <br/>
    <button v-on:click="removeIndent">&#60;&#60;</button>
    <button v-on:click="addIndent">&#62;&#62;</button>
  </div>
</template>

<script>
export default {
  name: 'IndentControl',
  data() {
    return {
      whiteSpaceCount: 4,
      code: '',
    };
  },
  methods: {
    removeIndent() {
      const regex = new RegExp(`[ ]{${this.whiteSpaceCount}}`);
      const codeLines = this.code.split('\n');
      this.code = codeLines.map(line => line.replace(regex, '')).join('\n');
    },
    addIndent() {
      let whiteSpaces = '';
      for (let i = 0; i < this.whiteSpaceCount; i += 1) {
        whiteSpaces += ' ';
      }
      const codeLines = this.code.split('\n');
      this.code = codeLines.map(line => whiteSpaces + line).join('\n');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}

.code-editor {
  width: 100%;
  height: 300px;
}
</style>
