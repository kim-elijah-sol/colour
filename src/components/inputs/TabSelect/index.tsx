import classNames from 'classnames';
import { Children, PropsWithChildren, ReactElement } from 'react';
import * as style from './style.css';
import { TabSelectContext, useTabSelectContext } from './TabSelectContext';

type Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;
};

function TabSelect({ className, value, onChange, children, ...props }: Props) {
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
          className={style.indicator}
          style={{
            left: `${indicatorLeftStep * currentSelectedOptionIndex}%`,
            width: `${indicatorLeftStep}%`,
          }}
        ></div>
        {children}
      </div>
    </TabSelectContext.Provider>
  );
}

type OptionProps = PropsWithChildren<{
  value: string;
}>;

function Option({ children, value }: OptionProps) {
  const { setValue } = useTabSelectContext();

  return (
    <button className={style.option} onClick={() => setValue(value)}>
      {children}
    </button>
  );
}

TabSelect.Option = Option;

export default TabSelect;
