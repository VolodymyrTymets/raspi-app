// import { FETCH_LOCALITY_STATISTIC, CLEAR_LOCALITIES_STATISTIC } from './constants';
//
// const DEFAULT = { keys: [], values: {} };
//
// const statistic = (state = DEFAULT, action) => {
//   switch (action.type) {
//     case FETCH_LOCALITY_STATISTIC:
//       return {
//         ...state,
//         keys: [...state.keys, action.localityId],
//         values: { ...state.values, [action.localityId]: action.statistics },
//       };
//     case CLEAR_LOCALITIES_STATISTIC:
//       return DEFAULT;
//     default:
//       return state;
//   }
// };
//
// export default statistic;
