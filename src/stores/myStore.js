import { defineStore } from "pinia";
import { ref } from "vue";

export const useMyStore = defineStore('myStore',()=>{
    const show = ref(false)

    const showLeft = ref(false)

    return {
        show,
        showLeft
    }

})