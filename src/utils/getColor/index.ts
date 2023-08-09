export const getColor = (index: any) => {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ];
  return colors[index % colors.length];
};
