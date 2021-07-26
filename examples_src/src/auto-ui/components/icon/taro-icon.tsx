import React  from "react"
import cn from 'classnames'
import {encode} from '../__utils/base64'

interface Props {
    className?: string;
    color?: string;
    svg: JSX.Element | ((className?:string) => JSX.Element);
}
const JsxString = (component: JSX.Element): string => {
  let type = component.type;
  let props = component.props;
  let propsString = "";
  for (let key in props) {
    if (key !== "children") {
      let propValue = props[key];
      let value = "";
      if (propValue instanceof Object) {
        value = `{${JSON.stringify(propValue).replace(/['"]+/g, '')}}`;
      } else {
        value = `"${propValue}"`;
      }
      propsString += ` ${key}=${value}`;
    }
  }
  if (props.children) {
    const children = [].concat(props.children).map(JsxString).join('\n')
    return `<${type} ${propsString}> ${children} </${type}>`;
  }
  return `<${type} ${propsString} />`;
}

export const TaroIcon = React.memo((props: Props) => {
    const { svg, color, className} = props;
    const style = color ? `fill: ${color};` : '' ;
    const src = JsxString(svg as JSX.Element).replace("<svg", `<svg style="${style}"`);
    return (
      <div
        className={cn(className,'x-icon')}
        style={{
            backgroundImage: `url(data:image/svg+xml;base64,${encode(src)})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        }}
      />
    );
  });
  