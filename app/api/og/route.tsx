import { ImageResponse } from 'next/og'
 
// eslint-disable-next-line import/prefer-default-export
export async function GET () {

  const params = {
    width:  1200,
    height: 630,
  }

  const style = {
    fontSize: 40,
    color: 'black',
    background: 'white',
    width: '100%',
    height: '100%',
    padding: '50px 200px',
    align: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return new ImageResponse(
    <div style={ style }>
      👋 Hello
    </div>, params)
} 