import classNames from 'classnames';
import { Children, PropsWithChildren, ReactElement } from 'react';
import * as style from './style.css';
import { TabSelectContext, useTabSelectContext } from './TabSelectContext';

type IndicatorProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'style'
>;

type Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;

  indicatorProps?: IndicatorProps;
};

function TabSelect({
  className,
  value,
  onChange,
  children,
  indicatorProps: _indicatorProps = {},
  ...props
}: Props) {
  const { className: indicatorClassName, ...indicatorProps } = _indicatorProps;

  const optionCount = Children.count(children);

  const options = Children.map(children, (child) => {
    return (child as ReactElement<OptionProps>).props.value;
  }) as string[];

  const currentSelectedOptionIndex = options.indexOf(value);

  const indicatorLeftStep = (1 / optionCount) * 100;

  return (
    <TabSelectContext.Provider
      value={{
        value,
        setValue: onChange,
      }}
    >
      <div className={classNames(style.tabSelect, className)} {...props}>
        <div
          className={classNames(style.indicator, indicatorClassName)}
          style={{
            left: `${indicatorLeftStep * currentSelectedOptionIndex}%`,
            width: `${indicatorLeftStep}%`,
          }}
          {...indicatorProps}
        />
        {children}
      </div>
    </TabSelectContext.Provider>
  );
}

type OptionProps = PropsWithChildren<{
  value: string;
}>;

function Option({ children, value }: OptionProps) {
  const { setValue, value: _value } = useTabSelectContext();

  const isSelected = value === _value;

  return (
    <button
      className={isSelected ? style.option : style.notSelectedOption}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}

TabSelect.Option = Option;

export default TabSelect;
