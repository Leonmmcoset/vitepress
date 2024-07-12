# 成员列表
这是LeonMMcoset团队和跟LeonMMcoset合作的成员信息。
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/leonmmcoset.png',
    name: 'LeonMMcoset',
    title: '团队首领',
    links: [
      { icon: 'github', link: 'https://github.com/leonmmcoset' },
      { icon: 'https://github.com/Leonmmcoset/vitepress/blob/a88d8bd7d9b16a4a80fa95557b59c13833c276ab/docs/images/qq.svg', link: '/qq' },
      { icon: 'https://github.com/Leonmmcoset/vitepress/blob/a41183150da1b3708aa4ba9b4808a6761692962c/docs/images/bilibili.svg', link: ''}
    ]
  },
  {
    avater: 'https://github.com/Leonmmcoset/vitepress/blob/a88d8bd7d9b16a4a80fa95557b59c13833c276ab/docs/images/Yeonmmcoset.png',
    name: 'Yeonmmcoset',
    title: '团队成员',
    links: [
      { icon: 'https://github.com/Leonmmcoset/vitepress/blob/a41183150da1b3708aa4ba9b4808a6761692962c/docs/images/bilibili.svg', link: 'https://space.bilibili.com/3546601461123155?spm_id_from=333.337.0.0'}
    ]
  },
  {
    avater: 'https://github.com/Leonmmcoset/vitepress/blob/a88d8bd7d9b16a4a80fa95557b59c13833c276ab/docs/images/hushu.png',
    name: 'hushu',
    title: '团队成员',
    links: [
      { icon: 'https://github.com/Leonmmcoset/vitepress/blob/a41183150da1b3708aa4ba9b4808a6761692962c/docs/images/bilibili.svg', link: 'https://space.bilibili.com/3546650649823421?spm_id_from=333.337.0.0'}
    ]
  }
]
</script>
<VPTeamMembers size="medium" :members="members" />