/**
 * @jest-environment node
 */
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { setup } from '@css-render/vue3-ssr'
import { NIcon } from '../..'

describe('SSR', () => {
  it('works', async () => {
    const app = createSSRApp(() => <NIcon />)
    setup(app)
    try {
      await renderToString(app)
    } catch (e) {
      expect(e).not.toBeTruthy()
    }
  })
})
