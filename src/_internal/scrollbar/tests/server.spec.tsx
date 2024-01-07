/**
 * @jest-environment node
 */
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { setup } from '@css-render/vue3-ssr'
import { NScrollbar } from '../index'

describe('SSR', () => {
  it('works', async () => {
    const app = createSSRApp(() => <NScrollbar />)
    setup(app)
    try {
      await renderToString(app)
    } catch (e) {
      expect(e).not.toBeTruthy()
    }
  })
})
