import { isNotUndefined, findNotNil } from '@/utils/functions';

type FixedStylingValue = string | number;

type FixedStylingOptions = {
  inset?: never;
  x?: never;
  horizontal?: never;
  y?: never;
  vertical?: never;
  top?: never;
  bottom?: never;
  left?: never;
  right?: never;
};

type CreateFixedStylingOptions<Keys extends keyof FixedStylingOptions> = {
  [Allowed in Keys]?: FixedStylingValue;
} & {
  [NotAllowed in Exclude<keyof FixedStylingOptions, Keys>]?: never;
};

type Props =
  | FixedStylingValue
  | CreateFixedStylingOptions<'inset'>
  | CreateFixedStylingOptions<'x' | 'y'>
  | CreateFixedStylingOptions<'x' | 'vertical'>
  | CreateFixedStylingOptions<'x' | 'top' | 'bottom'>
  | CreateFixedStylingOptions<'horizontal' | 'y'>
  | CreateFixedStylingOptions<'horizontal' | 'vertical'>
  | CreateFixedStylingOptions<'horizontal' | 'top' | 'bottom'>
  | CreateFixedStylingOptions<'left' | 'right' | 'y'>
  | CreateFixedStylingOptions<'left' | 'right' | 'vertical'>
  | CreateFixedStylingOptions<'left' | 'right' | 'top' | 'bottom'>;

export function fixed(props: Props) {
  const style: {
    position: 'fixed';
    top?: FixedStylingValue;
    right?: FixedStylingValue;
    bottom?: FixedStylingValue;
    left?: FixedStylingValue;
  } = { position: 'fixed' };

  if (typeof props === 'string' || typeof props === 'number') {
    style.top = style.bottom = style.left = style.right = props;

    return style;
  }

  if (isNotUndefined(props.inset)) {
    style.top = style.bottom = style.left = style.right = props.inset;

    return style;
  }

  if (isNotUndefined(props.x) || isNotUndefined(props.horizontal)) {
    style.left = style.right = findNotNil(props.x, props.horizontal);
  }

  if (isNotUndefined(props.y) || isNotUndefined(props.vertical)) {
    style.top = style.bottom = findNotNil(props.y, props.vertical);
  }

  if (isNotUndefined(props.top)) {
    style.top = props.top;
  }

  if (isNotUndefined(props.bottom)) {
    style.bottom = props.bottom;
  }

  if (isNotUndefined(props.left)) {
    style.left = props.left;
  }

  if (isNotUndefined(props.right)) {
    style.right = props.right;
  }

  return style;
}
