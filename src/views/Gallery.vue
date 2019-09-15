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
import MainText from '@/components/MainText.vue';
import Separator from '@/components/Separator.vue';
import UploadForm from '@/components/UploadForm.vue';
import GalleryImage from '@/components/GalleryImage.vue';
import Pagination from '@/components/Pagination.vue';
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
