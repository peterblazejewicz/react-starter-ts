import React from 'react';
import './Hello.css';
import { IncrementEnthusiasm, DecrementEnthusiasm } from '../actions/index';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => IncrementEnthusiasm;
  onDecrement?: () => DecrementEnthusiasm;
}

// helpers

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

const Hello: React.SFC<Props> = ({
  name,
  enthusiasmLevel = 1,
  onDecrement = () => undefined,
  onIncrement = () => undefined,
}) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Hello;
