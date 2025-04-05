import React from 'react';

export function enterToBlur(
  callbackWhenNotEnter?: React.KeyboardEventHandler<HTMLInputElement>
) {
  return function (e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      return;
    }

    callbackWhenNotEnter?.(e);
  };
}
