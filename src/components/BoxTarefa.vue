<template>
   <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BoxTarefa',
    data () {
        return {
            estilos: {
                background: '#FAF0CA',
                color: '#000'
            }
        }
    }
})

</script>
<!-- 
<style scoped>
.box {
    background: #FAF0CA;
}
</style> -->