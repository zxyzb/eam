<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  margin:0px;
  padding:0px;
  height:100%
}
#app{
  position: relative;
    width: 100%;
    height: 100%; 
}

.el-header, .el-footer {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 60px;
}
a{
  text-decoration:none;
}
.el-aside {
  line-height: 200px;
}
</style>