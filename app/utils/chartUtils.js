const getChartData = (rawData) => {
  function groupDataByWeek(data) {
    const groupedData = [];
    let currentWeek = 1;
    let weekData = [];

    data.forEach((item) => {
      const date = new Date(item.date);
      const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

      // Start a new week if the current week array is not empty and it's a Sunday
      if (dayOfWeek === 0 && weekData.length > 0) {
        groupedData.push({ week: currentWeek, data: weekData });
        currentWeek++;
        weekData = [];
      }

      weekData.push(item);
    });

    // Push the last week if it has data
    if (weekData.length > 0) {
      groupedData.push({ week: currentWeek, data: weekData });
    }

    return groupedData;
  }

  // Step 1: Sort the rawData by date
  const sortedData = rawData
    .map((log) => ({
      date: new Date(log.date),
      value: parseFloat(log.value.toFixed(1))
    }))
    .sort((a, b) => a.date - b.date);

  // Step 2: Create dailySeriesData as [timestamp, value] pairs
  const dailySeriesData = sortedData.map((log) => [
    log.date.getTime(),
    log.value
  ]);

  const weeklyData = groupDataByWeek(sortedData);

  const weeklySeriesData = weeklyData.map((week) => {
    const weekAverage =
      week.data.reduce((acc, log) => acc + log.value, 0) / week.data.length;

    return [week.data.at(-1).date.getTime(), weekAverage.toFixed(1)];
  });
  weeklySeriesData.unshift([sortedData[0].date.getTime(), sortedData[0].value]);

  // Step 5: Prepare the series data for the chart
  const series = [
    {
      name: "Daily Weights",
      data: dailySeriesData,
      type: "line"
    },
    {
      name: "Weekly Averages",
      data: weeklySeriesData,
      type: "line"
    }
  ];

  return series;
};

export { getChartData };
