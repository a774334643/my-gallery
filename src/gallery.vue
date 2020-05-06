<template>
  <div class="gallery">
    <div class="gallery-content">
      <img :class="zoomImg===false?'gallery-content-img zoom-in':'gallery-content-img zoom-out'" 
      :src="src" 
      @click="handlezoom" />
    </div>
    <div class="gallery-close" @click="closeGallery">
      <span class="gallery-close-icon">X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    src: String
  },
  data () {
    return {
      zoomImg: true
    }
  },
  computed: {
  },
  methods: {
    closeGallery () {
      this.$emit('closeGallery')
    },
    handlezoom () {
      this.zoomImg = !this.zoomImg
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  .gallery-content {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    .gallery-content-img {
      cursor: zoom-in;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .gallery-close{
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: hsla(0,0%,41.2%,.2);
    transition: .2s;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #ffffff;
    &:hover {
      background-color: hsla(0,0%,58.8%,.5);
    }
  }
}
.zoom-in {
  max-height: inherit !important;
  cursor: zoom-out !important;
}
</style>
