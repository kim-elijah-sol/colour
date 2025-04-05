import { isNotUndefined, findNotNil } from '@/utils/functions';

type SpacingProperty = 'padding' | 'margin';

type SpacingStylingValue = string | number;

type SpacingStylingOptions = {
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

type CreateSpacingStylingOptions<Keys extends keyof SpacingStylingOptions> = {
  [Allowed in Keys]?: SpacingStylingValue;
} & {
  [NotAllowed in Exclude<keyof SpacingStylingOptions, Keys>]?: never;
};

type Props =
  | SpacingStylingValue
  | CreateSpacingStylingOptions<'inset'>
  | CreateSpacingStylingOptions<'x' | 'y'>
  | CreateSpacingStylingOptions<'x' | 'vertical'>
  | CreateSpacingStylingOptions<'x' | 'top' | 'bottom'>
  | CreateSpacingStylingOptions<'horizontal' | 'y'>
  | CreateSpacingStylingOptions<'horizontal' | 'vertical'>
  | CreateSpacingStylingOptions<'horizontal' | 'top' | 'bottom'>
  | CreateSpacingStylingOptions<'left' | 'right' | 'y'>
  | CreateSpacingStylingOptions<'left' | 'right' | 'vertical'>
  | CreateSpacingStylingOptions<'left' | 'right' | 'top' | 'bottom'>;

type SpacingStyle = {
  top?: SpacingStylingValue;
  right?: SpacingStylingValue;
  bottom?: SpacingStylingValue;
  left?: SpacingStylingValue;
};

function getPx(value: SpacingStylingValue): string {
  return typeof value === 'string' ? value : `${value}px`;
}

function createSpacingStyle<P extends SpacingProperty>(
  property: P,
  props: Props
): {
  [K in P]: string;
} {
  if (typeof props === 'string' || typeof props === 'number') {
    return {
      [property]: `${getPx(props)}`,
    } as { [K in P]: string };
  }

  if (isNotUndefined(props.inset)) {
    return {
      [property]: `${getPx(props.inset)}`,
    } as { [K in P]: string };
  }

  const style: SpacingStyle = {};

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

  return {
    [property]: `${getPx(style.top ?? 0)} ${getPx(style.right ?? 0)} ${getPx(
      style.bottom ?? 0
    )} ${getPx(style.left ?? 0)}`,
  } as { [K in P]: string };
}

function createSpacingFunction<P extends SpacingProperty>(property: P) {
  const spacing = (props: Props) => createSpacingStyle<P>(property, props);

  return spacing;
}

export const margin = createSpacingFunction('margin');
export const padding = createSpacingFunction('padding');
