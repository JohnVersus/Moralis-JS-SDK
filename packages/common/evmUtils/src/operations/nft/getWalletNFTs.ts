import { Core, Camelize, PaginatedOperation, dateInputToDate, maybe } from '@moralisweb3/common-core';
import { EvmChain, EvmChainish, EvmAddress, EvmAddressish, EvmNft } from '../../dataTypes';
import { EvmChainResolver } from '../../EvmChainResolver';
import { operations } from '../openapi';

type OperationId = 'getWalletNFTs';

type PathParams = operations[OperationId]['parameters']['path'];
type QueryParams = operations[OperationId]['parameters']['query'];
type RequestParams = PathParams & QueryParams;

type SuccessResponse = operations[OperationId]['responses']['200']['content']['application/json'];

// Exports

export type GetWalletNfTsRequest = Camelize<Omit<RequestParams, 'chain' | 'token_addresses' | 'address'>> & {
  chain?: EvmChainish;
  tokenAddresses?: EvmAddressish[];
  address: EvmAddressish;
};

export type GetWalletNfTsJSONRequest = ReturnType<typeof serializeRequest>;

export type GetWalletNfTsJSONResponse = SuccessResponse;

export type GetWalletNfTsResponse = ReturnType<typeof deserializeResponse>;

export const GetWalletNfTsOperation: PaginatedOperation<
  GetWalletNfTsRequest,
  GetWalletNfTsJSONRequest,
  GetWalletNfTsResponse,
  GetWalletNfTsJSONResponse['result']
> = {
  method: 'GET',
  name: 'getWalletNFTs',
  id: 'getWalletNFTs',
  groupName: 'nft',
  urlPathPattern: '/{address}/nft',
  urlPathParamNames: ['address'],
  urlSearchParamNames: ['chain', 'format', 'limit', 'tokenAddresses', 'cursor'],

  getRequestUrlParams,
  serializeRequest,
  deserializeRequest,
  deserializeResponse,
};

// Methods

function getRequestUrlParams(request: GetWalletNfTsRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    address: EvmAddress.create(request.address, core).lowercase,
    format: request.format,
    limit: maybe(request.limit, String),
    // @ts-ignore TODO: check if we need to do a conversion
    token_addresses: request.tokenAddresses?.map((address) => EvmAddress.create(address, core).lowercase) as string,
    cursor: request.cursor,
  };
}

function deserializeResponse(jsonResponse: GetWalletNfTsJSONResponse, request: GetWalletNfTsRequest, core: Core) {
  (jsonResponse.result ?? []).map((nft) =>
    EvmNft.create({
      chain: EvmChainResolver.resolve(request.chain, core),
      contractType: nft.contract_type,
      tokenAddress: nft.token_address,
      tokenId: nft.token_id,
      tokenUri: nft.token_uri,
      metadata: nft.metadata,
      name: nft.name,
      symbol: nft.symbol,
      amount: nft.amount ? parseInt(nft.amount, 10) : undefined,
      blockNumberMinted: nft.block_number_minted,
      blockNumber: nft.block_number,
      ownerOf: EvmAddress.create(nft.owner_of, core),
      tokenHash: nft.token_hash,
      lastMetadataSync: dateInputToDate(nft.last_metadata_sync),
      lastTokenUriSync: dateInputToDate(nft.last_token_uri_sync),
    }),
  );
}

// TODO: fix typings of EvmAddress /EvmAddressish in serialize and deserialize
function serializeRequest(request: GetWalletNfTsRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    format: request.format,
    limit: request.limit,
    // @ts-ignore
    tokenAddresses: request.tokenAddresses?.map((address) => address.lowercase),
    cursor: request.cursor,
    // @ts-ignore
    address: request.address.lowercase,
  };
}

function deserializeRequest(jsonRequest: GetWalletNfTsJSONRequest, core: Core): GetWalletNfTsRequest {
  return {
    chain: EvmChain.create(jsonRequest.chain, core),
    format: jsonRequest.format,
    limit: jsonRequest.limit,
    tokenAddresses: maybe(jsonRequest.tokenAddresses, (addresses) =>
      addresses.map((address) => EvmAddress.create(address, core)),
    ),
    cursor: jsonRequest.cursor,
    address: EvmAddress.create(jsonRequest.address, core),
  };
}
