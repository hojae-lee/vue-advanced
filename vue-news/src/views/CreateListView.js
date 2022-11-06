import ListView from '@/views/ListView';
import bus from '@/utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 컴포넌트의 옵션들
    name: name,
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
            console.log('fetched')
            bus.$emit('end:spinner');

          })
          .catch(err => {
            console.log(err);
          });
      }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}