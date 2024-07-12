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
      { icon: '/images/qq.svg', link: '/qq' }
    ]
  },
  {
    avater: '/images/Yeonmmcoset.png',
    name: 'Yeonmmcoset',
    title: '团队成员'
  },
  {
    avater: '/images/hushu.png',
    name: 'hushu',
    title: '团队成员'
  }
]
</script>
<VPTeamMembers size="medium" :members="members" />