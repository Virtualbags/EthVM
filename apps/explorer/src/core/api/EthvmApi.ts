import { Block, PendingTx, SimpleBlock, SimpleTx, Tx, Uncle } from '@app/core/models'
import {
  AddressBalance,
  AddressMetadata,
  BlockMetrics,
  Contract,
  ProcessingMetadata,
  Quote,
  Statistic,
  Token,
  TokenExchangeRate,
  TokenTransfer
} from 'ethvm-common'
import { Observable } from 'apollo-client/util/Observable'

export interface EthvmApi {
  // Address
  getAddressBalance(address: string): Promise<AddressBalance | null>
  getAddressMetadata(address: string): Promise<AddressMetadata | null>
  getAddressAllTokensOwned(address: string): Promise<Token[]>
  getAddressAmountTokensOwned(address: string): Promise<number>
  getAddressTokenTransfers(address: string, limit: number, page: number): Promise<TokenTransfer[]>
  getAddressTokenTransfersByHolder(address: string, holder: string, filter: string, limit: number, page: number): Promise<TokenTransfer[]>

  // Blocks
  getBlock(hash: string): Promise<Block | null>
  getBlocks(limit: number, page: number, fromBlock: number): Promise<SimpleBlock[]>
  getBlockByNumber(no: number): Promise<Block | null>
  getBlocksMinedOfAddress(address: string, limit: number, page: number): Promise<SimpleBlock[]>
  getTotalNumberOfBlocks(): Promise<number>

  // Block Metrics
  getBlockMetric(hash: string): Promise<BlockMetrics | null>
  getBlockMetrics(limit: number, page: number): Promise<BlockMetrics[]>

  // Contracts
  getContract(address: string): Promise<Contract | null>
  getContractsCreatedBy(address: string, limit: number, page: number): Promise<Contract[]>

  // Exchanges
  getExchangeRateQuote(symbol: string, to: string): Promise<Quote>
  getTokenExchangeRates(filter: string, limit: number, page: number): Promise<TokenExchangeRate[]>
  getTotalNumberOfTokenExchangeRates(): Promise<number>
  getTokenExchangeRateBySymbol(symbol: string): Promise<TokenExchangeRate | null>
  getTokenExchangeRateByAddress(address: string): Promise<TokenExchangeRate | null>
  getTokenHistory(address: string): Promise<any>
  getTopTokenHolders(address: string): Promise<any>
  getHolderDetails(address: string, holderAddress: string): Promise<any>
  getHolderTransfers(address: string, holderAddress: string): Promise<any>

  // Pending Txs
  getPendingTxs(limit: number, page: number): Promise<PendingTx[]>
  getPendingTxsOfAddress(address: string, filter: string, limit: number, page: number): Promise<PendingTx[]>
  getNumberOfPendingTxsOfAddress(address: string): Promise<number>
  getTotalNumberOfPendingTxs(): Promise<number>

  // Txs
  getTx(hash: string): Promise<Tx | null>
  getTxs(limit: number, order: string, fromBlock: number): Promise<SimpleTx[]>
  getTxsOfAddress(hash: string, filter: string, limit: number, page: number): Promise<SimpleTx[]>
  getTotalNumberOfTxs(): Promise<number>

  // Uncles
  getUncle(hash: string): Promise<Uncle | null>
  getUncles(limit: number, page: number, fromUncle: number): Promise<Uncle[]>
  getTotalNumberOfUncles(): Promise<number>

  // Statistics
  getAverageBlockTimeStats(duration: string): Promise<Statistic[]>
  getAverageDifficultyStats(duration: string): Promise<Statistic[]>
  getAverageGasLimitStats(duration: string): Promise<Statistic[]>
  getAverageGasPriceStats(duration: string): Promise<Statistic[]>
  getAverageHashRateStats(duration: string): Promise<Statistic[]>
  getAverageMinerRewardsStats(duration: string): Promise<Statistic[]>
  getAverageTxFeeStats(duration: string): Promise<Statistic[]>
  getFailedTxStats(duration: string): Promise<Statistic[]>
  getSuccessfulTxStats(duration: string): Promise<Statistic[]>

  // Search
  search(hash: string): Promise<any>

  // Processing Metadata
  getProcessingMetadata(id: string): Promise<ProcessingMetadata | null>

  // Subscriptions
  subscribe<T>(query): Observable<T>
}
