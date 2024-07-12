# 成员列表
这是LeonMMcoset团队和跟LeonMMcoset合作的成员信息。
<script setup>
import { Team } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/leonmmcoset.png',
    name: 'LeonMMcoset',
    title: '团队首领',
    links: [
      { icon: 'github', link: 'https://github.com/leonmmcoset' },
      { icon: '/images/qq', link: '/qq' }
    ]
  },
  {
    avater: 'https://i2.hdslb.com/bfs/face/2a93a76fda5ba8dce474f5a6926af226a5248fc4.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: 'Yeonmmcoset',
    title: '团队成员'
  },
  {
    avater: 'https://i0.hdslb.com/bfs/face/member/noface.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: 'hushu',
    title: '团队成员'
  }
]
</script>
<Team size="medium" :members="members" />