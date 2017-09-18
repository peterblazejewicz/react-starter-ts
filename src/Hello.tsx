import React from 'react';

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

// helpers

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');

const Hello: React.SFC<Props> = ({ name, enthusiasmLevel = 1 }) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

export default Hello;
