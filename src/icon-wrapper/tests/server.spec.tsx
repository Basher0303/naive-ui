/**
 * @jest-environment node
 */
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { setup } from '@css-render/vue3-ssr'
import { NIconWrapper } from '../..'

describe('SSR', () => {
  it('works', async () => {
    const app = createSSRApp(() => <NIconWrapper />)
    setup(app)
    try {
      await renderToString(app)
    } catch (e) {
      expect(e).not.toBeTruthy()
    }
  })
})
