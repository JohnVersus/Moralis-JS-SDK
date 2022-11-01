import { Core, Camelize, PaginatedOperation, toCamelCase, maybe } from '@moralisweb3/common-core';
import { EvmChain, EvmChainish, EvmAddress, EvmAddressish, EvmNative, EvmNftTrade } from '../../dataTypes';
import { EvmChainResolver } from '../../EvmChainResolver';
import { operations } from '../openapi';

type OperationId = 'getNFTTrades';

type PathParams = operations[OperationId]['parameters']['path'];
type QueryParams = operations[OperationId]['parameters']['query'];
type RequestParams = PathParams & QueryParams;

type SuccessResponse = operations[OperationId]['responses']['200']['content']['application/json'];

// Exports

export type GetNftTradesRequest = Camelize<Omit<RequestParams, 'chain' | 'address'>> & {
  chain?: EvmChainish;
  address: EvmAddressish;
};

export type GetNftTradesJSONRequest = ReturnType<typeof serializeRequest>;

export type GetNftTradesJSONResponse = SuccessResponse;

export type GetNftTradesResponse = ReturnType<typeof deserializeResponse>;

export const GetNftTradesOperation: PaginatedOperation<
  GetNftTradesRequest,
  GetNftTradesJSONRequest,
  GetNftTradesResponse,
  GetNftTradesJSONResponse['result']
> = {
  method: 'GET',
  name: 'getNFTTrades',
  id: 'getNFTTrades',
  groupName: 'nft',
  urlPathPattern: '/nft/{address}/trades',
  urlPathParamNames: ['address'],
  urlSearchParamNames: [
    'chain',
    'fromBlock',
    'toBlock',
    'fromDate',
    'toDate',
    'providerUrl',
    'marketplace',
    'cursor',
    'limit',
  ],
  firstPageIndex: 0,

  getRequestUrlParams,
  serializeRequest,
  deserializeRequest,
  deserializeResponse,
};

// Methods

function getRequestUrlParams(request: GetNftTradesRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    address: EvmAddress.create(request.address, core).lowercase,
    from_block: maybe(request.fromBlock, String),
    to_block: maybe(request.toBlock, String),
    from_date: request.fromDate,
    to_date: request.toDate,
    provider_url: request.providerUrl,
    marketplace: request.marketplace,
    cursor: request.cursor,
    limit: maybe(request.limit, String),
  };
}

function deserializeResponse(jsonResponse: GetNftTradesJSONResponse, request: GetNftTradesRequest, core: Core) {
  return (jsonResponse.result ?? []).map((trade) =>
    EvmNftTrade.create({
      ...toCamelCase(trade),
      chain: EvmChainResolver.resolve(request.chain, core),
      sellerAddress: EvmAddress.create(trade.seller_address, core),
      buyerAddress: EvmAddress.create(trade.buyer_address, core),
      marketplaceAddress: EvmAddress.create(trade.marketplace_address, core),
      tokenAddress: EvmAddress.create(trade.token_address as string, core),
      price: EvmNative.create(trade.price),
      blockTimestamp: new Date(trade.block_timestamp),
      tokenIds: trade.token_ids as string[],
    }),
  );
}

function serializeRequest(request: GetNftTradesRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    fromBlock: request.fromBlock,
    toBlock: request.toBlock,
    fromDate: request.fromDate,
    toDate: request.toDate,
    providerUrl: request.providerUrl,
    marketplace: request.marketplace,
    cursor: request.cursor,
    limit: request.limit,
    address: request.address.toString(),
  };
}

function deserializeRequest(jsonRequest: GetNftTradesJSONRequest, core: Core): GetNftTradesRequest {
  return {
    chain: EvmChain.create(jsonRequest.chain, core),
    fromBlock: jsonRequest.fromBlock,
    toBlock: jsonRequest.toBlock,
    fromDate: jsonRequest.fromDate,
    toDate: jsonRequest.toDate,
    providerUrl: jsonRequest.providerUrl,
    marketplace: jsonRequest.marketplace,
    cursor: jsonRequest.cursor,
    limit: jsonRequest.limit,
    address: EvmAddress.create(jsonRequest.address, core),
  };
}
