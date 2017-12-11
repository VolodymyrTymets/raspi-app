// import _ from 'lodash';
// import { FETCH_LOCALITY_STATISTIC, CLEAR_LOCALITIES_STATISTIC } from './constants';
// import { get, APIAddresses, handleFetch } from '../../../../utils/api';
//
// const fetchStatisticsForLocality = (localityId, isLast) => async dispatch => {
//   get(`${APIAddresses.LOCALITIES}/statistic/${localityId}`,
//     dispatch, FETCH_LOCALITY_STATISTIC, isLast)
//     .then(response =>
//       dispatch({
//         localityId,
//         type: FETCH_LOCALITY_STATISTIC,
//         statistics: _.get(response, 'data.statistics'),
//       })
//     )
//     .catch(handleFetch(dispatch));
// };
//
// const clearLocationsStatistics = () => dispatch =>
//   dispatch({
//     type: CLEAR_LOCALITIES_STATISTIC,
//   });
//
// export { fetchStatisticsForLocality, clearLocationsStatistics };
