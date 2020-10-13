<template>
  <div>
    <h1>ToDo list</h1>
    <div class="content-wapper">
      <ul>
        <li v-for="item in todos" :key="item.id"> 
          <div class="item-select"></div>
          <div class="item-desc">{{ item.desc }}</div>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import { ref, reactive, computed } from 'vue'
export default {
  name: 'todo-list',
  setup() {
    const todos =  reactive([
       {
        id: 1,
        desc: 'todo rendering'
      },
      {
        id:2,
        desc: 'clickable'
      },
      {
        id:3,
        desc: 'removeble'
      },
      {
        id:4,
        desc: ''
      }],
    )

    return {
      todos
    }
  },
}
</script>

<style lang="scss" scoped>
.content-wapper {
  .item-select {
  }
  .item-desc {

  }
}

</style>