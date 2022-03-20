import $ from  'jquery'
const lru = 'PQCAPAAUC9WIH5AWX3KNANG63JMY8IEP5W';
// const lru =""

const getLastPrices = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${lru}`;
const getTotalSupply = `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${lru}`;
const tetherTransactionHistory = 'https://api.ethplorer.io/getTokenHistoryGrouped/0xdac17f958d2ee523a2206206994597c13d831e28?apiKey=freekey';
// const getLastBlock = `https://api.ethplorer.io/getLastBlock?apiKey=freekey`;
const getLastBlock = `https://api.ethplorer.io`;


// const getLastPrices = '';
// const getTotalSupply = '';
// const tetherTransactionHistory = '';
// const getLastBlock = '';

export const lastPrices = () => (
  $.ajax({
    method: 'GET',
    url: getLastPrices,
  })
);

export const totalSupply = () => (
  $.ajax({
    method: 'GET',
    url: getTotalSupply,
  })
);

// https://github.com/Blockchair/Blockchair.Support/blob/master/API_DOCUMENTATION_EN.md#link_002
export const blockChairStats = () => (
  $.ajax({
    method: 'GET',
    url: 'https://api.blockchair.com/ethereum/stats',
  })
);


export const tetherTxHistory30Day = () => (
  $.ajax({
    method: 'GET',
    url: tetherTransactionHistory,
  })
);

export const lastBlock = () => (
  $.ajax({
    method: 'GET',
    url: getLastBlock,
  })
);
