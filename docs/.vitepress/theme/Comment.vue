<template>
  <div class="comment">
    <component
      v-if="isDark"
      src="https://giscus.app/client.js"
        data-repo="Leonmmcoset/vitepress"
        data-repo-id="R_kgDOMTSP1w"
        data-category="General"
        data-category-id="DIC_kwDOMTSP184CgvyH"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
    </component>
    <component
      v-else
      src="https://giscus.app/client.js"
        data-repo="Leonmmcoset/vitepress"
        data-repo-id="R_kgDOMTSP1w"
        data-category="General"
        data-category-id="DIC_kwDOMTSP184CgvyH"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
    </component>
  </div>
</template>
<script setup lang="ts">
  import { useData } from 'vitepress';
  // 获取当前配色方案
  const { isDark } = useData();
</script>
<style lang="scss" scoped>
  .comment {
    margin-top: 16px;
  }
</style>