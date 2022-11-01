import { Core, Camelize, PaginatedOperation, toCamelCase, maybe } from '@moralisweb3/common-core';
import { EvmChain, EvmChainish, EvmAddress, EvmAddressish, EvmNftTransfer, EvmNative } from '../../dataTypes';
import { EvmChainResolver } from '../../EvmChainResolver';
import { operations } from '../openapi';

type OperationId = 'getNFTContractTransfers';

type PathParams = operations[OperationId]['parameters']['path'];
type QueryParams = operations[OperationId]['parameters']['query'];
type RequestParams = PathParams & QueryParams;

type SuccessResponse = operations[OperationId]['responses']['200']['content']['application/json'];

// Exports

export type GetNftContractTransfersRequest = Camelize<Omit<RequestParams, 'chain' | 'address'>> & {
  chain?: EvmChainish;
  address: EvmAddressish;
};

export type GetNftContractTransfersJSONRequest = ReturnType<typeof serializeRequest>;

export type GetNftContractTransfersJSONResponse = SuccessResponse;

export type GetNftContractTransfersResponse = ReturnType<typeof deserializeResponse>;

export const GetNftContractTransfersOperation: PaginatedOperation<
  GetNftContractTransfersRequest,
  GetNftContractTransfersJSONRequest,
  GetNftContractTransfersResponse,
  GetNftContractTransfersJSONResponse['result']
> = {
  method: 'GET',
  name: 'getNFTContractTransfers',
  id: 'getNFTContractTransfers',
  groupName: 'nft',
  urlPathPattern: '/nft/{address}/transfers',
  urlPathParamNames: ['address'],
  urlSearchParamNames: ['chain', 'format', 'limit', 'cursor'],
  firstPageIndex: 0,

  getRequestUrlParams,
  serializeRequest,
  deserializeRequest,
  deserializeResponse,
};

// Methods

function getRequestUrlParams(request: GetNftContractTransfersRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    address: EvmAddress.create(request.address, core).lowercase,
    format: request.format,
    limit: maybe(request.limit, String),
    cursor: request.cursor,
  };
}

function deserializeResponse(
  jsonResponse: GetNftContractTransfersJSONResponse,
  request: GetNftContractTransfersRequest,
  core: Core,
) {
  return (jsonResponse.result ?? []).map((transfer) =>
    EvmNftTransfer.create({
      ...toCamelCase(transfer),
      chain: EvmChainResolver.resolve(request.chain, core),
      tokenAddress: EvmAddress.create(transfer.to_address),
      toAddress: EvmAddress.create(transfer.to_address),
      operator: transfer.operator ? EvmAddress.create(transfer.operator) : null,
      fromAddress: transfer.from_address ? EvmAddress.create(transfer.from_address) : null,
      value: transfer.value ? EvmNative.create(transfer.value) : null,
      blockTimestamp: new Date(transfer.block_timestamp),
    }),
  );
}

function serializeRequest(request: GetNftContractTransfersRequest, core: Core) {
  return {
    chain: EvmChainResolver.resolve(request.chain, core).apiHex,
    format: request.format,
    limit: request.limit,
    cursor: request.cursor,
    address: request.address.toString(),
  };
}

function deserializeRequest(
  jsonRequest: GetNftContractTransfersJSONRequest,
  core: Core,
): GetNftContractTransfersRequest {
  return {
    chain: EvmChain.create(jsonRequest.chain, core),
    format: jsonRequest.format,
    limit: jsonRequest.limit,
    cursor: jsonRequest.cursor,
    address: EvmAddress.create(jsonRequest.address, core),
  };
}
