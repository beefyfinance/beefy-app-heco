import { pools } from '../../configure';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POOLS } from './constants';

export function loadPools({ networkId }) {
  return {
    type: LOAD_POOLS,
    networkId,
  };
}

export function useLoadPools() {
  const dispatch = useDispatch();

  const boundAction = useCallback(data => dispatch(loadPools(data)), [dispatch]);

  return {
    loadPools: boundAction,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case LOAD_POOLS:
      const tokens = {};
      pools[action.networkId].forEach(
        ({ token, tokenAddress, earnedToken, earnedTokenAddress }) => {
          tokens[token] = {
            tokenAddress: tokenAddress,
            tokenBalance: 0,
          };
          tokens[earnedToken] = {
            tokenAddress: earnedTokenAddress,
            tokenBalance: 0,
          };
        }
      );

      return {
        ...state,
        pools: pools[action.networkId],
        tokens,
      };
    default:
      return state;
  }
}
