import Vue from 'vue';
import Router from 'vue-router';
import Gallery from './views/Gallery.vue';
import Comments from './views/Comments.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '/comments/:id',
      name: 'Comments',
      component: Comments,
    },
  ],
});
