function getCurrentWeekData(dataArray) {
  // Get the current date
  const currentDate = new Date();

  // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
  const currentDayOfWeek = currentDate.getDay() + 1;

  // Calculate the start of the week (Sunday)
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);

  // Calculate the end of the week (Saturday)
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + (6 - currentDayOfWeek));

  // Filter the data array to get only the items within the current week
  const filteredArray = dataArray.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= startOfWeek && itemDate <= endOfWeek;
  });
  return {
    data: filteredArray,
    averageWeight: (
      filteredArray.reduce((acc, item) => acc + item.value, 0) /
      filteredArray.length
    ).toFixed(1)
  };
}

export { getCurrentWeekData };
