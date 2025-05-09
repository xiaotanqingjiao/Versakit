import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerProgress from '../src/index.vue'

describe('VerProgress', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerProgress)

    expect(wrapper.classes()).toContain('progress')
  })
})
