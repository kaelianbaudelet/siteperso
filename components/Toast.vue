
<template>
  
    <div
      v-for="(toast, index) in toasts"
      :key="index"
      class="fixed max-w-xs bg-white border border-steel-50/20 rounded-xl shadow-lg dark:bg-steel-200 dark:border-steel-200 z-[9999] right-5 top-5"
      role="alert"
      :style="{ marginTop: `${index * 85}px` }"
      @click="hide(toast)"
    >
      <div class="flex p-4">
        <div class="flex-shrink-0">


          <svg class="flex-shrink-0 h-5 w-5 fill-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"/>
          </svg>
        </div>
        <div class="ms-3">
          <p class="text-sm text-steel-300 dark:text-white">
            {{ toast.message }}
          </p>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    show(type="info", duration="1000", closeonclick, message="Salut") {
      const toast = {
        type,
        duration,
        closeonclick,
        message,
      };

      this.toasts.push(toast);

      if (duration > 0) {
        setTimeout(() => {
          this.hide(toast);
        }, duration);
      }
    },
    hide(toast) {
      const index = this.toasts.indexOf(toast);
      if (index !== -1) {
        this.toasts.splice(index, 1);
      }
    },
    hideall() {
      this.toasts = [];
    },
  },
};
</script>

<style>
 
</style>