import { createSelector } from 'reselect';

const getDashboardData = (state) => state.dashboard.data;
const getTemperatureRange = (state) => state.temperature.temperatureRange;

export const getDashboardDataByFilter = createSelector(
  [ getDashboardData, getTemperatureRange ],
  (dashboardData, [min, max]) => dashboardData.filter(({id, temperature}) => {
		return temperature >= min && temperature <= max;
	})
)
