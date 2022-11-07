import ListView from '@/views/ListView';
import bus from '@/utils/bus.js';

export default function createListView(name) {
  return {
    // 재사용할 컴포넌트의 옵션들
    name: name, // 컴포넌트 이름.
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched')
          bus.$emit('end:spinner');

        })
        .catch(err => {
          console.log(err);
        });
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}