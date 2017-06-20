<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$fixed-height: 32px;
$base-fontsize:16px;
$base-border-color: rgba(225,147,89,0.5);
$icon-list: home, save, pen;
$dir-list: top, bottom, left, right;
@each $icon in $icon-list {
  .icon-#{$icon}:before{
    content:url('./assets/#{$icon}.png');
  }
}
*{
  box-sizing:border-box;
}
body, p{
  margin:0;
  padding:0;
}
hr{
  margin-top:0;
  color: $base-border-color;
  background-color: $base-border-color;
  border:none;
  height:1px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.text-left{
  text-align: left;
}
.clearFix:after{
  display:block;
  content:'';
  clear: both;
}
.float-left{
  float:left;
}
.float-right{
  float:right;
}
@mixin fixed($height:$fixed-height) {
  position:fixed;
  left:0;
  width:100%;
  height:$height;
  padding:5px;
}
.top-fixed{
  @include fixed;
  top:0;
}
.bottom-fixed{
  @include fixed;
  bootom:0;
}

.fixed-container{
  padding-top:$fixed-height;
}

@each $dir in $dir-list {
  .m-#{$dir}{
    margin-#{$dir}:10px;
  }
}
.text-ellipsis{
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
}
.single-line{
  max-height:$base-fontsize;
  line-height:$base-fontsize;
}
.text-indent{
  text-indent:$base-fontsize;
}
.border-left{
  border-left:5px solid $base-border-color;
  border-radius:3px 0 0 3px;
}
.slide-enter-active {
  position:absolute;
  top:0;
  width:100%;
  transition: all .3s ease;
}
.slide-leave-active {
  position:absolute;
  top:0;
  width:100%;
  transition: all .3s ease;
}
.slide-enter, .slide-leave-active {
  opacity: 0;
}
</style>
