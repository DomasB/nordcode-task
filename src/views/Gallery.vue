<template>
  <div>
    <NarrowView>
      <MainText />
      <Separator />
      <UploadForm />
      <Separator />
    </NarrowView>
    <div class="gallery-container">
      <GalleryImage
        v-for="image in images"
        :key="image.id"
        :image="image"
        class="gallery-image"
      />
    </div>
    <NarrowView>
      <Separator />
      <Pagination
        :totalPages="totalPages"
        :currentPage="currentPage"
        @pageChange="setPage"
      />
    </NarrowView>
  </div>
</template>

<script>
import NarrowView from '@/components/common/NarrowView.vue';
import MainText from '@/components/common/MainText.vue';
import Separator from '@/components/common/Separator.vue';
import UploadForm from '@/components/gallery/UploadForm.vue';
import GalleryImage from '@/components/gallery/GalleryImage.vue';
import Pagination from '@/components/gallery/Pagination.vue';
import mockData from '../../mockData.json';

export default {
  name: 'Gallery',
  components: {
    NarrowView,
    MainText,
    Separator,
    UploadForm,
    GalleryImage,
    Pagination,
  },
  data() {
    return {
      totalImages: mockData.images.length,
      imagesPerPage: 8,
      currentPage: 1,
    };
  },
  computed: {
    images() {
      const indexStart = this.currentPage * this.imagesPerPage - this.imagesPerPage;
      const indexEnd = this.currentPage * this.imagesPerPage;

      return mockData.images.slice(indexStart, indexEnd);
    },
    totalPages() {
      return Math.ceil(this.totalImages / this.imagesPerPage);
    },
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="sass">
  .gallery-container
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    margin-bottom: -3vh

  .gallery-image
    width: 20vw
    min-widht: 100px
    text-align: left
    margin-bottom: 3vh
</style>
