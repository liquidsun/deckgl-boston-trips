import { KnownUrlParameters } from './data-interfaces';

function getUrlParam(name: string): string {
  let url = new URL(window.location.href);
  let param = url.searchParams.get(name);
  return param!;
};

function getNumber(numStr: string): number | null {
  if (numStr != null) {
    let numNum = Number(numStr);
    if (!Number.isNaN(numNum)) {
      return numNum;
    }
  }
  return null;
}

const PARAM_DATA_IDX = 'dataIdx';
const PARAM_LOOPTIME = 'loopTime';
const PARAM_TRAILLENGTH = 'trailLength';
const PARAM_HIGHLIGHTSOUTGOINGTRIPS = 'highlightOutgoingTrips';
const PARAM_HIGHLIGHTSINCOMINGTRIPS = 'highlightIncomingTrips'

function updateKeyInString(keysString: string, sParam: string, sValue: string): string {
  let sURLVariables = keysString.length > 0 ? keysString.split('&') : [];
  
  let parameterUpdated = false;
  for (let i = 0; i < sURLVariables.length; i++) {
      let sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          sURLVariables[i] = sParam+'='+(sValue||'');
          parameterUpdated = true;
      }
  }
  if (parameterUpdated === false) {
      sURLVariables.push(sParam+'='+(sValue||''));
  }

  return sURLVariables.join('&');
}

export default {
  getKnownUrlParameters(): KnownUrlParameters {
    let result: KnownUrlParameters = {
      dataSampleIdx: null,
      loopTime: null,
      trailLength: null,
      highlightedOutgoingTrips: null,
      highlightedIncomingTrips: null
    };

    // Convert day to dataUrlIdx
    let dataIdx = getNumber(getUrlParam(PARAM_DATA_IDX));
    if (dataIdx != null && dataIdx >= 0) {
      result.dataSampleIdx = dataIdx;
    }

    // Validate loopTime
    let loopTime = getNumber(getUrlParam(PARAM_LOOPTIME));
    if (loopTime != null && loopTime > 0 && loopTime < 999999) {
      result.loopTime = loopTime;
    }

    // Validate trailLength
    let trailLength = getNumber(getUrlParam(PARAM_TRAILLENGTH));
    if (trailLength != null && trailLength > 0 && trailLength < 999999) {
      result.trailLength = trailLength;
    }

    // Validate highlightNode
    let highlightOutgoingTrips = getUrlParam(PARAM_HIGHLIGHTSOUTGOINGTRIPS);
    if (highlightOutgoingTrips != null && highlightOutgoingTrips.length > 0) {
      result.highlightedOutgoingTrips = highlightOutgoingTrips.split(',');
    }

    // Validate highlightIncoming
    let highlightIncomingTrips = getUrlParam(PARAM_HIGHLIGHTSINCOMINGTRIPS);
    if (highlightIncomingTrips != null && highlightIncomingTrips.length > 0) {
      result.highlightedIncomingTrips = highlightIncomingTrips.split(',');
    }
    return result;
  },

  updateUrlParameters(params: KnownUrlParameters) {
    let newStateStr = decodeURIComponent(window.location.search.substring(1));
    if (params.dataSampleIdx != null) {
      newStateStr = updateKeyInString(newStateStr, PARAM_DATA_IDX, String(params.dataSampleIdx));
    }
    if (params.loopTime != null) {
      newStateStr = updateKeyInString(newStateStr, PARAM_LOOPTIME, String(params.loopTime));
    }
    if (params.trailLength != null) {
      newStateStr = updateKeyInString(newStateStr, PARAM_TRAILLENGTH, String(params.trailLength));
    }
    if (params.highlightedOutgoingTrips != null) {
      newStateStr = updateKeyInString(newStateStr, PARAM_HIGHLIGHTSOUTGOINGTRIPS, params.highlightedOutgoingTrips.join(','));
    }
    
    let queryFilters = "?" + newStateStr;
    window.history.pushState({}, "", queryFilters);
  }
}