<template>
  <button :class="btnClass" :disabled="isDisabled || isLoading" @click="handleClick">
    <span v-if="isLoading">Loading...</span>
    <span v-else>
      <span v-if="icon" class="icon">{{ icon }}</span>
      <span>{{ buttonText }}</span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
    isRound: Boolean,
    icon: String,
    disabled: Boolean,
    buttonText: {
      type: String,
      default: 'Button'
    }
  },
  computed: {
    btnClass () {
      return {
        'btn': true,
        'btn-round': this.isRound,
        'btn-disabled': this.isDisabled || this.isLoading
      }
    }
  },
  methods: {
    handleClick () {
      if (!this.isLoading && !this.isDisabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.btn-round {
  border-radius: 20px;
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.icon {
  margin-right: 5px;
}
</style>
