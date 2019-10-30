import { Redirect, Route, Router, Switch } from 'dva/router'
import * as React from 'react'
import PageActionsheet from '../pages/actionsheet'
import PageActionsheetCloseButton from '../pages/actionsheet_close_button'
import PageActionsheetCustomItems from '../pages/actionsheet_custom_items'
import PageAlert from '../pages/alert'
import PageAlertAsync from '../pages/alert_async'
import PageAlertCallback from '../pages/alert_callback'
import PageAlertClose from '../pages/alert_close'
import PageAlertConfirm from '../pages/alert_confirm'
import PageAlertTitleDesc from '../pages/alert_title_desc'
import PageAtCalendar from '../pages/at_calendar'
import PageButton from '../pages/button'
import PageButtonDisabled from '../pages/button_disabled'
import PageButtonLoading from '../pages/button_loading'
import PageButtonMini from '../pages/button_mini'
import PageButtonShadow from '../pages/button_shadow'
import PageButtonShrink from '../pages/button_shrink'
import PageButtonType from '../pages/button_type'
import PageCard from '../pages/card'
import PageCell from '../pages/cell'
import PageCellArrow from '../pages/cell_arrow'
import PageCellClick from '../pages/cell_click'
import PageCellIndentLine from '../pages/cell_indent_line'
import PageDialog from '../pages/dialog'
import PageDialogHeight from '../pages/dialog_height'
import PageDialogMaskClick from '../pages/dialog_mask_click'
import PageDialogScroll from '../pages/dialog_scroll'
import PageInput from '../pages/input'
import PageInputAddon from '../pages/input_addon'
import PageInputDisabled from '../pages/input_disabled'
import PageInputError from '../pages/input_error'
import PageInputMultiLine from '../pages/input_multi_line'
import PageLayout from '../pages/layout'
import PageLayoutBorderType from '../pages/layout_border_type'
import PageLayoutErrorInfo from '../pages/layout_error_info'
import PageLayoutGhost from '../pages/layout_ghost'
import PageLayoutHeader from '../pages/layout_header'
import PageLayoutHeaderHomepage from '../pages/layout_header_homepage'
import PageLayoutHeadline from '../pages/layout_headline'
import PageLayoutLoading from '../pages/layout_loading'
import PageLayoutReachBottom from '../pages/layout_reach_bottom'
import PageLoading from '../pages/loading'
import PageLoadingClose from '../pages/loading_close'
import PageLoadingText from '../pages/loading_text'
import PageNavBar from '../pages/nav-bar'
import PageNavBarWidthAddonBottom from '../pages/nav-bar-width-addonBottom'
import PagePopup from '../pages/popup'
import PagePopupFromParent from '../pages/popup_from_parent'
import PagePopupHeight from '../pages/popup_height'
import PagePopupMaskClick from '../pages/popup_mask_click'
import PagePopupNoPadding from '../pages/popup_no_padding'
import PagePopupScroll from '../pages/popup_scroll'
import PagePopupSmoothBorder from '../pages/popup_smooth_border'
import PagePopupTop from '../pages/popup_top'
import PageRadio from '../pages/radio'
import PageRadioBorder from '../pages/radio_border'
import PageRadioDisabled from '../pages/radio_disabled'
import PageRadioText from '../pages/radio_text'
import PageSpace from '../pages/space'
import PageSpin from '../pages/spin'
import PageSpinText from '../pages/spin_text'
import PageSwitch from '../pages/switch'
import PageSwitchDisabled from '../pages/switch_disabled'
import PageSwitchIcon from '../pages/switch_icon'
import PageSwitchIO from '../pages/switch_io'
import PageTabs from '../pages/tabs'
import PageTimePicker from '../pages/time-picker'
import PageToast from '../pages/toast'
import PageToastClose from '../pages/toast_close'
import PageToastDuartion from '../pages/toast_duration'

const routes: any[] = [
  ['button', PageButton],
  ['button_mini', PageButtonMini],
  ['button_shrink', PageButtonShrink],
  ['button_type', PageButtonType],
  ['button_shadow', PageButtonShadow],
  ['button_loading', PageButtonLoading],
  ['button_disabled', PageButtonDisabled],
  ['input', PageInput],
  ['input_addon', PageInputAddon],
  ['input_disabled', PageInputDisabled],
  ['input_error', PageInputError],
  ['input_multi_line', PageInputMultiLine],
  ['alert', PageAlert],
  ['alert_async', PageAlertAsync],
  ['alert_callback', PageAlertCallback],
  ['alert_close', PageAlertClose],
  ['alert_title_desc', PageAlertTitleDesc],
  ['alert_confirm', PageAlertConfirm],
  ['card', PageCard],
  ['cell', PageCell],
  ['cell_arrow', PageCellArrow],
  ['cell_click', PageCellClick],
  ['cell_indent_line', PageCellIndentLine],
  ['switch', PageSwitch],
  ['switch_disabled', PageSwitchDisabled],
  ['switch_icon', PageSwitchIcon],
  ['switch_io', PageSwitchIO],
  ['toast', PageToast],
  ['toast_close', PageToastClose],
  ['toast_duration', PageToastDuartion],
  ['loading', PageLoading],
  ['loading_text', PageLoadingText],
  ['loading_close', PageLoadingClose],
  ['spin', PageSpin],
  ['spin_text', PageSpinText],
  ['tabs', PageTabs],
  ['time-picker', PageTimePicker],
  ['radio', PageRadio],
  ['radio_border', PageRadioBorder],
  ['radio_disabled', PageRadioDisabled],
  ['radio_text', PageRadioText],
  ['dialog', PageDialog],
  ['dialog_height', PageDialogHeight],
  ['dialog_mask_click', PageDialogMaskClick],
  ['dialog_scroll', PageDialogScroll],
  ['popup', PagePopup],
  ['popup_from_parent', PagePopupFromParent],
  ['popup_height', PagePopupHeight],
  ['popup_mask_click', PagePopupMaskClick],
  ['popup_no_padding', PagePopupNoPadding],
  ['popup_scroll', PagePopupScroll],
  ['popup_smooth_border', PagePopupSmoothBorder],
  ['popup_top', PagePopupTop],
  ['space', PageSpace],
  ['actionsheet', PageActionsheet],
  ['actionsheet_close_button', PageActionsheetCloseButton],
  ['actionsheet_custom_items', PageActionsheetCustomItems],
  ['layout', PageLayout],
  ['layout_error_info', PageLayoutErrorInfo],
  ['layout_border_type', PageLayoutBorderType],
  ['layout_ghost', PageLayoutGhost],
  ['layout_headline', PageLayoutHeadline],
  ['layout_header', PageLayoutHeader],
  ['layout_header_homepage', PageLayoutHeaderHomepage],
  ['layout_loading', PageLayoutLoading],
  ['layout_reach_bottom', PageLayoutReachBottom],
  ['nav-bar', PageNavBar],
  ['nav-bar-width-addonBottom', PageNavBarWidthAddonBottom],
  ['at-calendar', PageAtCalendar],
]

export default (history: any) => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(r => {
          return <Route key={r[0]} exact={true} path={`/${r[0]}`} component={r[1]} />
        })}
        <Redirect from="*" to="/button" />
      </Switch>
    </Router>
  )
}
