<template>
  <div class="gallery">
    <MainText />
    <Separator />
    <UploadForm />
    <Separator />
    <GalleryImage v-for="image in images" :key="image.id" :image="image" />
    <Separator />
    <Pagination totalPages="3" currentPage="1" />
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
      images: mockData.images.slice(0, 8),
    };
  },
};
</script>
