<template>
  <div class="gallery">
    <MainText />
    <Separator />
    <UploadForm />
    <Separator />
    <GalleryImage v-for="image in images" :key="image.id" :image="image" />
    <Separator />
    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      @pageChange="setPage"
    />
  </div>
</template>

<script>
import MainText from '@/components/common/MainText.vue';
import Separator from '@/components/common/Separator.vue';
import UploadForm from '@/components/gallery/UploadForm.vue';
import GalleryImage from '@/components/gallery/GalleryImage.vue';
import Pagination from '@/components/gallery/Pagination.vue';
import mockData from '../../mockData.json';

export default {
  name: 'Gallery',
  components: {
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
      console.log(indexStart, indexEnd);
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
