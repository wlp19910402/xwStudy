<template>
  <div id="app">
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import MessageList from '~/components/MessageList.vue'
export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Trb Wlp'] }),
  components: { MessageList }
}
</script>
