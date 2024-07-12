# 成员列表
这是LeonMMcoset团队和跟LeonMMcoset合作的成员信息。
<script setup>
//The player list of LeonMMcoset Team.
import { VPTeamMembers } from 'vitepress/theme'
import { bilibili, email, qq } from './.vitepress/icon.mjs'
const members = [
  {
    avatar: 'https://www.github.com/leonmmcoset.png',
    name: 'LeonMMcoset',
    title: '团队首领',
    links: [
      { icon: 'github', link: 'https://github.com/leonmmcoset' },
      { icon: {svg: qq}, link: '/qq' },
      { icon: {svg: bilibili}, link: 'https://space.bilibili.com/245143694?spm_id_from=333.337.0.0'},
      { icon: {svg: email}, link: 'mailto:leonmmcoset@outlook.com'}
    ]
  },
  {
    avatar: 'https://github.com/Leonmmcoset/vitepress/blob/a88d8bd7d9b16a4a80fa95557b59c13833c276ab/docs/images/Yeonmmcoset.png',
    name: 'Yeonmmcoset',
    title: '团队成员',
    links: [
      { icon: {svg: bilibili}, link: 'https://space.bilibili.com/3546601461123155?spm_id_from=333.337.0.0'},
      { icon: {svg: email}, link: 'mailto:yeonmmcoset@outlook.com'}
    ]
  },
  {
    avatar: 'https://github.com/Leonmmcoset/vitepress/blob/a88d8bd7d9b16a4a80fa95557b59c13833c276ab/docs/images/hushu.png',
    name: 'hushu',
    title: '团队成员',
    links: [
      { icon: {svg: bilibili}, link: 'https://space.bilibili.com/3546650649823421?spm_id_from=333.337.0.0'}
    ]
  }
]
</script>
<VPTeamMembers size="medium" :members="members" />