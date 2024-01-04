const task = 'I prefer const when I can.';

export const taskFirst = () =>  return task;
};

export const getLast = () => {
  return ' is okay';
};


let combination = 'But sometimes let';

export const taskNext = () => {
  combination += getLast();
  return combination;
};
