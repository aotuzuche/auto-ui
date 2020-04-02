import * as React from 'react'
import { Layout, Cell } from '../auto-ui'

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
  'cell_indent_line',
  'switch',
  'switch_disabled',
  'switch_icon',
  'switch_io',
  'toast',
  'toast_close',
  'toast_duration',
  'loading',
  'loading_close',
  'spin',
  'spin_text',
  'tabs',
  'time-picker',
  'radio',
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
  'layout_border_type',
  'layout_ghost',
  'layout_headline',
  'layout_header',
  'layout_header_homepage',
  'layout_loading',
  'layout_skeleton',
  'layout_tabs',
  'layout_reach_bottom',
  'message',
  'message_params',
  'message_timeout',
  'message_close',
  'at-calendar',
  'at-nav',
]

class Demo extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Layout.Body>
          {routes.map((item, index) => {
            return (
              <Cell key={index}>
                <a
                  href={`/#/${item}`}
                  style={{
                    width: '100%',
                    display: 'block',
                    textAlign: 'center',
                    lineHeight: '50px',
                  }}
                >
                  {item}
                </a>
              </Cell>
            )
          })}
        </Layout.Body>
      </Layout>
    )
  }
}

export default Demo
