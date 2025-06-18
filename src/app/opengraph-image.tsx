import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Will McLemore - Auction Industry Expert & Technology Leader'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
            }}
          >
            Will McLemore
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#e2e8f0',
              margin: 0,
              maxWidth: '800px',
            }}
          >
            Auction Industry Expert & Technology Leader
          </p>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '20px',
              fontSize: '24px',
              color: '#cbd5e1',
            }}
          >
            <span>CEO @ Gavel</span>
            <span>•</span>
            <span>Tech Innovation</span>
            <span>•</span>
            <span>Thought Leadership</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}