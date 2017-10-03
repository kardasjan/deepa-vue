<template>
  <footer>
    <p class="copyright">© APsystem, 2017</p>
    <p class="author">Code by Jan Kardaš</p>
  </footer>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style scoped>
footer {
  width: 100%;
  min-height: 30px;
  background: #343434;
  color: #8f8f8f;
  font-size: 10px;
  padding: 7px 0 10px 0;
  position: absolute;
  bottom: 0;
}
.copyright {
  text-align: center;
}
.author {
  text-align: center;
}
</style>
