import * as React from 'react'
import { Cell, Layout, Switch } from '../auto-ui'

const routes = [
  'button',
  'button_mini',
  'button_shrink',
  'button_type',
  'button_shadow',
  'button_loading',
  'button_disabled',
  'input',
  'input_addon',
  'input_disabled',
  'input_error',
  'input_multi_line',
  'input_clear',
  'alert',
  'alert_async',
  'alert_callback',
  'alert_close',
  'alert_title_desc',
  'alert_confirm',
  'card',
  'cell',
  'cell_arrow',
  'cell_click',
  'cell_divider_indent',
  'switch',
  'switch_type',
  'switch_disabled',
  'switch_icon',
  'switch_io',
  'switch_mini',
  'toast',
  'toast_close',
  'toast_duration',
  'toast_callback',
  'loading',
  'loading_params',
  'loading_close',
  'loading_icon',
  'spin',
  'spin_text',
  'tabs',
  'time_picker',
  'icon',
  'tips',
  'radio',
  'radio_type',
  'radio_hollow',
  'radio_disabled',
  'radio_text',
  'dialog',
  'dialog_height',
  'dialog_mask_click',
  'dialog_scroll',
  'popup',
  'popup_from_parent',
  'popup_height',
  'popup_mask_click',
  'popup_no_padding',
  'popup_scroll',
  'popup_smooth_border',
  'popup_direction',
  'space',
  'actionsheet',
  'actionsheet_close_button',
  'actionsheet_custom_items',
  'layout',
  'layout_error_info',
  'layout_error_icon',
  'layout_border_type',
  'layout_ghost',
  'layout_headline',
  'layout_header',
  'layout_header_homepage',
  'layout_loading',
  'layout_tabs',
  'layout_reach_bottom',
  'message',
  'message_params',
  'message_timeout',
  'message_close',
  'lazy_img',
  'at_calendar',
  'at_nav',
  'at_city_selector',
]

class Demo extends React.PureComponent {
  state = { darkMode: !!localStorage.getItem('darkMode') }

  onChangeDarkMode = (v: boolean) => {
    this.setState({ darkMode: v })
    if (v) {
      localStorage.setItem('darkMode', '1')
    } else {
      localStorage.removeItem('darkMode')
    }
  }

  render() {
    return (
      <Layout supportDarkMode={this.state.darkMode}>
        <Layout.Header
          title="AUTO-UI"
          addonAfter={
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.26rem',
                  opacity: 0.6,
                  marginRight: '0.1rem',
                }}
              >
                暗黑模式
              </span>
              <Switch mini={true} active={this.state.darkMode} onChange={this.onChangeDarkMode} />
            </span>
          }
        />

        <Layout.Body>
          <Cell arrow={true}>
            {routes.map((item, index) => {
              return <Cell.Row key={index} title={item} href={`/#/${item}`} />
            })}
          </Cell>
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
