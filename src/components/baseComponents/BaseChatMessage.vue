<template>
  <div
    :class="{
      'message-received message-animation-received': isMessageReceived,
    }"
    class="message message-animation"
  >
    <div class="user-message">
      {{ messageUser }}
    </div>
    <div
      :class="{ 'message-content-received': isMessageReceived }"
      class="message-text"
    >
      {{ messageText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageUser: {
      type: String,
      default: "",
    },
    messageText: {
      type: String,
      default: "",
    },
    messageReceived: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    isMessageReceived() {
      return this.messageReceived;
    },
  },
};
</script>

<style lang="scss">
.message {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;

  .user-message {
    font-size: 0.85rem;
    color: $user-color;
    margin: 15px;
  }

  .message-text {
    padding: 15px;
    border-radius: 20px;
    background-color: $primary;
    color: $white;
    word-break: break-all;
  }

  .message-content-received {
    background-color: $secondary;
    color: $black;
  }
}

.message-received {
  flex-direction: row-reverse;
}

.message-animation {
  @include message-animation;
  animation-name: newMessage;
}

.message-animation-received {
  @include message-animation;
  animation-name: newMessageReceived;
}

@keyframes newMessageReceived {
  0% {
    margin-left: -100%;
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    margin-left: 0%;
    opacity: 1;
  }
}

@keyframes newMessage {
  0% {
    margin-right: -100%;
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    margin-right: 0%;
    opacity: 1;
  }
}
</style>
