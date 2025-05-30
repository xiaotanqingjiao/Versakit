import type { App, Component } from 'vue'
import { installTheme } from './core/theme'
import { version } from './package.json'

// 基础组件
import { VerButton } from './components/button/index'
import { VerText } from './components/text/index'
import { VerRow } from './components/row/index'
import { VerCol } from './components/col/index'
import { VerInput } from './components/input/index'
import { VerDialog } from './components/dialog/index'
import { VerDivider } from './components/divider/index'
import { VerBadge } from './components/badge/index'
import { VerCard } from './components/card/index'
import { VerTag } from './components/tag/index'
import { VerDrawer } from './components/drawer/index'
import { VerSwitch } from './components/switch/index'
import { VerRadio } from './components/radio/index'
import { VerMessage } from './components/message/index'
import { VerTextarea } from './components/textarea/index'
import { VerContainer } from './components/container/index'
import { VerHeader } from './components/header/index'
import { VerMain } from './components/main/index'
import { VerNotification } from './components/notification/index'
import { VerBacktop } from './components/backtop/index'
import { VerResult } from './components/result/index'
import { VerEmpty } from './components/empty/index'
import { VerPanel } from './components/panel/index'
import { VerSegmented } from './components/segmented/index'
import { VerGradientText } from './components/gradienttext/index'
import { VerFooter } from './components/footer/index'
import { VerAside } from './components/aside/index'
import { VerProgress } from './components/progress/index'
import { VerTooltip } from './components/tooltip/index'
import { VerSlider } from './components/slider/index'
import { VerFlex } from './components/flex/index'
import { VerTable } from './components/table/index'
import { VerScrollBar } from './components/scrollbar/index'
import { VerInputOtp } from './components/inputotp/index'
import { VerCalendar } from './components/calendar/index'
import { VerSkeleton } from './components/skeleton/index'
import { VerPagination } from './components/pagination/index'
import { VerImage } from './components/image/index'
import { VerInputTag } from './components/inputtag/index'
import { VerRate } from './components/rate/index'
import { VerSplitter } from './components/splitter/index'
import { VerNoticeBar } from './components/noticebar/index'
import { VerColorPicker } from './components/colorpicker/index'
import { VerInputNumber } from './components/inputnumber/index'
import { VerDataPicker } from './components/datapicker/index'
import { VerDateTimePicker } from './components/datetimepicker/index'
import { VerTimePicker } from './components/timepicker/index'
import { VerTimeSelect } from './components/timeselect/index'
import { VerPopover } from './components/popover/index'
import { VerSelect } from './components/select/index'

// 层级组件
import { VerCarousel, VerCarouselItem } from './components/carousel/index'
import { VerCollapse, VerCollapseItem } from './components/collapse/index'
import { VerTimeline, VerTimeLineItem } from './components/timeline/index'
import { VerTab, VerTabItem } from './components/tab/index'
import { VerBreadcrumb, VerBreadcrumbItem } from './components/breadcrumb/index'
import { VerDescriptions, VerDescriptionsItem } from './components/descriptions'
import { VerCheckbox, VerCheckboxGroup } from './components/checkbox/index'
import { VerStepItem, VerSteps } from './components/steps/index'
import { VerAvatar, VerAvatarGroup } from './components/avatar/index'
import {
  VerDropdownMenu,
  VerDropdownMenuItem,
} from './components/dropdown/index'
import { VerUpload, VerUploadDragger } from './components/upload/index'

// 样式
import './style/index.css'

const components: Component[] = [
  VerSelect,
  VerPopover,
  VerUpload,
  VerUploadDragger,
  VerTimeSelect,
  VerTimePicker,
  VerDateTimePicker,
  VerDropdownMenu,
  VerDropdownMenuItem,
  VerDataPicker,
  VerInputNumber,
  VerAvatarGroup,
  VerStepItem,
  VerSteps,
  VerNoticeBar,
  VerSplitter,
  VerRate,
  VerInputTag,
  VerImage,
  VerCheckbox,
  VerCheckboxGroup,
  VerPagination,
  VerSkeleton,
  VerCalendar,
  VerDescriptions,
  VerDescriptionsItem,
  VerInputOtp,
  VerBreadcrumb,
  VerBreadcrumbItem,
  VerTabItem,
  VerTimeline,
  VerTimeLineItem,
  VerScrollBar,
  VerCol,
  VerTag,
  VerNotification,
  VerMessage,
  VerText,
  VerBadge,
  VerCarouselItem,
  VerCarousel,
  VerFlex,
  VerSlider,
  VerTooltip,
  VerProgress,
  VerAside,
  VerFooter,
  VerCollapse,
  VerCollapseItem,
  VerButton,
  VerRow,
  VerInput,
  VerDialog,
  VerAvatar,
  VerCard,
  VerPanel,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerTab,
  VerBacktop,
  VerResult,
  VerEmpty,
  VerSegmented,
  VerGradientText,
  VerTable,
  VerColorPicker,
]
export {
  VerSelect,
  VerPopover,
  VerUpload,
  VerUploadDragger,
  VerTimeSelect,
  VerTimePicker,
  VerDateTimePicker,
  VerDropdownMenu,
  VerDropdownMenuItem,
  VerDataPicker,
  VerInputNumber,
  VerAvatarGroup,
  VerStepItem,
  VerSteps,
  VerNoticeBar,
  VerSplitter,
  VerRate,
  VerInputTag,
  VerImage,
  VerCheckbox,
  VerCheckboxGroup,
  VerPagination,
  VerSkeleton,
  VerCalendar,
  VerDescriptions,
  VerDescriptionsItem,
  VerInputOtp,
  VerBreadcrumb,
  VerBreadcrumbItem,
  VerTabItem,
  VerTimeline,
  VerTimeLineItem,
  VerScrollBar,
  VerCol,
  VerTag,
  VerNotification,
  VerMessage,
  VerText,
  VerBadge,
  VerCarouselItem,
  VerCarousel,
  VerFlex,
  VerSlider,
  VerTooltip,
  VerProgress,
  VerAside,
  VerFooter,
  VerSegmented,
  VerCollapse,
  VerCollapseItem,
  VerButton,
  VerRow,
  VerInput,
  VerDialog,
  VerAvatar,
  VerCard,
  VerPanel,
  VerDivider,
  VerDrawer,
  VerSwitch,
  VerRadio,
  VerTextarea,
  VerContainer,
  VerHeader,
  VerMain,
  VerTab,
  VerBacktop,
  VerResult,
  VerEmpty,
  VerGradientText,
  VerTable,
  VerColorPicker,
}

// 定义 ThemeOptions 类型
type ThemeOptions = {
  preset: any // 由于不清楚 Element 的具体类型，暂时使用 any
}

// 定义 VersakitOptions 类型
type VersakitOptions = {
  theme?: ThemeOptions
}

const Versakit = {
  version,

  /**
   * 安装方法
   * @param app - Vue 应用实例
   * @param options - 可选的配置项
   * @param options.theme - 主题配置项
   * @param options.theme.preset - 预设主题
   */
  install: (app: App, options?: VersakitOptions) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }

    if (options?.theme) {
      installTheme(options.theme)
    }
  },
}

export { Versakit, version }
