import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return { name:'جُنودالزهراء', short_name:'جنودالزهراء', description:'پایگاه فرهنگی، مذهبی، جهادی و تبلیغی جُنودالزهراء', start_url:'/', display:'standalone', dir:'rtl', lang:'fa', background_color:'#f5f1e8', theme_color:'#0d3d2b', icons:[{src:'/logo.png',sizes:'512x512',type:'image/png'}] };
}
