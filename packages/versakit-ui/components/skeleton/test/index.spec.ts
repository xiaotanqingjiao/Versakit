// 写单测
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VerSkeleton from '../src/index.vue'

describe('Skeleton', () => {
  it('测试是否有默认样式', () => {
    const wrapper = mount(VerSkeleton)
    expect(wrapper.classes()).toContain('ver-skeleton')
  })
})
