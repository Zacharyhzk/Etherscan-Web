import { combineReducers } from 'redux';

import blocks from './blocks_reducer';
import blockHashes from './block_hashes_reducer';
import transactions from './transactions_reducer';
import totalSupply from './total_supply_reducer';
import prices from './prices_reducer';
import transactionStats from './transaction_stats_reducer';
import tetherTXHistory from './tether_tx_history_reducer.js';
import addressTypeTags from './address_type_tags_reducer.js'
import lastBlock from './last_block_reducer.js'

export default combineReducers({
  blocks,
  blockHashes,
  transactions,
  prices,
  totalSupply,
  transactionStats,
  tetherTXHistory,
  addressTypeTags,
  lastBlock
});
