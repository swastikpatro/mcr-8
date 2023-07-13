export const lowerizeAndIncludes = (mainText, query) => {
  return mainText.toLowerCase().includes(query.toLowerCase());
};

export const filterByType = activeType => {
  return ({ eventType }) => eventType === activeType;
};

export const findById = idToSearch => {
  return ({ id }) => id === idToSearch;
};

export const getDateAndTime = givenDate => {
  const date = new Date(givenDate);

  const formattedDate = date.toLocaleString('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  return formattedDate;
};
