<template>
  <header class="cover">
    <css-doodle class="ceiling"> 
      @grid: 1 / 8em; 
      background: #def; 
    </css-doodle>
    <section>
      <h1>&lt; <em>css-doodle</em> /&gt;</h1>
      <p>A web component for drawing patterns with CSS</p>
      <nav>
        <a href="#usage">Usage ↓</a>
        <a href="https://codepen.io/collection/XyVkpQ/">CodePen</a>
        <a href="https://github.com/css-doodle/css-doodle">GitHub</a>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  name: "Header",
  setup() {},
};
</script>
<style scoped lang="less">
@import '../assets/css/header.less';
</style>