import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

const h = (type, style, children) => ({ type, props: { style, children } });

export default function handler() {
  return new ImageResponse(
    h(
      'div',
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#ffffff',
        padding: '72px 84px',
        fontFamily: 'serif',
      },
      [
        h('div', { display: 'flex', flexDirection: 'column' }, [
          h('div', { fontSize: 120, color: '#000000', lineHeight: 1.05 }, 'Phil Baines'),
          h('div', { fontSize: 120, color: '#9a9a9a', lineHeight: 1.05 }, '1958–2024'),
        ]),
        h('div', { display: 'flex', alignItems: 'center' }, [
          h('div', { width: 14, height: 56, background: '#cc0000', marginRight: 28 }, null),
          h('div', { fontSize: 44, color: '#000000' }, 'Stories about Phil, as told by friends, colleagues and students'),
        ]),
      ]
    ),
    { width: 1200, height: 630 }
  );
}
