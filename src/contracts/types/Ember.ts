/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type LendingStruct = {
  lenderAddress: string;
  adapter: string;
  dailyRentPrice: BigNumberish;
  stakedTill: BigNumberish;
  tokenId: BigNumberish;
};

export type LendingStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  lenderAddress: string;
  adapter: string;
  dailyRentPrice: BigNumber;
  stakedTill: BigNumber;
  tokenId: BigNumber;
};

export type RentingStruct = {
  renterAddress: string;
  nft: string;
  tokenId: BigNumberish;
  rentedTill: BigNumberish;
  rentedAt: BigNumberish;
  rentDuration: BigNumberish;
};

export type RentingStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  renterAddress: string;
  nft: string;
  tokenId: BigNumber;
  rentedTill: BigNumber;
  rentedAt: BigNumber;
  rentDuration: BigNumber;
};

export interface EmberInterface extends utils.Interface {
  functions: {
    "getDailyRentCharges(uint256)": FunctionFragment;
    "getNFTAdapter(uint256)": FunctionFragment;
    "getNFTtokenID(uint256)": FunctionFragment;
    "getRentedTill(uint256)": FunctionFragment;
    "getStakedTill(uint256)": FunctionFragment;
    "lend(address,address,uint256,uint256,uint256)": FunctionFragment;
    "lendingRenting(uint256)": FunctionFragment;
    "rent(address,uint256,uint256,uint256)": FunctionFragment;
    "stopLending(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getDailyRentCharges",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTAdapter",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTtokenID",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRentedTill",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakedTill",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lend",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lendingRenting",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rent",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stopLending",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDailyRentCharges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTtokenID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRentedTill",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakedTill",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lendingRenting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stopLending",
    data: BytesLike
  ): Result;

  events: {
    "LendingStopped(address,uint256,address)": EventFragment;
    "Lent(address,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "Rented(address,address,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LendingStopped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Lent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Rented"): EventFragment;
}

export type LendingStoppedEvent = TypedEvent<
  [string, BigNumber, string],
  { msgSender: string; stoppedAt: BigNumber; nft: string }
>;

export type LendingStoppedEventFilter = TypedEventFilter<LendingStoppedEvent>;

export type LentEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    nftAddress: string;
    lenderAddress: string;
    tokenId: BigNumber;
    lendingId: BigNumber;
    dailyRentPrice: BigNumber;
    stakedTill: BigNumber;
    lentAt: BigNumber;
  }
>;

export type LentEventFilter = TypedEventFilter<LentEvent>;

export type RentedEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  {
    renterAddress: string;
    lenderAddress: string;
    nft: string;
    tokenId: BigNumber;
    lendingId: BigNumber;
    rentDuration: BigNumber;
    amountPaid: BigNumber;
    rentedAt: BigNumber;
  }
>;

export type RentedEventFilter = TypedEventFilter<RentedEvent>;

export interface Ember extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EmberInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getDailyRentCharges(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNFTAdapter(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNFTtokenID(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getRentedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStakedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lend(
      _nft: string,
      _adapter: string,
      _tokenId: BigNumberish,
      _maxRentDuration: BigNumberish,
      _perDayRentCharges: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lendingRenting(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [LendingStructOutput, RentingStructOutput] & {
        lending: LendingStructOutput;
        renting: RentingStructOutput;
      }
    >;

    rent(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      _rentDuration: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopLending(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getDailyRentCharges(
    _lendingId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNFTAdapter(
    _lendingId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNFTtokenID(
    _lendingId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  getRentedTill(
    _lendingId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStakedTill(
    _lendingId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lend(
    _nft: string,
    _adapter: string,
    _tokenId: BigNumberish,
    _maxRentDuration: BigNumberish,
    _perDayRentCharges: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lendingRenting(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [LendingStructOutput, RentingStructOutput] & {
      lending: LendingStructOutput;
      renting: RentingStructOutput;
    }
  >;

  rent(
    _nft: string,
    _tokenId: BigNumberish,
    _lendingId: BigNumberish,
    _rentDuration: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopLending(
    _nft: string,
    _tokenId: BigNumberish,
    _lendingId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getDailyRentCharges(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNFTAdapter(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNFTtokenID(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    getRentedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lend(
      _nft: string,
      _adapter: string,
      _tokenId: BigNumberish,
      _maxRentDuration: BigNumberish,
      _perDayRentCharges: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lendingRenting(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [LendingStructOutput, RentingStructOutput] & {
        lending: LendingStructOutput;
        renting: RentingStructOutput;
      }
    >;

    rent(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      _rentDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stopLending(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LendingStopped(address,uint256,address)"(
      msgSender?: null,
      stoppedAt?: null,
      nft?: null
    ): LendingStoppedEventFilter;
    LendingStopped(
      msgSender?: null,
      stoppedAt?: null,
      nft?: null
    ): LendingStoppedEventFilter;

    "Lent(address,address,uint256,uint256,uint256,uint256,uint256)"(
      nftAddress?: string | null,
      lenderAddress?: string | null,
      tokenId?: null,
      lendingId?: null,
      dailyRentPrice?: null,
      stakedTill?: null,
      lentAt?: null
    ): LentEventFilter;
    Lent(
      nftAddress?: string | null,
      lenderAddress?: string | null,
      tokenId?: null,
      lendingId?: null,
      dailyRentPrice?: null,
      stakedTill?: null,
      lentAt?: null
    ): LentEventFilter;

    "Rented(address,address,address,uint256,uint256,uint256,uint256,uint256)"(
      renterAddress?: string | null,
      lenderAddress?: string | null,
      nft?: string | null,
      tokenId?: null,
      lendingId?: null,
      rentDuration?: null,
      amountPaid?: null,
      rentedAt?: null
    ): RentedEventFilter;
    Rented(
      renterAddress?: string | null,
      lenderAddress?: string | null,
      nft?: string | null,
      tokenId?: null,
      lendingId?: null,
      rentDuration?: null,
      amountPaid?: null,
      rentedAt?: null
    ): RentedEventFilter;
  };

  estimateGas: {
    getDailyRentCharges(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNFTAdapter(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNFTtokenID(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRentedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lend(
      _nft: string,
      _adapter: string,
      _tokenId: BigNumberish,
      _maxRentDuration: BigNumberish,
      _perDayRentCharges: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lendingRenting(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rent(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      _rentDuration: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopLending(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDailyRentCharges(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTAdapter(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTtokenID(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRentedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakedTill(
      _lendingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lend(
      _nft: string,
      _adapter: string,
      _tokenId: BigNumberish,
      _maxRentDuration: BigNumberish,
      _perDayRentCharges: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lendingRenting(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rent(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      _rentDuration: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopLending(
      _nft: string,
      _tokenId: BigNumberish,
      _lendingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
