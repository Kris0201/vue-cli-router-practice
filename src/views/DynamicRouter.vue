<template>
  <div></div>
</template>

<script>
// 使用axios來撈資料
import axios from 'axios';

export default {
  created() {
    // console.log(this.$route.params.id); this.$route 表示帶出與 route 相關的資訊，例如 params
    // const seed = '196e763542e4768c'; // 注意，如果宣告了變數卻沒有使用，會造成無法正確執行 npm run serve，以及整個網頁報錯
    const seed = this.$route.params.id;
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res);
      });
  },
};

// import axios from 'axios';

// export default {
//   created() {
//     console.log(this.$route.params.id);
//     const seed = this.$route.params.id;
//     axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
//       console.log(res);
//     });
//   },
// };
</script>
