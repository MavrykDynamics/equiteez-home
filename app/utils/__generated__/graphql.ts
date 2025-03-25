/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  float8: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  timetz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "dipdup_contract" */
export type Dipdup_Contract = {
  __typename?: 'dipdup_contract';
  address?: Maybe<Scalars['String']['output']>;
  code_hash?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  kind: Scalars['String']['output'];
  name: Scalars['String']['output'];
  typename?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "dipdup_contract" */
export type Dipdup_Contract_Aggregate = {
  __typename?: 'dipdup_contract_aggregate';
  aggregate?: Maybe<Dipdup_Contract_Aggregate_Fields>;
  nodes: Array<Dipdup_Contract>;
};

/** aggregate fields of "dipdup_contract" */
export type Dipdup_Contract_Aggregate_Fields = {
  __typename?: 'dipdup_contract_aggregate_fields';
  avg?: Maybe<Dipdup_Contract_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Contract_Max_Fields>;
  min?: Maybe<Dipdup_Contract_Min_Fields>;
  stddev?: Maybe<Dipdup_Contract_Stddev_Fields>;
  stddev_pop?: Maybe<Dipdup_Contract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dipdup_Contract_Stddev_Samp_Fields>;
  sum?: Maybe<Dipdup_Contract_Sum_Fields>;
  var_pop?: Maybe<Dipdup_Contract_Var_Pop_Fields>;
  var_samp?: Maybe<Dipdup_Contract_Var_Samp_Fields>;
  variance?: Maybe<Dipdup_Contract_Variance_Fields>;
};


/** aggregate fields of "dipdup_contract" */
export type Dipdup_Contract_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dipdup_Contract_Avg_Fields = {
  __typename?: 'dipdup_contract_avg_fields';
  code_hash?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dipdup_contract". All fields are combined with a logical 'AND'. */
export type Dipdup_Contract_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Contract_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Contract_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Contract_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  code_hash?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  kind?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  typename?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Contract_Max_Fields = {
  __typename?: 'dipdup_contract_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  code_hash?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  typename?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** columns and relationships of "dipdup_contract_metadata" */
export type Dipdup_Contract_Metadata = {
  __typename?: 'dipdup_contract_metadata';
  contract: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  network: Scalars['String']['output'];
  update_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "dipdup_contract_metadata" */
export type Dipdup_Contract_MetadataMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "dipdup_contract_metadata" */
export type Dipdup_Contract_Metadata_Aggregate = {
  __typename?: 'dipdup_contract_metadata_aggregate';
  aggregate?: Maybe<Dipdup_Contract_Metadata_Aggregate_Fields>;
  nodes: Array<Dipdup_Contract_Metadata>;
};

/** aggregate fields of "dipdup_contract_metadata" */
export type Dipdup_Contract_Metadata_Aggregate_Fields = {
  __typename?: 'dipdup_contract_metadata_aggregate_fields';
  avg?: Maybe<Dipdup_Contract_Metadata_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Contract_Metadata_Max_Fields>;
  min?: Maybe<Dipdup_Contract_Metadata_Min_Fields>;
  stddev?: Maybe<Dipdup_Contract_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Dipdup_Contract_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dipdup_Contract_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Dipdup_Contract_Metadata_Sum_Fields>;
  var_pop?: Maybe<Dipdup_Contract_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Dipdup_Contract_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Dipdup_Contract_Metadata_Variance_Fields>;
};


/** aggregate fields of "dipdup_contract_metadata" */
export type Dipdup_Contract_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Contract_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dipdup_Contract_Metadata_Avg_Fields = {
  __typename?: 'dipdup_contract_metadata_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dipdup_contract_metadata". All fields are combined with a logical 'AND'. */
export type Dipdup_Contract_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Contract_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Contract_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Contract_Metadata_Bool_Exp>>;
  contract?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  network?: InputMaybe<String_Comparison_Exp>;
  update_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Contract_Metadata_Max_Fields = {
  __typename?: 'dipdup_contract_metadata_max_fields';
  contract?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  update_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Contract_Metadata_Min_Fields = {
  __typename?: 'dipdup_contract_metadata_min_fields';
  contract?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  update_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_contract_metadata". */
export type Dipdup_Contract_Metadata_Order_By = {
  contract?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
  update_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_contract_metadata" */
export enum Dipdup_Contract_Metadata_Select_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Network = 'network',
  /** column name */
  UpdateId = 'update_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Dipdup_Contract_Metadata_Stddev_Fields = {
  __typename?: 'dipdup_contract_metadata_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dipdup_Contract_Metadata_Stddev_Pop_Fields = {
  __typename?: 'dipdup_contract_metadata_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dipdup_Contract_Metadata_Stddev_Samp_Fields = {
  __typename?: 'dipdup_contract_metadata_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dipdup_contract_metadata" */
export type Dipdup_Contract_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Contract_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Contract_Metadata_Stream_Cursor_Value_Input = {
  contract?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  update_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dipdup_Contract_Metadata_Sum_Fields = {
  __typename?: 'dipdup_contract_metadata_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  update_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Dipdup_Contract_Metadata_Var_Pop_Fields = {
  __typename?: 'dipdup_contract_metadata_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dipdup_Contract_Metadata_Var_Samp_Fields = {
  __typename?: 'dipdup_contract_metadata_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dipdup_Contract_Metadata_Variance_Fields = {
  __typename?: 'dipdup_contract_metadata_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Contract_Min_Fields = {
  __typename?: 'dipdup_contract_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  code_hash?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  typename?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_contract". */
export type Dipdup_Contract_Order_By = {
  address?: InputMaybe<Order_By>;
  code_hash?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  kind?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  typename?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_contract" */
export enum Dipdup_Contract_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CodeHash = 'code_hash',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Kind = 'kind',
  /** column name */
  Name = 'name',
  /** column name */
  Typename = 'typename',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Dipdup_Contract_Stddev_Fields = {
  __typename?: 'dipdup_contract_stddev_fields';
  code_hash?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dipdup_Contract_Stddev_Pop_Fields = {
  __typename?: 'dipdup_contract_stddev_pop_fields';
  code_hash?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dipdup_Contract_Stddev_Samp_Fields = {
  __typename?: 'dipdup_contract_stddev_samp_fields';
  code_hash?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dipdup_contract" */
export type Dipdup_Contract_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Contract_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Contract_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  code_hash?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  kind?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  typename?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dipdup_Contract_Sum_Fields = {
  __typename?: 'dipdup_contract_sum_fields';
  code_hash?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Dipdup_Contract_Var_Pop_Fields = {
  __typename?: 'dipdup_contract_var_pop_fields';
  code_hash?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dipdup_Contract_Var_Samp_Fields = {
  __typename?: 'dipdup_contract_var_samp_fields';
  code_hash?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dipdup_Contract_Variance_Fields = {
  __typename?: 'dipdup_contract_variance_fields';
  code_hash?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "dipdup_head" */
export type Dipdup_Head = {
  __typename?: 'dipdup_head';
  created_at: Scalars['timestamptz']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  timestamp: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "dipdup_head" */
export type Dipdup_Head_Aggregate = {
  __typename?: 'dipdup_head_aggregate';
  aggregate?: Maybe<Dipdup_Head_Aggregate_Fields>;
  nodes: Array<Dipdup_Head>;
};

/** aggregate fields of "dipdup_head" */
export type Dipdup_Head_Aggregate_Fields = {
  __typename?: 'dipdup_head_aggregate_fields';
  avg?: Maybe<Dipdup_Head_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Head_Max_Fields>;
  min?: Maybe<Dipdup_Head_Min_Fields>;
  stddev?: Maybe<Dipdup_Head_Stddev_Fields>;
  stddev_pop?: Maybe<Dipdup_Head_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dipdup_Head_Stddev_Samp_Fields>;
  sum?: Maybe<Dipdup_Head_Sum_Fields>;
  var_pop?: Maybe<Dipdup_Head_Var_Pop_Fields>;
  var_samp?: Maybe<Dipdup_Head_Var_Samp_Fields>;
  variance?: Maybe<Dipdup_Head_Variance_Fields>;
};


/** aggregate fields of "dipdup_head" */
export type Dipdup_Head_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Head_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dipdup_Head_Avg_Fields = {
  __typename?: 'dipdup_head_avg_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dipdup_head". All fields are combined with a logical 'AND'. */
export type Dipdup_Head_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Head_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Head_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Head_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Head_Max_Fields = {
  __typename?: 'dipdup_head_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Head_Min_Fields = {
  __typename?: 'dipdup_head_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_head". */
export type Dipdup_Head_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_head" */
export enum Dipdup_Head_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Dipdup_Head_Stddev_Fields = {
  __typename?: 'dipdup_head_stddev_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dipdup_Head_Stddev_Pop_Fields = {
  __typename?: 'dipdup_head_stddev_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dipdup_Head_Stddev_Samp_Fields = {
  __typename?: 'dipdup_head_stddev_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dipdup_head" */
export type Dipdup_Head_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Head_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Head_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dipdup_Head_Sum_Fields = {
  __typename?: 'dipdup_head_sum_fields';
  level?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Dipdup_Head_Var_Pop_Fields = {
  __typename?: 'dipdup_head_var_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dipdup_Head_Var_Samp_Fields = {
  __typename?: 'dipdup_head_var_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dipdup_Head_Variance_Fields = {
  __typename?: 'dipdup_head_variance_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "dipdup_index" */
export type Dipdup_Index = {
  __typename?: 'dipdup_index';
  config_hash?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  template?: Maybe<Scalars['String']['output']>;
  template_values?: Maybe<Scalars['jsonb']['output']>;
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "dipdup_index" */
export type Dipdup_IndexTemplate_ValuesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "dipdup_index" */
export type Dipdup_Index_Aggregate = {
  __typename?: 'dipdup_index_aggregate';
  aggregate?: Maybe<Dipdup_Index_Aggregate_Fields>;
  nodes: Array<Dipdup_Index>;
};

/** aggregate fields of "dipdup_index" */
export type Dipdup_Index_Aggregate_Fields = {
  __typename?: 'dipdup_index_aggregate_fields';
  avg?: Maybe<Dipdup_Index_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Index_Max_Fields>;
  min?: Maybe<Dipdup_Index_Min_Fields>;
  stddev?: Maybe<Dipdup_Index_Stddev_Fields>;
  stddev_pop?: Maybe<Dipdup_Index_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dipdup_Index_Stddev_Samp_Fields>;
  sum?: Maybe<Dipdup_Index_Sum_Fields>;
  var_pop?: Maybe<Dipdup_Index_Var_Pop_Fields>;
  var_samp?: Maybe<Dipdup_Index_Var_Samp_Fields>;
  variance?: Maybe<Dipdup_Index_Variance_Fields>;
};


/** aggregate fields of "dipdup_index" */
export type Dipdup_Index_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Index_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dipdup_Index_Avg_Fields = {
  __typename?: 'dipdup_index_avg_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dipdup_index". All fields are combined with a logical 'AND'. */
export type Dipdup_Index_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Index_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Index_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Index_Bool_Exp>>;
  config_hash?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  template?: InputMaybe<String_Comparison_Exp>;
  template_values?: InputMaybe<Jsonb_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Index_Max_Fields = {
  __typename?: 'dipdup_index_max_fields';
  config_hash?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Index_Min_Fields = {
  __typename?: 'dipdup_index_min_fields';
  config_hash?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_index". */
export type Dipdup_Index_Order_By = {
  config_hash?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  template?: InputMaybe<Order_By>;
  template_values?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_index" */
export enum Dipdup_Index_Select_Column {
  /** column name */
  ConfigHash = 'config_hash',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  Template = 'template',
  /** column name */
  TemplateValues = 'template_values',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Dipdup_Index_Stddev_Fields = {
  __typename?: 'dipdup_index_stddev_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dipdup_Index_Stddev_Pop_Fields = {
  __typename?: 'dipdup_index_stddev_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dipdup_Index_Stddev_Samp_Fields = {
  __typename?: 'dipdup_index_stddev_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dipdup_index" */
export type Dipdup_Index_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Index_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Index_Stream_Cursor_Value_Input = {
  config_hash?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  template_values?: InputMaybe<Scalars['jsonb']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dipdup_Index_Sum_Fields = {
  __typename?: 'dipdup_index_sum_fields';
  level?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Dipdup_Index_Var_Pop_Fields = {
  __typename?: 'dipdup_index_var_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dipdup_Index_Var_Samp_Fields = {
  __typename?: 'dipdup_index_var_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dipdup_Index_Variance_Fields = {
  __typename?: 'dipdup_index_variance_fields';
  level?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "dipdup_meta" */
export type Dipdup_Meta = {
  __typename?: 'dipdup_meta';
  created_at: Scalars['timestamptz']['output'];
  key: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  value?: Maybe<Scalars['jsonb']['output']>;
};


/** columns and relationships of "dipdup_meta" */
export type Dipdup_MetaValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "dipdup_meta" */
export type Dipdup_Meta_Aggregate = {
  __typename?: 'dipdup_meta_aggregate';
  aggregate?: Maybe<Dipdup_Meta_Aggregate_Fields>;
  nodes: Array<Dipdup_Meta>;
};

/** aggregate fields of "dipdup_meta" */
export type Dipdup_Meta_Aggregate_Fields = {
  __typename?: 'dipdup_meta_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Meta_Max_Fields>;
  min?: Maybe<Dipdup_Meta_Min_Fields>;
};


/** aggregate fields of "dipdup_meta" */
export type Dipdup_Meta_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Meta_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "dipdup_meta". All fields are combined with a logical 'AND'. */
export type Dipdup_Meta_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Meta_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Meta_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Meta_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Meta_Max_Fields = {
  __typename?: 'dipdup_meta_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Meta_Min_Fields = {
  __typename?: 'dipdup_meta_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_meta". */
export type Dipdup_Meta_Order_By = {
  created_at?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_meta" */
export enum Dipdup_Meta_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** Streaming cursor of the table "dipdup_meta" */
export type Dipdup_Meta_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Meta_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Meta_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Model update created within versioned transactions */
export type Dipdup_Model_Update = {
  __typename?: 'dipdup_model_update';
  action: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  data?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['Int']['output'];
  index: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  model_name: Scalars['String']['output'];
  model_pk: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** Model update created within versioned transactions */
export type Dipdup_Model_UpdateDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "dipdup_model_update" */
export type Dipdup_Model_Update_Aggregate = {
  __typename?: 'dipdup_model_update_aggregate';
  aggregate?: Maybe<Dipdup_Model_Update_Aggregate_Fields>;
  nodes: Array<Dipdup_Model_Update>;
};

/** aggregate fields of "dipdup_model_update" */
export type Dipdup_Model_Update_Aggregate_Fields = {
  __typename?: 'dipdup_model_update_aggregate_fields';
  avg?: Maybe<Dipdup_Model_Update_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Model_Update_Max_Fields>;
  min?: Maybe<Dipdup_Model_Update_Min_Fields>;
  stddev?: Maybe<Dipdup_Model_Update_Stddev_Fields>;
  stddev_pop?: Maybe<Dipdup_Model_Update_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dipdup_Model_Update_Stddev_Samp_Fields>;
  sum?: Maybe<Dipdup_Model_Update_Sum_Fields>;
  var_pop?: Maybe<Dipdup_Model_Update_Var_Pop_Fields>;
  var_samp?: Maybe<Dipdup_Model_Update_Var_Samp_Fields>;
  variance?: Maybe<Dipdup_Model_Update_Variance_Fields>;
};


/** aggregate fields of "dipdup_model_update" */
export type Dipdup_Model_Update_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Model_Update_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dipdup_Model_Update_Avg_Fields = {
  __typename?: 'dipdup_model_update_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dipdup_model_update". All fields are combined with a logical 'AND'. */
export type Dipdup_Model_Update_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Model_Update_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Model_Update_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Model_Update_Bool_Exp>>;
  action?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  data?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  index?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  model_name?: InputMaybe<String_Comparison_Exp>;
  model_pk?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Model_Update_Max_Fields = {
  __typename?: 'dipdup_model_update_max_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  model_pk?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Model_Update_Min_Fields = {
  __typename?: 'dipdup_model_update_min_fields';
  action?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  model_name?: Maybe<Scalars['String']['output']>;
  model_pk?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_model_update". */
export type Dipdup_Model_Update_Order_By = {
  action?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  data?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  model_name?: InputMaybe<Order_By>;
  model_pk?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_model_update" */
export enum Dipdup_Model_Update_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Level = 'level',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  ModelPk = 'model_pk',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Dipdup_Model_Update_Stddev_Fields = {
  __typename?: 'dipdup_model_update_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dipdup_Model_Update_Stddev_Pop_Fields = {
  __typename?: 'dipdup_model_update_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dipdup_Model_Update_Stddev_Samp_Fields = {
  __typename?: 'dipdup_model_update_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dipdup_model_update" */
export type Dipdup_Model_Update_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Model_Update_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Model_Update_Stream_Cursor_Value_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  data?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  model_name?: InputMaybe<Scalars['String']['input']>;
  model_pk?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dipdup_Model_Update_Sum_Fields = {
  __typename?: 'dipdup_model_update_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Dipdup_Model_Update_Var_Pop_Fields = {
  __typename?: 'dipdup_model_update_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dipdup_Model_Update_Var_Samp_Fields = {
  __typename?: 'dipdup_model_update_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dipdup_Model_Update_Variance_Fields = {
  __typename?: 'dipdup_model_update_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "dipdup_schema" */
export type Dipdup_Schema = {
  __typename?: 'dipdup_schema';
  created_at: Scalars['timestamptz']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  reindex?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "dipdup_schema" */
export type Dipdup_Schema_Aggregate = {
  __typename?: 'dipdup_schema_aggregate';
  aggregate?: Maybe<Dipdup_Schema_Aggregate_Fields>;
  nodes: Array<Dipdup_Schema>;
};

/** aggregate fields of "dipdup_schema" */
export type Dipdup_Schema_Aggregate_Fields = {
  __typename?: 'dipdup_schema_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Schema_Max_Fields>;
  min?: Maybe<Dipdup_Schema_Min_Fields>;
};


/** aggregate fields of "dipdup_schema" */
export type Dipdup_Schema_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Schema_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "dipdup_schema". All fields are combined with a logical 'AND'. */
export type Dipdup_Schema_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Schema_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Schema_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Schema_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  reindex?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Schema_Max_Fields = {
  __typename?: 'dipdup_schema_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reindex?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Schema_Min_Fields = {
  __typename?: 'dipdup_schema_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  reindex?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_schema". */
export type Dipdup_Schema_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  reindex?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_schema" */
export enum Dipdup_Schema_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Name = 'name',
  /** column name */
  Reindex = 'reindex',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "dipdup_schema" */
export type Dipdup_Schema_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Schema_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Schema_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reindex?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "dipdup_status" */
export type Dipdup_Status = {
  __typename?: 'dipdup_status';
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['numeric']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "dipdup_status" */
export type Dipdup_Status_Aggregate = {
  __typename?: 'dipdup_status_aggregate';
  aggregate?: Maybe<Dipdup_Status_Aggregate_Fields>;
  nodes: Array<Dipdup_Status>;
};

/** aggregate fields of "dipdup_status" */
export type Dipdup_Status_Aggregate_Fields = {
  __typename?: 'dipdup_status_aggregate_fields';
  avg?: Maybe<Dipdup_Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Status_Max_Fields>;
  min?: Maybe<Dipdup_Status_Min_Fields>;
  stddev?: Maybe<Dipdup_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Dipdup_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dipdup_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Dipdup_Status_Sum_Fields>;
  var_pop?: Maybe<Dipdup_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Dipdup_Status_Var_Samp_Fields>;
  variance?: Maybe<Dipdup_Status_Variance_Fields>;
};


/** aggregate fields of "dipdup_status" */
export type Dipdup_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dipdup_Status_Avg_Fields = {
  __typename?: 'dipdup_status_avg_fields';
  level?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dipdup_status". All fields are combined with a logical 'AND'. */
export type Dipdup_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Status_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Status_Bool_Exp>>;
  level?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Numeric_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Status_Max_Fields = {
  __typename?: 'dipdup_status_max_fields';
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['numeric']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Status_Min_Fields = {
  __typename?: 'dipdup_status_min_fields';
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['numeric']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_status". */
export type Dipdup_Status_Order_By = {
  level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_status" */
export enum Dipdup_Status_Select_Column {
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Dipdup_Status_Stddev_Fields = {
  __typename?: 'dipdup_status_stddev_fields';
  level?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dipdup_Status_Stddev_Pop_Fields = {
  __typename?: 'dipdup_status_stddev_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dipdup_Status_Stddev_Samp_Fields = {
  __typename?: 'dipdup_status_stddev_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dipdup_status" */
export type Dipdup_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Status_Stream_Cursor_Value_Input = {
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['numeric']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dipdup_Status_Sum_Fields = {
  __typename?: 'dipdup_status_sum_fields';
  level?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Dipdup_Status_Var_Pop_Fields = {
  __typename?: 'dipdup_status_var_pop_fields';
  level?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dipdup_Status_Var_Samp_Fields = {
  __typename?: 'dipdup_status_var_samp_fields';
  level?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dipdup_Status_Variance_Fields = {
  __typename?: 'dipdup_status_variance_fields';
  level?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "dipdup_token_metadata" */
export type Dipdup_Token_Metadata = {
  __typename?: 'dipdup_token_metadata';
  contract: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  network: Scalars['String']['output'];
  token_id: Scalars['String']['output'];
  update_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "dipdup_token_metadata" */
export type Dipdup_Token_MetadataMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "dipdup_token_metadata" */
export type Dipdup_Token_Metadata_Aggregate = {
  __typename?: 'dipdup_token_metadata_aggregate';
  aggregate?: Maybe<Dipdup_Token_Metadata_Aggregate_Fields>;
  nodes: Array<Dipdup_Token_Metadata>;
};

/** aggregate fields of "dipdup_token_metadata" */
export type Dipdup_Token_Metadata_Aggregate_Fields = {
  __typename?: 'dipdup_token_metadata_aggregate_fields';
  avg?: Maybe<Dipdup_Token_Metadata_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dipdup_Token_Metadata_Max_Fields>;
  min?: Maybe<Dipdup_Token_Metadata_Min_Fields>;
  stddev?: Maybe<Dipdup_Token_Metadata_Stddev_Fields>;
  stddev_pop?: Maybe<Dipdup_Token_Metadata_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dipdup_Token_Metadata_Stddev_Samp_Fields>;
  sum?: Maybe<Dipdup_Token_Metadata_Sum_Fields>;
  var_pop?: Maybe<Dipdup_Token_Metadata_Var_Pop_Fields>;
  var_samp?: Maybe<Dipdup_Token_Metadata_Var_Samp_Fields>;
  variance?: Maybe<Dipdup_Token_Metadata_Variance_Fields>;
};


/** aggregate fields of "dipdup_token_metadata" */
export type Dipdup_Token_Metadata_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dipdup_Token_Metadata_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Dipdup_Token_Metadata_Avg_Fields = {
  __typename?: 'dipdup_token_metadata_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "dipdup_token_metadata". All fields are combined with a logical 'AND'. */
export type Dipdup_Token_Metadata_Bool_Exp = {
  _and?: InputMaybe<Array<Dipdup_Token_Metadata_Bool_Exp>>;
  _not?: InputMaybe<Dipdup_Token_Metadata_Bool_Exp>;
  _or?: InputMaybe<Array<Dipdup_Token_Metadata_Bool_Exp>>;
  contract?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  network?: InputMaybe<String_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  update_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dipdup_Token_Metadata_Max_Fields = {
  __typename?: 'dipdup_token_metadata_max_fields';
  contract?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  update_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Dipdup_Token_Metadata_Min_Fields = {
  __typename?: 'dipdup_token_metadata_min_fields';
  contract?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  token_id?: Maybe<Scalars['String']['output']>;
  update_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "dipdup_token_metadata". */
export type Dipdup_Token_Metadata_Order_By = {
  contract?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  network?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  update_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dipdup_token_metadata" */
export enum Dipdup_Token_Metadata_Select_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Network = 'network',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UpdateId = 'update_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate stddev on columns */
export type Dipdup_Token_Metadata_Stddev_Fields = {
  __typename?: 'dipdup_token_metadata_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Dipdup_Token_Metadata_Stddev_Pop_Fields = {
  __typename?: 'dipdup_token_metadata_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Dipdup_Token_Metadata_Stddev_Samp_Fields = {
  __typename?: 'dipdup_token_metadata_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "dipdup_token_metadata" */
export type Dipdup_Token_Metadata_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dipdup_Token_Metadata_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dipdup_Token_Metadata_Stream_Cursor_Value_Input = {
  contract?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  token_id?: InputMaybe<Scalars['String']['input']>;
  update_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dipdup_Token_Metadata_Sum_Fields = {
  __typename?: 'dipdup_token_metadata_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  update_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Dipdup_Token_Metadata_Var_Pop_Fields = {
  __typename?: 'dipdup_token_metadata_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Dipdup_Token_Metadata_Var_Samp_Fields = {
  __typename?: 'dipdup_token_metadata_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Dipdup_Token_Metadata_Variance_Fields = {
  __typename?: 'dipdup_token_metadata_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  update_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "dodo_mav" */
export type Dodo_Mav = {
  __typename?: 'dodo_mav';
  address: Scalars['String']['output'];
  appraisal_price: Scalars['float8']['output'];
  base_balance: Scalars['float8']['output'];
  base_balance_limit: Scalars['float8']['output'];
  /** An object relationship */
  base_lp_token: Token;
  base_lp_token_id: Scalars['Int']['output'];
  /** An object relationship */
  base_token: Token;
  base_token_id: Scalars['Int']['output'];
  /** An array relationship */
  entrypoint_status: Array<Dodo_Mav_Entrypoint_Status>;
  /** An aggregate relationship */
  entrypoint_status_aggregate: Dodo_Mav_Entrypoint_Status_Aggregate;
  fee_decimals: Scalars['bigint']['output'];
  fixed_price_percent: Scalars['bigint']['output'];
  guide_price: Scalars['float8']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  lambdas: Array<Dodo_Mav_Lambda>;
  /** An aggregate relationship */
  lambdas_aggregate: Dodo_Mav_Lambda_Aggregate;
  lp_fee: Scalars['bigint']['output'];
  maintainer_fee: Scalars['bigint']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  orderbook_price_percent: Scalars['bigint']['output'];
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model: Scalars['smallint']['output'];
  quote_balance: Scalars['float8']['output'];
  quote_balance_limit: Scalars['float8']['output'];
  /** An object relationship */
  quote_lp_token: Token;
  quote_lp_token_id: Scalars['Int']['output'];
  /** An object relationship */
  quote_token: Token;
  quote_token_id: Scalars['Int']['output'];
  r_status: Scalars['bigint']['output'];
  /** An object relationship */
  rwa_orderbook: Orderbook;
  rwa_orderbook_id: Scalars['Int']['output'];
  slippage_factor: Scalars['bigint']['output'];
  super_admin?: Maybe<Scalars['String']['output']>;
  target_base_token_amount: Scalars['float8']['output'];
  target_quote_token_amount: Scalars['float8']['output'];
};


/** columns and relationships of "dodo_mav" */
export type Dodo_MavEntrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
};


/** columns and relationships of "dodo_mav" */
export type Dodo_MavEntrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
};


/** columns and relationships of "dodo_mav" */
export type Dodo_MavLambdasArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Lambda_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
};


/** columns and relationships of "dodo_mav" */
export type Dodo_MavLambdas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Lambda_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
};


/** columns and relationships of "dodo_mav" */
export type Dodo_MavMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "dodo_mav" */
export type Dodo_Mav_Aggregate = {
  __typename?: 'dodo_mav_aggregate';
  aggregate?: Maybe<Dodo_Mav_Aggregate_Fields>;
  nodes: Array<Dodo_Mav>;
};

export type Dodo_Mav_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp_Var_Samp>;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Avg = {
  arguments: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Corr = {
  arguments: Dodo_Mav_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Dodo_Mav_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Max = {
  arguments: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Min = {
  arguments: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Sum = {
  arguments: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Dodo_Mav_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "dodo_mav" */
export type Dodo_Mav_Aggregate_Fields = {
  __typename?: 'dodo_mav_aggregate_fields';
  avg?: Maybe<Dodo_Mav_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dodo_Mav_Max_Fields>;
  min?: Maybe<Dodo_Mav_Min_Fields>;
  stddev?: Maybe<Dodo_Mav_Stddev_Fields>;
  stddev_pop?: Maybe<Dodo_Mav_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dodo_Mav_Stddev_Samp_Fields>;
  sum?: Maybe<Dodo_Mav_Sum_Fields>;
  var_pop?: Maybe<Dodo_Mav_Var_Pop_Fields>;
  var_samp?: Maybe<Dodo_Mav_Var_Samp_Fields>;
  variance?: Maybe<Dodo_Mav_Variance_Fields>;
};


/** aggregate fields of "dodo_mav" */
export type Dodo_Mav_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dodo_mav" */
export type Dodo_Mav_Aggregate_Order_By = {
  avg?: InputMaybe<Dodo_Mav_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dodo_Mav_Max_Order_By>;
  min?: InputMaybe<Dodo_Mav_Min_Order_By>;
  stddev?: InputMaybe<Dodo_Mav_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dodo_Mav_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dodo_Mav_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dodo_Mav_Sum_Order_By>;
  var_pop?: InputMaybe<Dodo_Mav_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dodo_Mav_Var_Samp_Order_By>;
  variance?: InputMaybe<Dodo_Mav_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dodo_Mav_Avg_Fields = {
  __typename?: 'dodo_mav_avg_fields';
  appraisal_price?: Maybe<Scalars['Float']['output']>;
  base_balance?: Maybe<Scalars['Float']['output']>;
  base_balance_limit?: Maybe<Scalars['Float']['output']>;
  base_lp_token_id?: Maybe<Scalars['Float']['output']>;
  base_token_id?: Maybe<Scalars['Float']['output']>;
  fee_decimals?: Maybe<Scalars['Float']['output']>;
  fixed_price_percent?: Maybe<Scalars['Float']['output']>;
  guide_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lp_fee?: Maybe<Scalars['Float']['output']>;
  maintainer_fee?: Maybe<Scalars['Float']['output']>;
  orderbook_price_percent?: Maybe<Scalars['Float']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['Float']['output']>;
  quote_balance?: Maybe<Scalars['Float']['output']>;
  quote_balance_limit?: Maybe<Scalars['Float']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Float']['output']>;
  quote_token_id?: Maybe<Scalars['Float']['output']>;
  r_status?: Maybe<Scalars['Float']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Float']['output']>;
  slippage_factor?: Maybe<Scalars['Float']['output']>;
  target_base_token_amount?: Maybe<Scalars['Float']['output']>;
  target_quote_token_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "dodo_mav" */
export type Dodo_Mav_Avg_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dodo_mav". All fields are combined with a logical 'AND'. */
export type Dodo_Mav_Bool_Exp = {
  _and?: InputMaybe<Array<Dodo_Mav_Bool_Exp>>;
  _not?: InputMaybe<Dodo_Mav_Bool_Exp>;
  _or?: InputMaybe<Array<Dodo_Mav_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  appraisal_price?: InputMaybe<Float8_Comparison_Exp>;
  base_balance?: InputMaybe<Float8_Comparison_Exp>;
  base_balance_limit?: InputMaybe<Float8_Comparison_Exp>;
  base_lp_token?: InputMaybe<Token_Bool_Exp>;
  base_lp_token_id?: InputMaybe<Int_Comparison_Exp>;
  base_token?: InputMaybe<Token_Bool_Exp>;
  base_token_id?: InputMaybe<Int_Comparison_Exp>;
  entrypoint_status?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
  entrypoint_status_aggregate?: InputMaybe<Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp>;
  fee_decimals?: InputMaybe<Bigint_Comparison_Exp>;
  fixed_price_percent?: InputMaybe<Bigint_Comparison_Exp>;
  guide_price?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambdas?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
  lambdas_aggregate?: InputMaybe<Dodo_Mav_Lambda_Aggregate_Bool_Exp>;
  lp_fee?: InputMaybe<Bigint_Comparison_Exp>;
  maintainer_fee?: InputMaybe<Bigint_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  new_super_admin?: InputMaybe<String_Comparison_Exp>;
  orderbook_price_percent?: InputMaybe<Bigint_Comparison_Exp>;
  price_model?: InputMaybe<Smallint_Comparison_Exp>;
  quote_balance?: InputMaybe<Float8_Comparison_Exp>;
  quote_balance_limit?: InputMaybe<Float8_Comparison_Exp>;
  quote_lp_token?: InputMaybe<Token_Bool_Exp>;
  quote_lp_token_id?: InputMaybe<Int_Comparison_Exp>;
  quote_token?: InputMaybe<Token_Bool_Exp>;
  quote_token_id?: InputMaybe<Int_Comparison_Exp>;
  r_status?: InputMaybe<Bigint_Comparison_Exp>;
  rwa_orderbook?: InputMaybe<Orderbook_Bool_Exp>;
  rwa_orderbook_id?: InputMaybe<Int_Comparison_Exp>;
  slippage_factor?: InputMaybe<Bigint_Comparison_Exp>;
  super_admin?: InputMaybe<String_Comparison_Exp>;
  target_base_token_amount?: InputMaybe<Float8_Comparison_Exp>;
  target_quote_token_amount?: InputMaybe<Float8_Comparison_Exp>;
};

/** columns and relationships of "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status = {
  __typename?: 'dodo_mav_entrypoint_status';
  /** An object relationship */
  contract: Dodo_Mav;
  contract_id: Scalars['Int']['output'];
  entrypoint: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paused: Scalars['Boolean']['output'];
};

/** aggregated selection of "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Aggregate = {
  __typename?: 'dodo_mav_entrypoint_status_aggregate';
  aggregate?: Maybe<Dodo_Mav_Entrypoint_Status_Aggregate_Fields>;
  nodes: Array<Dodo_Mav_Entrypoint_Status>;
};

export type Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Count>;
};

export type Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Dodo_Mav_Entrypoint_Status_Select_Column_Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Dodo_Mav_Entrypoint_Status_Select_Column_Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Aggregate_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_aggregate_fields';
  avg?: Maybe<Dodo_Mav_Entrypoint_Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dodo_Mav_Entrypoint_Status_Max_Fields>;
  min?: Maybe<Dodo_Mav_Entrypoint_Status_Min_Fields>;
  stddev?: Maybe<Dodo_Mav_Entrypoint_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Dodo_Mav_Entrypoint_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dodo_Mav_Entrypoint_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Dodo_Mav_Entrypoint_Status_Sum_Fields>;
  var_pop?: Maybe<Dodo_Mav_Entrypoint_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Dodo_Mav_Entrypoint_Status_Var_Samp_Fields>;
  variance?: Maybe<Dodo_Mav_Entrypoint_Status_Variance_Fields>;
};


/** aggregate fields of "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Dodo_Mav_Entrypoint_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dodo_Mav_Entrypoint_Status_Max_Order_By>;
  min?: InputMaybe<Dodo_Mav_Entrypoint_Status_Min_Order_By>;
  stddev?: InputMaybe<Dodo_Mav_Entrypoint_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dodo_Mav_Entrypoint_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dodo_Mav_Entrypoint_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dodo_Mav_Entrypoint_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Dodo_Mav_Entrypoint_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dodo_Mav_Entrypoint_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Dodo_Mav_Entrypoint_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dodo_Mav_Entrypoint_Status_Avg_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dodo_mav_entrypoint_status". All fields are combined with a logical 'AND'. */
export type Dodo_Mav_Entrypoint_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Bool_Exp>>;
  _not?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Bool_Exp>>;
  contract?: InputMaybe<Dodo_Mav_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  entrypoint?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  paused?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dodo_Mav_Entrypoint_Status_Max_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  entrypoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dodo_Mav_Entrypoint_Status_Min_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  entrypoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dodo_mav_entrypoint_status". */
export type Dodo_Mav_Entrypoint_Status_Order_By = {
  contract?: InputMaybe<Dodo_Mav_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  paused?: InputMaybe<Order_By>;
};

/** select columns of table "dodo_mav_entrypoint_status" */
export enum Dodo_Mav_Entrypoint_Status_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Entrypoint = 'entrypoint',
  /** column name */
  Id = 'id',
  /** column name */
  Paused = 'paused'
}

/** select "dodo_mav_entrypoint_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "dodo_mav_entrypoint_status" */
export enum Dodo_Mav_Entrypoint_Status_Select_Column_Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Paused = 'paused'
}

/** select "dodo_mav_entrypoint_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "dodo_mav_entrypoint_status" */
export enum Dodo_Mav_Entrypoint_Status_Select_Column_Dodo_Mav_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Paused = 'paused'
}

/** aggregate stddev on columns */
export type Dodo_Mav_Entrypoint_Status_Stddev_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dodo_Mav_Entrypoint_Status_Stddev_Pop_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dodo_Mav_Entrypoint_Status_Stddev_Samp_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dodo_Mav_Entrypoint_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dodo_Mav_Entrypoint_Status_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  entrypoint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  paused?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Dodo_Mav_Entrypoint_Status_Sum_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dodo_Mav_Entrypoint_Status_Var_Pop_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dodo_Mav_Entrypoint_Status_Var_Samp_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dodo_Mav_Entrypoint_Status_Variance_Fields = {
  __typename?: 'dodo_mav_entrypoint_status_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "dodo_mav_entrypoint_status" */
export type Dodo_Mav_Entrypoint_Status_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "dodo_mav_lambda" */
export type Dodo_Mav_Lambda = {
  __typename?: 'dodo_mav_lambda';
  /** An object relationship */
  contract: Dodo_Mav;
  contract_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lambda_bytes: Scalars['String']['output'];
  lambda_name: Scalars['String']['output'];
  last_updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Aggregate = {
  __typename?: 'dodo_mav_lambda_aggregate';
  aggregate?: Maybe<Dodo_Mav_Lambda_Aggregate_Fields>;
  nodes: Array<Dodo_Mav_Lambda>;
};

export type Dodo_Mav_Lambda_Aggregate_Bool_Exp = {
  count?: InputMaybe<Dodo_Mav_Lambda_Aggregate_Bool_Exp_Count>;
};

export type Dodo_Mav_Lambda_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Aggregate_Fields = {
  __typename?: 'dodo_mav_lambda_aggregate_fields';
  avg?: Maybe<Dodo_Mav_Lambda_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Dodo_Mav_Lambda_Max_Fields>;
  min?: Maybe<Dodo_Mav_Lambda_Min_Fields>;
  stddev?: Maybe<Dodo_Mav_Lambda_Stddev_Fields>;
  stddev_pop?: Maybe<Dodo_Mav_Lambda_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dodo_Mav_Lambda_Stddev_Samp_Fields>;
  sum?: Maybe<Dodo_Mav_Lambda_Sum_Fields>;
  var_pop?: Maybe<Dodo_Mav_Lambda_Var_Pop_Fields>;
  var_samp?: Maybe<Dodo_Mav_Lambda_Var_Samp_Fields>;
  variance?: Maybe<Dodo_Mav_Lambda_Variance_Fields>;
};


/** aggregate fields of "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Aggregate_Order_By = {
  avg?: InputMaybe<Dodo_Mav_Lambda_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Dodo_Mav_Lambda_Max_Order_By>;
  min?: InputMaybe<Dodo_Mav_Lambda_Min_Order_By>;
  stddev?: InputMaybe<Dodo_Mav_Lambda_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Dodo_Mav_Lambda_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Dodo_Mav_Lambda_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Dodo_Mav_Lambda_Sum_Order_By>;
  var_pop?: InputMaybe<Dodo_Mav_Lambda_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Dodo_Mav_Lambda_Var_Samp_Order_By>;
  variance?: InputMaybe<Dodo_Mav_Lambda_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dodo_Mav_Lambda_Avg_Fields = {
  __typename?: 'dodo_mav_lambda_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dodo_mav_lambda". All fields are combined with a logical 'AND'. */
export type Dodo_Mav_Lambda_Bool_Exp = {
  _and?: InputMaybe<Array<Dodo_Mav_Lambda_Bool_Exp>>;
  _not?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
  _or?: InputMaybe<Array<Dodo_Mav_Lambda_Bool_Exp>>;
  contract?: InputMaybe<Dodo_Mav_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambda_bytes?: InputMaybe<String_Comparison_Exp>;
  lambda_name?: InputMaybe<String_Comparison_Exp>;
  last_updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dodo_Mav_Lambda_Max_Fields = {
  __typename?: 'dodo_mav_lambda_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dodo_Mav_Lambda_Min_Fields = {
  __typename?: 'dodo_mav_lambda_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dodo_mav_lambda". */
export type Dodo_Mav_Lambda_Order_By = {
  contract?: InputMaybe<Dodo_Mav_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "dodo_mav_lambda" */
export enum Dodo_Mav_Lambda_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  LambdaBytes = 'lambda_bytes',
  /** column name */
  LambdaName = 'lambda_name',
  /** column name */
  LastUpdatedAt = 'last_updated_at'
}

/** aggregate stddev on columns */
export type Dodo_Mav_Lambda_Stddev_Fields = {
  __typename?: 'dodo_mav_lambda_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dodo_Mav_Lambda_Stddev_Pop_Fields = {
  __typename?: 'dodo_mav_lambda_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dodo_Mav_Lambda_Stddev_Samp_Fields = {
  __typename?: 'dodo_mav_lambda_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dodo_Mav_Lambda_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dodo_Mav_Lambda_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lambda_bytes?: InputMaybe<Scalars['String']['input']>;
  lambda_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Dodo_Mav_Lambda_Sum_Fields = {
  __typename?: 'dodo_mav_lambda_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dodo_Mav_Lambda_Var_Pop_Fields = {
  __typename?: 'dodo_mav_lambda_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dodo_Mav_Lambda_Var_Samp_Fields = {
  __typename?: 'dodo_mav_lambda_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dodo_Mav_Lambda_Variance_Fields = {
  __typename?: 'dodo_mav_lambda_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "dodo_mav_lambda" */
export type Dodo_Mav_Lambda_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Dodo_Mav_Max_Fields = {
  __typename?: 'dodo_mav_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  appraisal_price?: Maybe<Scalars['float8']['output']>;
  base_balance?: Maybe<Scalars['float8']['output']>;
  base_balance_limit?: Maybe<Scalars['float8']['output']>;
  base_lp_token_id?: Maybe<Scalars['Int']['output']>;
  base_token_id?: Maybe<Scalars['Int']['output']>;
  fee_decimals?: Maybe<Scalars['bigint']['output']>;
  fixed_price_percent?: Maybe<Scalars['bigint']['output']>;
  guide_price?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lp_fee?: Maybe<Scalars['bigint']['output']>;
  maintainer_fee?: Maybe<Scalars['bigint']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  orderbook_price_percent?: Maybe<Scalars['bigint']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['smallint']['output']>;
  quote_balance?: Maybe<Scalars['float8']['output']>;
  quote_balance_limit?: Maybe<Scalars['float8']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Int']['output']>;
  quote_token_id?: Maybe<Scalars['Int']['output']>;
  r_status?: Maybe<Scalars['bigint']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Int']['output']>;
  slippage_factor?: Maybe<Scalars['bigint']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
  target_base_token_amount?: Maybe<Scalars['float8']['output']>;
  target_quote_token_amount?: Maybe<Scalars['float8']['output']>;
};

/** order by max() on columns of table "dodo_mav" */
export type Dodo_Mav_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Dodo_Mav_Min_Fields = {
  __typename?: 'dodo_mav_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  appraisal_price?: Maybe<Scalars['float8']['output']>;
  base_balance?: Maybe<Scalars['float8']['output']>;
  base_balance_limit?: Maybe<Scalars['float8']['output']>;
  base_lp_token_id?: Maybe<Scalars['Int']['output']>;
  base_token_id?: Maybe<Scalars['Int']['output']>;
  fee_decimals?: Maybe<Scalars['bigint']['output']>;
  fixed_price_percent?: Maybe<Scalars['bigint']['output']>;
  guide_price?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lp_fee?: Maybe<Scalars['bigint']['output']>;
  maintainer_fee?: Maybe<Scalars['bigint']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  orderbook_price_percent?: Maybe<Scalars['bigint']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['smallint']['output']>;
  quote_balance?: Maybe<Scalars['float8']['output']>;
  quote_balance_limit?: Maybe<Scalars['float8']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Int']['output']>;
  quote_token_id?: Maybe<Scalars['Int']['output']>;
  r_status?: Maybe<Scalars['bigint']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Int']['output']>;
  slippage_factor?: Maybe<Scalars['bigint']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
  target_base_token_amount?: Maybe<Scalars['float8']['output']>;
  target_quote_token_amount?: Maybe<Scalars['float8']['output']>;
};

/** order by min() on columns of table "dodo_mav" */
export type Dodo_Mav_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "dodo_mav". */
export type Dodo_Mav_Order_By = {
  address?: InputMaybe<Order_By>;
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token?: InputMaybe<Token_Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token?: InputMaybe<Token_Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  entrypoint_status_aggregate?: InputMaybe<Dodo_Mav_Entrypoint_Status_Aggregate_Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambdas_aggregate?: InputMaybe<Dodo_Mav_Lambda_Aggregate_Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token?: InputMaybe<Token_Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token?: InputMaybe<Token_Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook?: InputMaybe<Orderbook_Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** select columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  BaseLpTokenId = 'base_lp_token_id',
  /** column name */
  BaseTokenId = 'base_token_id',
  /** column name */
  FeeDecimals = 'fee_decimals',
  /** column name */
  FixedPricePercent = 'fixed_price_percent',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  Id = 'id',
  /** column name */
  LpFee = 'lp_fee',
  /** column name */
  MaintainerFee = 'maintainer_fee',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewSuperAdmin = 'new_super_admin',
  /** column name */
  OrderbookPricePercent = 'orderbook_price_percent',
  /** column name */
  PriceModel = 'price_model',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  QuoteLpTokenId = 'quote_lp_token_id',
  /** column name */
  QuoteTokenId = 'quote_token_id',
  /** column name */
  RStatus = 'r_status',
  /** column name */
  RwaOrderbookId = 'rwa_orderbook_id',
  /** column name */
  SlippageFactor = 'slippage_factor',
  /** column name */
  SuperAdmin = 'super_admin',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_avg_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_corr_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_max_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_min_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_sum_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** select "dodo_mav_aggregate_bool_exp_var_samp_arguments_columns" columns of table "dodo_mav" */
export enum Dodo_Mav_Select_Column_Dodo_Mav_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  AppraisalPrice = 'appraisal_price',
  /** column name */
  BaseBalance = 'base_balance',
  /** column name */
  BaseBalanceLimit = 'base_balance_limit',
  /** column name */
  GuidePrice = 'guide_price',
  /** column name */
  QuoteBalance = 'quote_balance',
  /** column name */
  QuoteBalanceLimit = 'quote_balance_limit',
  /** column name */
  TargetBaseTokenAmount = 'target_base_token_amount',
  /** column name */
  TargetQuoteTokenAmount = 'target_quote_token_amount'
}

/** aggregate stddev on columns */
export type Dodo_Mav_Stddev_Fields = {
  __typename?: 'dodo_mav_stddev_fields';
  appraisal_price?: Maybe<Scalars['Float']['output']>;
  base_balance?: Maybe<Scalars['Float']['output']>;
  base_balance_limit?: Maybe<Scalars['Float']['output']>;
  base_lp_token_id?: Maybe<Scalars['Float']['output']>;
  base_token_id?: Maybe<Scalars['Float']['output']>;
  fee_decimals?: Maybe<Scalars['Float']['output']>;
  fixed_price_percent?: Maybe<Scalars['Float']['output']>;
  guide_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lp_fee?: Maybe<Scalars['Float']['output']>;
  maintainer_fee?: Maybe<Scalars['Float']['output']>;
  orderbook_price_percent?: Maybe<Scalars['Float']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['Float']['output']>;
  quote_balance?: Maybe<Scalars['Float']['output']>;
  quote_balance_limit?: Maybe<Scalars['Float']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Float']['output']>;
  quote_token_id?: Maybe<Scalars['Float']['output']>;
  r_status?: Maybe<Scalars['Float']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Float']['output']>;
  slippage_factor?: Maybe<Scalars['Float']['output']>;
  target_base_token_amount?: Maybe<Scalars['Float']['output']>;
  target_quote_token_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "dodo_mav" */
export type Dodo_Mav_Stddev_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dodo_Mav_Stddev_Pop_Fields = {
  __typename?: 'dodo_mav_stddev_pop_fields';
  appraisal_price?: Maybe<Scalars['Float']['output']>;
  base_balance?: Maybe<Scalars['Float']['output']>;
  base_balance_limit?: Maybe<Scalars['Float']['output']>;
  base_lp_token_id?: Maybe<Scalars['Float']['output']>;
  base_token_id?: Maybe<Scalars['Float']['output']>;
  fee_decimals?: Maybe<Scalars['Float']['output']>;
  fixed_price_percent?: Maybe<Scalars['Float']['output']>;
  guide_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lp_fee?: Maybe<Scalars['Float']['output']>;
  maintainer_fee?: Maybe<Scalars['Float']['output']>;
  orderbook_price_percent?: Maybe<Scalars['Float']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['Float']['output']>;
  quote_balance?: Maybe<Scalars['Float']['output']>;
  quote_balance_limit?: Maybe<Scalars['Float']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Float']['output']>;
  quote_token_id?: Maybe<Scalars['Float']['output']>;
  r_status?: Maybe<Scalars['Float']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Float']['output']>;
  slippage_factor?: Maybe<Scalars['Float']['output']>;
  target_base_token_amount?: Maybe<Scalars['Float']['output']>;
  target_quote_token_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "dodo_mav" */
export type Dodo_Mav_Stddev_Pop_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dodo_Mav_Stddev_Samp_Fields = {
  __typename?: 'dodo_mav_stddev_samp_fields';
  appraisal_price?: Maybe<Scalars['Float']['output']>;
  base_balance?: Maybe<Scalars['Float']['output']>;
  base_balance_limit?: Maybe<Scalars['Float']['output']>;
  base_lp_token_id?: Maybe<Scalars['Float']['output']>;
  base_token_id?: Maybe<Scalars['Float']['output']>;
  fee_decimals?: Maybe<Scalars['Float']['output']>;
  fixed_price_percent?: Maybe<Scalars['Float']['output']>;
  guide_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lp_fee?: Maybe<Scalars['Float']['output']>;
  maintainer_fee?: Maybe<Scalars['Float']['output']>;
  orderbook_price_percent?: Maybe<Scalars['Float']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['Float']['output']>;
  quote_balance?: Maybe<Scalars['Float']['output']>;
  quote_balance_limit?: Maybe<Scalars['Float']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Float']['output']>;
  quote_token_id?: Maybe<Scalars['Float']['output']>;
  r_status?: Maybe<Scalars['Float']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Float']['output']>;
  slippage_factor?: Maybe<Scalars['Float']['output']>;
  target_base_token_amount?: Maybe<Scalars['Float']['output']>;
  target_quote_token_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "dodo_mav" */
export type Dodo_Mav_Stddev_Samp_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "dodo_mav" */
export type Dodo_Mav_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dodo_Mav_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dodo_Mav_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  appraisal_price?: InputMaybe<Scalars['float8']['input']>;
  base_balance?: InputMaybe<Scalars['float8']['input']>;
  base_balance_limit?: InputMaybe<Scalars['float8']['input']>;
  base_lp_token_id?: InputMaybe<Scalars['Int']['input']>;
  base_token_id?: InputMaybe<Scalars['Int']['input']>;
  fee_decimals?: InputMaybe<Scalars['bigint']['input']>;
  fixed_price_percent?: InputMaybe<Scalars['bigint']['input']>;
  guide_price?: InputMaybe<Scalars['float8']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lp_fee?: InputMaybe<Scalars['bigint']['input']>;
  maintainer_fee?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_super_admin?: InputMaybe<Scalars['String']['input']>;
  orderbook_price_percent?: InputMaybe<Scalars['bigint']['input']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Scalars['smallint']['input']>;
  quote_balance?: InputMaybe<Scalars['float8']['input']>;
  quote_balance_limit?: InputMaybe<Scalars['float8']['input']>;
  quote_lp_token_id?: InputMaybe<Scalars['Int']['input']>;
  quote_token_id?: InputMaybe<Scalars['Int']['input']>;
  r_status?: InputMaybe<Scalars['bigint']['input']>;
  rwa_orderbook_id?: InputMaybe<Scalars['Int']['input']>;
  slippage_factor?: InputMaybe<Scalars['bigint']['input']>;
  super_admin?: InputMaybe<Scalars['String']['input']>;
  target_base_token_amount?: InputMaybe<Scalars['float8']['input']>;
  target_quote_token_amount?: InputMaybe<Scalars['float8']['input']>;
};

/** aggregate sum on columns */
export type Dodo_Mav_Sum_Fields = {
  __typename?: 'dodo_mav_sum_fields';
  appraisal_price?: Maybe<Scalars['float8']['output']>;
  base_balance?: Maybe<Scalars['float8']['output']>;
  base_balance_limit?: Maybe<Scalars['float8']['output']>;
  base_lp_token_id?: Maybe<Scalars['Int']['output']>;
  base_token_id?: Maybe<Scalars['Int']['output']>;
  fee_decimals?: Maybe<Scalars['bigint']['output']>;
  fixed_price_percent?: Maybe<Scalars['bigint']['output']>;
  guide_price?: Maybe<Scalars['float8']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lp_fee?: Maybe<Scalars['bigint']['output']>;
  maintainer_fee?: Maybe<Scalars['bigint']['output']>;
  orderbook_price_percent?: Maybe<Scalars['bigint']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['smallint']['output']>;
  quote_balance?: Maybe<Scalars['float8']['output']>;
  quote_balance_limit?: Maybe<Scalars['float8']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Int']['output']>;
  quote_token_id?: Maybe<Scalars['Int']['output']>;
  r_status?: Maybe<Scalars['bigint']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Int']['output']>;
  slippage_factor?: Maybe<Scalars['bigint']['output']>;
  target_base_token_amount?: Maybe<Scalars['float8']['output']>;
  target_quote_token_amount?: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "dodo_mav" */
export type Dodo_Mav_Sum_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dodo_Mav_Var_Pop_Fields = {
  __typename?: 'dodo_mav_var_pop_fields';
  appraisal_price?: Maybe<Scalars['Float']['output']>;
  base_balance?: Maybe<Scalars['Float']['output']>;
  base_balance_limit?: Maybe<Scalars['Float']['output']>;
  base_lp_token_id?: Maybe<Scalars['Float']['output']>;
  base_token_id?: Maybe<Scalars['Float']['output']>;
  fee_decimals?: Maybe<Scalars['Float']['output']>;
  fixed_price_percent?: Maybe<Scalars['Float']['output']>;
  guide_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lp_fee?: Maybe<Scalars['Float']['output']>;
  maintainer_fee?: Maybe<Scalars['Float']['output']>;
  orderbook_price_percent?: Maybe<Scalars['Float']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['Float']['output']>;
  quote_balance?: Maybe<Scalars['Float']['output']>;
  quote_balance_limit?: Maybe<Scalars['Float']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Float']['output']>;
  quote_token_id?: Maybe<Scalars['Float']['output']>;
  r_status?: Maybe<Scalars['Float']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Float']['output']>;
  slippage_factor?: Maybe<Scalars['Float']['output']>;
  target_base_token_amount?: Maybe<Scalars['Float']['output']>;
  target_quote_token_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "dodo_mav" */
export type Dodo_Mav_Var_Pop_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dodo_Mav_Var_Samp_Fields = {
  __typename?: 'dodo_mav_var_samp_fields';
  appraisal_price?: Maybe<Scalars['Float']['output']>;
  base_balance?: Maybe<Scalars['Float']['output']>;
  base_balance_limit?: Maybe<Scalars['Float']['output']>;
  base_lp_token_id?: Maybe<Scalars['Float']['output']>;
  base_token_id?: Maybe<Scalars['Float']['output']>;
  fee_decimals?: Maybe<Scalars['Float']['output']>;
  fixed_price_percent?: Maybe<Scalars['Float']['output']>;
  guide_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lp_fee?: Maybe<Scalars['Float']['output']>;
  maintainer_fee?: Maybe<Scalars['Float']['output']>;
  orderbook_price_percent?: Maybe<Scalars['Float']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['Float']['output']>;
  quote_balance?: Maybe<Scalars['Float']['output']>;
  quote_balance_limit?: Maybe<Scalars['Float']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Float']['output']>;
  quote_token_id?: Maybe<Scalars['Float']['output']>;
  r_status?: Maybe<Scalars['Float']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Float']['output']>;
  slippage_factor?: Maybe<Scalars['Float']['output']>;
  target_base_token_amount?: Maybe<Scalars['Float']['output']>;
  target_quote_token_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "dodo_mav" */
export type Dodo_Mav_Var_Samp_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Dodo_Mav_Variance_Fields = {
  __typename?: 'dodo_mav_variance_fields';
  appraisal_price?: Maybe<Scalars['Float']['output']>;
  base_balance?: Maybe<Scalars['Float']['output']>;
  base_balance_limit?: Maybe<Scalars['Float']['output']>;
  base_lp_token_id?: Maybe<Scalars['Float']['output']>;
  base_token_id?: Maybe<Scalars['Float']['output']>;
  fee_decimals?: Maybe<Scalars['Float']['output']>;
  fixed_price_percent?: Maybe<Scalars['Float']['output']>;
  guide_price?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  lp_fee?: Maybe<Scalars['Float']['output']>;
  maintainer_fee?: Maybe<Scalars['Float']['output']>;
  orderbook_price_percent?: Maybe<Scalars['Float']['output']>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: Maybe<Scalars['Float']['output']>;
  quote_balance?: Maybe<Scalars['Float']['output']>;
  quote_balance_limit?: Maybe<Scalars['Float']['output']>;
  quote_lp_token_id?: Maybe<Scalars['Float']['output']>;
  quote_token_id?: Maybe<Scalars['Float']['output']>;
  r_status?: Maybe<Scalars['Float']['output']>;
  rwa_orderbook_id?: Maybe<Scalars['Float']['output']>;
  slippage_factor?: Maybe<Scalars['Float']['output']>;
  target_base_token_amount?: Maybe<Scalars['Float']['output']>;
  target_quote_token_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "dodo_mav" */
export type Dodo_Mav_Variance_Order_By = {
  appraisal_price?: InputMaybe<Order_By>;
  base_balance?: InputMaybe<Order_By>;
  base_balance_limit?: InputMaybe<Order_By>;
  base_lp_token_id?: InputMaybe<Order_By>;
  base_token_id?: InputMaybe<Order_By>;
  fee_decimals?: InputMaybe<Order_By>;
  fixed_price_percent?: InputMaybe<Order_By>;
  guide_price?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lp_fee?: InputMaybe<Order_By>;
  maintainer_fee?: InputMaybe<Order_By>;
  orderbook_price_percent?: InputMaybe<Order_By>;
  /** FIXED: 0\nDYNAMIC: 1 */
  price_model?: InputMaybe<Order_By>;
  quote_balance?: InputMaybe<Order_By>;
  quote_balance_limit?: InputMaybe<Order_By>;
  quote_lp_token_id?: InputMaybe<Order_By>;
  quote_token_id?: InputMaybe<Order_By>;
  r_status?: InputMaybe<Order_By>;
  rwa_orderbook_id?: InputMaybe<Order_By>;
  slippage_factor?: InputMaybe<Order_By>;
  target_base_token_amount?: InputMaybe<Order_By>;
  target_quote_token_amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "equiteez_user" */
export type Equiteez_User = {
  __typename?: 'equiteez_user';
  address: Scalars['String']['output'];
  /** An array relationship */
  balances: Array<Equiteez_User_Balance>;
  /** An aggregate relationship */
  balances_aggregate: Equiteez_User_Balance_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  kyc_blacklists: Array<Kyc_Blacklisted>;
  /** An aggregate relationship */
  kyc_blacklists_aggregate: Kyc_Blacklisted_Aggregate;
  /** An array relationship */
  kyc_members: Array<Kyc_Member>;
  /** An aggregate relationship */
  kyc_members_aggregate: Kyc_Member_Aggregate;
  /** An array relationship */
  kyc_registrars: Array<Kyc_Registrar>;
  /** An aggregate relationship */
  kyc_registrars_aggregate: Kyc_Registrar_Aggregate;
  /** An array relationship */
  kyc_whitelists: Array<Kyc_Whitelisted>;
  /** An aggregate relationship */
  kyc_whitelists_aggregate: Kyc_Whitelisted_Aggregate;
  /** An array relationship */
  marketplace_listings: Array<Marketplace_Listing>;
  /** An aggregate relationship */
  marketplace_listings_aggregate: Marketplace_Listing_Aggregate;
  /** An array relationship */
  marketplace_offers: Array<Marketplace_Offer>;
  /** An aggregate relationship */
  marketplace_offers_aggregate: Marketplace_Offer_Aggregate;
  /** An array relationship */
  super_admin_contract_admins: Array<Super_Admin_Contract_Admin>;
  /** An aggregate relationship */
  super_admin_contract_admins_aggregate: Super_Admin_Contract_Admin_Aggregate;
  /** An array relationship */
  super_admin_general_admins: Array<Super_Admin_General_Admin>;
  /** An aggregate relationship */
  super_admin_general_admins_aggregate: Super_Admin_General_Admin_Aggregate;
  /** An array relationship */
  super_admin_signatories: Array<Super_Admin_Signatory>;
  /** An aggregate relationship */
  super_admin_signatories_aggregate: Super_Admin_Signatory_Aggregate;
  /** An array relationship */
  token_transfer_receivers: Array<Equiteez_User_Token_Transfer>;
  /** An aggregate relationship */
  token_transfer_receivers_aggregate: Equiteez_User_Token_Transfer_Aggregate;
  /** An array relationship */
  token_transfer_senders: Array<Equiteez_User_Token_Transfer>;
  /** An aggregate relationship */
  token_transfer_senders_aggregate: Equiteez_User_Token_Transfer_Aggregate;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserBalancesArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_BlacklistsArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_Blacklists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_MembersArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_RegistrarsArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_Registrars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_WhitelistsArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserKyc_Whitelists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserMarketplace_ListingsArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserMarketplace_Listings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserMarketplace_OffersArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserMarketplace_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserSuper_Admin_Contract_AdminsArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserSuper_Admin_Contract_Admins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserSuper_Admin_General_AdminsArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserSuper_Admin_General_Admins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserSuper_Admin_SignatoriesArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserSuper_Admin_Signatories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserToken_Transfer_ReceiversArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserToken_Transfer_Receivers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserToken_Transfer_SendersArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "equiteez_user" */
export type Equiteez_UserToken_Transfer_Senders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};

/** aggregated selection of "equiteez_user" */
export type Equiteez_User_Aggregate = {
  __typename?: 'equiteez_user_aggregate';
  aggregate?: Maybe<Equiteez_User_Aggregate_Fields>;
  nodes: Array<Equiteez_User>;
};

/** aggregate fields of "equiteez_user" */
export type Equiteez_User_Aggregate_Fields = {
  __typename?: 'equiteez_user_aggregate_fields';
  avg?: Maybe<Equiteez_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Equiteez_User_Max_Fields>;
  min?: Maybe<Equiteez_User_Min_Fields>;
  stddev?: Maybe<Equiteez_User_Stddev_Fields>;
  stddev_pop?: Maybe<Equiteez_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Equiteez_User_Stddev_Samp_Fields>;
  sum?: Maybe<Equiteez_User_Sum_Fields>;
  var_pop?: Maybe<Equiteez_User_Var_Pop_Fields>;
  var_samp?: Maybe<Equiteez_User_Var_Samp_Fields>;
  variance?: Maybe<Equiteez_User_Variance_Fields>;
};


/** aggregate fields of "equiteez_user" */
export type Equiteez_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Equiteez_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Equiteez_User_Avg_Fields = {
  __typename?: 'equiteez_user_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "equiteez_user_balance" */
export type Equiteez_User_Balance = {
  __typename?: 'equiteez_user_balance';
  balance: Scalars['bigint']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  token: Token;
  token_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Equiteez_User;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "equiteez_user_balance" */
export type Equiteez_User_Balance_Aggregate = {
  __typename?: 'equiteez_user_balance_aggregate';
  aggregate?: Maybe<Equiteez_User_Balance_Aggregate_Fields>;
  nodes: Array<Equiteez_User_Balance>;
};

export type Equiteez_User_Balance_Aggregate_Bool_Exp = {
  count?: InputMaybe<Equiteez_User_Balance_Aggregate_Bool_Exp_Count>;
};

export type Equiteez_User_Balance_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "equiteez_user_balance" */
export type Equiteez_User_Balance_Aggregate_Fields = {
  __typename?: 'equiteez_user_balance_aggregate_fields';
  avg?: Maybe<Equiteez_User_Balance_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Equiteez_User_Balance_Max_Fields>;
  min?: Maybe<Equiteez_User_Balance_Min_Fields>;
  stddev?: Maybe<Equiteez_User_Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Equiteez_User_Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Equiteez_User_Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Equiteez_User_Balance_Sum_Fields>;
  var_pop?: Maybe<Equiteez_User_Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Equiteez_User_Balance_Var_Samp_Fields>;
  variance?: Maybe<Equiteez_User_Balance_Variance_Fields>;
};


/** aggregate fields of "equiteez_user_balance" */
export type Equiteez_User_Balance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Aggregate_Order_By = {
  avg?: InputMaybe<Equiteez_User_Balance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Equiteez_User_Balance_Max_Order_By>;
  min?: InputMaybe<Equiteez_User_Balance_Min_Order_By>;
  stddev?: InputMaybe<Equiteez_User_Balance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Equiteez_User_Balance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Equiteez_User_Balance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Equiteez_User_Balance_Sum_Order_By>;
  var_pop?: InputMaybe<Equiteez_User_Balance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Equiteez_User_Balance_Var_Samp_Order_By>;
  variance?: InputMaybe<Equiteez_User_Balance_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Equiteez_User_Balance_Avg_Fields = {
  __typename?: 'equiteez_user_balance_avg_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Avg_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "equiteez_user_balance". All fields are combined with a logical 'AND'. */
export type Equiteez_User_Balance_Bool_Exp = {
  _and?: InputMaybe<Array<Equiteez_User_Balance_Bool_Exp>>;
  _not?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
  _or?: InputMaybe<Array<Equiteez_User_Balance_Bool_Exp>>;
  balance?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Equiteez_User_Balance_Max_Fields = {
  __typename?: 'equiteez_user_balance_max_fields';
  balance?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Max_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Equiteez_User_Balance_Min_Fields = {
  __typename?: 'equiteez_user_balance_min_fields';
  balance?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Min_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "equiteez_user_balance". */
export type Equiteez_User_Balance_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "equiteez_user_balance" */
export enum Equiteez_User_Balance_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  Id = 'id',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Equiteez_User_Balance_Stddev_Fields = {
  __typename?: 'equiteez_user_balance_stddev_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Stddev_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Equiteez_User_Balance_Stddev_Pop_Fields = {
  __typename?: 'equiteez_user_balance_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Stddev_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Equiteez_User_Balance_Stddev_Samp_Fields = {
  __typename?: 'equiteez_user_balance_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Stddev_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "equiteez_user_balance" */
export type Equiteez_User_Balance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Equiteez_User_Balance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Equiteez_User_Balance_Stream_Cursor_Value_Input = {
  balance?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  token_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Equiteez_User_Balance_Sum_Fields = {
  __typename?: 'equiteez_user_balance_sum_fields';
  balance?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Sum_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Equiteez_User_Balance_Var_Pop_Fields = {
  __typename?: 'equiteez_user_balance_var_pop_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Var_Pop_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Equiteez_User_Balance_Var_Samp_Fields = {
  __typename?: 'equiteez_user_balance_var_samp_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Var_Samp_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Equiteez_User_Balance_Variance_Fields = {
  __typename?: 'equiteez_user_balance_variance_fields';
  balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "equiteez_user_balance" */
export type Equiteez_User_Balance_Variance_Order_By = {
  balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "equiteez_user". All fields are combined with a logical 'AND'. */
export type Equiteez_User_Bool_Exp = {
  _and?: InputMaybe<Array<Equiteez_User_Bool_Exp>>;
  _not?: InputMaybe<Equiteez_User_Bool_Exp>;
  _or?: InputMaybe<Array<Equiteez_User_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balances?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
  balances_aggregate?: InputMaybe<Equiteez_User_Balance_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kyc_blacklists?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
  kyc_blacklists_aggregate?: InputMaybe<Kyc_Blacklisted_Aggregate_Bool_Exp>;
  kyc_members?: InputMaybe<Kyc_Member_Bool_Exp>;
  kyc_members_aggregate?: InputMaybe<Kyc_Member_Aggregate_Bool_Exp>;
  kyc_registrars?: InputMaybe<Kyc_Registrar_Bool_Exp>;
  kyc_registrars_aggregate?: InputMaybe<Kyc_Registrar_Aggregate_Bool_Exp>;
  kyc_whitelists?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
  kyc_whitelists_aggregate?: InputMaybe<Kyc_Whitelisted_Aggregate_Bool_Exp>;
  marketplace_listings?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  marketplace_listings_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp>;
  marketplace_offers?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  marketplace_offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp>;
  super_admin_contract_admins?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
  super_admin_contract_admins_aggregate?: InputMaybe<Super_Admin_Contract_Admin_Aggregate_Bool_Exp>;
  super_admin_general_admins?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
  super_admin_general_admins_aggregate?: InputMaybe<Super_Admin_General_Admin_Aggregate_Bool_Exp>;
  super_admin_signatories?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
  super_admin_signatories_aggregate?: InputMaybe<Super_Admin_Signatory_Aggregate_Bool_Exp>;
  token_transfer_receivers?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
  token_transfer_receivers_aggregate?: InputMaybe<Equiteez_User_Token_Transfer_Aggregate_Bool_Exp>;
  token_transfer_senders?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
  token_transfer_senders_aggregate?: InputMaybe<Equiteez_User_Token_Transfer_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Equiteez_User_Max_Fields = {
  __typename?: 'equiteez_user_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Equiteez_User_Min_Fields = {
  __typename?: 'equiteez_user_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "equiteez_user". */
export type Equiteez_User_Order_By = {
  address?: InputMaybe<Order_By>;
  balances_aggregate?: InputMaybe<Equiteez_User_Balance_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_blacklists_aggregate?: InputMaybe<Kyc_Blacklisted_Aggregate_Order_By>;
  kyc_members_aggregate?: InputMaybe<Kyc_Member_Aggregate_Order_By>;
  kyc_registrars_aggregate?: InputMaybe<Kyc_Registrar_Aggregate_Order_By>;
  kyc_whitelists_aggregate?: InputMaybe<Kyc_Whitelisted_Aggregate_Order_By>;
  marketplace_listings_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Order_By>;
  marketplace_offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Order_By>;
  super_admin_contract_admins_aggregate?: InputMaybe<Super_Admin_Contract_Admin_Aggregate_Order_By>;
  super_admin_general_admins_aggregate?: InputMaybe<Super_Admin_General_Admin_Aggregate_Order_By>;
  super_admin_signatories_aggregate?: InputMaybe<Super_Admin_Signatory_Aggregate_Order_By>;
  token_transfer_receivers_aggregate?: InputMaybe<Equiteez_User_Token_Transfer_Aggregate_Order_By>;
  token_transfer_senders_aggregate?: InputMaybe<Equiteez_User_Token_Transfer_Aggregate_Order_By>;
};

/** select columns of table "equiteez_user" */
export enum Equiteez_User_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Equiteez_User_Stddev_Fields = {
  __typename?: 'equiteez_user_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Equiteez_User_Stddev_Pop_Fields = {
  __typename?: 'equiteez_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Equiteez_User_Stddev_Samp_Fields = {
  __typename?: 'equiteez_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "equiteez_user" */
export type Equiteez_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Equiteez_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Equiteez_User_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Equiteez_User_Sum_Fields = {
  __typename?: 'equiteez_user_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer = {
  __typename?: 'equiteez_user_token_transfer';
  amount: Scalars['bigint']['output'];
  /** An object relationship */
  from_user?: Maybe<Equiteez_User>;
  from_user_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  level: Scalars['bigint']['output'];
  timestamp: Scalars['timestamptz']['output'];
  /** An object relationship */
  to_user?: Maybe<Equiteez_User>;
  to_user_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  token: Token;
  token_id: Scalars['Int']['output'];
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type: Scalars['smallint']['output'];
};

/** aggregated selection of "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Aggregate = {
  __typename?: 'equiteez_user_token_transfer_aggregate';
  aggregate?: Maybe<Equiteez_User_Token_Transfer_Aggregate_Fields>;
  nodes: Array<Equiteez_User_Token_Transfer>;
};

export type Equiteez_User_Token_Transfer_Aggregate_Bool_Exp = {
  count?: InputMaybe<Equiteez_User_Token_Transfer_Aggregate_Bool_Exp_Count>;
};

export type Equiteez_User_Token_Transfer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Aggregate_Fields = {
  __typename?: 'equiteez_user_token_transfer_aggregate_fields';
  avg?: Maybe<Equiteez_User_Token_Transfer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Equiteez_User_Token_Transfer_Max_Fields>;
  min?: Maybe<Equiteez_User_Token_Transfer_Min_Fields>;
  stddev?: Maybe<Equiteez_User_Token_Transfer_Stddev_Fields>;
  stddev_pop?: Maybe<Equiteez_User_Token_Transfer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Equiteez_User_Token_Transfer_Stddev_Samp_Fields>;
  sum?: Maybe<Equiteez_User_Token_Transfer_Sum_Fields>;
  var_pop?: Maybe<Equiteez_User_Token_Transfer_Var_Pop_Fields>;
  var_samp?: Maybe<Equiteez_User_Token_Transfer_Var_Samp_Fields>;
  variance?: Maybe<Equiteez_User_Token_Transfer_Variance_Fields>;
};


/** aggregate fields of "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<Equiteez_User_Token_Transfer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Equiteez_User_Token_Transfer_Max_Order_By>;
  min?: InputMaybe<Equiteez_User_Token_Transfer_Min_Order_By>;
  stddev?: InputMaybe<Equiteez_User_Token_Transfer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Equiteez_User_Token_Transfer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Equiteez_User_Token_Transfer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Equiteez_User_Token_Transfer_Sum_Order_By>;
  var_pop?: InputMaybe<Equiteez_User_Token_Transfer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Equiteez_User_Token_Transfer_Var_Samp_Order_By>;
  variance?: InputMaybe<Equiteez_User_Token_Transfer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Equiteez_User_Token_Transfer_Avg_Fields = {
  __typename?: 'equiteez_user_token_transfer_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  from_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  to_user_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "equiteez_user_token_transfer". All fields are combined with a logical 'AND'. */
export type Equiteez_User_Token_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<Equiteez_User_Token_Transfer_Bool_Exp>>;
  _not?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
  _or?: InputMaybe<Array<Equiteez_User_Token_Transfer_Bool_Exp>>;
  amount?: InputMaybe<Bigint_Comparison_Exp>;
  from_user?: InputMaybe<Equiteez_User_Bool_Exp>;
  from_user_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  level?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  to_user?: InputMaybe<Equiteez_User_Bool_Exp>;
  to_user_id?: InputMaybe<Int_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
  transfer_type?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Equiteez_User_Token_Transfer_Max_Fields = {
  __typename?: 'equiteez_user_token_transfer_max_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  from_user_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  to_user_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['smallint']['output']>;
};

/** order by max() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Equiteez_User_Token_Transfer_Min_Fields = {
  __typename?: 'equiteez_user_token_transfer_min_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  from_user_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['bigint']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  to_user_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['smallint']['output']>;
};

/** order by min() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "equiteez_user_token_transfer". */
export type Equiteez_User_Token_Transfer_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user?: InputMaybe<Equiteez_User_Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  to_user?: InputMaybe<Equiteez_User_Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
  transfer_type?: InputMaybe<Order_By>;
};

/** select columns of table "equiteez_user_token_transfer" */
export enum Equiteez_User_Token_Transfer_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  FromUserId = 'from_user_id',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ToUserId = 'to_user_id',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TransferType = 'transfer_type'
}

/** aggregate stddev on columns */
export type Equiteez_User_Token_Transfer_Stddev_Fields = {
  __typename?: 'equiteez_user_token_transfer_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  from_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  to_user_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Equiteez_User_Token_Transfer_Stddev_Pop_Fields = {
  __typename?: 'equiteez_user_token_transfer_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  from_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  to_user_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Equiteez_User_Token_Transfer_Stddev_Samp_Fields = {
  __typename?: 'equiteez_user_token_transfer_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  from_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  to_user_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Equiteez_User_Token_Transfer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Equiteez_User_Token_Transfer_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['bigint']['input']>;
  from_user_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['bigint']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  to_user_id?: InputMaybe<Scalars['Int']['input']>;
  token_id?: InputMaybe<Scalars['Int']['input']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Equiteez_User_Token_Transfer_Sum_Fields = {
  __typename?: 'equiteez_user_token_transfer_sum_fields';
  amount?: Maybe<Scalars['bigint']['output']>;
  from_user_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['bigint']['output']>;
  to_user_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Equiteez_User_Token_Transfer_Var_Pop_Fields = {
  __typename?: 'equiteez_user_token_transfer_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  from_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  to_user_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Equiteez_User_Token_Transfer_Var_Samp_Fields = {
  __typename?: 'equiteez_user_token_transfer_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  from_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  to_user_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Equiteez_User_Token_Transfer_Variance_Fields = {
  __typename?: 'equiteez_user_token_transfer_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  from_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  to_user_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "equiteez_user_token_transfer" */
export type Equiteez_User_Token_Transfer_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  /** TRANSFER: 0\nMINT: 1\nBURN: 2 */
  transfer_type?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Equiteez_User_Var_Pop_Fields = {
  __typename?: 'equiteez_user_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Equiteez_User_Var_Samp_Fields = {
  __typename?: 'equiteez_user_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Equiteez_User_Variance_Fields = {
  __typename?: 'equiteez_user_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "kyc" */
export type Kyc = {
  __typename?: 'kyc';
  address: Scalars['String']['output'];
  /** An array relationship */
  blacklisted: Array<Kyc_Blacklisted>;
  /** An aggregate relationship */
  blacklisted_aggregate: Kyc_Blacklisted_Aggregate;
  /** An array relationship */
  country_transfer_rules: Array<Kyc_Country_Transfer_Rule>;
  /** An aggregate relationship */
  country_transfer_rules_aggregate: Kyc_Country_Transfer_Rule_Aggregate;
  /** An array relationship */
  entrypoint_status: Array<Kyc_Entrypoint_Status>;
  /** An aggregate relationship */
  entrypoint_status_aggregate: Kyc_Entrypoint_Status_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  lambdas: Array<Kyc_Lambda>;
  /** An aggregate relationship */
  lambdas_aggregate: Kyc_Lambda_Aggregate;
  /** An array relationship */
  members: Array<Kyc_Member>;
  /** An aggregate relationship */
  members_aggregate: Kyc_Member_Aggregate;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orderbooks: Array<Orderbook>;
  /** An aggregate relationship */
  orderbooks_aggregate: Orderbook_Aggregate;
  /** An array relationship */
  registrars: Array<Kyc_Registrar>;
  /** An aggregate relationship */
  registrars_aggregate: Kyc_Registrar_Aggregate;
  super_admin?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  valid_inputs: Array<Kyc_Valid_Input>;
  /** An aggregate relationship */
  valid_inputs_aggregate: Kyc_Valid_Input_Aggregate;
  /** An array relationship */
  whitelisted: Array<Kyc_Whitelisted>;
  /** An aggregate relationship */
  whitelisted_aggregate: Kyc_Whitelisted_Aggregate;
};


/** columns and relationships of "kyc" */
export type KycBlacklistedArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycBlacklisted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycCountry_Transfer_RulesArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Order_By>>;
  where?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycCountry_Transfer_Rules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Order_By>>;
  where?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycEntrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycEntrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycLambdasArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Lambda_Order_By>>;
  where?: InputMaybe<Kyc_Lambda_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycLambdas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Lambda_Order_By>>;
  where?: InputMaybe<Kyc_Lambda_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycMembersArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "kyc" */
export type KycOrderbooksArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycOrderbooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycRegistrarsArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycRegistrars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycValid_InputsArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Valid_Input_Order_By>>;
  where?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycValid_Inputs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Valid_Input_Order_By>>;
  where?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycWhitelistedArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


/** columns and relationships of "kyc" */
export type KycWhitelisted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};

/** aggregated selection of "kyc" */
export type Kyc_Aggregate = {
  __typename?: 'kyc_aggregate';
  aggregate?: Maybe<Kyc_Aggregate_Fields>;
  nodes: Array<Kyc>;
};

/** aggregate fields of "kyc" */
export type Kyc_Aggregate_Fields = {
  __typename?: 'kyc_aggregate_fields';
  avg?: Maybe<Kyc_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Max_Fields>;
  min?: Maybe<Kyc_Min_Fields>;
  stddev?: Maybe<Kyc_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Sum_Fields>;
  var_pop?: Maybe<Kyc_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Variance_Fields>;
};


/** aggregate fields of "kyc" */
export type Kyc_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Kyc_Avg_Fields = {
  __typename?: 'kyc_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "kyc_blacklisted" */
export type Kyc_Blacklisted = {
  __typename?: 'kyc_blacklisted';
  id: Scalars['Int']['output'];
  /** An object relationship */
  kyc: Kyc;
  kyc_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Equiteez_User;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "kyc_blacklisted" */
export type Kyc_Blacklisted_Aggregate = {
  __typename?: 'kyc_blacklisted_aggregate';
  aggregate?: Maybe<Kyc_Blacklisted_Aggregate_Fields>;
  nodes: Array<Kyc_Blacklisted>;
};

export type Kyc_Blacklisted_Aggregate_Bool_Exp = {
  count?: InputMaybe<Kyc_Blacklisted_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Blacklisted_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_blacklisted" */
export type Kyc_Blacklisted_Aggregate_Fields = {
  __typename?: 'kyc_blacklisted_aggregate_fields';
  avg?: Maybe<Kyc_Blacklisted_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Blacklisted_Max_Fields>;
  min?: Maybe<Kyc_Blacklisted_Min_Fields>;
  stddev?: Maybe<Kyc_Blacklisted_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Blacklisted_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Blacklisted_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Blacklisted_Sum_Fields>;
  var_pop?: Maybe<Kyc_Blacklisted_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Blacklisted_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Blacklisted_Variance_Fields>;
};


/** aggregate fields of "kyc_blacklisted" */
export type Kyc_Blacklisted_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Blacklisted_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Blacklisted_Max_Order_By>;
  min?: InputMaybe<Kyc_Blacklisted_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Blacklisted_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Blacklisted_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Blacklisted_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Blacklisted_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Blacklisted_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Blacklisted_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Blacklisted_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Blacklisted_Avg_Fields = {
  __typename?: 'kyc_blacklisted_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_blacklisted". All fields are combined with a logical 'AND'. */
export type Kyc_Blacklisted_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Blacklisted_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Blacklisted_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kyc?: InputMaybe<Kyc_Bool_Exp>;
  kyc_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Blacklisted_Max_Fields = {
  __typename?: 'kyc_blacklisted_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Blacklisted_Min_Fields = {
  __typename?: 'kyc_blacklisted_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_blacklisted". */
export type Kyc_Blacklisted_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc?: InputMaybe<Kyc_Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_blacklisted" */
export enum Kyc_Blacklisted_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  KycId = 'kyc_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Kyc_Blacklisted_Stddev_Fields = {
  __typename?: 'kyc_blacklisted_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Blacklisted_Stddev_Pop_Fields = {
  __typename?: 'kyc_blacklisted_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Blacklisted_Stddev_Samp_Fields = {
  __typename?: 'kyc_blacklisted_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_blacklisted" */
export type Kyc_Blacklisted_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Blacklisted_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Blacklisted_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  kyc_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Blacklisted_Sum_Fields = {
  __typename?: 'kyc_blacklisted_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Blacklisted_Var_Pop_Fields = {
  __typename?: 'kyc_blacklisted_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Blacklisted_Var_Samp_Fields = {
  __typename?: 'kyc_blacklisted_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Blacklisted_Variance_Fields = {
  __typename?: 'kyc_blacklisted_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_blacklisted" */
export type Kyc_Blacklisted_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc". All fields are combined with a logical 'AND'. */
export type Kyc_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  blacklisted?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
  blacklisted_aggregate?: InputMaybe<Kyc_Blacklisted_Aggregate_Bool_Exp>;
  country_transfer_rules?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
  country_transfer_rules_aggregate?: InputMaybe<Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp>;
  entrypoint_status?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
  entrypoint_status_aggregate?: InputMaybe<Kyc_Entrypoint_Status_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambdas?: InputMaybe<Kyc_Lambda_Bool_Exp>;
  lambdas_aggregate?: InputMaybe<Kyc_Lambda_Aggregate_Bool_Exp>;
  members?: InputMaybe<Kyc_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Kyc_Member_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  new_super_admin?: InputMaybe<String_Comparison_Exp>;
  orderbooks?: InputMaybe<Orderbook_Bool_Exp>;
  orderbooks_aggregate?: InputMaybe<Orderbook_Aggregate_Bool_Exp>;
  registrars?: InputMaybe<Kyc_Registrar_Bool_Exp>;
  registrars_aggregate?: InputMaybe<Kyc_Registrar_Aggregate_Bool_Exp>;
  super_admin?: InputMaybe<String_Comparison_Exp>;
  valid_inputs?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
  valid_inputs_aggregate?: InputMaybe<Kyc_Valid_Input_Aggregate_Bool_Exp>;
  whitelisted?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
  whitelisted_aggregate?: InputMaybe<Kyc_Whitelisted_Aggregate_Bool_Exp>;
};

/** columns and relationships of "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule = {
  __typename?: 'kyc_country_transfer_rule';
  blacklist_countries: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  kyc: Kyc;
  kyc_id: Scalars['Int']['output'];
  receiving_frozen: Scalars['Boolean']['output'];
  sending_frozen: Scalars['Boolean']['output'];
  whitelist_countries: Scalars['String']['output'];
};

/** aggregated selection of "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Aggregate = {
  __typename?: 'kyc_country_transfer_rule_aggregate';
  aggregate?: Maybe<Kyc_Country_Transfer_Rule_Aggregate_Fields>;
  nodes: Array<Kyc_Country_Transfer_Rule>;
};

export type Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_And = {
  arguments: Kyc_Country_Transfer_Rule_Select_Column_Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Kyc_Country_Transfer_Rule_Select_Column_Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Aggregate_Fields = {
  __typename?: 'kyc_country_transfer_rule_aggregate_fields';
  avg?: Maybe<Kyc_Country_Transfer_Rule_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Country_Transfer_Rule_Max_Fields>;
  min?: Maybe<Kyc_Country_Transfer_Rule_Min_Fields>;
  stddev?: Maybe<Kyc_Country_Transfer_Rule_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Country_Transfer_Rule_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Country_Transfer_Rule_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Country_Transfer_Rule_Sum_Fields>;
  var_pop?: Maybe<Kyc_Country_Transfer_Rule_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Country_Transfer_Rule_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Country_Transfer_Rule_Variance_Fields>;
};


/** aggregate fields of "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Country_Transfer_Rule_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Country_Transfer_Rule_Max_Order_By>;
  min?: InputMaybe<Kyc_Country_Transfer_Rule_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Country_Transfer_Rule_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Country_Transfer_Rule_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Country_Transfer_Rule_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Country_Transfer_Rule_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Country_Transfer_Rule_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Country_Transfer_Rule_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Country_Transfer_Rule_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Country_Transfer_Rule_Avg_Fields = {
  __typename?: 'kyc_country_transfer_rule_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_country_transfer_rule". All fields are combined with a logical 'AND'. */
export type Kyc_Country_Transfer_Rule_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Bool_Exp>>;
  blacklist_countries?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kyc?: InputMaybe<Kyc_Bool_Exp>;
  kyc_id?: InputMaybe<Int_Comparison_Exp>;
  receiving_frozen?: InputMaybe<Boolean_Comparison_Exp>;
  sending_frozen?: InputMaybe<Boolean_Comparison_Exp>;
  whitelist_countries?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Country_Transfer_Rule_Max_Fields = {
  __typename?: 'kyc_country_transfer_rule_max_fields';
  blacklist_countries?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  whitelist_countries?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Max_Order_By = {
  blacklist_countries?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  whitelist_countries?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Country_Transfer_Rule_Min_Fields = {
  __typename?: 'kyc_country_transfer_rule_min_fields';
  blacklist_countries?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  whitelist_countries?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Min_Order_By = {
  blacklist_countries?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  whitelist_countries?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_country_transfer_rule". */
export type Kyc_Country_Transfer_Rule_Order_By = {
  blacklist_countries?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc?: InputMaybe<Kyc_Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  receiving_frozen?: InputMaybe<Order_By>;
  sending_frozen?: InputMaybe<Order_By>;
  whitelist_countries?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_country_transfer_rule" */
export enum Kyc_Country_Transfer_Rule_Select_Column {
  /** column name */
  BlacklistCountries = 'blacklist_countries',
  /** column name */
  Country = 'country',
  /** column name */
  Id = 'id',
  /** column name */
  KycId = 'kyc_id',
  /** column name */
  ReceivingFrozen = 'receiving_frozen',
  /** column name */
  SendingFrozen = 'sending_frozen',
  /** column name */
  WhitelistCountries = 'whitelist_countries'
}

/** select "kyc_country_transfer_rule_aggregate_bool_exp_bool_and_arguments_columns" columns of table "kyc_country_transfer_rule" */
export enum Kyc_Country_Transfer_Rule_Select_Column_Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  ReceivingFrozen = 'receiving_frozen',
  /** column name */
  SendingFrozen = 'sending_frozen'
}

/** select "kyc_country_transfer_rule_aggregate_bool_exp_bool_or_arguments_columns" columns of table "kyc_country_transfer_rule" */
export enum Kyc_Country_Transfer_Rule_Select_Column_Kyc_Country_Transfer_Rule_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  ReceivingFrozen = 'receiving_frozen',
  /** column name */
  SendingFrozen = 'sending_frozen'
}

/** aggregate stddev on columns */
export type Kyc_Country_Transfer_Rule_Stddev_Fields = {
  __typename?: 'kyc_country_transfer_rule_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Country_Transfer_Rule_Stddev_Pop_Fields = {
  __typename?: 'kyc_country_transfer_rule_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Country_Transfer_Rule_Stddev_Samp_Fields = {
  __typename?: 'kyc_country_transfer_rule_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Country_Transfer_Rule_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Country_Transfer_Rule_Stream_Cursor_Value_Input = {
  blacklist_countries?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  kyc_id?: InputMaybe<Scalars['Int']['input']>;
  receiving_frozen?: InputMaybe<Scalars['Boolean']['input']>;
  sending_frozen?: InputMaybe<Scalars['Boolean']['input']>;
  whitelist_countries?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Country_Transfer_Rule_Sum_Fields = {
  __typename?: 'kyc_country_transfer_rule_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Country_Transfer_Rule_Var_Pop_Fields = {
  __typename?: 'kyc_country_transfer_rule_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Country_Transfer_Rule_Var_Samp_Fields = {
  __typename?: 'kyc_country_transfer_rule_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Country_Transfer_Rule_Variance_Fields = {
  __typename?: 'kyc_country_transfer_rule_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_country_transfer_rule" */
export type Kyc_Country_Transfer_Rule_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status = {
  __typename?: 'kyc_entrypoint_status';
  /** An object relationship */
  contract: Kyc;
  contract_id: Scalars['Int']['output'];
  entrypoint: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paused: Scalars['Boolean']['output'];
};

/** aggregated selection of "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Aggregate = {
  __typename?: 'kyc_entrypoint_status_aggregate';
  aggregate?: Maybe<Kyc_Entrypoint_Status_Aggregate_Fields>;
  nodes: Array<Kyc_Entrypoint_Status>;
};

export type Kyc_Entrypoint_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Kyc_Entrypoint_Status_Select_Column_Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Kyc_Entrypoint_Status_Select_Column_Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Aggregate_Fields = {
  __typename?: 'kyc_entrypoint_status_aggregate_fields';
  avg?: Maybe<Kyc_Entrypoint_Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Entrypoint_Status_Max_Fields>;
  min?: Maybe<Kyc_Entrypoint_Status_Min_Fields>;
  stddev?: Maybe<Kyc_Entrypoint_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Entrypoint_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Entrypoint_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Entrypoint_Status_Sum_Fields>;
  var_pop?: Maybe<Kyc_Entrypoint_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Entrypoint_Status_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Entrypoint_Status_Variance_Fields>;
};


/** aggregate fields of "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Entrypoint_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Entrypoint_Status_Max_Order_By>;
  min?: InputMaybe<Kyc_Entrypoint_Status_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Entrypoint_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Entrypoint_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Entrypoint_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Entrypoint_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Entrypoint_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Entrypoint_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Entrypoint_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Entrypoint_Status_Avg_Fields = {
  __typename?: 'kyc_entrypoint_status_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_entrypoint_status". All fields are combined with a logical 'AND'. */
export type Kyc_Entrypoint_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Entrypoint_Status_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Entrypoint_Status_Bool_Exp>>;
  contract?: InputMaybe<Kyc_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  entrypoint?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  paused?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Entrypoint_Status_Max_Fields = {
  __typename?: 'kyc_entrypoint_status_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  entrypoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Entrypoint_Status_Min_Fields = {
  __typename?: 'kyc_entrypoint_status_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  entrypoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_entrypoint_status". */
export type Kyc_Entrypoint_Status_Order_By = {
  contract?: InputMaybe<Kyc_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  paused?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_entrypoint_status" */
export enum Kyc_Entrypoint_Status_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Entrypoint = 'entrypoint',
  /** column name */
  Id = 'id',
  /** column name */
  Paused = 'paused'
}

/** select "kyc_entrypoint_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "kyc_entrypoint_status" */
export enum Kyc_Entrypoint_Status_Select_Column_Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Paused = 'paused'
}

/** select "kyc_entrypoint_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "kyc_entrypoint_status" */
export enum Kyc_Entrypoint_Status_Select_Column_Kyc_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Paused = 'paused'
}

/** aggregate stddev on columns */
export type Kyc_Entrypoint_Status_Stddev_Fields = {
  __typename?: 'kyc_entrypoint_status_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Entrypoint_Status_Stddev_Pop_Fields = {
  __typename?: 'kyc_entrypoint_status_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Entrypoint_Status_Stddev_Samp_Fields = {
  __typename?: 'kyc_entrypoint_status_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Entrypoint_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Entrypoint_Status_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  entrypoint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  paused?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Entrypoint_Status_Sum_Fields = {
  __typename?: 'kyc_entrypoint_status_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Entrypoint_Status_Var_Pop_Fields = {
  __typename?: 'kyc_entrypoint_status_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Entrypoint_Status_Var_Samp_Fields = {
  __typename?: 'kyc_entrypoint_status_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Entrypoint_Status_Variance_Fields = {
  __typename?: 'kyc_entrypoint_status_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_entrypoint_status" */
export type Kyc_Entrypoint_Status_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "kyc_lambda" */
export type Kyc_Lambda = {
  __typename?: 'kyc_lambda';
  /** An object relationship */
  contract: Kyc;
  contract_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lambda_bytes: Scalars['String']['output'];
  lambda_name: Scalars['String']['output'];
  last_updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "kyc_lambda" */
export type Kyc_Lambda_Aggregate = {
  __typename?: 'kyc_lambda_aggregate';
  aggregate?: Maybe<Kyc_Lambda_Aggregate_Fields>;
  nodes: Array<Kyc_Lambda>;
};

export type Kyc_Lambda_Aggregate_Bool_Exp = {
  count?: InputMaybe<Kyc_Lambda_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Lambda_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Lambda_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_lambda" */
export type Kyc_Lambda_Aggregate_Fields = {
  __typename?: 'kyc_lambda_aggregate_fields';
  avg?: Maybe<Kyc_Lambda_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Lambda_Max_Fields>;
  min?: Maybe<Kyc_Lambda_Min_Fields>;
  stddev?: Maybe<Kyc_Lambda_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Lambda_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Lambda_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Lambda_Sum_Fields>;
  var_pop?: Maybe<Kyc_Lambda_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Lambda_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Lambda_Variance_Fields>;
};


/** aggregate fields of "kyc_lambda" */
export type Kyc_Lambda_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_lambda" */
export type Kyc_Lambda_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Lambda_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Lambda_Max_Order_By>;
  min?: InputMaybe<Kyc_Lambda_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Lambda_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Lambda_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Lambda_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Lambda_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Lambda_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Lambda_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Lambda_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Lambda_Avg_Fields = {
  __typename?: 'kyc_lambda_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_lambda". All fields are combined with a logical 'AND'. */
export type Kyc_Lambda_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Lambda_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Lambda_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Lambda_Bool_Exp>>;
  contract?: InputMaybe<Kyc_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambda_bytes?: InputMaybe<String_Comparison_Exp>;
  lambda_name?: InputMaybe<String_Comparison_Exp>;
  last_updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Lambda_Max_Fields = {
  __typename?: 'kyc_lambda_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Lambda_Min_Fields = {
  __typename?: 'kyc_lambda_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_lambda". */
export type Kyc_Lambda_Order_By = {
  contract?: InputMaybe<Kyc_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_lambda" */
export enum Kyc_Lambda_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  LambdaBytes = 'lambda_bytes',
  /** column name */
  LambdaName = 'lambda_name',
  /** column name */
  LastUpdatedAt = 'last_updated_at'
}

/** aggregate stddev on columns */
export type Kyc_Lambda_Stddev_Fields = {
  __typename?: 'kyc_lambda_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Lambda_Stddev_Pop_Fields = {
  __typename?: 'kyc_lambda_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Lambda_Stddev_Samp_Fields = {
  __typename?: 'kyc_lambda_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_lambda" */
export type Kyc_Lambda_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Lambda_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Lambda_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lambda_bytes?: InputMaybe<Scalars['String']['input']>;
  lambda_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Lambda_Sum_Fields = {
  __typename?: 'kyc_lambda_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Lambda_Var_Pop_Fields = {
  __typename?: 'kyc_lambda_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Lambda_Var_Samp_Fields = {
  __typename?: 'kyc_lambda_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Lambda_Variance_Fields = {
  __typename?: 'kyc_lambda_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_lambda" */
export type Kyc_Lambda_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Kyc_Max_Fields = {
  __typename?: 'kyc_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "kyc_member" */
export type Kyc_Member = {
  __typename?: 'kyc_member';
  country?: Maybe<Scalars['String']['output']>;
  expire_at?: Maybe<Scalars['timestamptz']['output']>;
  frozen: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  investor_type?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  kyc: Kyc;
  kyc_id: Scalars['Int']['output'];
  /** An object relationship */
  kyc_registrar?: Maybe<Kyc_Registrar>;
  kyc_registrar_id?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user?: Maybe<Equiteez_User>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "kyc_member" */
export type Kyc_Member_Aggregate = {
  __typename?: 'kyc_member_aggregate';
  aggregate?: Maybe<Kyc_Member_Aggregate_Fields>;
  nodes: Array<Kyc_Member>;
};

export type Kyc_Member_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Kyc_Member_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Kyc_Member_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Kyc_Member_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Member_Aggregate_Bool_Exp_Bool_And = {
  arguments: Kyc_Member_Select_Column_Kyc_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Member_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Kyc_Member_Select_Column_Kyc_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_member" */
export type Kyc_Member_Aggregate_Fields = {
  __typename?: 'kyc_member_aggregate_fields';
  avg?: Maybe<Kyc_Member_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Member_Max_Fields>;
  min?: Maybe<Kyc_Member_Min_Fields>;
  stddev?: Maybe<Kyc_Member_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Member_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Member_Sum_Fields>;
  var_pop?: Maybe<Kyc_Member_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Member_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Member_Variance_Fields>;
};


/** aggregate fields of "kyc_member" */
export type Kyc_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_member" */
export type Kyc_Member_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Member_Max_Order_By>;
  min?: InputMaybe<Kyc_Member_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Member_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Member_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Member_Avg_Fields = {
  __typename?: 'kyc_member_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_member" */
export type Kyc_Member_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_member". All fields are combined with a logical 'AND'. */
export type Kyc_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Member_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Member_Bool_Exp>>;
  country?: InputMaybe<String_Comparison_Exp>;
  expire_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  frozen?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investor_type?: InputMaybe<String_Comparison_Exp>;
  kyc?: InputMaybe<Kyc_Bool_Exp>;
  kyc_id?: InputMaybe<Int_Comparison_Exp>;
  kyc_registrar?: InputMaybe<Kyc_Registrar_Bool_Exp>;
  kyc_registrar_id?: InputMaybe<Int_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Member_Max_Fields = {
  __typename?: 'kyc_member_max_fields';
  country?: Maybe<Scalars['String']['output']>;
  expire_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  investor_type?: Maybe<Scalars['String']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "kyc_member" */
export type Kyc_Member_Max_Order_By = {
  country?: InputMaybe<Order_By>;
  expire_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_type?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Member_Min_Fields = {
  __typename?: 'kyc_member_min_fields';
  country?: Maybe<Scalars['String']['output']>;
  expire_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  investor_type?: Maybe<Scalars['String']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "kyc_member" */
export type Kyc_Member_Min_Order_By = {
  country?: InputMaybe<Order_By>;
  expire_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_type?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_member". */
export type Kyc_Member_Order_By = {
  country?: InputMaybe<Order_By>;
  expire_at?: InputMaybe<Order_By>;
  frozen?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_type?: InputMaybe<Order_By>;
  kyc?: InputMaybe<Kyc_Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar?: InputMaybe<Kyc_Registrar_Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_member" */
export enum Kyc_Member_Select_Column {
  /** column name */
  Country = 'country',
  /** column name */
  ExpireAt = 'expire_at',
  /** column name */
  Frozen = 'frozen',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorType = 'investor_type',
  /** column name */
  KycId = 'kyc_id',
  /** column name */
  KycRegistrarId = 'kyc_registrar_id',
  /** column name */
  Region = 'region',
  /** column name */
  UserId = 'user_id'
}

/** select "kyc_member_aggregate_bool_exp_bool_and_arguments_columns" columns of table "kyc_member" */
export enum Kyc_Member_Select_Column_Kyc_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Frozen = 'frozen'
}

/** select "kyc_member_aggregate_bool_exp_bool_or_arguments_columns" columns of table "kyc_member" */
export enum Kyc_Member_Select_Column_Kyc_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Frozen = 'frozen'
}

/** aggregate stddev on columns */
export type Kyc_Member_Stddev_Fields = {
  __typename?: 'kyc_member_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_member" */
export type Kyc_Member_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Member_Stddev_Pop_Fields = {
  __typename?: 'kyc_member_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_member" */
export type Kyc_Member_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Member_Stddev_Samp_Fields = {
  __typename?: 'kyc_member_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_member" */
export type Kyc_Member_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_member" */
export type Kyc_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Member_Stream_Cursor_Value_Input = {
  country?: InputMaybe<Scalars['String']['input']>;
  expire_at?: InputMaybe<Scalars['timestamptz']['input']>;
  frozen?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  investor_type?: InputMaybe<Scalars['String']['input']>;
  kyc_id?: InputMaybe<Scalars['Int']['input']>;
  kyc_registrar_id?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Member_Sum_Fields = {
  __typename?: 'kyc_member_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_member" */
export type Kyc_Member_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Member_Var_Pop_Fields = {
  __typename?: 'kyc_member_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_member" */
export type Kyc_Member_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Member_Var_Samp_Fields = {
  __typename?: 'kyc_member_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_member" */
export type Kyc_Member_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Member_Variance_Fields = {
  __typename?: 'kyc_member_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  kyc_registrar_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_member" */
export type Kyc_Member_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  kyc_registrar_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Min_Fields = {
  __typename?: 'kyc_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "kyc". */
export type Kyc_Order_By = {
  address?: InputMaybe<Order_By>;
  blacklisted_aggregate?: InputMaybe<Kyc_Blacklisted_Aggregate_Order_By>;
  country_transfer_rules_aggregate?: InputMaybe<Kyc_Country_Transfer_Rule_Aggregate_Order_By>;
  entrypoint_status_aggregate?: InputMaybe<Kyc_Entrypoint_Status_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lambdas_aggregate?: InputMaybe<Kyc_Lambda_Aggregate_Order_By>;
  members_aggregate?: InputMaybe<Kyc_Member_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  orderbooks_aggregate?: InputMaybe<Orderbook_Aggregate_Order_By>;
  registrars_aggregate?: InputMaybe<Kyc_Registrar_Aggregate_Order_By>;
  super_admin?: InputMaybe<Order_By>;
  valid_inputs_aggregate?: InputMaybe<Kyc_Valid_Input_Aggregate_Order_By>;
  whitelisted_aggregate?: InputMaybe<Kyc_Whitelisted_Aggregate_Order_By>;
};

/** columns and relationships of "kyc_registrar" */
export type Kyc_Registrar = {
  __typename?: 'kyc_registrar';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  freeze_member_is_paused: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  kyc: Kyc;
  kyc_admins: Scalars['String']['output'];
  kyc_id: Scalars['Int']['output'];
  member_verified: Scalars['bigint']['output'];
  /** An array relationship */
  members: Array<Kyc_Member>;
  /** An aggregate relationship */
  members_aggregate: Kyc_Member_Aggregate;
  name: Scalars['String']['output'];
  set_member_is_paused: Scalars['Boolean']['output'];
  unfreeze_member_is_paused: Scalars['Boolean']['output'];
  /** An object relationship */
  user: Equiteez_User;
  user_id: Scalars['Int']['output'];
};


/** columns and relationships of "kyc_registrar" */
export type Kyc_RegistrarMembersArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


/** columns and relationships of "kyc_registrar" */
export type Kyc_RegistrarMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};

/** aggregated selection of "kyc_registrar" */
export type Kyc_Registrar_Aggregate = {
  __typename?: 'kyc_registrar_aggregate';
  aggregate?: Maybe<Kyc_Registrar_Aggregate_Fields>;
  nodes: Array<Kyc_Registrar>;
};

export type Kyc_Registrar_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Kyc_Registrar_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Kyc_Registrar_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Kyc_Registrar_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Registrar_Aggregate_Bool_Exp_Bool_And = {
  arguments: Kyc_Registrar_Select_Column_Kyc_Registrar_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Registrar_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Registrar_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Kyc_Registrar_Select_Column_Kyc_Registrar_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Registrar_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Kyc_Registrar_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Registrar_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_registrar" */
export type Kyc_Registrar_Aggregate_Fields = {
  __typename?: 'kyc_registrar_aggregate_fields';
  avg?: Maybe<Kyc_Registrar_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Registrar_Max_Fields>;
  min?: Maybe<Kyc_Registrar_Min_Fields>;
  stddev?: Maybe<Kyc_Registrar_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Registrar_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Registrar_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Registrar_Sum_Fields>;
  var_pop?: Maybe<Kyc_Registrar_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Registrar_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Registrar_Variance_Fields>;
};


/** aggregate fields of "kyc_registrar" */
export type Kyc_Registrar_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_registrar" */
export type Kyc_Registrar_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Registrar_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Registrar_Max_Order_By>;
  min?: InputMaybe<Kyc_Registrar_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Registrar_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Registrar_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Registrar_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Registrar_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Registrar_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Registrar_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Registrar_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Registrar_Avg_Fields = {
  __typename?: 'kyc_registrar_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  member_verified?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_registrar". All fields are combined with a logical 'AND'. */
export type Kyc_Registrar_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Registrar_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Registrar_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Registrar_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  freeze_member_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kyc?: InputMaybe<Kyc_Bool_Exp>;
  kyc_admins?: InputMaybe<String_Comparison_Exp>;
  kyc_id?: InputMaybe<Int_Comparison_Exp>;
  member_verified?: InputMaybe<Bigint_Comparison_Exp>;
  members?: InputMaybe<Kyc_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Kyc_Member_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  set_member_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  unfreeze_member_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Registrar_Max_Fields = {
  __typename?: 'kyc_registrar_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_admins?: Maybe<Scalars['String']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  member_verified?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_admins?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Registrar_Min_Fields = {
  __typename?: 'kyc_registrar_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_admins?: Maybe<Scalars['String']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  member_verified?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_admins?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_registrar". */
export type Kyc_Registrar_Order_By = {
  created_at?: InputMaybe<Order_By>;
  freeze_member_is_paused?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc?: InputMaybe<Kyc_Order_By>;
  kyc_admins?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Kyc_Member_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  set_member_is_paused?: InputMaybe<Order_By>;
  unfreeze_member_is_paused?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_registrar" */
export enum Kyc_Registrar_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FreezeMemberIsPaused = 'freeze_member_is_paused',
  /** column name */
  Id = 'id',
  /** column name */
  KycAdmins = 'kyc_admins',
  /** column name */
  KycId = 'kyc_id',
  /** column name */
  MemberVerified = 'member_verified',
  /** column name */
  Name = 'name',
  /** column name */
  SetMemberIsPaused = 'set_member_is_paused',
  /** column name */
  UnfreezeMemberIsPaused = 'unfreeze_member_is_paused',
  /** column name */
  UserId = 'user_id'
}

/** select "kyc_registrar_aggregate_bool_exp_bool_and_arguments_columns" columns of table "kyc_registrar" */
export enum Kyc_Registrar_Select_Column_Kyc_Registrar_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  FreezeMemberIsPaused = 'freeze_member_is_paused',
  /** column name */
  SetMemberIsPaused = 'set_member_is_paused',
  /** column name */
  UnfreezeMemberIsPaused = 'unfreeze_member_is_paused'
}

/** select "kyc_registrar_aggregate_bool_exp_bool_or_arguments_columns" columns of table "kyc_registrar" */
export enum Kyc_Registrar_Select_Column_Kyc_Registrar_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  FreezeMemberIsPaused = 'freeze_member_is_paused',
  /** column name */
  SetMemberIsPaused = 'set_member_is_paused',
  /** column name */
  UnfreezeMemberIsPaused = 'unfreeze_member_is_paused'
}

/** aggregate stddev on columns */
export type Kyc_Registrar_Stddev_Fields = {
  __typename?: 'kyc_registrar_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  member_verified?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Registrar_Stddev_Pop_Fields = {
  __typename?: 'kyc_registrar_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  member_verified?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Registrar_Stddev_Samp_Fields = {
  __typename?: 'kyc_registrar_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  member_verified?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_registrar" */
export type Kyc_Registrar_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Registrar_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Registrar_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  freeze_member_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  kyc_admins?: InputMaybe<Scalars['String']['input']>;
  kyc_id?: InputMaybe<Scalars['Int']['input']>;
  member_verified?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  set_member_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  unfreeze_member_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Registrar_Sum_Fields = {
  __typename?: 'kyc_registrar_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  member_verified?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Registrar_Var_Pop_Fields = {
  __typename?: 'kyc_registrar_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  member_verified?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Registrar_Var_Samp_Fields = {
  __typename?: 'kyc_registrar_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  member_verified?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Registrar_Variance_Fields = {
  __typename?: 'kyc_registrar_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  member_verified?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_registrar" */
export type Kyc_Registrar_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  member_verified?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "kyc" */
export enum Kyc_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewSuperAdmin = 'new_super_admin',
  /** column name */
  SuperAdmin = 'super_admin'
}

/** aggregate stddev on columns */
export type Kyc_Stddev_Fields = {
  __typename?: 'kyc_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Stddev_Pop_Fields = {
  __typename?: 'kyc_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Stddev_Samp_Fields = {
  __typename?: 'kyc_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "kyc" */
export type Kyc_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  new_super_admin?: InputMaybe<Scalars['String']['input']>;
  super_admin?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Sum_Fields = {
  __typename?: 'kyc_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "kyc_valid_input" */
export type Kyc_Valid_Input = {
  __typename?: 'kyc_valid_input';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category: Scalars['smallint']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  kyc: Kyc;
  kyc_id: Scalars['Int']['output'];
  valid_inputs: Scalars['String']['output'];
};

/** aggregated selection of "kyc_valid_input" */
export type Kyc_Valid_Input_Aggregate = {
  __typename?: 'kyc_valid_input_aggregate';
  aggregate?: Maybe<Kyc_Valid_Input_Aggregate_Fields>;
  nodes: Array<Kyc_Valid_Input>;
};

export type Kyc_Valid_Input_Aggregate_Bool_Exp = {
  count?: InputMaybe<Kyc_Valid_Input_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Valid_Input_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_valid_input" */
export type Kyc_Valid_Input_Aggregate_Fields = {
  __typename?: 'kyc_valid_input_aggregate_fields';
  avg?: Maybe<Kyc_Valid_Input_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Valid_Input_Max_Fields>;
  min?: Maybe<Kyc_Valid_Input_Min_Fields>;
  stddev?: Maybe<Kyc_Valid_Input_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Valid_Input_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Valid_Input_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Valid_Input_Sum_Fields>;
  var_pop?: Maybe<Kyc_Valid_Input_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Valid_Input_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Valid_Input_Variance_Fields>;
};


/** aggregate fields of "kyc_valid_input" */
export type Kyc_Valid_Input_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_valid_input" */
export type Kyc_Valid_Input_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Valid_Input_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Valid_Input_Max_Order_By>;
  min?: InputMaybe<Kyc_Valid_Input_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Valid_Input_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Valid_Input_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Valid_Input_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Valid_Input_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Valid_Input_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Valid_Input_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Valid_Input_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Valid_Input_Avg_Fields = {
  __typename?: 'kyc_valid_input_avg_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Avg_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_valid_input". All fields are combined with a logical 'AND'. */
export type Kyc_Valid_Input_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Valid_Input_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Valid_Input_Bool_Exp>>;
  category?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kyc?: InputMaybe<Kyc_Bool_Exp>;
  kyc_id?: InputMaybe<Int_Comparison_Exp>;
  valid_inputs?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Valid_Input_Max_Fields = {
  __typename?: 'kyc_valid_input_max_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  valid_inputs?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Max_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  valid_inputs?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Valid_Input_Min_Fields = {
  __typename?: 'kyc_valid_input_min_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  valid_inputs?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Min_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  valid_inputs?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_valid_input". */
export type Kyc_Valid_Input_Order_By = {
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc?: InputMaybe<Kyc_Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  valid_inputs?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_valid_input" */
export enum Kyc_Valid_Input_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Id = 'id',
  /** column name */
  KycId = 'kyc_id',
  /** column name */
  ValidInputs = 'valid_inputs'
}

/** aggregate stddev on columns */
export type Kyc_Valid_Input_Stddev_Fields = {
  __typename?: 'kyc_valid_input_stddev_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Stddev_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Valid_Input_Stddev_Pop_Fields = {
  __typename?: 'kyc_valid_input_stddev_pop_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Stddev_Pop_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Valid_Input_Stddev_Samp_Fields = {
  __typename?: 'kyc_valid_input_stddev_samp_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Stddev_Samp_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_valid_input" */
export type Kyc_Valid_Input_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Valid_Input_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Valid_Input_Stream_Cursor_Value_Input = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Scalars['smallint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  kyc_id?: InputMaybe<Scalars['Int']['input']>;
  valid_inputs?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Valid_Input_Sum_Fields = {
  __typename?: 'kyc_valid_input_sum_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['smallint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Sum_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Valid_Input_Var_Pop_Fields = {
  __typename?: 'kyc_valid_input_var_pop_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Var_Pop_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Valid_Input_Var_Samp_Fields = {
  __typename?: 'kyc_valid_input_var_samp_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Var_Samp_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Valid_Input_Variance_Fields = {
  __typename?: 'kyc_valid_input_variance_fields';
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_valid_input" */
export type Kyc_Valid_Input_Variance_Order_By = {
  /** COUNTRY: 0\nREGION: 1\nINVESTOR_TYPE: 2 */
  category?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Var_Pop_Fields = {
  __typename?: 'kyc_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Kyc_Var_Samp_Fields = {
  __typename?: 'kyc_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Kyc_Variance_Fields = {
  __typename?: 'kyc_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "kyc_whitelisted" */
export type Kyc_Whitelisted = {
  __typename?: 'kyc_whitelisted';
  id: Scalars['Int']['output'];
  /** An object relationship */
  kyc: Kyc;
  kyc_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Equiteez_User;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "kyc_whitelisted" */
export type Kyc_Whitelisted_Aggregate = {
  __typename?: 'kyc_whitelisted_aggregate';
  aggregate?: Maybe<Kyc_Whitelisted_Aggregate_Fields>;
  nodes: Array<Kyc_Whitelisted>;
};

export type Kyc_Whitelisted_Aggregate_Bool_Exp = {
  count?: InputMaybe<Kyc_Whitelisted_Aggregate_Bool_Exp_Count>;
};

export type Kyc_Whitelisted_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "kyc_whitelisted" */
export type Kyc_Whitelisted_Aggregate_Fields = {
  __typename?: 'kyc_whitelisted_aggregate_fields';
  avg?: Maybe<Kyc_Whitelisted_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Kyc_Whitelisted_Max_Fields>;
  min?: Maybe<Kyc_Whitelisted_Min_Fields>;
  stddev?: Maybe<Kyc_Whitelisted_Stddev_Fields>;
  stddev_pop?: Maybe<Kyc_Whitelisted_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kyc_Whitelisted_Stddev_Samp_Fields>;
  sum?: Maybe<Kyc_Whitelisted_Sum_Fields>;
  var_pop?: Maybe<Kyc_Whitelisted_Var_Pop_Fields>;
  var_samp?: Maybe<Kyc_Whitelisted_Var_Samp_Fields>;
  variance?: Maybe<Kyc_Whitelisted_Variance_Fields>;
};


/** aggregate fields of "kyc_whitelisted" */
export type Kyc_Whitelisted_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Aggregate_Order_By = {
  avg?: InputMaybe<Kyc_Whitelisted_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kyc_Whitelisted_Max_Order_By>;
  min?: InputMaybe<Kyc_Whitelisted_Min_Order_By>;
  stddev?: InputMaybe<Kyc_Whitelisted_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kyc_Whitelisted_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kyc_Whitelisted_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kyc_Whitelisted_Sum_Order_By>;
  var_pop?: InputMaybe<Kyc_Whitelisted_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kyc_Whitelisted_Var_Samp_Order_By>;
  variance?: InputMaybe<Kyc_Whitelisted_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Kyc_Whitelisted_Avg_Fields = {
  __typename?: 'kyc_whitelisted_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kyc_whitelisted". All fields are combined with a logical 'AND'. */
export type Kyc_Whitelisted_Bool_Exp = {
  _and?: InputMaybe<Array<Kyc_Whitelisted_Bool_Exp>>;
  _not?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
  _or?: InputMaybe<Array<Kyc_Whitelisted_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kyc?: InputMaybe<Kyc_Bool_Exp>;
  kyc_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Kyc_Whitelisted_Max_Fields = {
  __typename?: 'kyc_whitelisted_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kyc_Whitelisted_Min_Fields = {
  __typename?: 'kyc_whitelisted_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "kyc_whitelisted". */
export type Kyc_Whitelisted_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc?: InputMaybe<Kyc_Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "kyc_whitelisted" */
export enum Kyc_Whitelisted_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  KycId = 'kyc_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Kyc_Whitelisted_Stddev_Fields = {
  __typename?: 'kyc_whitelisted_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kyc_Whitelisted_Stddev_Pop_Fields = {
  __typename?: 'kyc_whitelisted_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kyc_Whitelisted_Stddev_Samp_Fields = {
  __typename?: 'kyc_whitelisted_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "kyc_whitelisted" */
export type Kyc_Whitelisted_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kyc_Whitelisted_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Kyc_Whitelisted_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  kyc_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Kyc_Whitelisted_Sum_Fields = {
  __typename?: 'kyc_whitelisted_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Kyc_Whitelisted_Var_Pop_Fields = {
  __typename?: 'kyc_whitelisted_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kyc_Whitelisted_Var_Samp_Fields = {
  __typename?: 'kyc_whitelisted_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kyc_Whitelisted_Variance_Fields = {
  __typename?: 'kyc_whitelisted_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "kyc_whitelisted" */
export type Kyc_Whitelisted_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "marketplace" */
export type Marketplace = {
  __typename?: 'marketplace';
  accept_offer_is_paused: Scalars['Boolean']['output'];
  address: Scalars['String']['output'];
  admins: Scalars['String']['output'];
  create_listing_is_paused: Scalars['Boolean']['output'];
  /** An array relationship */
  currencies: Array<Marketplace_Currency>;
  /** An aggregate relationship */
  currencies_aggregate: Marketplace_Currency_Aggregate;
  edit_listing_is_paused: Scalars['Boolean']['output'];
  /** An array relationship */
  general_contracts: Array<Marketplace_General_Contract>;
  /** An aggregate relationship */
  general_contracts_aggregate: Marketplace_General_Contract_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  lambdas: Array<Marketplace_Lambda>;
  /** An aggregate relationship */
  lambdas_aggregate: Marketplace_Lambda_Aggregate;
  /** An array relationship */
  listings: Array<Marketplace_Listing>;
  /** An aggregate relationship */
  listings_aggregate: Marketplace_Listing_Aggregate;
  marketplace_fee: Scalars['bigint']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  min_offer_amount: Scalars['bigint']['output'];
  new_super_admin?: Maybe<Scalars['String']['output']>;
  next_listing_id: Scalars['bigint']['output'];
  next_offer_id: Scalars['bigint']['output'];
  offer_is_paused: Scalars['Boolean']['output'];
  /** An array relationship */
  offers: Array<Marketplace_Offer>;
  /** An aggregate relationship */
  offers_aggregate: Marketplace_Offer_Aggregate;
  purchase_is_paused: Scalars['Boolean']['output'];
  remove_listing_is_paused: Scalars['Boolean']['output'];
  remove_offer_is_paused: Scalars['Boolean']['output'];
  royalty: Scalars['bigint']['output'];
  set_currency_is_paused: Scalars['Boolean']['output'];
  standard_unit: Scalars['bigint']['output'];
  super_admin?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  whitelist_contracts: Array<Marketplace_Whitelist_Contract>;
  /** An aggregate relationship */
  whitelist_contracts_aggregate: Marketplace_Whitelist_Contract_Aggregate;
};


/** columns and relationships of "marketplace" */
export type MarketplaceCurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceCurrencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceGeneral_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_General_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceGeneral_Contracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_General_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceLambdasArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Lambda_Order_By>>;
  where?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceLambdas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Lambda_Order_By>>;
  where?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceListingsArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceOffersArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceWhitelist_ContractsArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Whitelist_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
};


/** columns and relationships of "marketplace" */
export type MarketplaceWhitelist_Contracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Whitelist_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
};

/** aggregated selection of "marketplace" */
export type Marketplace_Aggregate = {
  __typename?: 'marketplace_aggregate';
  aggregate?: Maybe<Marketplace_Aggregate_Fields>;
  nodes: Array<Marketplace>;
};

/** aggregate fields of "marketplace" */
export type Marketplace_Aggregate_Fields = {
  __typename?: 'marketplace_aggregate_fields';
  avg?: Maybe<Marketplace_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Marketplace_Max_Fields>;
  min?: Maybe<Marketplace_Min_Fields>;
  stddev?: Maybe<Marketplace_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Variance_Fields>;
};


/** aggregate fields of "marketplace" */
export type Marketplace_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Marketplace_Avg_Fields = {
  __typename?: 'marketplace_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_fee?: Maybe<Scalars['Float']['output']>;
  min_offer_amount?: Maybe<Scalars['Float']['output']>;
  next_listing_id?: Maybe<Scalars['Float']['output']>;
  next_offer_id?: Maybe<Scalars['Float']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  standard_unit?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "marketplace". All fields are combined with a logical 'AND'. */
export type Marketplace_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Bool_Exp>>;
  accept_offer_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  admins?: InputMaybe<String_Comparison_Exp>;
  create_listing_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  currencies?: InputMaybe<Marketplace_Currency_Bool_Exp>;
  currencies_aggregate?: InputMaybe<Marketplace_Currency_Aggregate_Bool_Exp>;
  edit_listing_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  general_contracts?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
  general_contracts_aggregate?: InputMaybe<Marketplace_General_Contract_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambdas?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
  lambdas_aggregate?: InputMaybe<Marketplace_Lambda_Aggregate_Bool_Exp>;
  listings?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  listings_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp>;
  marketplace_fee?: InputMaybe<Bigint_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  min_offer_amount?: InputMaybe<Bigint_Comparison_Exp>;
  new_super_admin?: InputMaybe<String_Comparison_Exp>;
  next_listing_id?: InputMaybe<Bigint_Comparison_Exp>;
  next_offer_id?: InputMaybe<Bigint_Comparison_Exp>;
  offer_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  offers?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp>;
  purchase_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  remove_listing_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  remove_offer_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  royalty?: InputMaybe<Bigint_Comparison_Exp>;
  set_currency_is_paused?: InputMaybe<Boolean_Comparison_Exp>;
  standard_unit?: InputMaybe<Bigint_Comparison_Exp>;
  super_admin?: InputMaybe<String_Comparison_Exp>;
  whitelist_contracts?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
  whitelist_contracts_aggregate?: InputMaybe<Marketplace_Whitelist_Contract_Aggregate_Bool_Exp>;
};

/** columns and relationships of "marketplace_currency" */
export type Marketplace_Currency = {
  __typename?: 'marketplace_currency';
  id: Scalars['Int']['output'];
  /** An array relationship */
  listings: Array<Marketplace_Listing>;
  /** An aggregate relationship */
  listings_aggregate: Marketplace_Listing_Aggregate;
  /** An object relationship */
  marketplace: Marketplace;
  marketplace_id: Scalars['Int']['output'];
  /** An array relationship */
  offers: Array<Marketplace_Offer>;
  /** An aggregate relationship */
  offers_aggregate: Marketplace_Offer_Aggregate;
  /** An object relationship */
  token?: Maybe<Token>;
  token_id?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "marketplace_currency" */
export type Marketplace_CurrencyListingsArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "marketplace_currency" */
export type Marketplace_CurrencyListings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "marketplace_currency" */
export type Marketplace_CurrencyOffersArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


/** columns and relationships of "marketplace_currency" */
export type Marketplace_CurrencyOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};

/** aggregated selection of "marketplace_currency" */
export type Marketplace_Currency_Aggregate = {
  __typename?: 'marketplace_currency_aggregate';
  aggregate?: Maybe<Marketplace_Currency_Aggregate_Fields>;
  nodes: Array<Marketplace_Currency>;
};

export type Marketplace_Currency_Aggregate_Bool_Exp = {
  count?: InputMaybe<Marketplace_Currency_Aggregate_Bool_Exp_Count>;
};

export type Marketplace_Currency_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Currency_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "marketplace_currency" */
export type Marketplace_Currency_Aggregate_Fields = {
  __typename?: 'marketplace_currency_aggregate_fields';
  avg?: Maybe<Marketplace_Currency_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Marketplace_Currency_Max_Fields>;
  min?: Maybe<Marketplace_Currency_Min_Fields>;
  stddev?: Maybe<Marketplace_Currency_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Currency_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Currency_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Currency_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Currency_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Currency_Variance_Fields>;
};


/** aggregate fields of "marketplace_currency" */
export type Marketplace_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "marketplace_currency" */
export type Marketplace_Currency_Aggregate_Order_By = {
  avg?: InputMaybe<Marketplace_Currency_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Marketplace_Currency_Max_Order_By>;
  min?: InputMaybe<Marketplace_Currency_Min_Order_By>;
  stddev?: InputMaybe<Marketplace_Currency_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Marketplace_Currency_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Marketplace_Currency_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Marketplace_Currency_Sum_Order_By>;
  var_pop?: InputMaybe<Marketplace_Currency_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Marketplace_Currency_Var_Samp_Order_By>;
  variance?: InputMaybe<Marketplace_Currency_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Marketplace_Currency_Avg_Fields = {
  __typename?: 'marketplace_currency_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketplace_currency". All fields are combined with a logical 'AND'. */
export type Marketplace_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Currency_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Currency_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  listings?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  listings_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp>;
  marketplace?: InputMaybe<Marketplace_Bool_Exp>;
  marketplace_id?: InputMaybe<Int_Comparison_Exp>;
  offers?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_Currency_Max_Fields = {
  __typename?: 'marketplace_currency_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Marketplace_Currency_Min_Fields = {
  __typename?: 'marketplace_currency_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "marketplace_currency". */
export type Marketplace_Currency_Order_By = {
  id?: InputMaybe<Order_By>;
  listings_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Order_By>;
  marketplace?: InputMaybe<Marketplace_Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_currency" */
export enum Marketplace_Currency_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketplaceId = 'marketplace_id',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Marketplace_Currency_Stddev_Fields = {
  __typename?: 'marketplace_currency_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Currency_Stddev_Pop_Fields = {
  __typename?: 'marketplace_currency_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Currency_Stddev_Samp_Fields = {
  __typename?: 'marketplace_currency_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "marketplace_currency" */
export type Marketplace_Currency_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_Currency_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_Currency_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  marketplace_id?: InputMaybe<Scalars['Int']['input']>;
  token_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Marketplace_Currency_Sum_Fields = {
  __typename?: 'marketplace_currency_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Marketplace_Currency_Var_Pop_Fields = {
  __typename?: 'marketplace_currency_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketplace_Currency_Var_Samp_Fields = {
  __typename?: 'marketplace_currency_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketplace_Currency_Variance_Fields = {
  __typename?: 'marketplace_currency_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "marketplace_currency" */
export type Marketplace_Currency_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "marketplace_general_contract" */
export type Marketplace_General_Contract = {
  __typename?: 'marketplace_general_contract';
  address: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  marketplace: Marketplace;
  marketplace_id: Scalars['Int']['output'];
};

/** aggregated selection of "marketplace_general_contract" */
export type Marketplace_General_Contract_Aggregate = {
  __typename?: 'marketplace_general_contract_aggregate';
  aggregate?: Maybe<Marketplace_General_Contract_Aggregate_Fields>;
  nodes: Array<Marketplace_General_Contract>;
};

export type Marketplace_General_Contract_Aggregate_Bool_Exp = {
  count?: InputMaybe<Marketplace_General_Contract_Aggregate_Bool_Exp_Count>;
};

export type Marketplace_General_Contract_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "marketplace_general_contract" */
export type Marketplace_General_Contract_Aggregate_Fields = {
  __typename?: 'marketplace_general_contract_aggregate_fields';
  avg?: Maybe<Marketplace_General_Contract_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Marketplace_General_Contract_Max_Fields>;
  min?: Maybe<Marketplace_General_Contract_Min_Fields>;
  stddev?: Maybe<Marketplace_General_Contract_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_General_Contract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_General_Contract_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_General_Contract_Sum_Fields>;
  var_pop?: Maybe<Marketplace_General_Contract_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_General_Contract_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_General_Contract_Variance_Fields>;
};


/** aggregate fields of "marketplace_general_contract" */
export type Marketplace_General_Contract_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Aggregate_Order_By = {
  avg?: InputMaybe<Marketplace_General_Contract_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Marketplace_General_Contract_Max_Order_By>;
  min?: InputMaybe<Marketplace_General_Contract_Min_Order_By>;
  stddev?: InputMaybe<Marketplace_General_Contract_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Marketplace_General_Contract_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Marketplace_General_Contract_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Marketplace_General_Contract_Sum_Order_By>;
  var_pop?: InputMaybe<Marketplace_General_Contract_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Marketplace_General_Contract_Var_Samp_Order_By>;
  variance?: InputMaybe<Marketplace_General_Contract_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Marketplace_General_Contract_Avg_Fields = {
  __typename?: 'marketplace_general_contract_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketplace_general_contract". All fields are combined with a logical 'AND'. */
export type Marketplace_General_Contract_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_General_Contract_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_General_Contract_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  marketplace?: InputMaybe<Marketplace_Bool_Exp>;
  marketplace_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_General_Contract_Max_Fields = {
  __typename?: 'marketplace_general_contract_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Marketplace_General_Contract_Min_Fields = {
  __typename?: 'marketplace_general_contract_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "marketplace_general_contract". */
export type Marketplace_General_Contract_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  marketplace?: InputMaybe<Marketplace_Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_general_contract" */
export enum Marketplace_General_Contract_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  MarketplaceId = 'marketplace_id'
}

/** aggregate stddev on columns */
export type Marketplace_General_Contract_Stddev_Fields = {
  __typename?: 'marketplace_general_contract_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_General_Contract_Stddev_Pop_Fields = {
  __typename?: 'marketplace_general_contract_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_General_Contract_Stddev_Samp_Fields = {
  __typename?: 'marketplace_general_contract_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "marketplace_general_contract" */
export type Marketplace_General_Contract_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_General_Contract_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_General_Contract_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  marketplace_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Marketplace_General_Contract_Sum_Fields = {
  __typename?: 'marketplace_general_contract_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Marketplace_General_Contract_Var_Pop_Fields = {
  __typename?: 'marketplace_general_contract_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketplace_General_Contract_Var_Samp_Fields = {
  __typename?: 'marketplace_general_contract_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketplace_General_Contract_Variance_Fields = {
  __typename?: 'marketplace_general_contract_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "marketplace_general_contract" */
export type Marketplace_General_Contract_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "marketplace_lambda" */
export type Marketplace_Lambda = {
  __typename?: 'marketplace_lambda';
  /** An object relationship */
  contract: Marketplace;
  contract_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lambda_bytes: Scalars['String']['output'];
  lambda_name: Scalars['String']['output'];
  last_updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "marketplace_lambda" */
export type Marketplace_Lambda_Aggregate = {
  __typename?: 'marketplace_lambda_aggregate';
  aggregate?: Maybe<Marketplace_Lambda_Aggregate_Fields>;
  nodes: Array<Marketplace_Lambda>;
};

export type Marketplace_Lambda_Aggregate_Bool_Exp = {
  count?: InputMaybe<Marketplace_Lambda_Aggregate_Bool_Exp_Count>;
};

export type Marketplace_Lambda_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "marketplace_lambda" */
export type Marketplace_Lambda_Aggregate_Fields = {
  __typename?: 'marketplace_lambda_aggregate_fields';
  avg?: Maybe<Marketplace_Lambda_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Marketplace_Lambda_Max_Fields>;
  min?: Maybe<Marketplace_Lambda_Min_Fields>;
  stddev?: Maybe<Marketplace_Lambda_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Lambda_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Lambda_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Lambda_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Lambda_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Lambda_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Lambda_Variance_Fields>;
};


/** aggregate fields of "marketplace_lambda" */
export type Marketplace_Lambda_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "marketplace_lambda" */
export type Marketplace_Lambda_Aggregate_Order_By = {
  avg?: InputMaybe<Marketplace_Lambda_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Marketplace_Lambda_Max_Order_By>;
  min?: InputMaybe<Marketplace_Lambda_Min_Order_By>;
  stddev?: InputMaybe<Marketplace_Lambda_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Marketplace_Lambda_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Marketplace_Lambda_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Marketplace_Lambda_Sum_Order_By>;
  var_pop?: InputMaybe<Marketplace_Lambda_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Marketplace_Lambda_Var_Samp_Order_By>;
  variance?: InputMaybe<Marketplace_Lambda_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Marketplace_Lambda_Avg_Fields = {
  __typename?: 'marketplace_lambda_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketplace_lambda". All fields are combined with a logical 'AND'. */
export type Marketplace_Lambda_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Lambda_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Lambda_Bool_Exp>>;
  contract?: InputMaybe<Marketplace_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambda_bytes?: InputMaybe<String_Comparison_Exp>;
  lambda_name?: InputMaybe<String_Comparison_Exp>;
  last_updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_Lambda_Max_Fields = {
  __typename?: 'marketplace_lambda_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Marketplace_Lambda_Min_Fields = {
  __typename?: 'marketplace_lambda_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "marketplace_lambda". */
export type Marketplace_Lambda_Order_By = {
  contract?: InputMaybe<Marketplace_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_lambda" */
export enum Marketplace_Lambda_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  LambdaBytes = 'lambda_bytes',
  /** column name */
  LambdaName = 'lambda_name',
  /** column name */
  LastUpdatedAt = 'last_updated_at'
}

/** aggregate stddev on columns */
export type Marketplace_Lambda_Stddev_Fields = {
  __typename?: 'marketplace_lambda_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Lambda_Stddev_Pop_Fields = {
  __typename?: 'marketplace_lambda_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Lambda_Stddev_Samp_Fields = {
  __typename?: 'marketplace_lambda_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "marketplace_lambda" */
export type Marketplace_Lambda_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_Lambda_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_Lambda_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lambda_bytes?: InputMaybe<Scalars['String']['input']>;
  lambda_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Marketplace_Lambda_Sum_Fields = {
  __typename?: 'marketplace_lambda_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Marketplace_Lambda_Var_Pop_Fields = {
  __typename?: 'marketplace_lambda_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketplace_Lambda_Var_Samp_Fields = {
  __typename?: 'marketplace_lambda_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketplace_Lambda_Variance_Fields = {
  __typename?: 'marketplace_lambda_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "marketplace_lambda" */
export type Marketplace_Lambda_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "marketplace_listing" */
export type Marketplace_Listing = {
  __typename?: 'marketplace_listing';
  amount: Scalars['float8']['output'];
  /** An object relationship */
  currency: Marketplace_Currency;
  currency_id: Scalars['Int']['output'];
  expiry_time?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  initiator: Equiteez_User;
  initiator_id: Scalars['Int']['output'];
  listing_id: Scalars['bigint']['output'];
  /** An object relationship */
  marketplace: Marketplace;
  marketplace_id: Scalars['Int']['output'];
  /** An array relationship */
  offers: Array<Marketplace_Offer>;
  /** An aggregate relationship */
  offers_aggregate: Marketplace_Offer_Aggregate;
  price_per_unit: Scalars['bigint']['output'];
  quick_buy_price?: Maybe<Scalars['bigint']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status: Scalars['smallint']['output'];
  /** An object relationship */
  token: Token;
  token_id: Scalars['Int']['output'];
};


/** columns and relationships of "marketplace_listing" */
export type Marketplace_ListingOffersArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


/** columns and relationships of "marketplace_listing" */
export type Marketplace_ListingOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};

/** aggregated selection of "marketplace_listing" */
export type Marketplace_Listing_Aggregate = {
  __typename?: 'marketplace_listing_aggregate';
  aggregate?: Maybe<Marketplace_Listing_Aggregate_Fields>;
  nodes: Array<Marketplace_Listing>;
};

export type Marketplace_Listing_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp_Var_Samp>;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Avg = {
  arguments: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Corr = {
  arguments: Marketplace_Listing_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Marketplace_Listing_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Max = {
  arguments: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Min = {
  arguments: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Sum = {
  arguments: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Listing_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "marketplace_listing" */
export type Marketplace_Listing_Aggregate_Fields = {
  __typename?: 'marketplace_listing_aggregate_fields';
  avg?: Maybe<Marketplace_Listing_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Marketplace_Listing_Max_Fields>;
  min?: Maybe<Marketplace_Listing_Min_Fields>;
  stddev?: Maybe<Marketplace_Listing_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Listing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Listing_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Listing_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Listing_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Listing_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Listing_Variance_Fields>;
};


/** aggregate fields of "marketplace_listing" */
export type Marketplace_Listing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "marketplace_listing" */
export type Marketplace_Listing_Aggregate_Order_By = {
  avg?: InputMaybe<Marketplace_Listing_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Marketplace_Listing_Max_Order_By>;
  min?: InputMaybe<Marketplace_Listing_Min_Order_By>;
  stddev?: InputMaybe<Marketplace_Listing_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Marketplace_Listing_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Marketplace_Listing_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Marketplace_Listing_Sum_Order_By>;
  var_pop?: InputMaybe<Marketplace_Listing_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Marketplace_Listing_Var_Samp_Order_By>;
  variance?: InputMaybe<Marketplace_Listing_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Marketplace_Listing_Avg_Fields = {
  __typename?: 'marketplace_listing_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  price_per_unit?: Maybe<Scalars['Float']['output']>;
  quick_buy_price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketplace_listing". All fields are combined with a logical 'AND'. */
export type Marketplace_Listing_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Listing_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Listing_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  currency?: InputMaybe<Marketplace_Currency_Bool_Exp>;
  currency_id?: InputMaybe<Int_Comparison_Exp>;
  expiry_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initiator?: InputMaybe<Equiteez_User_Bool_Exp>;
  initiator_id?: InputMaybe<Int_Comparison_Exp>;
  listing_id?: InputMaybe<Bigint_Comparison_Exp>;
  marketplace?: InputMaybe<Marketplace_Bool_Exp>;
  marketplace_id?: InputMaybe<Int_Comparison_Exp>;
  offers?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp>;
  price_per_unit?: InputMaybe<Bigint_Comparison_Exp>;
  quick_buy_price?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Smallint_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_Listing_Max_Fields = {
  __typename?: 'marketplace_listing_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  expiry_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  listing_id?: Maybe<Scalars['bigint']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  price_per_unit?: Maybe<Scalars['bigint']['output']>;
  quick_buy_price?: Maybe<Scalars['bigint']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['smallint']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  expiry_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Marketplace_Listing_Min_Fields = {
  __typename?: 'marketplace_listing_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  expiry_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  listing_id?: Maybe<Scalars['bigint']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  price_per_unit?: Maybe<Scalars['bigint']['output']>;
  quick_buy_price?: Maybe<Scalars['bigint']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['smallint']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  expiry_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "marketplace_listing". */
export type Marketplace_Listing_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency?: InputMaybe<Marketplace_Currency_Order_By>;
  currency_id?: InputMaybe<Order_By>;
  expiry_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator?: InputMaybe<Equiteez_User_Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace?: InputMaybe<Marketplace_Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  ExpiryTime = 'expiry_time',
  /** column name */
  Id = 'id',
  /** column name */
  InitiatorId = 'initiator_id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  MarketplaceId = 'marketplace_id',
  /** column name */
  PricePerUnit = 'price_per_unit',
  /** column name */
  QuickBuyPrice = 'quick_buy_price',
  /** column name */
  Status = 'status',
  /** column name */
  TokenId = 'token_id'
}

/** select "marketplace_listing_aggregate_bool_exp_avg_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_listing_aggregate_bool_exp_corr_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_listing_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_listing_aggregate_bool_exp_max_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_listing_aggregate_bool_exp_min_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_listing_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_listing_aggregate_bool_exp_sum_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_listing_aggregate_bool_exp_var_samp_arguments_columns" columns of table "marketplace_listing" */
export enum Marketplace_Listing_Select_Column_Marketplace_Listing_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** aggregate stddev on columns */
export type Marketplace_Listing_Stddev_Fields = {
  __typename?: 'marketplace_listing_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  price_per_unit?: Maybe<Scalars['Float']['output']>;
  quick_buy_price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Listing_Stddev_Pop_Fields = {
  __typename?: 'marketplace_listing_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  price_per_unit?: Maybe<Scalars['Float']['output']>;
  quick_buy_price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Listing_Stddev_Samp_Fields = {
  __typename?: 'marketplace_listing_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  price_per_unit?: Maybe<Scalars['Float']['output']>;
  quick_buy_price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "marketplace_listing" */
export type Marketplace_Listing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_Listing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_Listing_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  expiry_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initiator_id?: InputMaybe<Scalars['Int']['input']>;
  listing_id?: InputMaybe<Scalars['bigint']['input']>;
  marketplace_id?: InputMaybe<Scalars['Int']['input']>;
  price_per_unit?: InputMaybe<Scalars['bigint']['input']>;
  quick_buy_price?: InputMaybe<Scalars['bigint']['input']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Scalars['smallint']['input']>;
  token_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Marketplace_Listing_Sum_Fields = {
  __typename?: 'marketplace_listing_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  listing_id?: Maybe<Scalars['bigint']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  price_per_unit?: Maybe<Scalars['bigint']['output']>;
  quick_buy_price?: Maybe<Scalars['bigint']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['smallint']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Marketplace_Listing_Var_Pop_Fields = {
  __typename?: 'marketplace_listing_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  price_per_unit?: Maybe<Scalars['Float']['output']>;
  quick_buy_price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketplace_Listing_Var_Samp_Fields = {
  __typename?: 'marketplace_listing_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  price_per_unit?: Maybe<Scalars['Float']['output']>;
  quick_buy_price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketplace_Listing_Variance_Fields = {
  __typename?: 'marketplace_listing_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  price_per_unit?: Maybe<Scalars['Float']['output']>;
  quick_buy_price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "marketplace_listing" */
export type Marketplace_Listing_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  price_per_unit?: InputMaybe<Order_By>;
  quick_buy_price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nACTIVE: 1 */
  status?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Marketplace_Max_Fields = {
  __typename?: 'marketplace_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  admins?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_fee?: Maybe<Scalars['bigint']['output']>;
  min_offer_amount?: Maybe<Scalars['bigint']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  next_listing_id?: Maybe<Scalars['bigint']['output']>;
  next_offer_id?: Maybe<Scalars['bigint']['output']>;
  royalty?: Maybe<Scalars['bigint']['output']>;
  standard_unit?: Maybe<Scalars['bigint']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Marketplace_Min_Fields = {
  __typename?: 'marketplace_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  admins?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_fee?: Maybe<Scalars['bigint']['output']>;
  min_offer_amount?: Maybe<Scalars['bigint']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  next_listing_id?: Maybe<Scalars['bigint']['output']>;
  next_offer_id?: Maybe<Scalars['bigint']['output']>;
  royalty?: Maybe<Scalars['bigint']['output']>;
  standard_unit?: Maybe<Scalars['bigint']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "marketplace_offer" */
export type Marketplace_Offer = {
  __typename?: 'marketplace_offer';
  amount: Scalars['float8']['output'];
  /** An object relationship */
  currency: Marketplace_Currency;
  currency_id: Scalars['Int']['output'];
  expiry_time?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  initiator: Equiteez_User;
  initiator_id: Scalars['Int']['output'];
  /** An object relationship */
  listing: Marketplace_Listing;
  listing_id: Scalars['Int']['output'];
  /** An object relationship */
  marketplace: Marketplace;
  marketplace_id: Scalars['Int']['output'];
  offer_id: Scalars['bigint']['output'];
  price: Scalars['bigint']['output'];
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status: Scalars['smallint']['output'];
};

/** aggregated selection of "marketplace_offer" */
export type Marketplace_Offer_Aggregate = {
  __typename?: 'marketplace_offer_aggregate';
  aggregate?: Maybe<Marketplace_Offer_Aggregate_Fields>;
  nodes: Array<Marketplace_Offer>;
};

export type Marketplace_Offer_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Marketplace_Offer_Aggregate_Bool_Exp_Var_Samp>;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Avg = {
  arguments: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Corr = {
  arguments: Marketplace_Offer_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Marketplace_Offer_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Max = {
  arguments: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Min = {
  arguments: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Sum = {
  arguments: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Marketplace_Offer_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "marketplace_offer" */
export type Marketplace_Offer_Aggregate_Fields = {
  __typename?: 'marketplace_offer_aggregate_fields';
  avg?: Maybe<Marketplace_Offer_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Marketplace_Offer_Max_Fields>;
  min?: Maybe<Marketplace_Offer_Min_Fields>;
  stddev?: Maybe<Marketplace_Offer_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Offer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Offer_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Offer_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Offer_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Offer_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Offer_Variance_Fields>;
};


/** aggregate fields of "marketplace_offer" */
export type Marketplace_Offer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "marketplace_offer" */
export type Marketplace_Offer_Aggregate_Order_By = {
  avg?: InputMaybe<Marketplace_Offer_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Marketplace_Offer_Max_Order_By>;
  min?: InputMaybe<Marketplace_Offer_Min_Order_By>;
  stddev?: InputMaybe<Marketplace_Offer_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Marketplace_Offer_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Marketplace_Offer_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Marketplace_Offer_Sum_Order_By>;
  var_pop?: InputMaybe<Marketplace_Offer_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Marketplace_Offer_Var_Samp_Order_By>;
  variance?: InputMaybe<Marketplace_Offer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Marketplace_Offer_Avg_Fields = {
  __typename?: 'marketplace_offer_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketplace_offer". All fields are combined with a logical 'AND'. */
export type Marketplace_Offer_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Offer_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Offer_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Offer_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  currency?: InputMaybe<Marketplace_Currency_Bool_Exp>;
  currency_id?: InputMaybe<Int_Comparison_Exp>;
  expiry_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initiator?: InputMaybe<Equiteez_User_Bool_Exp>;
  initiator_id?: InputMaybe<Int_Comparison_Exp>;
  listing?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  listing_id?: InputMaybe<Int_Comparison_Exp>;
  marketplace?: InputMaybe<Marketplace_Bool_Exp>;
  marketplace_id?: InputMaybe<Int_Comparison_Exp>;
  offer_id?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_Offer_Max_Fields = {
  __typename?: 'marketplace_offer_max_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  expiry_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  listing_id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['smallint']['output']>;
};

/** order by max() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  expiry_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Marketplace_Offer_Min_Fields = {
  __typename?: 'marketplace_offer_min_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  expiry_time?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  listing_id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['smallint']['output']>;
};

/** order by min() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  expiry_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "marketplace_offer". */
export type Marketplace_Offer_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency?: InputMaybe<Marketplace_Currency_Order_By>;
  currency_id?: InputMaybe<Order_By>;
  expiry_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator?: InputMaybe<Equiteez_User_Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing?: InputMaybe<Marketplace_Listing_Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace?: InputMaybe<Marketplace_Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  ExpiryTime = 'expiry_time',
  /** column name */
  Id = 'id',
  /** column name */
  InitiatorId = 'initiator_id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  MarketplaceId = 'marketplace_id',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  Price = 'price',
  /** column name */
  Status = 'status'
}

/** select "marketplace_offer_aggregate_bool_exp_avg_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_offer_aggregate_bool_exp_corr_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_offer_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_offer_aggregate_bool_exp_max_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_offer_aggregate_bool_exp_min_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_offer_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_offer_aggregate_bool_exp_sum_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** select "marketplace_offer_aggregate_bool_exp_var_samp_arguments_columns" columns of table "marketplace_offer" */
export enum Marketplace_Offer_Select_Column_Marketplace_Offer_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Amount = 'amount'
}

/** aggregate stddev on columns */
export type Marketplace_Offer_Stddev_Fields = {
  __typename?: 'marketplace_offer_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Offer_Stddev_Pop_Fields = {
  __typename?: 'marketplace_offer_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Offer_Stddev_Samp_Fields = {
  __typename?: 'marketplace_offer_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "marketplace_offer" */
export type Marketplace_Offer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_Offer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_Offer_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['float8']['input']>;
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  expiry_time?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initiator_id?: InputMaybe<Scalars['Int']['input']>;
  listing_id?: InputMaybe<Scalars['Int']['input']>;
  marketplace_id?: InputMaybe<Scalars['Int']['input']>;
  offer_id?: InputMaybe<Scalars['bigint']['input']>;
  price?: InputMaybe<Scalars['bigint']['input']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Marketplace_Offer_Sum_Fields = {
  __typename?: 'marketplace_offer_sum_fields';
  amount?: Maybe<Scalars['float8']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  listing_id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
  offer_id?: Maybe<Scalars['bigint']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['smallint']['output']>;
};

/** order by sum() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Marketplace_Offer_Var_Pop_Fields = {
  __typename?: 'marketplace_offer_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketplace_Offer_Var_Samp_Fields = {
  __typename?: 'marketplace_offer_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketplace_Offer_Variance_Fields = {
  __typename?: 'marketplace_offer_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  currency_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  listing_id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
  offer_id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "marketplace_offer" */
export type Marketplace_Offer_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  /** CLOSED: 0\nOPEN: 1\nACCEPTED: 2 */
  status?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "marketplace". */
export type Marketplace_Order_By = {
  accept_offer_is_paused?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  admins?: InputMaybe<Order_By>;
  create_listing_is_paused?: InputMaybe<Order_By>;
  currencies_aggregate?: InputMaybe<Marketplace_Currency_Aggregate_Order_By>;
  edit_listing_is_paused?: InputMaybe<Order_By>;
  general_contracts_aggregate?: InputMaybe<Marketplace_General_Contract_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lambdas_aggregate?: InputMaybe<Marketplace_Lambda_Aggregate_Order_By>;
  listings_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Order_By>;
  marketplace_fee?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  min_offer_amount?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  next_listing_id?: InputMaybe<Order_By>;
  next_offer_id?: InputMaybe<Order_By>;
  offer_is_paused?: InputMaybe<Order_By>;
  offers_aggregate?: InputMaybe<Marketplace_Offer_Aggregate_Order_By>;
  purchase_is_paused?: InputMaybe<Order_By>;
  remove_listing_is_paused?: InputMaybe<Order_By>;
  remove_offer_is_paused?: InputMaybe<Order_By>;
  royalty?: InputMaybe<Order_By>;
  set_currency_is_paused?: InputMaybe<Order_By>;
  standard_unit?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Order_By>;
  whitelist_contracts_aggregate?: InputMaybe<Marketplace_Whitelist_Contract_Aggregate_Order_By>;
};

/** select columns of table "marketplace" */
export enum Marketplace_Select_Column {
  /** column name */
  AcceptOfferIsPaused = 'accept_offer_is_paused',
  /** column name */
  Address = 'address',
  /** column name */
  Admins = 'admins',
  /** column name */
  CreateListingIsPaused = 'create_listing_is_paused',
  /** column name */
  EditListingIsPaused = 'edit_listing_is_paused',
  /** column name */
  Id = 'id',
  /** column name */
  MarketplaceFee = 'marketplace_fee',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MinOfferAmount = 'min_offer_amount',
  /** column name */
  NewSuperAdmin = 'new_super_admin',
  /** column name */
  NextListingId = 'next_listing_id',
  /** column name */
  NextOfferId = 'next_offer_id',
  /** column name */
  OfferIsPaused = 'offer_is_paused',
  /** column name */
  PurchaseIsPaused = 'purchase_is_paused',
  /** column name */
  RemoveListingIsPaused = 'remove_listing_is_paused',
  /** column name */
  RemoveOfferIsPaused = 'remove_offer_is_paused',
  /** column name */
  Royalty = 'royalty',
  /** column name */
  SetCurrencyIsPaused = 'set_currency_is_paused',
  /** column name */
  StandardUnit = 'standard_unit',
  /** column name */
  SuperAdmin = 'super_admin'
}

/** aggregate stddev on columns */
export type Marketplace_Stddev_Fields = {
  __typename?: 'marketplace_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_fee?: Maybe<Scalars['Float']['output']>;
  min_offer_amount?: Maybe<Scalars['Float']['output']>;
  next_listing_id?: Maybe<Scalars['Float']['output']>;
  next_offer_id?: Maybe<Scalars['Float']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  standard_unit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Stddev_Pop_Fields = {
  __typename?: 'marketplace_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_fee?: Maybe<Scalars['Float']['output']>;
  min_offer_amount?: Maybe<Scalars['Float']['output']>;
  next_listing_id?: Maybe<Scalars['Float']['output']>;
  next_offer_id?: Maybe<Scalars['Float']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  standard_unit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Stddev_Samp_Fields = {
  __typename?: 'marketplace_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_fee?: Maybe<Scalars['Float']['output']>;
  min_offer_amount?: Maybe<Scalars['Float']['output']>;
  next_listing_id?: Maybe<Scalars['Float']['output']>;
  next_offer_id?: Maybe<Scalars['Float']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  standard_unit?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "marketplace" */
export type Marketplace_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_Stream_Cursor_Value_Input = {
  accept_offer_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  admins?: InputMaybe<Scalars['String']['input']>;
  create_listing_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  edit_listing_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  marketplace_fee?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  min_offer_amount?: InputMaybe<Scalars['bigint']['input']>;
  new_super_admin?: InputMaybe<Scalars['String']['input']>;
  next_listing_id?: InputMaybe<Scalars['bigint']['input']>;
  next_offer_id?: InputMaybe<Scalars['bigint']['input']>;
  offer_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  purchase_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  remove_listing_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  remove_offer_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  royalty?: InputMaybe<Scalars['bigint']['input']>;
  set_currency_is_paused?: InputMaybe<Scalars['Boolean']['input']>;
  standard_unit?: InputMaybe<Scalars['bigint']['input']>;
  super_admin?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Marketplace_Sum_Fields = {
  __typename?: 'marketplace_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_fee?: Maybe<Scalars['bigint']['output']>;
  min_offer_amount?: Maybe<Scalars['bigint']['output']>;
  next_listing_id?: Maybe<Scalars['bigint']['output']>;
  next_offer_id?: Maybe<Scalars['bigint']['output']>;
  royalty?: Maybe<Scalars['bigint']['output']>;
  standard_unit?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Marketplace_Var_Pop_Fields = {
  __typename?: 'marketplace_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_fee?: Maybe<Scalars['Float']['output']>;
  min_offer_amount?: Maybe<Scalars['Float']['output']>;
  next_listing_id?: Maybe<Scalars['Float']['output']>;
  next_offer_id?: Maybe<Scalars['Float']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  standard_unit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Marketplace_Var_Samp_Fields = {
  __typename?: 'marketplace_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_fee?: Maybe<Scalars['Float']['output']>;
  min_offer_amount?: Maybe<Scalars['Float']['output']>;
  next_listing_id?: Maybe<Scalars['Float']['output']>;
  next_offer_id?: Maybe<Scalars['Float']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  standard_unit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Marketplace_Variance_Fields = {
  __typename?: 'marketplace_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_fee?: Maybe<Scalars['Float']['output']>;
  min_offer_amount?: Maybe<Scalars['Float']['output']>;
  next_listing_id?: Maybe<Scalars['Float']['output']>;
  next_offer_id?: Maybe<Scalars['Float']['output']>;
  royalty?: Maybe<Scalars['Float']['output']>;
  standard_unit?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract = {
  __typename?: 'marketplace_whitelist_contract';
  address: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  marketplace: Marketplace;
  marketplace_id: Scalars['Int']['output'];
};

/** aggregated selection of "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Aggregate = {
  __typename?: 'marketplace_whitelist_contract_aggregate';
  aggregate?: Maybe<Marketplace_Whitelist_Contract_Aggregate_Fields>;
  nodes: Array<Marketplace_Whitelist_Contract>;
};

export type Marketplace_Whitelist_Contract_Aggregate_Bool_Exp = {
  count?: InputMaybe<Marketplace_Whitelist_Contract_Aggregate_Bool_Exp_Count>;
};

export type Marketplace_Whitelist_Contract_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Aggregate_Fields = {
  __typename?: 'marketplace_whitelist_contract_aggregate_fields';
  avg?: Maybe<Marketplace_Whitelist_Contract_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Marketplace_Whitelist_Contract_Max_Fields>;
  min?: Maybe<Marketplace_Whitelist_Contract_Min_Fields>;
  stddev?: Maybe<Marketplace_Whitelist_Contract_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Whitelist_Contract_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Whitelist_Contract_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Whitelist_Contract_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Whitelist_Contract_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Whitelist_Contract_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Whitelist_Contract_Variance_Fields>;
};


/** aggregate fields of "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Aggregate_Order_By = {
  avg?: InputMaybe<Marketplace_Whitelist_Contract_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Marketplace_Whitelist_Contract_Max_Order_By>;
  min?: InputMaybe<Marketplace_Whitelist_Contract_Min_Order_By>;
  stddev?: InputMaybe<Marketplace_Whitelist_Contract_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Marketplace_Whitelist_Contract_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Marketplace_Whitelist_Contract_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Marketplace_Whitelist_Contract_Sum_Order_By>;
  var_pop?: InputMaybe<Marketplace_Whitelist_Contract_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Marketplace_Whitelist_Contract_Var_Samp_Order_By>;
  variance?: InputMaybe<Marketplace_Whitelist_Contract_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Marketplace_Whitelist_Contract_Avg_Fields = {
  __typename?: 'marketplace_whitelist_contract_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketplace_whitelist_contract". All fields are combined with a logical 'AND'. */
export type Marketplace_Whitelist_Contract_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Whitelist_Contract_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Whitelist_Contract_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  marketplace?: InputMaybe<Marketplace_Bool_Exp>;
  marketplace_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_Whitelist_Contract_Max_Fields = {
  __typename?: 'marketplace_whitelist_contract_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Marketplace_Whitelist_Contract_Min_Fields = {
  __typename?: 'marketplace_whitelist_contract_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "marketplace_whitelist_contract". */
export type Marketplace_Whitelist_Contract_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  marketplace?: InputMaybe<Marketplace_Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_whitelist_contract" */
export enum Marketplace_Whitelist_Contract_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  MarketplaceId = 'marketplace_id'
}

/** aggregate stddev on columns */
export type Marketplace_Whitelist_Contract_Stddev_Fields = {
  __typename?: 'marketplace_whitelist_contract_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Whitelist_Contract_Stddev_Pop_Fields = {
  __typename?: 'marketplace_whitelist_contract_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Whitelist_Contract_Stddev_Samp_Fields = {
  __typename?: 'marketplace_whitelist_contract_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_Whitelist_Contract_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_Whitelist_Contract_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  marketplace_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Marketplace_Whitelist_Contract_Sum_Fields = {
  __typename?: 'marketplace_whitelist_contract_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  marketplace_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Marketplace_Whitelist_Contract_Var_Pop_Fields = {
  __typename?: 'marketplace_whitelist_contract_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketplace_Whitelist_Contract_Var_Samp_Fields = {
  __typename?: 'marketplace_whitelist_contract_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketplace_Whitelist_Contract_Variance_Fields = {
  __typename?: 'marketplace_whitelist_contract_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  marketplace_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "marketplace_whitelist_contract" */
export type Marketplace_Whitelist_Contract_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  marketplace_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orderbook" */
export type Orderbook = {
  __typename?: 'orderbook';
  address: Scalars['String']['output'];
  buy_order_counter: Scalars['bigint']['output'];
  buy_order_fee: Scalars['bigint']['output'];
  /** An array relationship */
  currencies: Array<Orderbook_Currency>;
  /** An aggregate relationship */
  currencies_aggregate: Orderbook_Currency_Aggregate;
  /** An array relationship */
  dodo_mavs: Array<Dodo_Mav>;
  /** An aggregate relationship */
  dodo_mavs_aggregate: Dodo_Mav_Aggregate;
  /** An array relationship */
  entrypoint_status: Array<Orderbook_Entrypoint_Status>;
  /** An aggregate relationship */
  entrypoint_status_aggregate: Orderbook_Entrypoint_Status_Aggregate;
  /** An array relationship */
  fees: Array<Orderbook_Fee>;
  /** An aggregate relationship */
  fees_aggregate: Orderbook_Fee_Aggregate;
  highest_buy_price: Scalars['bigint']['output'];
  highest_buy_price_order_id: Scalars['bigint']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  kyc?: Maybe<Kyc>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  lambdas: Array<Orderbook_Lambda>;
  /** An aggregate relationship */
  lambdas_aggregate: Orderbook_Lambda_Aggregate;
  last_matched_price: Scalars['bigint']['output'];
  last_matched_price_timestamp?: Maybe<Scalars['timetz']['output']>;
  lowest_sell_price: Scalars['bigint']['output'];
  lowest_sell_price_order_id: Scalars['bigint']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  min_buy_order_amount: Scalars['bigint']['output'];
  min_buy_order_value: Scalars['bigint']['output'];
  min_expiry_time: Scalars['bigint']['output'];
  min_sell_order_amount: Scalars['bigint']['output'];
  min_sell_order_value: Scalars['bigint']['output'];
  min_time_before_closing_order: Scalars['bigint']['output'];
  new_super_admin?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Orderbook_Order>;
  /** An aggregate relationship */
  orders_aggregate: Orderbook_Order_Aggregate;
  /** An array relationship */
  rwa_orders: Array<Orderbook_Rwa_Order>;
  /** An aggregate relationship */
  rwa_orders_aggregate: Orderbook_Rwa_Order_Aggregate;
  /** An object relationship */
  rwa_token?: Maybe<Token>;
  rwa_token_id?: Maybe<Scalars['Int']['output']>;
  sell_order_counter: Scalars['bigint']['output'];
  sell_order_fee: Scalars['bigint']['output'];
  super_admin?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "orderbook" */
export type OrderbookCurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookCurrencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookDodo_MavsArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookDodo_Mavs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookEntrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookEntrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookFeesArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookFees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookLambdasArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Lambda_Order_By>>;
  where?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookLambdas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Lambda_Order_By>>;
  where?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "orderbook" */
export type OrderbookOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookRwa_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook" */
export type OrderbookRwa_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};

/** aggregated selection of "orderbook" */
export type Orderbook_Aggregate = {
  __typename?: 'orderbook_aggregate';
  aggregate?: Maybe<Orderbook_Aggregate_Fields>;
  nodes: Array<Orderbook>;
};

export type Orderbook_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook" */
export type Orderbook_Aggregate_Fields = {
  __typename?: 'orderbook_aggregate_fields';
  avg?: Maybe<Orderbook_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Max_Fields>;
  min?: Maybe<Orderbook_Min_Fields>;
  stddev?: Maybe<Orderbook_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Variance_Fields>;
};


/** aggregate fields of "orderbook" */
export type Orderbook_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook" */
export type Orderbook_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Max_Order_By>;
  min?: InputMaybe<Orderbook_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Avg_Fields = {
  __typename?: 'orderbook_avg_fields';
  buy_order_counter?: Maybe<Scalars['Float']['output']>;
  buy_order_fee?: Maybe<Scalars['Float']['output']>;
  highest_buy_price?: Maybe<Scalars['Float']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  last_matched_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['Float']['output']>;
  min_buy_order_amount?: Maybe<Scalars['Float']['output']>;
  min_buy_order_value?: Maybe<Scalars['Float']['output']>;
  min_expiry_time?: Maybe<Scalars['Float']['output']>;
  min_sell_order_amount?: Maybe<Scalars['Float']['output']>;
  min_sell_order_value?: Maybe<Scalars['Float']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
  sell_order_counter?: Maybe<Scalars['Float']['output']>;
  sell_order_fee?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook" */
export type Orderbook_Avg_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook". All fields are combined with a logical 'AND'. */
export type Orderbook_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  buy_order_counter?: InputMaybe<Bigint_Comparison_Exp>;
  buy_order_fee?: InputMaybe<Bigint_Comparison_Exp>;
  currencies?: InputMaybe<Orderbook_Currency_Bool_Exp>;
  currencies_aggregate?: InputMaybe<Orderbook_Currency_Aggregate_Bool_Exp>;
  dodo_mavs?: InputMaybe<Dodo_Mav_Bool_Exp>;
  dodo_mavs_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp>;
  entrypoint_status?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
  entrypoint_status_aggregate?: InputMaybe<Orderbook_Entrypoint_Status_Aggregate_Bool_Exp>;
  fees?: InputMaybe<Orderbook_Fee_Bool_Exp>;
  fees_aggregate?: InputMaybe<Orderbook_Fee_Aggregate_Bool_Exp>;
  highest_buy_price?: InputMaybe<Bigint_Comparison_Exp>;
  highest_buy_price_order_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  kyc?: InputMaybe<Kyc_Bool_Exp>;
  kyc_id?: InputMaybe<Int_Comparison_Exp>;
  lambdas?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
  lambdas_aggregate?: InputMaybe<Orderbook_Lambda_Aggregate_Bool_Exp>;
  last_matched_price?: InputMaybe<Bigint_Comparison_Exp>;
  last_matched_price_timestamp?: InputMaybe<Timetz_Comparison_Exp>;
  lowest_sell_price?: InputMaybe<Bigint_Comparison_Exp>;
  lowest_sell_price_order_id?: InputMaybe<Bigint_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  min_buy_order_amount?: InputMaybe<Bigint_Comparison_Exp>;
  min_buy_order_value?: InputMaybe<Bigint_Comparison_Exp>;
  min_expiry_time?: InputMaybe<Bigint_Comparison_Exp>;
  min_sell_order_amount?: InputMaybe<Bigint_Comparison_Exp>;
  min_sell_order_value?: InputMaybe<Bigint_Comparison_Exp>;
  min_time_before_closing_order?: InputMaybe<Bigint_Comparison_Exp>;
  new_super_admin?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orderbook_Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orderbook_Order_Aggregate_Bool_Exp>;
  rwa_orders?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  rwa_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Aggregate_Bool_Exp>;
  rwa_token?: InputMaybe<Token_Bool_Exp>;
  rwa_token_id?: InputMaybe<Int_Comparison_Exp>;
  sell_order_counter?: InputMaybe<Bigint_Comparison_Exp>;
  sell_order_fee?: InputMaybe<Bigint_Comparison_Exp>;
  super_admin?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "orderbook_currency" */
export type Orderbook_Currency = {
  __typename?: 'orderbook_currency';
  currency_name: Scalars['String']['output'];
  /** An array relationship */
  fees: Array<Orderbook_Fee>;
  /** An aggregate relationship */
  fees_aggregate: Orderbook_Fee_Aggregate;
  id: Scalars['Int']['output'];
  /** An object relationship */
  orderbook: Orderbook;
  orderbook_id: Scalars['Int']['output'];
  /** An array relationship */
  orders: Array<Orderbook_Order>;
  /** An aggregate relationship */
  orders_aggregate: Orderbook_Order_Aggregate;
  /** An object relationship */
  token?: Maybe<Token>;
  token_id?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "orderbook_currency" */
export type Orderbook_CurrencyFeesArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


/** columns and relationships of "orderbook_currency" */
export type Orderbook_CurrencyFees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


/** columns and relationships of "orderbook_currency" */
export type Orderbook_CurrencyOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook_currency" */
export type Orderbook_CurrencyOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};

/** aggregated selection of "orderbook_currency" */
export type Orderbook_Currency_Aggregate = {
  __typename?: 'orderbook_currency_aggregate';
  aggregate?: Maybe<Orderbook_Currency_Aggregate_Fields>;
  nodes: Array<Orderbook_Currency>;
};

export type Orderbook_Currency_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Currency_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Currency_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Currency_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_currency" */
export type Orderbook_Currency_Aggregate_Fields = {
  __typename?: 'orderbook_currency_aggregate_fields';
  avg?: Maybe<Orderbook_Currency_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Currency_Max_Fields>;
  min?: Maybe<Orderbook_Currency_Min_Fields>;
  stddev?: Maybe<Orderbook_Currency_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Currency_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Currency_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Currency_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Currency_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Currency_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Currency_Variance_Fields>;
};


/** aggregate fields of "orderbook_currency" */
export type Orderbook_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_currency" */
export type Orderbook_Currency_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Currency_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Currency_Max_Order_By>;
  min?: InputMaybe<Orderbook_Currency_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Currency_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Currency_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Currency_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Currency_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Currency_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Currency_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Currency_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Currency_Avg_Fields = {
  __typename?: 'orderbook_currency_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_currency". All fields are combined with a logical 'AND'. */
export type Orderbook_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Currency_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Currency_Bool_Exp>>;
  currency_name?: InputMaybe<String_Comparison_Exp>;
  fees?: InputMaybe<Orderbook_Fee_Bool_Exp>;
  fees_aggregate?: InputMaybe<Orderbook_Fee_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  orderbook?: InputMaybe<Orderbook_Bool_Exp>;
  orderbook_id?: InputMaybe<Int_Comparison_Exp>;
  orders?: InputMaybe<Orderbook_Order_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orderbook_Order_Aggregate_Bool_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Currency_Max_Fields = {
  __typename?: 'orderbook_currency_max_fields';
  currency_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Max_Order_By = {
  currency_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Currency_Min_Fields = {
  __typename?: 'orderbook_currency_min_fields';
  currency_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Min_Order_By = {
  currency_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_currency". */
export type Orderbook_Currency_Order_By = {
  currency_name?: InputMaybe<Order_By>;
  fees_aggregate?: InputMaybe<Orderbook_Fee_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook?: InputMaybe<Orderbook_Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orderbook_Order_Aggregate_Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_currency" */
export enum Orderbook_Currency_Select_Column {
  /** column name */
  CurrencyName = 'currency_name',
  /** column name */
  Id = 'id',
  /** column name */
  OrderbookId = 'orderbook_id',
  /** column name */
  TokenId = 'token_id'
}

/** aggregate stddev on columns */
export type Orderbook_Currency_Stddev_Fields = {
  __typename?: 'orderbook_currency_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Currency_Stddev_Pop_Fields = {
  __typename?: 'orderbook_currency_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Currency_Stddev_Samp_Fields = {
  __typename?: 'orderbook_currency_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_currency" */
export type Orderbook_Currency_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Currency_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Currency_Stream_Cursor_Value_Input = {
  currency_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  orderbook_id?: InputMaybe<Scalars['Int']['input']>;
  token_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Currency_Sum_Fields = {
  __typename?: 'orderbook_currency_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Currency_Var_Pop_Fields = {
  __typename?: 'orderbook_currency_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Currency_Var_Samp_Fields = {
  __typename?: 'orderbook_currency_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Currency_Variance_Fields = {
  __typename?: 'orderbook_currency_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_currency" */
export type Orderbook_Currency_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status = {
  __typename?: 'orderbook_entrypoint_status';
  /** An object relationship */
  contract: Orderbook;
  contract_id: Scalars['Int']['output'];
  entrypoint: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  paused: Scalars['Boolean']['output'];
};

/** aggregated selection of "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Aggregate = {
  __typename?: 'orderbook_entrypoint_status_aggregate';
  aggregate?: Maybe<Orderbook_Entrypoint_Status_Aggregate_Fields>;
  nodes: Array<Orderbook_Entrypoint_Status>;
};

export type Orderbook_Entrypoint_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Orderbook_Entrypoint_Status_Select_Column_Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Orderbook_Entrypoint_Status_Select_Column_Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Aggregate_Fields = {
  __typename?: 'orderbook_entrypoint_status_aggregate_fields';
  avg?: Maybe<Orderbook_Entrypoint_Status_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Entrypoint_Status_Max_Fields>;
  min?: Maybe<Orderbook_Entrypoint_Status_Min_Fields>;
  stddev?: Maybe<Orderbook_Entrypoint_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Entrypoint_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Entrypoint_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Entrypoint_Status_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Entrypoint_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Entrypoint_Status_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Entrypoint_Status_Variance_Fields>;
};


/** aggregate fields of "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Entrypoint_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Entrypoint_Status_Max_Order_By>;
  min?: InputMaybe<Orderbook_Entrypoint_Status_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Entrypoint_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Entrypoint_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Entrypoint_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Entrypoint_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Entrypoint_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Entrypoint_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Entrypoint_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Entrypoint_Status_Avg_Fields = {
  __typename?: 'orderbook_entrypoint_status_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_entrypoint_status". All fields are combined with a logical 'AND'. */
export type Orderbook_Entrypoint_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Entrypoint_Status_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Entrypoint_Status_Bool_Exp>>;
  contract?: InputMaybe<Orderbook_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  entrypoint?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  paused?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Entrypoint_Status_Max_Fields = {
  __typename?: 'orderbook_entrypoint_status_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  entrypoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Entrypoint_Status_Min_Fields = {
  __typename?: 'orderbook_entrypoint_status_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  entrypoint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_entrypoint_status". */
export type Orderbook_Entrypoint_Status_Order_By = {
  contract?: InputMaybe<Orderbook_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  entrypoint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  paused?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_entrypoint_status" */
export enum Orderbook_Entrypoint_Status_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Entrypoint = 'entrypoint',
  /** column name */
  Id = 'id',
  /** column name */
  Paused = 'paused'
}

/** select "orderbook_entrypoint_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "orderbook_entrypoint_status" */
export enum Orderbook_Entrypoint_Status_Select_Column_Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Paused = 'paused'
}

/** select "orderbook_entrypoint_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "orderbook_entrypoint_status" */
export enum Orderbook_Entrypoint_Status_Select_Column_Orderbook_Entrypoint_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Paused = 'paused'
}

/** aggregate stddev on columns */
export type Orderbook_Entrypoint_Status_Stddev_Fields = {
  __typename?: 'orderbook_entrypoint_status_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Entrypoint_Status_Stddev_Pop_Fields = {
  __typename?: 'orderbook_entrypoint_status_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Entrypoint_Status_Stddev_Samp_Fields = {
  __typename?: 'orderbook_entrypoint_status_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Entrypoint_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Entrypoint_Status_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  entrypoint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  paused?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Entrypoint_Status_Sum_Fields = {
  __typename?: 'orderbook_entrypoint_status_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Entrypoint_Status_Var_Pop_Fields = {
  __typename?: 'orderbook_entrypoint_status_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Entrypoint_Status_Var_Samp_Fields = {
  __typename?: 'orderbook_entrypoint_status_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Entrypoint_Status_Variance_Fields = {
  __typename?: 'orderbook_entrypoint_status_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_entrypoint_status" */
export type Orderbook_Entrypoint_Status_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "orderbook_fee" */
export type Orderbook_Fee = {
  __typename?: 'orderbook_fee';
  /** An object relationship */
  currency: Orderbook_Currency;
  currency_id: Scalars['Int']['output'];
  fee_amount: Scalars['bigint']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  orderbook: Orderbook;
  orderbook_id: Scalars['Int']['output'];
  paid_fee: Scalars['bigint']['output'];
  /** An object relationship */
  related_token?: Maybe<Token>;
  related_token_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "orderbook_fee" */
export type Orderbook_Fee_Aggregate = {
  __typename?: 'orderbook_fee_aggregate';
  aggregate?: Maybe<Orderbook_Fee_Aggregate_Fields>;
  nodes: Array<Orderbook_Fee>;
};

export type Orderbook_Fee_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Fee_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Fee_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Fee_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_fee" */
export type Orderbook_Fee_Aggregate_Fields = {
  __typename?: 'orderbook_fee_aggregate_fields';
  avg?: Maybe<Orderbook_Fee_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Fee_Max_Fields>;
  min?: Maybe<Orderbook_Fee_Min_Fields>;
  stddev?: Maybe<Orderbook_Fee_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Fee_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Fee_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Fee_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Fee_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Fee_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Fee_Variance_Fields>;
};


/** aggregate fields of "orderbook_fee" */
export type Orderbook_Fee_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_fee" */
export type Orderbook_Fee_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Fee_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Fee_Max_Order_By>;
  min?: InputMaybe<Orderbook_Fee_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Fee_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Fee_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Fee_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Fee_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Fee_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Fee_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Fee_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Fee_Avg_Fields = {
  __typename?: 'orderbook_fee_avg_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fee_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  paid_fee?: Maybe<Scalars['Float']['output']>;
  related_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Avg_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_fee". All fields are combined with a logical 'AND'. */
export type Orderbook_Fee_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Fee_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Fee_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Fee_Bool_Exp>>;
  currency?: InputMaybe<Orderbook_Currency_Bool_Exp>;
  currency_id?: InputMaybe<Int_Comparison_Exp>;
  fee_amount?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  orderbook?: InputMaybe<Orderbook_Bool_Exp>;
  orderbook_id?: InputMaybe<Int_Comparison_Exp>;
  paid_fee?: InputMaybe<Bigint_Comparison_Exp>;
  related_token?: InputMaybe<Token_Bool_Exp>;
  related_token_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Fee_Max_Fields = {
  __typename?: 'orderbook_fee_max_fields';
  currency_id?: Maybe<Scalars['Int']['output']>;
  fee_amount?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  paid_fee?: Maybe<Scalars['bigint']['output']>;
  related_token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Max_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Fee_Min_Fields = {
  __typename?: 'orderbook_fee_min_fields';
  currency_id?: Maybe<Scalars['Int']['output']>;
  fee_amount?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  paid_fee?: Maybe<Scalars['bigint']['output']>;
  related_token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Min_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_fee". */
export type Orderbook_Fee_Order_By = {
  currency?: InputMaybe<Orderbook_Currency_Order_By>;
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook?: InputMaybe<Orderbook_Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token?: InputMaybe<Token_Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_fee" */
export enum Orderbook_Fee_Select_Column {
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  FeeAmount = 'fee_amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderbookId = 'orderbook_id',
  /** column name */
  PaidFee = 'paid_fee',
  /** column name */
  RelatedTokenId = 'related_token_id'
}

/** aggregate stddev on columns */
export type Orderbook_Fee_Stddev_Fields = {
  __typename?: 'orderbook_fee_stddev_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fee_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  paid_fee?: Maybe<Scalars['Float']['output']>;
  related_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Stddev_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Fee_Stddev_Pop_Fields = {
  __typename?: 'orderbook_fee_stddev_pop_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fee_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  paid_fee?: Maybe<Scalars['Float']['output']>;
  related_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Stddev_Pop_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Fee_Stddev_Samp_Fields = {
  __typename?: 'orderbook_fee_stddev_samp_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fee_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  paid_fee?: Maybe<Scalars['Float']['output']>;
  related_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Stddev_Samp_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_fee" */
export type Orderbook_Fee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Fee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Fee_Stream_Cursor_Value_Input = {
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  fee_amount?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  orderbook_id?: InputMaybe<Scalars['Int']['input']>;
  paid_fee?: InputMaybe<Scalars['bigint']['input']>;
  related_token_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Fee_Sum_Fields = {
  __typename?: 'orderbook_fee_sum_fields';
  currency_id?: Maybe<Scalars['Int']['output']>;
  fee_amount?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  paid_fee?: Maybe<Scalars['bigint']['output']>;
  related_token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Sum_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Fee_Var_Pop_Fields = {
  __typename?: 'orderbook_fee_var_pop_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fee_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  paid_fee?: Maybe<Scalars['Float']['output']>;
  related_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Var_Pop_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Fee_Var_Samp_Fields = {
  __typename?: 'orderbook_fee_var_samp_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fee_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  paid_fee?: Maybe<Scalars['Float']['output']>;
  related_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Var_Samp_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Fee_Variance_Fields = {
  __typename?: 'orderbook_fee_variance_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fee_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  paid_fee?: Maybe<Scalars['Float']['output']>;
  related_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_fee" */
export type Orderbook_Fee_Variance_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fee_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  paid_fee?: InputMaybe<Order_By>;
  related_token_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "orderbook_lambda" */
export type Orderbook_Lambda = {
  __typename?: 'orderbook_lambda';
  /** An object relationship */
  contract: Orderbook;
  contract_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lambda_bytes: Scalars['String']['output'];
  lambda_name: Scalars['String']['output'];
  last_updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "orderbook_lambda" */
export type Orderbook_Lambda_Aggregate = {
  __typename?: 'orderbook_lambda_aggregate';
  aggregate?: Maybe<Orderbook_Lambda_Aggregate_Fields>;
  nodes: Array<Orderbook_Lambda>;
};

export type Orderbook_Lambda_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Lambda_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Lambda_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_lambda" */
export type Orderbook_Lambda_Aggregate_Fields = {
  __typename?: 'orderbook_lambda_aggregate_fields';
  avg?: Maybe<Orderbook_Lambda_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Lambda_Max_Fields>;
  min?: Maybe<Orderbook_Lambda_Min_Fields>;
  stddev?: Maybe<Orderbook_Lambda_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Lambda_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Lambda_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Lambda_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Lambda_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Lambda_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Lambda_Variance_Fields>;
};


/** aggregate fields of "orderbook_lambda" */
export type Orderbook_Lambda_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_lambda" */
export type Orderbook_Lambda_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Lambda_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Lambda_Max_Order_By>;
  min?: InputMaybe<Orderbook_Lambda_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Lambda_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Lambda_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Lambda_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Lambda_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Lambda_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Lambda_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Lambda_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Lambda_Avg_Fields = {
  __typename?: 'orderbook_lambda_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_lambda". All fields are combined with a logical 'AND'. */
export type Orderbook_Lambda_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Lambda_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Lambda_Bool_Exp>>;
  contract?: InputMaybe<Orderbook_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambda_bytes?: InputMaybe<String_Comparison_Exp>;
  lambda_name?: InputMaybe<String_Comparison_Exp>;
  last_updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Lambda_Max_Fields = {
  __typename?: 'orderbook_lambda_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Lambda_Min_Fields = {
  __typename?: 'orderbook_lambda_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_lambda". */
export type Orderbook_Lambda_Order_By = {
  contract?: InputMaybe<Orderbook_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_lambda" */
export enum Orderbook_Lambda_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  LambdaBytes = 'lambda_bytes',
  /** column name */
  LambdaName = 'lambda_name',
  /** column name */
  LastUpdatedAt = 'last_updated_at'
}

/** aggregate stddev on columns */
export type Orderbook_Lambda_Stddev_Fields = {
  __typename?: 'orderbook_lambda_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Lambda_Stddev_Pop_Fields = {
  __typename?: 'orderbook_lambda_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Lambda_Stddev_Samp_Fields = {
  __typename?: 'orderbook_lambda_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_lambda" */
export type Orderbook_Lambda_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Lambda_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Lambda_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lambda_bytes?: InputMaybe<Scalars['String']['input']>;
  lambda_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Lambda_Sum_Fields = {
  __typename?: 'orderbook_lambda_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Lambda_Var_Pop_Fields = {
  __typename?: 'orderbook_lambda_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Lambda_Var_Samp_Fields = {
  __typename?: 'orderbook_lambda_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Lambda_Variance_Fields = {
  __typename?: 'orderbook_lambda_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_lambda" */
export type Orderbook_Lambda_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Orderbook_Max_Fields = {
  __typename?: 'orderbook_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  buy_order_counter?: Maybe<Scalars['bigint']['output']>;
  buy_order_fee?: Maybe<Scalars['bigint']['output']>;
  highest_buy_price?: Maybe<Scalars['bigint']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  last_matched_price?: Maybe<Scalars['bigint']['output']>;
  last_matched_price_timestamp?: Maybe<Scalars['timetz']['output']>;
  lowest_sell_price?: Maybe<Scalars['bigint']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['bigint']['output']>;
  min_buy_order_amount?: Maybe<Scalars['bigint']['output']>;
  min_buy_order_value?: Maybe<Scalars['bigint']['output']>;
  min_expiry_time?: Maybe<Scalars['bigint']['output']>;
  min_sell_order_amount?: Maybe<Scalars['bigint']['output']>;
  min_sell_order_value?: Maybe<Scalars['bigint']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['bigint']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  rwa_token_id?: Maybe<Scalars['Int']['output']>;
  sell_order_counter?: Maybe<Scalars['bigint']['output']>;
  sell_order_fee?: Maybe<Scalars['bigint']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "orderbook" */
export type Orderbook_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  last_matched_price_timestamp?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Min_Fields = {
  __typename?: 'orderbook_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  buy_order_counter?: Maybe<Scalars['bigint']['output']>;
  buy_order_fee?: Maybe<Scalars['bigint']['output']>;
  highest_buy_price?: Maybe<Scalars['bigint']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  last_matched_price?: Maybe<Scalars['bigint']['output']>;
  last_matched_price_timestamp?: Maybe<Scalars['timetz']['output']>;
  lowest_sell_price?: Maybe<Scalars['bigint']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['bigint']['output']>;
  min_buy_order_amount?: Maybe<Scalars['bigint']['output']>;
  min_buy_order_value?: Maybe<Scalars['bigint']['output']>;
  min_expiry_time?: Maybe<Scalars['bigint']['output']>;
  min_sell_order_amount?: Maybe<Scalars['bigint']['output']>;
  min_sell_order_value?: Maybe<Scalars['bigint']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['bigint']['output']>;
  new_super_admin?: Maybe<Scalars['String']['output']>;
  rwa_token_id?: Maybe<Scalars['Int']['output']>;
  sell_order_counter?: Maybe<Scalars['bigint']['output']>;
  sell_order_fee?: Maybe<Scalars['bigint']['output']>;
  super_admin?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "orderbook" */
export type Orderbook_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  last_matched_price_timestamp?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Order_By>;
};

/** columns and relationships of "orderbook_order" */
export type Orderbook_Order = {
  __typename?: 'orderbook_order';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  currency: Orderbook_Currency;
  currency_id: Scalars['Int']['output'];
  ended_at?: Maybe<Scalars['timestamptz']['output']>;
  fulfilled_amount: Scalars['bigint']['output'];
  id: Scalars['Int']['output'];
  initiator: Scalars['String']['output'];
  is_canceled: Scalars['Boolean']['output'];
  is_expired: Scalars['Boolean']['output'];
  is_fulfilled: Scalars['Boolean']['output'];
  is_refunded: Scalars['Boolean']['output'];
  order_expiry?: Maybe<Scalars['timestamptz']['output']>;
  order_id: Scalars['bigint']['output'];
  /** BUY: 0\nSELL: 1 */
  order_type: Scalars['smallint']['output'];
  /** An object relationship */
  orderbook: Orderbook;
  orderbook_id: Scalars['Int']['output'];
  price_per_rwa_token: Scalars['bigint']['output'];
  refunded_amount: Scalars['bigint']['output'];
  rwa_token_amount: Scalars['bigint']['output'];
  total_paid_out: Scalars['bigint']['output'];
  total_usd_value_of_rwa_token_amount: Scalars['bigint']['output'];
  unfulfilled_amount: Scalars['bigint']['output'];
};

/** aggregated selection of "orderbook_order" */
export type Orderbook_Order_Aggregate = {
  __typename?: 'orderbook_order_aggregate';
  aggregate?: Maybe<Orderbook_Order_Aggregate_Fields>;
  nodes: Array<Orderbook_Order>;
};

export type Orderbook_Order_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Orderbook_Order_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Orderbook_Order_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Orderbook_Order_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Order_Aggregate_Bool_Exp_Bool_And = {
  arguments: Orderbook_Order_Select_Column_Orderbook_Order_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Order_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orderbook_Order_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Orderbook_Order_Select_Column_Orderbook_Order_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Order_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orderbook_Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_order" */
export type Orderbook_Order_Aggregate_Fields = {
  __typename?: 'orderbook_order_aggregate_fields';
  avg?: Maybe<Orderbook_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Order_Max_Fields>;
  min?: Maybe<Orderbook_Order_Min_Fields>;
  stddev?: Maybe<Orderbook_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Order_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Order_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Order_Variance_Fields>;
};


/** aggregate fields of "orderbook_order" */
export type Orderbook_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_order" */
export type Orderbook_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Order_Max_Order_By>;
  min?: InputMaybe<Orderbook_Order_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Order_Avg_Fields = {
  __typename?: 'orderbook_order_avg_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fulfilled_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  price_per_rwa_token?: Maybe<Scalars['Float']['output']>;
  refunded_amount?: Maybe<Scalars['Float']['output']>;
  rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  total_paid_out?: Maybe<Scalars['Float']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  unfulfilled_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_order" */
export type Orderbook_Order_Avg_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_order". All fields are combined with a logical 'AND'. */
export type Orderbook_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Order_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Order_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Orderbook_Currency_Bool_Exp>;
  currency_id?: InputMaybe<Int_Comparison_Exp>;
  ended_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fulfilled_amount?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initiator?: InputMaybe<String_Comparison_Exp>;
  is_canceled?: InputMaybe<Boolean_Comparison_Exp>;
  is_expired?: InputMaybe<Boolean_Comparison_Exp>;
  is_fulfilled?: InputMaybe<Boolean_Comparison_Exp>;
  is_refunded?: InputMaybe<Boolean_Comparison_Exp>;
  order_expiry?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_id?: InputMaybe<Bigint_Comparison_Exp>;
  order_type?: InputMaybe<Smallint_Comparison_Exp>;
  orderbook?: InputMaybe<Orderbook_Bool_Exp>;
  orderbook_id?: InputMaybe<Int_Comparison_Exp>;
  price_per_rwa_token?: InputMaybe<Bigint_Comparison_Exp>;
  refunded_amount?: InputMaybe<Bigint_Comparison_Exp>;
  rwa_token_amount?: InputMaybe<Bigint_Comparison_Exp>;
  total_paid_out?: InputMaybe<Bigint_Comparison_Exp>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Bigint_Comparison_Exp>;
  unfulfilled_amount?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "orderbook". */
export type Orderbook_Order_By = {
  address?: InputMaybe<Order_By>;
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  currencies_aggregate?: InputMaybe<Orderbook_Currency_Aggregate_Order_By>;
  dodo_mavs_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Order_By>;
  entrypoint_status_aggregate?: InputMaybe<Orderbook_Entrypoint_Status_Aggregate_Order_By>;
  fees_aggregate?: InputMaybe<Orderbook_Fee_Aggregate_Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc?: InputMaybe<Kyc_Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  lambdas_aggregate?: InputMaybe<Orderbook_Lambda_Aggregate_Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  last_matched_price_timestamp?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  new_super_admin?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orderbook_Order_Aggregate_Order_By>;
  rwa_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Aggregate_Order_By>;
  rwa_token?: InputMaybe<Token_Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Orderbook_Order_Max_Fields = {
  __typename?: 'orderbook_order_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  ended_at?: Maybe<Scalars['timestamptz']['output']>;
  fulfilled_amount?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator?: Maybe<Scalars['String']['output']>;
  order_expiry?: Maybe<Scalars['timestamptz']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['smallint']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  price_per_rwa_token?: Maybe<Scalars['bigint']['output']>;
  refunded_amount?: Maybe<Scalars['bigint']['output']>;
  rwa_token_amount?: Maybe<Scalars['bigint']['output']>;
  total_paid_out?: Maybe<Scalars['bigint']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['bigint']['output']>;
  unfulfilled_amount?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "orderbook_order" */
export type Orderbook_Order_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator?: InputMaybe<Order_By>;
  order_expiry?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Order_Min_Fields = {
  __typename?: 'orderbook_order_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  currency_id?: Maybe<Scalars['Int']['output']>;
  ended_at?: Maybe<Scalars['timestamptz']['output']>;
  fulfilled_amount?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator?: Maybe<Scalars['String']['output']>;
  order_expiry?: Maybe<Scalars['timestamptz']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['smallint']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  price_per_rwa_token?: Maybe<Scalars['bigint']['output']>;
  refunded_amount?: Maybe<Scalars['bigint']['output']>;
  rwa_token_amount?: Maybe<Scalars['bigint']['output']>;
  total_paid_out?: Maybe<Scalars['bigint']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['bigint']['output']>;
  unfulfilled_amount?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "orderbook_order" */
export type Orderbook_Order_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator?: InputMaybe<Order_By>;
  order_expiry?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_order". */
export type Orderbook_Order_Order_By = {
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Orderbook_Currency_Order_By>;
  currency_id?: InputMaybe<Order_By>;
  ended_at?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator?: InputMaybe<Order_By>;
  is_canceled?: InputMaybe<Order_By>;
  is_expired?: InputMaybe<Order_By>;
  is_fulfilled?: InputMaybe<Order_By>;
  is_refunded?: InputMaybe<Order_By>;
  order_expiry?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  order_type?: InputMaybe<Order_By>;
  orderbook?: InputMaybe<Orderbook_Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_order" */
export enum Orderbook_Order_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrencyId = 'currency_id',
  /** column name */
  EndedAt = 'ended_at',
  /** column name */
  FulfilledAmount = 'fulfilled_amount',
  /** column name */
  Id = 'id',
  /** column name */
  Initiator = 'initiator',
  /** column name */
  IsCanceled = 'is_canceled',
  /** column name */
  IsExpired = 'is_expired',
  /** column name */
  IsFulfilled = 'is_fulfilled',
  /** column name */
  IsRefunded = 'is_refunded',
  /** column name */
  OrderExpiry = 'order_expiry',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderType = 'order_type',
  /** column name */
  OrderbookId = 'orderbook_id',
  /** column name */
  PricePerRwaToken = 'price_per_rwa_token',
  /** column name */
  RefundedAmount = 'refunded_amount',
  /** column name */
  RwaTokenAmount = 'rwa_token_amount',
  /** column name */
  TotalPaidOut = 'total_paid_out',
  /** column name */
  TotalUsdValueOfRwaTokenAmount = 'total_usd_value_of_rwa_token_amount',
  /** column name */
  UnfulfilledAmount = 'unfulfilled_amount'
}

/** select "orderbook_order_aggregate_bool_exp_bool_and_arguments_columns" columns of table "orderbook_order" */
export enum Orderbook_Order_Select_Column_Orderbook_Order_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsCanceled = 'is_canceled',
  /** column name */
  IsExpired = 'is_expired',
  /** column name */
  IsFulfilled = 'is_fulfilled',
  /** column name */
  IsRefunded = 'is_refunded'
}

/** select "orderbook_order_aggregate_bool_exp_bool_or_arguments_columns" columns of table "orderbook_order" */
export enum Orderbook_Order_Select_Column_Orderbook_Order_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsCanceled = 'is_canceled',
  /** column name */
  IsExpired = 'is_expired',
  /** column name */
  IsFulfilled = 'is_fulfilled',
  /** column name */
  IsRefunded = 'is_refunded'
}

/** aggregate stddev on columns */
export type Orderbook_Order_Stddev_Fields = {
  __typename?: 'orderbook_order_stddev_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fulfilled_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  price_per_rwa_token?: Maybe<Scalars['Float']['output']>;
  refunded_amount?: Maybe<Scalars['Float']['output']>;
  rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  total_paid_out?: Maybe<Scalars['Float']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  unfulfilled_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_order" */
export type Orderbook_Order_Stddev_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Order_Stddev_Pop_Fields = {
  __typename?: 'orderbook_order_stddev_pop_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fulfilled_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  price_per_rwa_token?: Maybe<Scalars['Float']['output']>;
  refunded_amount?: Maybe<Scalars['Float']['output']>;
  rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  total_paid_out?: Maybe<Scalars['Float']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  unfulfilled_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_order" */
export type Orderbook_Order_Stddev_Pop_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Order_Stddev_Samp_Fields = {
  __typename?: 'orderbook_order_stddev_samp_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fulfilled_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  price_per_rwa_token?: Maybe<Scalars['Float']['output']>;
  refunded_amount?: Maybe<Scalars['Float']['output']>;
  rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  total_paid_out?: Maybe<Scalars['Float']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  unfulfilled_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_order" */
export type Orderbook_Order_Stddev_Samp_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_order" */
export type Orderbook_Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Order_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency_id?: InputMaybe<Scalars['Int']['input']>;
  ended_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fulfilled_amount?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initiator?: InputMaybe<Scalars['String']['input']>;
  is_canceled?: InputMaybe<Scalars['Boolean']['input']>;
  is_expired?: InputMaybe<Scalars['Boolean']['input']>;
  is_fulfilled?: InputMaybe<Scalars['Boolean']['input']>;
  is_refunded?: InputMaybe<Scalars['Boolean']['input']>;
  order_expiry?: InputMaybe<Scalars['timestamptz']['input']>;
  order_id?: InputMaybe<Scalars['bigint']['input']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Scalars['smallint']['input']>;
  orderbook_id?: InputMaybe<Scalars['Int']['input']>;
  price_per_rwa_token?: InputMaybe<Scalars['bigint']['input']>;
  refunded_amount?: InputMaybe<Scalars['bigint']['input']>;
  rwa_token_amount?: InputMaybe<Scalars['bigint']['input']>;
  total_paid_out?: InputMaybe<Scalars['bigint']['input']>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Scalars['bigint']['input']>;
  unfulfilled_amount?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Order_Sum_Fields = {
  __typename?: 'orderbook_order_sum_fields';
  currency_id?: Maybe<Scalars['Int']['output']>;
  fulfilled_amount?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['bigint']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['smallint']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  price_per_rwa_token?: Maybe<Scalars['bigint']['output']>;
  refunded_amount?: Maybe<Scalars['bigint']['output']>;
  rwa_token_amount?: Maybe<Scalars['bigint']['output']>;
  total_paid_out?: Maybe<Scalars['bigint']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['bigint']['output']>;
  unfulfilled_amount?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "orderbook_order" */
export type Orderbook_Order_Sum_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Order_Var_Pop_Fields = {
  __typename?: 'orderbook_order_var_pop_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fulfilled_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  price_per_rwa_token?: Maybe<Scalars['Float']['output']>;
  refunded_amount?: Maybe<Scalars['Float']['output']>;
  rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  total_paid_out?: Maybe<Scalars['Float']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  unfulfilled_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_order" */
export type Orderbook_Order_Var_Pop_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Order_Var_Samp_Fields = {
  __typename?: 'orderbook_order_var_samp_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fulfilled_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  price_per_rwa_token?: Maybe<Scalars['Float']['output']>;
  refunded_amount?: Maybe<Scalars['Float']['output']>;
  rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  total_paid_out?: Maybe<Scalars['Float']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  unfulfilled_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_order" */
export type Orderbook_Order_Var_Samp_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Order_Variance_Fields = {
  __typename?: 'orderbook_order_variance_fields';
  currency_id?: Maybe<Scalars['Float']['output']>;
  fulfilled_amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  /** BUY: 0\nSELL: 1 */
  order_type?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  price_per_rwa_token?: Maybe<Scalars['Float']['output']>;
  refunded_amount?: Maybe<Scalars['Float']['output']>;
  rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  total_paid_out?: Maybe<Scalars['Float']['output']>;
  total_usd_value_of_rwa_token_amount?: Maybe<Scalars['Float']['output']>;
  unfulfilled_amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_order" */
export type Orderbook_Order_Variance_Order_By = {
  currency_id?: InputMaybe<Order_By>;
  fulfilled_amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  /** BUY: 0\nSELL: 1 */
  order_type?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  price_per_rwa_token?: InputMaybe<Order_By>;
  refunded_amount?: InputMaybe<Order_By>;
  rwa_token_amount?: InputMaybe<Order_By>;
  total_paid_out?: InputMaybe<Order_By>;
  total_usd_value_of_rwa_token_amount?: InputMaybe<Order_By>;
  unfulfilled_amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_Order = {
  __typename?: 'orderbook_rwa_order';
  id: Scalars['Int']['output'];
  /** An object relationship */
  orderbook: Orderbook;
  orderbook_id: Scalars['Int']['output'];
  /** An array relationship */
  orderbook_rwa_order_buy_orders: Array<Orderbook_Rwa_Order_Buy_Order>;
  /** An aggregate relationship */
  orderbook_rwa_order_buy_orders_aggregate: Orderbook_Rwa_Order_Buy_Order_Aggregate;
  /** An array relationship */
  orderbook_rwa_order_buy_prices: Array<Orderbook_Rwa_Order_Buy_Price>;
  /** An aggregate relationship */
  orderbook_rwa_order_buy_prices_aggregate: Orderbook_Rwa_Order_Buy_Price_Aggregate;
  /** An array relationship */
  orderbook_rwa_order_sell_orders: Array<Orderbook_Rwa_Order_Sell_Order>;
  /** An aggregate relationship */
  orderbook_rwa_order_sell_orders_aggregate: Orderbook_Rwa_Order_Sell_Order_Aggregate;
  /** An array relationship */
  orderbook_rwa_order_sell_prices: Array<Orderbook_Rwa_Order_Sell_Price>;
  /** An aggregate relationship */
  orderbook_rwa_order_sell_prices_aggregate: Orderbook_Rwa_Order_Sell_Price_Aggregate;
  /** An object relationship */
  rwa_token: Token;
  rwa_token_id: Scalars['Int']['output'];
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Buy_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Buy_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Buy_PricesArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Buy_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Sell_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Sell_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Sell_PricesArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
};


/** columns and relationships of "orderbook_rwa_order" */
export type Orderbook_Rwa_OrderOrderbook_Rwa_Order_Sell_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
};

/** aggregated selection of "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Aggregate = {
  __typename?: 'orderbook_rwa_order_aggregate';
  aggregate?: Maybe<Orderbook_Rwa_Order_Aggregate_Fields>;
  nodes: Array<Orderbook_Rwa_Order>;
};

export type Orderbook_Rwa_Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Rwa_Order_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Rwa_Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Aggregate_Fields = {
  __typename?: 'orderbook_rwa_order_aggregate_fields';
  avg?: Maybe<Orderbook_Rwa_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Rwa_Order_Max_Fields>;
  min?: Maybe<Orderbook_Rwa_Order_Min_Fields>;
  stddev?: Maybe<Orderbook_Rwa_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Rwa_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Rwa_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Rwa_Order_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Rwa_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Rwa_Order_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Rwa_Order_Variance_Fields>;
};


/** aggregate fields of "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Rwa_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Rwa_Order_Max_Order_By>;
  min?: InputMaybe<Orderbook_Rwa_Order_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Rwa_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Rwa_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Rwa_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Rwa_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Rwa_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Rwa_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Rwa_Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Rwa_Order_Avg_Fields = {
  __typename?: 'orderbook_rwa_order_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_rwa_order". All fields are combined with a logical 'AND'. */
export type Orderbook_Rwa_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Rwa_Order_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Rwa_Order_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  orderbook?: InputMaybe<Orderbook_Bool_Exp>;
  orderbook_id?: InputMaybe<Int_Comparison_Exp>;
  orderbook_rwa_order_buy_orders?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
  orderbook_rwa_order_buy_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Aggregate_Bool_Exp>;
  orderbook_rwa_order_buy_prices?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
  orderbook_rwa_order_buy_prices_aggregate?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Aggregate_Bool_Exp>;
  orderbook_rwa_order_sell_orders?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
  orderbook_rwa_order_sell_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Aggregate_Bool_Exp>;
  orderbook_rwa_order_sell_prices?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
  orderbook_rwa_order_sell_prices_aggregate?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Aggregate_Bool_Exp>;
  rwa_token?: InputMaybe<Token_Bool_Exp>;
  rwa_token_id?: InputMaybe<Int_Comparison_Exp>;
};

/** columns and relationships of "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order = {
  __typename?: 'orderbook_rwa_order_buy_order';
  id: Scalars['Int']['output'];
  order_ids?: Maybe<Scalars['String']['output']>;
  price: Scalars['bigint']['output'];
  /** An object relationship */
  rwa_order: Orderbook_Rwa_Order;
  rwa_order_id: Scalars['Int']['output'];
};

/** aggregated selection of "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Aggregate = {
  __typename?: 'orderbook_rwa_order_buy_order_aggregate';
  aggregate?: Maybe<Orderbook_Rwa_Order_Buy_Order_Aggregate_Fields>;
  nodes: Array<Orderbook_Rwa_Order_Buy_Order>;
};

export type Orderbook_Rwa_Order_Buy_Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Rwa_Order_Buy_Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Aggregate_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_aggregate_fields';
  avg?: Maybe<Orderbook_Rwa_Order_Buy_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Rwa_Order_Buy_Order_Max_Fields>;
  min?: Maybe<Orderbook_Rwa_Order_Buy_Order_Min_Fields>;
  stddev?: Maybe<Orderbook_Rwa_Order_Buy_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Rwa_Order_Buy_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Rwa_Order_Buy_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Rwa_Order_Buy_Order_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Rwa_Order_Buy_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Rwa_Order_Buy_Order_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Rwa_Order_Buy_Order_Variance_Fields>;
};


/** aggregate fields of "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Max_Order_By>;
  min?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Rwa_Order_Buy_Order_Avg_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_rwa_order_buy_order". All fields are combined with a logical 'AND'. */
export type Orderbook_Rwa_Order_Buy_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order_ids?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Bigint_Comparison_Exp>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  rwa_order_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Rwa_Order_Buy_Order_Max_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  order_ids?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  order_ids?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Rwa_Order_Buy_Order_Min_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  order_ids?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  order_ids?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_rwa_order_buy_order". */
export type Orderbook_Rwa_Order_Buy_Order_Order_By = {
  id?: InputMaybe<Order_By>;
  order_ids?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_rwa_order_buy_order" */
export enum Orderbook_Rwa_Order_Buy_Order_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderIds = 'order_ids',
  /** column name */
  Price = 'price',
  /** column name */
  RwaOrderId = 'rwa_order_id'
}

/** aggregate stddev on columns */
export type Orderbook_Rwa_Order_Buy_Order_Stddev_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Rwa_Order_Buy_Order_Stddev_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Rwa_Order_Buy_Order_Stddev_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Rwa_Order_Buy_Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Rwa_Order_Buy_Order_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  order_ids?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['bigint']['input']>;
  rwa_order_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Rwa_Order_Buy_Order_Sum_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Rwa_Order_Buy_Order_Var_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Rwa_Order_Buy_Order_Var_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Rwa_Order_Buy_Order_Variance_Fields = {
  __typename?: 'orderbook_rwa_order_buy_order_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_rwa_order_buy_order" */
export type Orderbook_Rwa_Order_Buy_Order_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price = {
  __typename?: 'orderbook_rwa_order_buy_price';
  counter: Scalars['bigint']['output'];
  id: Scalars['Int']['output'];
  price: Scalars['bigint']['output'];
  /** An object relationship */
  rwa_order: Orderbook_Rwa_Order;
  rwa_order_id: Scalars['Int']['output'];
};

/** aggregated selection of "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Aggregate = {
  __typename?: 'orderbook_rwa_order_buy_price_aggregate';
  aggregate?: Maybe<Orderbook_Rwa_Order_Buy_Price_Aggregate_Fields>;
  nodes: Array<Orderbook_Rwa_Order_Buy_Price>;
};

export type Orderbook_Rwa_Order_Buy_Price_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Rwa_Order_Buy_Price_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Aggregate_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_aggregate_fields';
  avg?: Maybe<Orderbook_Rwa_Order_Buy_Price_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Rwa_Order_Buy_Price_Max_Fields>;
  min?: Maybe<Orderbook_Rwa_Order_Buy_Price_Min_Fields>;
  stddev?: Maybe<Orderbook_Rwa_Order_Buy_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Rwa_Order_Buy_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Rwa_Order_Buy_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Rwa_Order_Buy_Price_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Rwa_Order_Buy_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Rwa_Order_Buy_Price_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Rwa_Order_Buy_Price_Variance_Fields>;
};


/** aggregate fields of "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Max_Order_By>;
  min?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Rwa_Order_Buy_Price_Avg_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_rwa_order_buy_price". All fields are combined with a logical 'AND'. */
export type Orderbook_Rwa_Order_Buy_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Bigint_Comparison_Exp>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  rwa_order_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Rwa_Order_Buy_Price_Max_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Rwa_Order_Buy_Price_Min_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_rwa_order_buy_price". */
export type Orderbook_Rwa_Order_Buy_Price_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_rwa_order_buy_price" */
export enum Orderbook_Rwa_Order_Buy_Price_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  RwaOrderId = 'rwa_order_id'
}

/** aggregate stddev on columns */
export type Orderbook_Rwa_Order_Buy_Price_Stddev_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Rwa_Order_Buy_Price_Stddev_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Rwa_Order_Buy_Price_Stddev_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Rwa_Order_Buy_Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Rwa_Order_Buy_Price_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['bigint']['input']>;
  rwa_order_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Rwa_Order_Buy_Price_Sum_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Rwa_Order_Buy_Price_Var_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Rwa_Order_Buy_Price_Var_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Rwa_Order_Buy_Price_Variance_Fields = {
  __typename?: 'orderbook_rwa_order_buy_price_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_rwa_order_buy_price" */
export type Orderbook_Rwa_Order_Buy_Price_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Orderbook_Rwa_Order_Max_Fields = {
  __typename?: 'orderbook_rwa_order_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  rwa_token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Rwa_Order_Min_Fields = {
  __typename?: 'orderbook_rwa_order_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  rwa_token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_rwa_order". */
export type Orderbook_Rwa_Order_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook?: InputMaybe<Orderbook_Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  orderbook_rwa_order_buy_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Aggregate_Order_By>;
  orderbook_rwa_order_buy_prices_aggregate?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Aggregate_Order_By>;
  orderbook_rwa_order_sell_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Aggregate_Order_By>;
  orderbook_rwa_order_sell_prices_aggregate?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Aggregate_Order_By>;
  rwa_token?: InputMaybe<Token_Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_rwa_order" */
export enum Orderbook_Rwa_Order_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderbookId = 'orderbook_id',
  /** column name */
  RwaTokenId = 'rwa_token_id'
}

/** columns and relationships of "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order = {
  __typename?: 'orderbook_rwa_order_sell_order';
  id: Scalars['Int']['output'];
  order_ids?: Maybe<Scalars['String']['output']>;
  price: Scalars['bigint']['output'];
  /** An object relationship */
  rwa_order: Orderbook_Rwa_Order;
  rwa_order_id: Scalars['Int']['output'];
};

/** aggregated selection of "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Aggregate = {
  __typename?: 'orderbook_rwa_order_sell_order_aggregate';
  aggregate?: Maybe<Orderbook_Rwa_Order_Sell_Order_Aggregate_Fields>;
  nodes: Array<Orderbook_Rwa_Order_Sell_Order>;
};

export type Orderbook_Rwa_Order_Sell_Order_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Rwa_Order_Sell_Order_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Aggregate_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_aggregate_fields';
  avg?: Maybe<Orderbook_Rwa_Order_Sell_Order_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Rwa_Order_Sell_Order_Max_Fields>;
  min?: Maybe<Orderbook_Rwa_Order_Sell_Order_Min_Fields>;
  stddev?: Maybe<Orderbook_Rwa_Order_Sell_Order_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Rwa_Order_Sell_Order_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Rwa_Order_Sell_Order_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Rwa_Order_Sell_Order_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Rwa_Order_Sell_Order_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Rwa_Order_Sell_Order_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Rwa_Order_Sell_Order_Variance_Fields>;
};


/** aggregate fields of "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Max_Order_By>;
  min?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Rwa_Order_Sell_Order_Avg_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_rwa_order_sell_order". All fields are combined with a logical 'AND'. */
export type Orderbook_Rwa_Order_Sell_Order_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order_ids?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Bigint_Comparison_Exp>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  rwa_order_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Rwa_Order_Sell_Order_Max_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  order_ids?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  order_ids?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Rwa_Order_Sell_Order_Min_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  order_ids?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  order_ids?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_rwa_order_sell_order". */
export type Orderbook_Rwa_Order_Sell_Order_Order_By = {
  id?: InputMaybe<Order_By>;
  order_ids?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_rwa_order_sell_order" */
export enum Orderbook_Rwa_Order_Sell_Order_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrderIds = 'order_ids',
  /** column name */
  Price = 'price',
  /** column name */
  RwaOrderId = 'rwa_order_id'
}

/** aggregate stddev on columns */
export type Orderbook_Rwa_Order_Sell_Order_Stddev_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Rwa_Order_Sell_Order_Stddev_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Rwa_Order_Sell_Order_Stddev_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Rwa_Order_Sell_Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Rwa_Order_Sell_Order_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  order_ids?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['bigint']['input']>;
  rwa_order_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Rwa_Order_Sell_Order_Sum_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Rwa_Order_Sell_Order_Var_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Rwa_Order_Sell_Order_Var_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Rwa_Order_Sell_Order_Variance_Fields = {
  __typename?: 'orderbook_rwa_order_sell_order_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_rwa_order_sell_order" */
export type Orderbook_Rwa_Order_Sell_Order_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price = {
  __typename?: 'orderbook_rwa_order_sell_price';
  counter: Scalars['bigint']['output'];
  id: Scalars['Int']['output'];
  price: Scalars['bigint']['output'];
  /** An object relationship */
  rwa_order: Orderbook_Rwa_Order;
  rwa_order_id: Scalars['Int']['output'];
};

/** aggregated selection of "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Aggregate = {
  __typename?: 'orderbook_rwa_order_sell_price_aggregate';
  aggregate?: Maybe<Orderbook_Rwa_Order_Sell_Price_Aggregate_Fields>;
  nodes: Array<Orderbook_Rwa_Order_Sell_Price>;
};

export type Orderbook_Rwa_Order_Sell_Price_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Aggregate_Bool_Exp_Count>;
};

export type Orderbook_Rwa_Order_Sell_Price_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Aggregate_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_aggregate_fields';
  avg?: Maybe<Orderbook_Rwa_Order_Sell_Price_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orderbook_Rwa_Order_Sell_Price_Max_Fields>;
  min?: Maybe<Orderbook_Rwa_Order_Sell_Price_Min_Fields>;
  stddev?: Maybe<Orderbook_Rwa_Order_Sell_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Orderbook_Rwa_Order_Sell_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orderbook_Rwa_Order_Sell_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Orderbook_Rwa_Order_Sell_Price_Sum_Fields>;
  var_pop?: Maybe<Orderbook_Rwa_Order_Sell_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Orderbook_Rwa_Order_Sell_Price_Var_Samp_Fields>;
  variance?: Maybe<Orderbook_Rwa_Order_Sell_Price_Variance_Fields>;
};


/** aggregate fields of "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Max_Order_By>;
  min?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Min_Order_By>;
  stddev?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Orderbook_Rwa_Order_Sell_Price_Avg_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderbook_rwa_order_sell_price". All fields are combined with a logical 'AND'. */
export type Orderbook_Rwa_Order_Sell_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>>;
  _not?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Bigint_Comparison_Exp>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  rwa_order_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Orderbook_Rwa_Order_Sell_Price_Max_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_max_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderbook_Rwa_Order_Sell_Price_Min_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_min_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "orderbook_rwa_order_sell_price". */
export type Orderbook_Rwa_Order_Sell_Price_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order?: InputMaybe<Orderbook_Rwa_Order_Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook_rwa_order_sell_price" */
export enum Orderbook_Rwa_Order_Sell_Price_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  RwaOrderId = 'rwa_order_id'
}

/** aggregate stddev on columns */
export type Orderbook_Rwa_Order_Sell_Price_Stddev_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Rwa_Order_Sell_Price_Stddev_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Rwa_Order_Sell_Price_Stddev_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Rwa_Order_Sell_Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Rwa_Order_Sell_Price_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['bigint']['input']>;
  rwa_order_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Rwa_Order_Sell_Price_Sum_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_sum_fields';
  counter?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['bigint']['output']>;
  rwa_order_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Rwa_Order_Sell_Price_Var_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Rwa_Order_Sell_Price_Var_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Rwa_Order_Sell_Price_Variance_Fields = {
  __typename?: 'orderbook_rwa_order_sell_price_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rwa_order_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_rwa_order_sell_price" */
export type Orderbook_Rwa_Order_Sell_Price_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rwa_order_id?: InputMaybe<Order_By>;
};

/** aggregate stddev on columns */
export type Orderbook_Rwa_Order_Stddev_Fields = {
  __typename?: 'orderbook_rwa_order_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Rwa_Order_Stddev_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Rwa_Order_Stddev_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Rwa_Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Rwa_Order_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  orderbook_id?: InputMaybe<Scalars['Int']['input']>;
  rwa_token_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Rwa_Order_Sum_Fields = {
  __typename?: 'orderbook_rwa_order_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  orderbook_id?: Maybe<Scalars['Int']['output']>;
  rwa_token_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Rwa_Order_Var_Pop_Fields = {
  __typename?: 'orderbook_rwa_order_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Rwa_Order_Var_Samp_Fields = {
  __typename?: 'orderbook_rwa_order_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Rwa_Order_Variance_Fields = {
  __typename?: 'orderbook_rwa_order_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  orderbook_id?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook_rwa_order" */
export type Orderbook_Rwa_Order_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  orderbook_id?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
};

/** select columns of table "orderbook" */
export enum Orderbook_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BuyOrderCounter = 'buy_order_counter',
  /** column name */
  BuyOrderFee = 'buy_order_fee',
  /** column name */
  HighestBuyPrice = 'highest_buy_price',
  /** column name */
  HighestBuyPriceOrderId = 'highest_buy_price_order_id',
  /** column name */
  Id = 'id',
  /** column name */
  KycId = 'kyc_id',
  /** column name */
  LastMatchedPrice = 'last_matched_price',
  /** column name */
  LastMatchedPriceTimestamp = 'last_matched_price_timestamp',
  /** column name */
  LowestSellPrice = 'lowest_sell_price',
  /** column name */
  LowestSellPriceOrderId = 'lowest_sell_price_order_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MinBuyOrderAmount = 'min_buy_order_amount',
  /** column name */
  MinBuyOrderValue = 'min_buy_order_value',
  /** column name */
  MinExpiryTime = 'min_expiry_time',
  /** column name */
  MinSellOrderAmount = 'min_sell_order_amount',
  /** column name */
  MinSellOrderValue = 'min_sell_order_value',
  /** column name */
  MinTimeBeforeClosingOrder = 'min_time_before_closing_order',
  /** column name */
  NewSuperAdmin = 'new_super_admin',
  /** column name */
  RwaTokenId = 'rwa_token_id',
  /** column name */
  SellOrderCounter = 'sell_order_counter',
  /** column name */
  SellOrderFee = 'sell_order_fee',
  /** column name */
  SuperAdmin = 'super_admin'
}

/** aggregate stddev on columns */
export type Orderbook_Stddev_Fields = {
  __typename?: 'orderbook_stddev_fields';
  buy_order_counter?: Maybe<Scalars['Float']['output']>;
  buy_order_fee?: Maybe<Scalars['Float']['output']>;
  highest_buy_price?: Maybe<Scalars['Float']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  last_matched_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['Float']['output']>;
  min_buy_order_amount?: Maybe<Scalars['Float']['output']>;
  min_buy_order_value?: Maybe<Scalars['Float']['output']>;
  min_expiry_time?: Maybe<Scalars['Float']['output']>;
  min_sell_order_amount?: Maybe<Scalars['Float']['output']>;
  min_sell_order_value?: Maybe<Scalars['Float']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
  sell_order_counter?: Maybe<Scalars['Float']['output']>;
  sell_order_fee?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orderbook" */
export type Orderbook_Stddev_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderbook_Stddev_Pop_Fields = {
  __typename?: 'orderbook_stddev_pop_fields';
  buy_order_counter?: Maybe<Scalars['Float']['output']>;
  buy_order_fee?: Maybe<Scalars['Float']['output']>;
  highest_buy_price?: Maybe<Scalars['Float']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  last_matched_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['Float']['output']>;
  min_buy_order_amount?: Maybe<Scalars['Float']['output']>;
  min_buy_order_value?: Maybe<Scalars['Float']['output']>;
  min_expiry_time?: Maybe<Scalars['Float']['output']>;
  min_sell_order_amount?: Maybe<Scalars['Float']['output']>;
  min_sell_order_value?: Maybe<Scalars['Float']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
  sell_order_counter?: Maybe<Scalars['Float']['output']>;
  sell_order_fee?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orderbook" */
export type Orderbook_Stddev_Pop_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderbook_Stddev_Samp_Fields = {
  __typename?: 'orderbook_stddev_samp_fields';
  buy_order_counter?: Maybe<Scalars['Float']['output']>;
  buy_order_fee?: Maybe<Scalars['Float']['output']>;
  highest_buy_price?: Maybe<Scalars['Float']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  last_matched_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['Float']['output']>;
  min_buy_order_amount?: Maybe<Scalars['Float']['output']>;
  min_buy_order_value?: Maybe<Scalars['Float']['output']>;
  min_expiry_time?: Maybe<Scalars['Float']['output']>;
  min_sell_order_amount?: Maybe<Scalars['Float']['output']>;
  min_sell_order_value?: Maybe<Scalars['Float']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
  sell_order_counter?: Maybe<Scalars['Float']['output']>;
  sell_order_fee?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orderbook" */
export type Orderbook_Stddev_Samp_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderbook" */
export type Orderbook_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orderbook_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderbook_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  buy_order_counter?: InputMaybe<Scalars['bigint']['input']>;
  buy_order_fee?: InputMaybe<Scalars['bigint']['input']>;
  highest_buy_price?: InputMaybe<Scalars['bigint']['input']>;
  highest_buy_price_order_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  kyc_id?: InputMaybe<Scalars['Int']['input']>;
  last_matched_price?: InputMaybe<Scalars['bigint']['input']>;
  last_matched_price_timestamp?: InputMaybe<Scalars['timetz']['input']>;
  lowest_sell_price?: InputMaybe<Scalars['bigint']['input']>;
  lowest_sell_price_order_id?: InputMaybe<Scalars['bigint']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  min_buy_order_amount?: InputMaybe<Scalars['bigint']['input']>;
  min_buy_order_value?: InputMaybe<Scalars['bigint']['input']>;
  min_expiry_time?: InputMaybe<Scalars['bigint']['input']>;
  min_sell_order_amount?: InputMaybe<Scalars['bigint']['input']>;
  min_sell_order_value?: InputMaybe<Scalars['bigint']['input']>;
  min_time_before_closing_order?: InputMaybe<Scalars['bigint']['input']>;
  new_super_admin?: InputMaybe<Scalars['String']['input']>;
  rwa_token_id?: InputMaybe<Scalars['Int']['input']>;
  sell_order_counter?: InputMaybe<Scalars['bigint']['input']>;
  sell_order_fee?: InputMaybe<Scalars['bigint']['input']>;
  super_admin?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Orderbook_Sum_Fields = {
  __typename?: 'orderbook_sum_fields';
  buy_order_counter?: Maybe<Scalars['bigint']['output']>;
  buy_order_fee?: Maybe<Scalars['bigint']['output']>;
  highest_buy_price?: Maybe<Scalars['bigint']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  kyc_id?: Maybe<Scalars['Int']['output']>;
  last_matched_price?: Maybe<Scalars['bigint']['output']>;
  lowest_sell_price?: Maybe<Scalars['bigint']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['bigint']['output']>;
  min_buy_order_amount?: Maybe<Scalars['bigint']['output']>;
  min_buy_order_value?: Maybe<Scalars['bigint']['output']>;
  min_expiry_time?: Maybe<Scalars['bigint']['output']>;
  min_sell_order_amount?: Maybe<Scalars['bigint']['output']>;
  min_sell_order_value?: Maybe<Scalars['bigint']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['bigint']['output']>;
  rwa_token_id?: Maybe<Scalars['Int']['output']>;
  sell_order_counter?: Maybe<Scalars['bigint']['output']>;
  sell_order_fee?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "orderbook" */
export type Orderbook_Sum_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Orderbook_Var_Pop_Fields = {
  __typename?: 'orderbook_var_pop_fields';
  buy_order_counter?: Maybe<Scalars['Float']['output']>;
  buy_order_fee?: Maybe<Scalars['Float']['output']>;
  highest_buy_price?: Maybe<Scalars['Float']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  last_matched_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['Float']['output']>;
  min_buy_order_amount?: Maybe<Scalars['Float']['output']>;
  min_buy_order_value?: Maybe<Scalars['Float']['output']>;
  min_expiry_time?: Maybe<Scalars['Float']['output']>;
  min_sell_order_amount?: Maybe<Scalars['Float']['output']>;
  min_sell_order_value?: Maybe<Scalars['Float']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
  sell_order_counter?: Maybe<Scalars['Float']['output']>;
  sell_order_fee?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orderbook" */
export type Orderbook_Var_Pop_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderbook_Var_Samp_Fields = {
  __typename?: 'orderbook_var_samp_fields';
  buy_order_counter?: Maybe<Scalars['Float']['output']>;
  buy_order_fee?: Maybe<Scalars['Float']['output']>;
  highest_buy_price?: Maybe<Scalars['Float']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  last_matched_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['Float']['output']>;
  min_buy_order_amount?: Maybe<Scalars['Float']['output']>;
  min_buy_order_value?: Maybe<Scalars['Float']['output']>;
  min_expiry_time?: Maybe<Scalars['Float']['output']>;
  min_sell_order_amount?: Maybe<Scalars['Float']['output']>;
  min_sell_order_value?: Maybe<Scalars['Float']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
  sell_order_counter?: Maybe<Scalars['Float']['output']>;
  sell_order_fee?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orderbook" */
export type Orderbook_Var_Samp_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderbook_Variance_Fields = {
  __typename?: 'orderbook_variance_fields';
  buy_order_counter?: Maybe<Scalars['Float']['output']>;
  buy_order_fee?: Maybe<Scalars['Float']['output']>;
  highest_buy_price?: Maybe<Scalars['Float']['output']>;
  highest_buy_price_order_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  kyc_id?: Maybe<Scalars['Float']['output']>;
  last_matched_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price?: Maybe<Scalars['Float']['output']>;
  lowest_sell_price_order_id?: Maybe<Scalars['Float']['output']>;
  min_buy_order_amount?: Maybe<Scalars['Float']['output']>;
  min_buy_order_value?: Maybe<Scalars['Float']['output']>;
  min_expiry_time?: Maybe<Scalars['Float']['output']>;
  min_sell_order_amount?: Maybe<Scalars['Float']['output']>;
  min_sell_order_value?: Maybe<Scalars['Float']['output']>;
  min_time_before_closing_order?: Maybe<Scalars['Float']['output']>;
  rwa_token_id?: Maybe<Scalars['Float']['output']>;
  sell_order_counter?: Maybe<Scalars['Float']['output']>;
  sell_order_fee?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orderbook" */
export type Orderbook_Variance_Order_By = {
  buy_order_counter?: InputMaybe<Order_By>;
  buy_order_fee?: InputMaybe<Order_By>;
  highest_buy_price?: InputMaybe<Order_By>;
  highest_buy_price_order_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  kyc_id?: InputMaybe<Order_By>;
  last_matched_price?: InputMaybe<Order_By>;
  lowest_sell_price?: InputMaybe<Order_By>;
  lowest_sell_price_order_id?: InputMaybe<Order_By>;
  min_buy_order_amount?: InputMaybe<Order_By>;
  min_buy_order_value?: InputMaybe<Order_By>;
  min_expiry_time?: InputMaybe<Order_By>;
  min_sell_order_amount?: InputMaybe<Order_By>;
  min_sell_order_value?: InputMaybe<Order_By>;
  min_time_before_closing_order?: InputMaybe<Order_By>;
  rwa_token_id?: InputMaybe<Order_By>;
  sell_order_counter?: InputMaybe<Order_By>;
  sell_order_fee?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "dipdup_contract" */
  dipdup_contract: Array<Dipdup_Contract>;
  /** fetch aggregated fields from the table: "dipdup_contract" */
  dipdup_contract_aggregate: Dipdup_Contract_Aggregate;
  /** fetch data from the table: "dipdup_contract" using primary key columns */
  dipdup_contract_by_pk?: Maybe<Dipdup_Contract>;
  /** fetch data from the table: "dipdup_contract_metadata" */
  dipdup_contract_metadata: Array<Dipdup_Contract_Metadata>;
  /** fetch aggregated fields from the table: "dipdup_contract_metadata" */
  dipdup_contract_metadata_aggregate: Dipdup_Contract_Metadata_Aggregate;
  /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
  dipdup_contract_metadata_by_pk?: Maybe<Dipdup_Contract_Metadata>;
  /** fetch data from the table: "dipdup_head" */
  dipdup_head: Array<Dipdup_Head>;
  /** fetch aggregated fields from the table: "dipdup_head" */
  dipdup_head_aggregate: Dipdup_Head_Aggregate;
  /** fetch data from the table: "dipdup_head" using primary key columns */
  dipdup_head_by_pk?: Maybe<Dipdup_Head>;
  /** fetch data from the table: "dipdup_index" */
  dipdup_index: Array<Dipdup_Index>;
  /** fetch aggregated fields from the table: "dipdup_index" */
  dipdup_index_aggregate: Dipdup_Index_Aggregate;
  /** fetch data from the table: "dipdup_index" using primary key columns */
  dipdup_index_by_pk?: Maybe<Dipdup_Index>;
  /** fetch data from the table: "dipdup_meta" */
  dipdup_meta: Array<Dipdup_Meta>;
  /** fetch aggregated fields from the table: "dipdup_meta" */
  dipdup_meta_aggregate: Dipdup_Meta_Aggregate;
  /** fetch data from the table: "dipdup_meta" using primary key columns */
  dipdup_meta_by_pk?: Maybe<Dipdup_Meta>;
  /** fetch data from the table: "dipdup_model_update" */
  dipdup_model_update: Array<Dipdup_Model_Update>;
  /** fetch aggregated fields from the table: "dipdup_model_update" */
  dipdup_model_update_aggregate: Dipdup_Model_Update_Aggregate;
  /** fetch data from the table: "dipdup_model_update" using primary key columns */
  dipdup_model_update_by_pk?: Maybe<Dipdup_Model_Update>;
  /** fetch data from the table: "dipdup_schema" */
  dipdup_schema: Array<Dipdup_Schema>;
  /** fetch aggregated fields from the table: "dipdup_schema" */
  dipdup_schema_aggregate: Dipdup_Schema_Aggregate;
  /** fetch data from the table: "dipdup_schema" using primary key columns */
  dipdup_schema_by_pk?: Maybe<Dipdup_Schema>;
  /** fetch data from the table: "dipdup_status" */
  dipdup_status: Array<Dipdup_Status>;
  /** fetch aggregated fields from the table: "dipdup_status" */
  dipdup_status_aggregate: Dipdup_Status_Aggregate;
  /** fetch data from the table: "dipdup_token_metadata" */
  dipdup_token_metadata: Array<Dipdup_Token_Metadata>;
  /** fetch aggregated fields from the table: "dipdup_token_metadata" */
  dipdup_token_metadata_aggregate: Dipdup_Token_Metadata_Aggregate;
  /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
  dipdup_token_metadata_by_pk?: Maybe<Dipdup_Token_Metadata>;
  /** fetch data from the table: "dodo_mav" */
  dodo_mav: Array<Dodo_Mav>;
  /** fetch aggregated fields from the table: "dodo_mav" */
  dodo_mav_aggregate: Dodo_Mav_Aggregate;
  /** fetch data from the table: "dodo_mav" using primary key columns */
  dodo_mav_by_pk?: Maybe<Dodo_Mav>;
  /** fetch data from the table: "dodo_mav_entrypoint_status" */
  dodo_mav_entrypoint_status: Array<Dodo_Mav_Entrypoint_Status>;
  /** fetch aggregated fields from the table: "dodo_mav_entrypoint_status" */
  dodo_mav_entrypoint_status_aggregate: Dodo_Mav_Entrypoint_Status_Aggregate;
  /** fetch data from the table: "dodo_mav_entrypoint_status" using primary key columns */
  dodo_mav_entrypoint_status_by_pk?: Maybe<Dodo_Mav_Entrypoint_Status>;
  /** fetch data from the table: "dodo_mav_lambda" */
  dodo_mav_lambda: Array<Dodo_Mav_Lambda>;
  /** fetch aggregated fields from the table: "dodo_mav_lambda" */
  dodo_mav_lambda_aggregate: Dodo_Mav_Lambda_Aggregate;
  /** fetch data from the table: "dodo_mav_lambda" using primary key columns */
  dodo_mav_lambda_by_pk?: Maybe<Dodo_Mav_Lambda>;
  /** fetch data from the table: "equiteez_user" */
  equiteez_user: Array<Equiteez_User>;
  /** fetch aggregated fields from the table: "equiteez_user" */
  equiteez_user_aggregate: Equiteez_User_Aggregate;
  /** fetch data from the table: "equiteez_user_balance" */
  equiteez_user_balance: Array<Equiteez_User_Balance>;
  /** fetch aggregated fields from the table: "equiteez_user_balance" */
  equiteez_user_balance_aggregate: Equiteez_User_Balance_Aggregate;
  /** fetch data from the table: "equiteez_user_balance" using primary key columns */
  equiteez_user_balance_by_pk?: Maybe<Equiteez_User_Balance>;
  /** fetch data from the table: "equiteez_user" using primary key columns */
  equiteez_user_by_pk?: Maybe<Equiteez_User>;
  /** fetch data from the table: "equiteez_user_token_transfer" */
  equiteez_user_token_transfer: Array<Equiteez_User_Token_Transfer>;
  /** fetch aggregated fields from the table: "equiteez_user_token_transfer" */
  equiteez_user_token_transfer_aggregate: Equiteez_User_Token_Transfer_Aggregate;
  /** fetch data from the table: "equiteez_user_token_transfer" using primary key columns */
  equiteez_user_token_transfer_by_pk?: Maybe<Equiteez_User_Token_Transfer>;
  /** fetch data from the table: "kyc" */
  kyc: Array<Kyc>;
  /** fetch aggregated fields from the table: "kyc" */
  kyc_aggregate: Kyc_Aggregate;
  /** fetch data from the table: "kyc_blacklisted" */
  kyc_blacklisted: Array<Kyc_Blacklisted>;
  /** fetch aggregated fields from the table: "kyc_blacklisted" */
  kyc_blacklisted_aggregate: Kyc_Blacklisted_Aggregate;
  /** fetch data from the table: "kyc_blacklisted" using primary key columns */
  kyc_blacklisted_by_pk?: Maybe<Kyc_Blacklisted>;
  /** fetch data from the table: "kyc" using primary key columns */
  kyc_by_pk?: Maybe<Kyc>;
  /** fetch data from the table: "kyc_country_transfer_rule" */
  kyc_country_transfer_rule: Array<Kyc_Country_Transfer_Rule>;
  /** fetch aggregated fields from the table: "kyc_country_transfer_rule" */
  kyc_country_transfer_rule_aggregate: Kyc_Country_Transfer_Rule_Aggregate;
  /** fetch data from the table: "kyc_country_transfer_rule" using primary key columns */
  kyc_country_transfer_rule_by_pk?: Maybe<Kyc_Country_Transfer_Rule>;
  /** fetch data from the table: "kyc_entrypoint_status" */
  kyc_entrypoint_status: Array<Kyc_Entrypoint_Status>;
  /** fetch aggregated fields from the table: "kyc_entrypoint_status" */
  kyc_entrypoint_status_aggregate: Kyc_Entrypoint_Status_Aggregate;
  /** fetch data from the table: "kyc_entrypoint_status" using primary key columns */
  kyc_entrypoint_status_by_pk?: Maybe<Kyc_Entrypoint_Status>;
  /** fetch data from the table: "kyc_lambda" */
  kyc_lambda: Array<Kyc_Lambda>;
  /** fetch aggregated fields from the table: "kyc_lambda" */
  kyc_lambda_aggregate: Kyc_Lambda_Aggregate;
  /** fetch data from the table: "kyc_lambda" using primary key columns */
  kyc_lambda_by_pk?: Maybe<Kyc_Lambda>;
  /** fetch data from the table: "kyc_member" */
  kyc_member: Array<Kyc_Member>;
  /** fetch aggregated fields from the table: "kyc_member" */
  kyc_member_aggregate: Kyc_Member_Aggregate;
  /** fetch data from the table: "kyc_member" using primary key columns */
  kyc_member_by_pk?: Maybe<Kyc_Member>;
  /** fetch data from the table: "kyc_registrar" */
  kyc_registrar: Array<Kyc_Registrar>;
  /** fetch aggregated fields from the table: "kyc_registrar" */
  kyc_registrar_aggregate: Kyc_Registrar_Aggregate;
  /** fetch data from the table: "kyc_registrar" using primary key columns */
  kyc_registrar_by_pk?: Maybe<Kyc_Registrar>;
  /** fetch data from the table: "kyc_valid_input" */
  kyc_valid_input: Array<Kyc_Valid_Input>;
  /** fetch aggregated fields from the table: "kyc_valid_input" */
  kyc_valid_input_aggregate: Kyc_Valid_Input_Aggregate;
  /** fetch data from the table: "kyc_valid_input" using primary key columns */
  kyc_valid_input_by_pk?: Maybe<Kyc_Valid_Input>;
  /** fetch data from the table: "kyc_whitelisted" */
  kyc_whitelisted: Array<Kyc_Whitelisted>;
  /** fetch aggregated fields from the table: "kyc_whitelisted" */
  kyc_whitelisted_aggregate: Kyc_Whitelisted_Aggregate;
  /** fetch data from the table: "kyc_whitelisted" using primary key columns */
  kyc_whitelisted_by_pk?: Maybe<Kyc_Whitelisted>;
  /** fetch data from the table: "marketplace" */
  marketplace: Array<Marketplace>;
  /** fetch aggregated fields from the table: "marketplace" */
  marketplace_aggregate: Marketplace_Aggregate;
  /** fetch data from the table: "marketplace" using primary key columns */
  marketplace_by_pk?: Maybe<Marketplace>;
  /** fetch data from the table: "marketplace_currency" */
  marketplace_currency: Array<Marketplace_Currency>;
  /** fetch aggregated fields from the table: "marketplace_currency" */
  marketplace_currency_aggregate: Marketplace_Currency_Aggregate;
  /** fetch data from the table: "marketplace_currency" using primary key columns */
  marketplace_currency_by_pk?: Maybe<Marketplace_Currency>;
  /** fetch data from the table: "marketplace_general_contract" */
  marketplace_general_contract: Array<Marketplace_General_Contract>;
  /** fetch aggregated fields from the table: "marketplace_general_contract" */
  marketplace_general_contract_aggregate: Marketplace_General_Contract_Aggregate;
  /** fetch data from the table: "marketplace_general_contract" using primary key columns */
  marketplace_general_contract_by_pk?: Maybe<Marketplace_General_Contract>;
  /** fetch data from the table: "marketplace_lambda" */
  marketplace_lambda: Array<Marketplace_Lambda>;
  /** fetch aggregated fields from the table: "marketplace_lambda" */
  marketplace_lambda_aggregate: Marketplace_Lambda_Aggregate;
  /** fetch data from the table: "marketplace_lambda" using primary key columns */
  marketplace_lambda_by_pk?: Maybe<Marketplace_Lambda>;
  /** fetch data from the table: "marketplace_listing" */
  marketplace_listing: Array<Marketplace_Listing>;
  /** fetch aggregated fields from the table: "marketplace_listing" */
  marketplace_listing_aggregate: Marketplace_Listing_Aggregate;
  /** fetch data from the table: "marketplace_listing" using primary key columns */
  marketplace_listing_by_pk?: Maybe<Marketplace_Listing>;
  /** fetch data from the table: "marketplace_offer" */
  marketplace_offer: Array<Marketplace_Offer>;
  /** fetch aggregated fields from the table: "marketplace_offer" */
  marketplace_offer_aggregate: Marketplace_Offer_Aggregate;
  /** fetch data from the table: "marketplace_offer" using primary key columns */
  marketplace_offer_by_pk?: Maybe<Marketplace_Offer>;
  /** fetch data from the table: "marketplace_whitelist_contract" */
  marketplace_whitelist_contract: Array<Marketplace_Whitelist_Contract>;
  /** fetch aggregated fields from the table: "marketplace_whitelist_contract" */
  marketplace_whitelist_contract_aggregate: Marketplace_Whitelist_Contract_Aggregate;
  /** fetch data from the table: "marketplace_whitelist_contract" using primary key columns */
  marketplace_whitelist_contract_by_pk?: Maybe<Marketplace_Whitelist_Contract>;
  /** fetch data from the table: "orderbook" */
  orderbook: Array<Orderbook>;
  /** fetch aggregated fields from the table: "orderbook" */
  orderbook_aggregate: Orderbook_Aggregate;
  /** fetch data from the table: "orderbook" using primary key columns */
  orderbook_by_pk?: Maybe<Orderbook>;
  /** fetch data from the table: "orderbook_currency" */
  orderbook_currency: Array<Orderbook_Currency>;
  /** fetch aggregated fields from the table: "orderbook_currency" */
  orderbook_currency_aggregate: Orderbook_Currency_Aggregate;
  /** fetch data from the table: "orderbook_currency" using primary key columns */
  orderbook_currency_by_pk?: Maybe<Orderbook_Currency>;
  /** fetch data from the table: "orderbook_entrypoint_status" */
  orderbook_entrypoint_status: Array<Orderbook_Entrypoint_Status>;
  /** fetch aggregated fields from the table: "orderbook_entrypoint_status" */
  orderbook_entrypoint_status_aggregate: Orderbook_Entrypoint_Status_Aggregate;
  /** fetch data from the table: "orderbook_entrypoint_status" using primary key columns */
  orderbook_entrypoint_status_by_pk?: Maybe<Orderbook_Entrypoint_Status>;
  /** fetch data from the table: "orderbook_fee" */
  orderbook_fee: Array<Orderbook_Fee>;
  /** fetch aggregated fields from the table: "orderbook_fee" */
  orderbook_fee_aggregate: Orderbook_Fee_Aggregate;
  /** fetch data from the table: "orderbook_fee" using primary key columns */
  orderbook_fee_by_pk?: Maybe<Orderbook_Fee>;
  /** fetch data from the table: "orderbook_lambda" */
  orderbook_lambda: Array<Orderbook_Lambda>;
  /** fetch aggregated fields from the table: "orderbook_lambda" */
  orderbook_lambda_aggregate: Orderbook_Lambda_Aggregate;
  /** fetch data from the table: "orderbook_lambda" using primary key columns */
  orderbook_lambda_by_pk?: Maybe<Orderbook_Lambda>;
  /** fetch data from the table: "orderbook_order" */
  orderbook_order: Array<Orderbook_Order>;
  /** fetch aggregated fields from the table: "orderbook_order" */
  orderbook_order_aggregate: Orderbook_Order_Aggregate;
  /** fetch data from the table: "orderbook_order" using primary key columns */
  orderbook_order_by_pk?: Maybe<Orderbook_Order>;
  /** fetch data from the table: "orderbook_rwa_order" */
  orderbook_rwa_order: Array<Orderbook_Rwa_Order>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order" */
  orderbook_rwa_order_aggregate: Orderbook_Rwa_Order_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_buy_order" */
  orderbook_rwa_order_buy_order: Array<Orderbook_Rwa_Order_Buy_Order>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_buy_order" */
  orderbook_rwa_order_buy_order_aggregate: Orderbook_Rwa_Order_Buy_Order_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_buy_order" using primary key columns */
  orderbook_rwa_order_buy_order_by_pk?: Maybe<Orderbook_Rwa_Order_Buy_Order>;
  /** fetch data from the table: "orderbook_rwa_order_buy_price" */
  orderbook_rwa_order_buy_price: Array<Orderbook_Rwa_Order_Buy_Price>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_buy_price" */
  orderbook_rwa_order_buy_price_aggregate: Orderbook_Rwa_Order_Buy_Price_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_buy_price" using primary key columns */
  orderbook_rwa_order_buy_price_by_pk?: Maybe<Orderbook_Rwa_Order_Buy_Price>;
  /** fetch data from the table: "orderbook_rwa_order" using primary key columns */
  orderbook_rwa_order_by_pk?: Maybe<Orderbook_Rwa_Order>;
  /** fetch data from the table: "orderbook_rwa_order_sell_order" */
  orderbook_rwa_order_sell_order: Array<Orderbook_Rwa_Order_Sell_Order>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_sell_order" */
  orderbook_rwa_order_sell_order_aggregate: Orderbook_Rwa_Order_Sell_Order_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_sell_order" using primary key columns */
  orderbook_rwa_order_sell_order_by_pk?: Maybe<Orderbook_Rwa_Order_Sell_Order>;
  /** fetch data from the table: "orderbook_rwa_order_sell_price" */
  orderbook_rwa_order_sell_price: Array<Orderbook_Rwa_Order_Sell_Price>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_sell_price" */
  orderbook_rwa_order_sell_price_aggregate: Orderbook_Rwa_Order_Sell_Price_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_sell_price" using primary key columns */
  orderbook_rwa_order_sell_price_by_pk?: Maybe<Orderbook_Rwa_Order_Sell_Price>;
  /** fetch data from the table: "super_admin" */
  super_admin: Array<Super_Admin>;
  /** fetch aggregated fields from the table: "super_admin" */
  super_admin_aggregate: Super_Admin_Aggregate;
  /** fetch data from the table: "super_admin" using primary key columns */
  super_admin_by_pk?: Maybe<Super_Admin>;
  /** fetch data from the table: "super_admin_contract_admin" */
  super_admin_contract_admin: Array<Super_Admin_Contract_Admin>;
  /** fetch aggregated fields from the table: "super_admin_contract_admin" */
  super_admin_contract_admin_aggregate: Super_Admin_Contract_Admin_Aggregate;
  /** fetch data from the table: "super_admin_contract_admin" using primary key columns */
  super_admin_contract_admin_by_pk?: Maybe<Super_Admin_Contract_Admin>;
  /** fetch data from the table: "super_admin_general_admin" */
  super_admin_general_admin: Array<Super_Admin_General_Admin>;
  /** fetch aggregated fields from the table: "super_admin_general_admin" */
  super_admin_general_admin_aggregate: Super_Admin_General_Admin_Aggregate;
  /** fetch data from the table: "super_admin_general_admin" using primary key columns */
  super_admin_general_admin_by_pk?: Maybe<Super_Admin_General_Admin>;
  /** fetch data from the table: "super_admin_lambda" */
  super_admin_lambda: Array<Super_Admin_Lambda>;
  /** fetch aggregated fields from the table: "super_admin_lambda" */
  super_admin_lambda_aggregate: Super_Admin_Lambda_Aggregate;
  /** fetch data from the table: "super_admin_lambda" using primary key columns */
  super_admin_lambda_by_pk?: Maybe<Super_Admin_Lambda>;
  /** fetch data from the table: "super_admin_signatory" */
  super_admin_signatory: Array<Super_Admin_Signatory>;
  /** fetch data from the table: "super_admin_signatory_action" */
  super_admin_signatory_action: Array<Super_Admin_Signatory_Action>;
  /** fetch aggregated fields from the table: "super_admin_signatory_action" */
  super_admin_signatory_action_aggregate: Super_Admin_Signatory_Action_Aggregate;
  /** fetch data from the table: "super_admin_signatory_action" using primary key columns */
  super_admin_signatory_action_by_pk?: Maybe<Super_Admin_Signatory_Action>;
  /** fetch data from the table: "super_admin_signatory_action_data" */
  super_admin_signatory_action_data: Array<Super_Admin_Signatory_Action_Data>;
  /** fetch aggregated fields from the table: "super_admin_signatory_action_data" */
  super_admin_signatory_action_data_aggregate: Super_Admin_Signatory_Action_Data_Aggregate;
  /** fetch data from the table: "super_admin_signatory_action_data" using primary key columns */
  super_admin_signatory_action_data_by_pk?: Maybe<Super_Admin_Signatory_Action_Data>;
  /** fetch aggregated fields from the table: "super_admin_signatory" */
  super_admin_signatory_aggregate: Super_Admin_Signatory_Aggregate;
  /** fetch data from the table: "super_admin_signatory" using primary key columns */
  super_admin_signatory_by_pk?: Maybe<Super_Admin_Signatory>;
  /** fetch data from the table: "super_admin_signature" */
  super_admin_signature: Array<Super_Admin_Signature>;
  /** fetch aggregated fields from the table: "super_admin_signature" */
  super_admin_signature_aggregate: Super_Admin_Signature_Aggregate;
  /** fetch data from the table: "super_admin_signature" using primary key columns */
  super_admin_signature_by_pk?: Maybe<Super_Admin_Signature>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
};


export type Query_RootDipdup_ContractArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Bool_Exp>;
};


export type Query_RootDipdup_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Bool_Exp>;
};


export type Query_RootDipdup_Contract_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootDipdup_Contract_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Metadata_Bool_Exp>;
};


export type Query_RootDipdup_Contract_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Metadata_Bool_Exp>;
};


export type Query_RootDipdup_Contract_Metadata_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDipdup_HeadArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Head_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Head_Order_By>>;
  where?: InputMaybe<Dipdup_Head_Bool_Exp>;
};


export type Query_RootDipdup_Head_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Head_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Head_Order_By>>;
  where?: InputMaybe<Dipdup_Head_Bool_Exp>;
};


export type Query_RootDipdup_Head_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootDipdup_IndexArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Index_Order_By>>;
  where?: InputMaybe<Dipdup_Index_Bool_Exp>;
};


export type Query_RootDipdup_Index_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Index_Order_By>>;
  where?: InputMaybe<Dipdup_Index_Bool_Exp>;
};


export type Query_RootDipdup_Index_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootDipdup_MetaArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Meta_Order_By>>;
  where?: InputMaybe<Dipdup_Meta_Bool_Exp>;
};


export type Query_RootDipdup_Meta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Meta_Order_By>>;
  where?: InputMaybe<Dipdup_Meta_Bool_Exp>;
};


export type Query_RootDipdup_Meta_By_PkArgs = {
  key: Scalars['String']['input'];
};


export type Query_RootDipdup_Model_UpdateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Model_Update_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Model_Update_Order_By>>;
  where?: InputMaybe<Dipdup_Model_Update_Bool_Exp>;
};


export type Query_RootDipdup_Model_Update_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Model_Update_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Model_Update_Order_By>>;
  where?: InputMaybe<Dipdup_Model_Update_Bool_Exp>;
};


export type Query_RootDipdup_Model_Update_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDipdup_SchemaArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Schema_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Schema_Order_By>>;
  where?: InputMaybe<Dipdup_Schema_Bool_Exp>;
};


export type Query_RootDipdup_Schema_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Schema_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Schema_Order_By>>;
  where?: InputMaybe<Dipdup_Schema_Bool_Exp>;
};


export type Query_RootDipdup_Schema_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootDipdup_StatusArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Status_Order_By>>;
  where?: InputMaybe<Dipdup_Status_Bool_Exp>;
};


export type Query_RootDipdup_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Status_Order_By>>;
  where?: InputMaybe<Dipdup_Status_Bool_Exp>;
};


export type Query_RootDipdup_Token_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Token_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Token_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Token_Metadata_Bool_Exp>;
};


export type Query_RootDipdup_Token_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Token_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Token_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Token_Metadata_Bool_Exp>;
};


export type Query_RootDipdup_Token_Metadata_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDodo_MavArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


export type Query_RootDodo_Mav_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


export type Query_RootDodo_Mav_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDodo_Mav_Entrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
};


export type Query_RootDodo_Mav_Entrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
};


export type Query_RootDodo_Mav_Entrypoint_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootDodo_Mav_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Lambda_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
};


export type Query_RootDodo_Mav_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Lambda_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
};


export type Query_RootDodo_Mav_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEquiteez_UserArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Order_By>>;
  where?: InputMaybe<Equiteez_User_Bool_Exp>;
};


export type Query_RootEquiteez_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Order_By>>;
  where?: InputMaybe<Equiteez_User_Bool_Exp>;
};


export type Query_RootEquiteez_User_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


export type Query_RootEquiteez_User_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


export type Query_RootEquiteez_User_Balance_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEquiteez_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEquiteez_User_Token_TransferArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


export type Query_RootEquiteez_User_Token_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


export type Query_RootEquiteez_User_Token_Transfer_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKycArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Order_By>>;
  where?: InputMaybe<Kyc_Bool_Exp>;
};


export type Query_RootKyc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Order_By>>;
  where?: InputMaybe<Kyc_Bool_Exp>;
};


export type Query_RootKyc_BlacklistedArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


export type Query_RootKyc_Blacklisted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


export type Query_RootKyc_Blacklisted_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_Country_Transfer_RuleArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Order_By>>;
  where?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
};


export type Query_RootKyc_Country_Transfer_Rule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Order_By>>;
  where?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
};


export type Query_RootKyc_Country_Transfer_Rule_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_Entrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
};


export type Query_RootKyc_Entrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
};


export type Query_RootKyc_Entrypoint_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Lambda_Order_By>>;
  where?: InputMaybe<Kyc_Lambda_Bool_Exp>;
};


export type Query_RootKyc_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Lambda_Order_By>>;
  where?: InputMaybe<Kyc_Lambda_Bool_Exp>;
};


export type Query_RootKyc_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_MemberArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


export type Query_RootKyc_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


export type Query_RootKyc_Member_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_RegistrarArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


export type Query_RootKyc_Registrar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


export type Query_RootKyc_Registrar_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_Valid_InputArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Valid_Input_Order_By>>;
  where?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
};


export type Query_RootKyc_Valid_Input_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Valid_Input_Order_By>>;
  where?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
};


export type Query_RootKyc_Valid_Input_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootKyc_WhitelistedArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


export type Query_RootKyc_Whitelisted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


export type Query_RootKyc_Whitelisted_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarketplaceArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Order_By>>;
  where?: InputMaybe<Marketplace_Bool_Exp>;
};


export type Query_RootMarketplace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Order_By>>;
  where?: InputMaybe<Marketplace_Bool_Exp>;
};


export type Query_RootMarketplace_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarketplace_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


export type Query_RootMarketplace_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


export type Query_RootMarketplace_Currency_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarketplace_General_ContractArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_General_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
};


export type Query_RootMarketplace_General_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_General_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
};


export type Query_RootMarketplace_General_Contract_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarketplace_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Lambda_Order_By>>;
  where?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
};


export type Query_RootMarketplace_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Lambda_Order_By>>;
  where?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
};


export type Query_RootMarketplace_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarketplace_ListingArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


export type Query_RootMarketplace_Listing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


export type Query_RootMarketplace_Listing_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarketplace_OfferArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


export type Query_RootMarketplace_Offer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


export type Query_RootMarketplace_Offer_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarketplace_Whitelist_ContractArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Whitelist_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
};


export type Query_RootMarketplace_Whitelist_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Whitelist_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
};


export type Query_RootMarketplace_Whitelist_Contract_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbookArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


export type Query_RootOrderbook_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


export type Query_RootOrderbook_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


export type Query_RootOrderbook_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


export type Query_RootOrderbook_Currency_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_Entrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
};


export type Query_RootOrderbook_Entrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
};


export type Query_RootOrderbook_Entrypoint_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_FeeArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


export type Query_RootOrderbook_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


export type Query_RootOrderbook_Fee_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Lambda_Order_By>>;
  where?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
};


export type Query_RootOrderbook_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Lambda_Order_By>>;
  where?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
};


export type Query_RootOrderbook_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_Rwa_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Buy_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Buy_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Buy_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_Rwa_Order_Buy_PriceArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Buy_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Buy_Price_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_Rwa_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_Rwa_Order_Sell_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Sell_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Sell_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrderbook_Rwa_Order_Sell_PriceArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Sell_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
};


export type Query_RootOrderbook_Rwa_Order_Sell_Price_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_AdminArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Bool_Exp>;
};


export type Query_RootSuper_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Bool_Exp>;
};


export type Query_RootSuper_Admin_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_Admin_Contract_AdminArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


export type Query_RootSuper_Admin_Contract_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


export type Query_RootSuper_Admin_Contract_Admin_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_Admin_General_AdminArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


export type Query_RootSuper_Admin_General_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


export type Query_RootSuper_Admin_General_Admin_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_Admin_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Lambda_Order_By>>;
  where?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
};


export type Query_RootSuper_Admin_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Lambda_Order_By>>;
  where?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
};


export type Query_RootSuper_Admin_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_Admin_SignatoryArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signatory_ActionArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signatory_Action_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signatory_Action_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_Admin_Signatory_Action_DataArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signatory_Action_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signatory_Action_Data_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_Admin_Signatory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signatory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSuper_Admin_SignatureArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


export type Query_RootSuper_Admin_Signature_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "dipdup_contract" */
  dipdup_contract: Array<Dipdup_Contract>;
  /** fetch aggregated fields from the table: "dipdup_contract" */
  dipdup_contract_aggregate: Dipdup_Contract_Aggregate;
  /** fetch data from the table: "dipdup_contract" using primary key columns */
  dipdup_contract_by_pk?: Maybe<Dipdup_Contract>;
  /** fetch data from the table: "dipdup_contract_metadata" */
  dipdup_contract_metadata: Array<Dipdup_Contract_Metadata>;
  /** fetch aggregated fields from the table: "dipdup_contract_metadata" */
  dipdup_contract_metadata_aggregate: Dipdup_Contract_Metadata_Aggregate;
  /** fetch data from the table: "dipdup_contract_metadata" using primary key columns */
  dipdup_contract_metadata_by_pk?: Maybe<Dipdup_Contract_Metadata>;
  /** fetch data from the table in a streaming manner: "dipdup_contract_metadata" */
  dipdup_contract_metadata_stream: Array<Dipdup_Contract_Metadata>;
  /** fetch data from the table in a streaming manner: "dipdup_contract" */
  dipdup_contract_stream: Array<Dipdup_Contract>;
  /** fetch data from the table: "dipdup_head" */
  dipdup_head: Array<Dipdup_Head>;
  /** fetch aggregated fields from the table: "dipdup_head" */
  dipdup_head_aggregate: Dipdup_Head_Aggregate;
  /** fetch data from the table: "dipdup_head" using primary key columns */
  dipdup_head_by_pk?: Maybe<Dipdup_Head>;
  /** fetch data from the table in a streaming manner: "dipdup_head" */
  dipdup_head_stream: Array<Dipdup_Head>;
  /** fetch data from the table: "dipdup_index" */
  dipdup_index: Array<Dipdup_Index>;
  /** fetch aggregated fields from the table: "dipdup_index" */
  dipdup_index_aggregate: Dipdup_Index_Aggregate;
  /** fetch data from the table: "dipdup_index" using primary key columns */
  dipdup_index_by_pk?: Maybe<Dipdup_Index>;
  /** fetch data from the table in a streaming manner: "dipdup_index" */
  dipdup_index_stream: Array<Dipdup_Index>;
  /** fetch data from the table: "dipdup_meta" */
  dipdup_meta: Array<Dipdup_Meta>;
  /** fetch aggregated fields from the table: "dipdup_meta" */
  dipdup_meta_aggregate: Dipdup_Meta_Aggregate;
  /** fetch data from the table: "dipdup_meta" using primary key columns */
  dipdup_meta_by_pk?: Maybe<Dipdup_Meta>;
  /** fetch data from the table in a streaming manner: "dipdup_meta" */
  dipdup_meta_stream: Array<Dipdup_Meta>;
  /** fetch data from the table: "dipdup_model_update" */
  dipdup_model_update: Array<Dipdup_Model_Update>;
  /** fetch aggregated fields from the table: "dipdup_model_update" */
  dipdup_model_update_aggregate: Dipdup_Model_Update_Aggregate;
  /** fetch data from the table: "dipdup_model_update" using primary key columns */
  dipdup_model_update_by_pk?: Maybe<Dipdup_Model_Update>;
  /** fetch data from the table in a streaming manner: "dipdup_model_update" */
  dipdup_model_update_stream: Array<Dipdup_Model_Update>;
  /** fetch data from the table: "dipdup_schema" */
  dipdup_schema: Array<Dipdup_Schema>;
  /** fetch aggregated fields from the table: "dipdup_schema" */
  dipdup_schema_aggregate: Dipdup_Schema_Aggregate;
  /** fetch data from the table: "dipdup_schema" using primary key columns */
  dipdup_schema_by_pk?: Maybe<Dipdup_Schema>;
  /** fetch data from the table in a streaming manner: "dipdup_schema" */
  dipdup_schema_stream: Array<Dipdup_Schema>;
  /** fetch data from the table: "dipdup_status" */
  dipdup_status: Array<Dipdup_Status>;
  /** fetch aggregated fields from the table: "dipdup_status" */
  dipdup_status_aggregate: Dipdup_Status_Aggregate;
  /** fetch data from the table in a streaming manner: "dipdup_status" */
  dipdup_status_stream: Array<Dipdup_Status>;
  /** fetch data from the table: "dipdup_token_metadata" */
  dipdup_token_metadata: Array<Dipdup_Token_Metadata>;
  /** fetch aggregated fields from the table: "dipdup_token_metadata" */
  dipdup_token_metadata_aggregate: Dipdup_Token_Metadata_Aggregate;
  /** fetch data from the table: "dipdup_token_metadata" using primary key columns */
  dipdup_token_metadata_by_pk?: Maybe<Dipdup_Token_Metadata>;
  /** fetch data from the table in a streaming manner: "dipdup_token_metadata" */
  dipdup_token_metadata_stream: Array<Dipdup_Token_Metadata>;
  /** fetch data from the table: "dodo_mav" */
  dodo_mav: Array<Dodo_Mav>;
  /** fetch aggregated fields from the table: "dodo_mav" */
  dodo_mav_aggregate: Dodo_Mav_Aggregate;
  /** fetch data from the table: "dodo_mav" using primary key columns */
  dodo_mav_by_pk?: Maybe<Dodo_Mav>;
  /** fetch data from the table: "dodo_mav_entrypoint_status" */
  dodo_mav_entrypoint_status: Array<Dodo_Mav_Entrypoint_Status>;
  /** fetch aggregated fields from the table: "dodo_mav_entrypoint_status" */
  dodo_mav_entrypoint_status_aggregate: Dodo_Mav_Entrypoint_Status_Aggregate;
  /** fetch data from the table: "dodo_mav_entrypoint_status" using primary key columns */
  dodo_mav_entrypoint_status_by_pk?: Maybe<Dodo_Mav_Entrypoint_Status>;
  /** fetch data from the table in a streaming manner: "dodo_mav_entrypoint_status" */
  dodo_mav_entrypoint_status_stream: Array<Dodo_Mav_Entrypoint_Status>;
  /** fetch data from the table: "dodo_mav_lambda" */
  dodo_mav_lambda: Array<Dodo_Mav_Lambda>;
  /** fetch aggregated fields from the table: "dodo_mav_lambda" */
  dodo_mav_lambda_aggregate: Dodo_Mav_Lambda_Aggregate;
  /** fetch data from the table: "dodo_mav_lambda" using primary key columns */
  dodo_mav_lambda_by_pk?: Maybe<Dodo_Mav_Lambda>;
  /** fetch data from the table in a streaming manner: "dodo_mav_lambda" */
  dodo_mav_lambda_stream: Array<Dodo_Mav_Lambda>;
  /** fetch data from the table in a streaming manner: "dodo_mav" */
  dodo_mav_stream: Array<Dodo_Mav>;
  /** fetch data from the table: "equiteez_user" */
  equiteez_user: Array<Equiteez_User>;
  /** fetch aggregated fields from the table: "equiteez_user" */
  equiteez_user_aggregate: Equiteez_User_Aggregate;
  /** fetch data from the table: "equiteez_user_balance" */
  equiteez_user_balance: Array<Equiteez_User_Balance>;
  /** fetch aggregated fields from the table: "equiteez_user_balance" */
  equiteez_user_balance_aggregate: Equiteez_User_Balance_Aggregate;
  /** fetch data from the table: "equiteez_user_balance" using primary key columns */
  equiteez_user_balance_by_pk?: Maybe<Equiteez_User_Balance>;
  /** fetch data from the table in a streaming manner: "equiteez_user_balance" */
  equiteez_user_balance_stream: Array<Equiteez_User_Balance>;
  /** fetch data from the table: "equiteez_user" using primary key columns */
  equiteez_user_by_pk?: Maybe<Equiteez_User>;
  /** fetch data from the table in a streaming manner: "equiteez_user" */
  equiteez_user_stream: Array<Equiteez_User>;
  /** fetch data from the table: "equiteez_user_token_transfer" */
  equiteez_user_token_transfer: Array<Equiteez_User_Token_Transfer>;
  /** fetch aggregated fields from the table: "equiteez_user_token_transfer" */
  equiteez_user_token_transfer_aggregate: Equiteez_User_Token_Transfer_Aggregate;
  /** fetch data from the table: "equiteez_user_token_transfer" using primary key columns */
  equiteez_user_token_transfer_by_pk?: Maybe<Equiteez_User_Token_Transfer>;
  /** fetch data from the table in a streaming manner: "equiteez_user_token_transfer" */
  equiteez_user_token_transfer_stream: Array<Equiteez_User_Token_Transfer>;
  /** fetch data from the table: "kyc" */
  kyc: Array<Kyc>;
  /** fetch aggregated fields from the table: "kyc" */
  kyc_aggregate: Kyc_Aggregate;
  /** fetch data from the table: "kyc_blacklisted" */
  kyc_blacklisted: Array<Kyc_Blacklisted>;
  /** fetch aggregated fields from the table: "kyc_blacklisted" */
  kyc_blacklisted_aggregate: Kyc_Blacklisted_Aggregate;
  /** fetch data from the table: "kyc_blacklisted" using primary key columns */
  kyc_blacklisted_by_pk?: Maybe<Kyc_Blacklisted>;
  /** fetch data from the table in a streaming manner: "kyc_blacklisted" */
  kyc_blacklisted_stream: Array<Kyc_Blacklisted>;
  /** fetch data from the table: "kyc" using primary key columns */
  kyc_by_pk?: Maybe<Kyc>;
  /** fetch data from the table: "kyc_country_transfer_rule" */
  kyc_country_transfer_rule: Array<Kyc_Country_Transfer_Rule>;
  /** fetch aggregated fields from the table: "kyc_country_transfer_rule" */
  kyc_country_transfer_rule_aggregate: Kyc_Country_Transfer_Rule_Aggregate;
  /** fetch data from the table: "kyc_country_transfer_rule" using primary key columns */
  kyc_country_transfer_rule_by_pk?: Maybe<Kyc_Country_Transfer_Rule>;
  /** fetch data from the table in a streaming manner: "kyc_country_transfer_rule" */
  kyc_country_transfer_rule_stream: Array<Kyc_Country_Transfer_Rule>;
  /** fetch data from the table: "kyc_entrypoint_status" */
  kyc_entrypoint_status: Array<Kyc_Entrypoint_Status>;
  /** fetch aggregated fields from the table: "kyc_entrypoint_status" */
  kyc_entrypoint_status_aggregate: Kyc_Entrypoint_Status_Aggregate;
  /** fetch data from the table: "kyc_entrypoint_status" using primary key columns */
  kyc_entrypoint_status_by_pk?: Maybe<Kyc_Entrypoint_Status>;
  /** fetch data from the table in a streaming manner: "kyc_entrypoint_status" */
  kyc_entrypoint_status_stream: Array<Kyc_Entrypoint_Status>;
  /** fetch data from the table: "kyc_lambda" */
  kyc_lambda: Array<Kyc_Lambda>;
  /** fetch aggregated fields from the table: "kyc_lambda" */
  kyc_lambda_aggregate: Kyc_Lambda_Aggregate;
  /** fetch data from the table: "kyc_lambda" using primary key columns */
  kyc_lambda_by_pk?: Maybe<Kyc_Lambda>;
  /** fetch data from the table in a streaming manner: "kyc_lambda" */
  kyc_lambda_stream: Array<Kyc_Lambda>;
  /** fetch data from the table: "kyc_member" */
  kyc_member: Array<Kyc_Member>;
  /** fetch aggregated fields from the table: "kyc_member" */
  kyc_member_aggregate: Kyc_Member_Aggregate;
  /** fetch data from the table: "kyc_member" using primary key columns */
  kyc_member_by_pk?: Maybe<Kyc_Member>;
  /** fetch data from the table in a streaming manner: "kyc_member" */
  kyc_member_stream: Array<Kyc_Member>;
  /** fetch data from the table: "kyc_registrar" */
  kyc_registrar: Array<Kyc_Registrar>;
  /** fetch aggregated fields from the table: "kyc_registrar" */
  kyc_registrar_aggregate: Kyc_Registrar_Aggregate;
  /** fetch data from the table: "kyc_registrar" using primary key columns */
  kyc_registrar_by_pk?: Maybe<Kyc_Registrar>;
  /** fetch data from the table in a streaming manner: "kyc_registrar" */
  kyc_registrar_stream: Array<Kyc_Registrar>;
  /** fetch data from the table in a streaming manner: "kyc" */
  kyc_stream: Array<Kyc>;
  /** fetch data from the table: "kyc_valid_input" */
  kyc_valid_input: Array<Kyc_Valid_Input>;
  /** fetch aggregated fields from the table: "kyc_valid_input" */
  kyc_valid_input_aggregate: Kyc_Valid_Input_Aggregate;
  /** fetch data from the table: "kyc_valid_input" using primary key columns */
  kyc_valid_input_by_pk?: Maybe<Kyc_Valid_Input>;
  /** fetch data from the table in a streaming manner: "kyc_valid_input" */
  kyc_valid_input_stream: Array<Kyc_Valid_Input>;
  /** fetch data from the table: "kyc_whitelisted" */
  kyc_whitelisted: Array<Kyc_Whitelisted>;
  /** fetch aggregated fields from the table: "kyc_whitelisted" */
  kyc_whitelisted_aggregate: Kyc_Whitelisted_Aggregate;
  /** fetch data from the table: "kyc_whitelisted" using primary key columns */
  kyc_whitelisted_by_pk?: Maybe<Kyc_Whitelisted>;
  /** fetch data from the table in a streaming manner: "kyc_whitelisted" */
  kyc_whitelisted_stream: Array<Kyc_Whitelisted>;
  /** fetch data from the table: "marketplace" */
  marketplace: Array<Marketplace>;
  /** fetch aggregated fields from the table: "marketplace" */
  marketplace_aggregate: Marketplace_Aggregate;
  /** fetch data from the table: "marketplace" using primary key columns */
  marketplace_by_pk?: Maybe<Marketplace>;
  /** fetch data from the table: "marketplace_currency" */
  marketplace_currency: Array<Marketplace_Currency>;
  /** fetch aggregated fields from the table: "marketplace_currency" */
  marketplace_currency_aggregate: Marketplace_Currency_Aggregate;
  /** fetch data from the table: "marketplace_currency" using primary key columns */
  marketplace_currency_by_pk?: Maybe<Marketplace_Currency>;
  /** fetch data from the table in a streaming manner: "marketplace_currency" */
  marketplace_currency_stream: Array<Marketplace_Currency>;
  /** fetch data from the table: "marketplace_general_contract" */
  marketplace_general_contract: Array<Marketplace_General_Contract>;
  /** fetch aggregated fields from the table: "marketplace_general_contract" */
  marketplace_general_contract_aggregate: Marketplace_General_Contract_Aggregate;
  /** fetch data from the table: "marketplace_general_contract" using primary key columns */
  marketplace_general_contract_by_pk?: Maybe<Marketplace_General_Contract>;
  /** fetch data from the table in a streaming manner: "marketplace_general_contract" */
  marketplace_general_contract_stream: Array<Marketplace_General_Contract>;
  /** fetch data from the table: "marketplace_lambda" */
  marketplace_lambda: Array<Marketplace_Lambda>;
  /** fetch aggregated fields from the table: "marketplace_lambda" */
  marketplace_lambda_aggregate: Marketplace_Lambda_Aggregate;
  /** fetch data from the table: "marketplace_lambda" using primary key columns */
  marketplace_lambda_by_pk?: Maybe<Marketplace_Lambda>;
  /** fetch data from the table in a streaming manner: "marketplace_lambda" */
  marketplace_lambda_stream: Array<Marketplace_Lambda>;
  /** fetch data from the table: "marketplace_listing" */
  marketplace_listing: Array<Marketplace_Listing>;
  /** fetch aggregated fields from the table: "marketplace_listing" */
  marketplace_listing_aggregate: Marketplace_Listing_Aggregate;
  /** fetch data from the table: "marketplace_listing" using primary key columns */
  marketplace_listing_by_pk?: Maybe<Marketplace_Listing>;
  /** fetch data from the table in a streaming manner: "marketplace_listing" */
  marketplace_listing_stream: Array<Marketplace_Listing>;
  /** fetch data from the table: "marketplace_offer" */
  marketplace_offer: Array<Marketplace_Offer>;
  /** fetch aggregated fields from the table: "marketplace_offer" */
  marketplace_offer_aggregate: Marketplace_Offer_Aggregate;
  /** fetch data from the table: "marketplace_offer" using primary key columns */
  marketplace_offer_by_pk?: Maybe<Marketplace_Offer>;
  /** fetch data from the table in a streaming manner: "marketplace_offer" */
  marketplace_offer_stream: Array<Marketplace_Offer>;
  /** fetch data from the table in a streaming manner: "marketplace" */
  marketplace_stream: Array<Marketplace>;
  /** fetch data from the table: "marketplace_whitelist_contract" */
  marketplace_whitelist_contract: Array<Marketplace_Whitelist_Contract>;
  /** fetch aggregated fields from the table: "marketplace_whitelist_contract" */
  marketplace_whitelist_contract_aggregate: Marketplace_Whitelist_Contract_Aggregate;
  /** fetch data from the table: "marketplace_whitelist_contract" using primary key columns */
  marketplace_whitelist_contract_by_pk?: Maybe<Marketplace_Whitelist_Contract>;
  /** fetch data from the table in a streaming manner: "marketplace_whitelist_contract" */
  marketplace_whitelist_contract_stream: Array<Marketplace_Whitelist_Contract>;
  /** fetch data from the table: "orderbook" */
  orderbook: Array<Orderbook>;
  /** fetch aggregated fields from the table: "orderbook" */
  orderbook_aggregate: Orderbook_Aggregate;
  /** fetch data from the table: "orderbook" using primary key columns */
  orderbook_by_pk?: Maybe<Orderbook>;
  /** fetch data from the table: "orderbook_currency" */
  orderbook_currency: Array<Orderbook_Currency>;
  /** fetch aggregated fields from the table: "orderbook_currency" */
  orderbook_currency_aggregate: Orderbook_Currency_Aggregate;
  /** fetch data from the table: "orderbook_currency" using primary key columns */
  orderbook_currency_by_pk?: Maybe<Orderbook_Currency>;
  /** fetch data from the table in a streaming manner: "orderbook_currency" */
  orderbook_currency_stream: Array<Orderbook_Currency>;
  /** fetch data from the table: "orderbook_entrypoint_status" */
  orderbook_entrypoint_status: Array<Orderbook_Entrypoint_Status>;
  /** fetch aggregated fields from the table: "orderbook_entrypoint_status" */
  orderbook_entrypoint_status_aggregate: Orderbook_Entrypoint_Status_Aggregate;
  /** fetch data from the table: "orderbook_entrypoint_status" using primary key columns */
  orderbook_entrypoint_status_by_pk?: Maybe<Orderbook_Entrypoint_Status>;
  /** fetch data from the table in a streaming manner: "orderbook_entrypoint_status" */
  orderbook_entrypoint_status_stream: Array<Orderbook_Entrypoint_Status>;
  /** fetch data from the table: "orderbook_fee" */
  orderbook_fee: Array<Orderbook_Fee>;
  /** fetch aggregated fields from the table: "orderbook_fee" */
  orderbook_fee_aggregate: Orderbook_Fee_Aggregate;
  /** fetch data from the table: "orderbook_fee" using primary key columns */
  orderbook_fee_by_pk?: Maybe<Orderbook_Fee>;
  /** fetch data from the table in a streaming manner: "orderbook_fee" */
  orderbook_fee_stream: Array<Orderbook_Fee>;
  /** fetch data from the table: "orderbook_lambda" */
  orderbook_lambda: Array<Orderbook_Lambda>;
  /** fetch aggregated fields from the table: "orderbook_lambda" */
  orderbook_lambda_aggregate: Orderbook_Lambda_Aggregate;
  /** fetch data from the table: "orderbook_lambda" using primary key columns */
  orderbook_lambda_by_pk?: Maybe<Orderbook_Lambda>;
  /** fetch data from the table in a streaming manner: "orderbook_lambda" */
  orderbook_lambda_stream: Array<Orderbook_Lambda>;
  /** fetch data from the table: "orderbook_order" */
  orderbook_order: Array<Orderbook_Order>;
  /** fetch aggregated fields from the table: "orderbook_order" */
  orderbook_order_aggregate: Orderbook_Order_Aggregate;
  /** fetch data from the table: "orderbook_order" using primary key columns */
  orderbook_order_by_pk?: Maybe<Orderbook_Order>;
  /** fetch data from the table in a streaming manner: "orderbook_order" */
  orderbook_order_stream: Array<Orderbook_Order>;
  /** fetch data from the table: "orderbook_rwa_order" */
  orderbook_rwa_order: Array<Orderbook_Rwa_Order>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order" */
  orderbook_rwa_order_aggregate: Orderbook_Rwa_Order_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_buy_order" */
  orderbook_rwa_order_buy_order: Array<Orderbook_Rwa_Order_Buy_Order>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_buy_order" */
  orderbook_rwa_order_buy_order_aggregate: Orderbook_Rwa_Order_Buy_Order_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_buy_order" using primary key columns */
  orderbook_rwa_order_buy_order_by_pk?: Maybe<Orderbook_Rwa_Order_Buy_Order>;
  /** fetch data from the table in a streaming manner: "orderbook_rwa_order_buy_order" */
  orderbook_rwa_order_buy_order_stream: Array<Orderbook_Rwa_Order_Buy_Order>;
  /** fetch data from the table: "orderbook_rwa_order_buy_price" */
  orderbook_rwa_order_buy_price: Array<Orderbook_Rwa_Order_Buy_Price>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_buy_price" */
  orderbook_rwa_order_buy_price_aggregate: Orderbook_Rwa_Order_Buy_Price_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_buy_price" using primary key columns */
  orderbook_rwa_order_buy_price_by_pk?: Maybe<Orderbook_Rwa_Order_Buy_Price>;
  /** fetch data from the table in a streaming manner: "orderbook_rwa_order_buy_price" */
  orderbook_rwa_order_buy_price_stream: Array<Orderbook_Rwa_Order_Buy_Price>;
  /** fetch data from the table: "orderbook_rwa_order" using primary key columns */
  orderbook_rwa_order_by_pk?: Maybe<Orderbook_Rwa_Order>;
  /** fetch data from the table: "orderbook_rwa_order_sell_order" */
  orderbook_rwa_order_sell_order: Array<Orderbook_Rwa_Order_Sell_Order>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_sell_order" */
  orderbook_rwa_order_sell_order_aggregate: Orderbook_Rwa_Order_Sell_Order_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_sell_order" using primary key columns */
  orderbook_rwa_order_sell_order_by_pk?: Maybe<Orderbook_Rwa_Order_Sell_Order>;
  /** fetch data from the table in a streaming manner: "orderbook_rwa_order_sell_order" */
  orderbook_rwa_order_sell_order_stream: Array<Orderbook_Rwa_Order_Sell_Order>;
  /** fetch data from the table: "orderbook_rwa_order_sell_price" */
  orderbook_rwa_order_sell_price: Array<Orderbook_Rwa_Order_Sell_Price>;
  /** fetch aggregated fields from the table: "orderbook_rwa_order_sell_price" */
  orderbook_rwa_order_sell_price_aggregate: Orderbook_Rwa_Order_Sell_Price_Aggregate;
  /** fetch data from the table: "orderbook_rwa_order_sell_price" using primary key columns */
  orderbook_rwa_order_sell_price_by_pk?: Maybe<Orderbook_Rwa_Order_Sell_Price>;
  /** fetch data from the table in a streaming manner: "orderbook_rwa_order_sell_price" */
  orderbook_rwa_order_sell_price_stream: Array<Orderbook_Rwa_Order_Sell_Price>;
  /** fetch data from the table in a streaming manner: "orderbook_rwa_order" */
  orderbook_rwa_order_stream: Array<Orderbook_Rwa_Order>;
  /** fetch data from the table in a streaming manner: "orderbook" */
  orderbook_stream: Array<Orderbook>;
  /** fetch data from the table: "super_admin" */
  super_admin: Array<Super_Admin>;
  /** fetch aggregated fields from the table: "super_admin" */
  super_admin_aggregate: Super_Admin_Aggregate;
  /** fetch data from the table: "super_admin" using primary key columns */
  super_admin_by_pk?: Maybe<Super_Admin>;
  /** fetch data from the table: "super_admin_contract_admin" */
  super_admin_contract_admin: Array<Super_Admin_Contract_Admin>;
  /** fetch aggregated fields from the table: "super_admin_contract_admin" */
  super_admin_contract_admin_aggregate: Super_Admin_Contract_Admin_Aggregate;
  /** fetch data from the table: "super_admin_contract_admin" using primary key columns */
  super_admin_contract_admin_by_pk?: Maybe<Super_Admin_Contract_Admin>;
  /** fetch data from the table in a streaming manner: "super_admin_contract_admin" */
  super_admin_contract_admin_stream: Array<Super_Admin_Contract_Admin>;
  /** fetch data from the table: "super_admin_general_admin" */
  super_admin_general_admin: Array<Super_Admin_General_Admin>;
  /** fetch aggregated fields from the table: "super_admin_general_admin" */
  super_admin_general_admin_aggregate: Super_Admin_General_Admin_Aggregate;
  /** fetch data from the table: "super_admin_general_admin" using primary key columns */
  super_admin_general_admin_by_pk?: Maybe<Super_Admin_General_Admin>;
  /** fetch data from the table in a streaming manner: "super_admin_general_admin" */
  super_admin_general_admin_stream: Array<Super_Admin_General_Admin>;
  /** fetch data from the table: "super_admin_lambda" */
  super_admin_lambda: Array<Super_Admin_Lambda>;
  /** fetch aggregated fields from the table: "super_admin_lambda" */
  super_admin_lambda_aggregate: Super_Admin_Lambda_Aggregate;
  /** fetch data from the table: "super_admin_lambda" using primary key columns */
  super_admin_lambda_by_pk?: Maybe<Super_Admin_Lambda>;
  /** fetch data from the table in a streaming manner: "super_admin_lambda" */
  super_admin_lambda_stream: Array<Super_Admin_Lambda>;
  /** fetch data from the table: "super_admin_signatory" */
  super_admin_signatory: Array<Super_Admin_Signatory>;
  /** fetch data from the table: "super_admin_signatory_action" */
  super_admin_signatory_action: Array<Super_Admin_Signatory_Action>;
  /** fetch aggregated fields from the table: "super_admin_signatory_action" */
  super_admin_signatory_action_aggregate: Super_Admin_Signatory_Action_Aggregate;
  /** fetch data from the table: "super_admin_signatory_action" using primary key columns */
  super_admin_signatory_action_by_pk?: Maybe<Super_Admin_Signatory_Action>;
  /** fetch data from the table: "super_admin_signatory_action_data" */
  super_admin_signatory_action_data: Array<Super_Admin_Signatory_Action_Data>;
  /** fetch aggregated fields from the table: "super_admin_signatory_action_data" */
  super_admin_signatory_action_data_aggregate: Super_Admin_Signatory_Action_Data_Aggregate;
  /** fetch data from the table: "super_admin_signatory_action_data" using primary key columns */
  super_admin_signatory_action_data_by_pk?: Maybe<Super_Admin_Signatory_Action_Data>;
  /** fetch data from the table in a streaming manner: "super_admin_signatory_action_data" */
  super_admin_signatory_action_data_stream: Array<Super_Admin_Signatory_Action_Data>;
  /** fetch data from the table in a streaming manner: "super_admin_signatory_action" */
  super_admin_signatory_action_stream: Array<Super_Admin_Signatory_Action>;
  /** fetch aggregated fields from the table: "super_admin_signatory" */
  super_admin_signatory_aggregate: Super_Admin_Signatory_Aggregate;
  /** fetch data from the table: "super_admin_signatory" using primary key columns */
  super_admin_signatory_by_pk?: Maybe<Super_Admin_Signatory>;
  /** fetch data from the table in a streaming manner: "super_admin_signatory" */
  super_admin_signatory_stream: Array<Super_Admin_Signatory>;
  /** fetch data from the table: "super_admin_signature" */
  super_admin_signature: Array<Super_Admin_Signature>;
  /** fetch aggregated fields from the table: "super_admin_signature" */
  super_admin_signature_aggregate: Super_Admin_Signature_Aggregate;
  /** fetch data from the table: "super_admin_signature" using primary key columns */
  super_admin_signature_by_pk?: Maybe<Super_Admin_Signature>;
  /** fetch data from the table in a streaming manner: "super_admin_signature" */
  super_admin_signature_stream: Array<Super_Admin_Signature>;
  /** fetch data from the table in a streaming manner: "super_admin" */
  super_admin_stream: Array<Super_Admin>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>;
};


export type Subscription_RootDipdup_ContractArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Bool_Exp>;
};


export type Subscription_RootDipdup_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Bool_Exp>;
};


export type Subscription_RootDipdup_Contract_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootDipdup_Contract_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Metadata_Bool_Exp>;
};


export type Subscription_RootDipdup_Contract_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Contract_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Contract_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Contract_Metadata_Bool_Exp>;
};


export type Subscription_RootDipdup_Contract_Metadata_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDipdup_Contract_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Contract_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Contract_Metadata_Bool_Exp>;
};


export type Subscription_RootDipdup_Contract_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Contract_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Contract_Bool_Exp>;
};


export type Subscription_RootDipdup_HeadArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Head_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Head_Order_By>>;
  where?: InputMaybe<Dipdup_Head_Bool_Exp>;
};


export type Subscription_RootDipdup_Head_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Head_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Head_Order_By>>;
  where?: InputMaybe<Dipdup_Head_Bool_Exp>;
};


export type Subscription_RootDipdup_Head_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootDipdup_Head_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Head_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Head_Bool_Exp>;
};


export type Subscription_RootDipdup_IndexArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Index_Order_By>>;
  where?: InputMaybe<Dipdup_Index_Bool_Exp>;
};


export type Subscription_RootDipdup_Index_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Index_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Index_Order_By>>;
  where?: InputMaybe<Dipdup_Index_Bool_Exp>;
};


export type Subscription_RootDipdup_Index_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootDipdup_Index_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Index_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Index_Bool_Exp>;
};


export type Subscription_RootDipdup_MetaArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Meta_Order_By>>;
  where?: InputMaybe<Dipdup_Meta_Bool_Exp>;
};


export type Subscription_RootDipdup_Meta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Meta_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Meta_Order_By>>;
  where?: InputMaybe<Dipdup_Meta_Bool_Exp>;
};


export type Subscription_RootDipdup_Meta_By_PkArgs = {
  key: Scalars['String']['input'];
};


export type Subscription_RootDipdup_Meta_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Meta_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Meta_Bool_Exp>;
};


export type Subscription_RootDipdup_Model_UpdateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Model_Update_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Model_Update_Order_By>>;
  where?: InputMaybe<Dipdup_Model_Update_Bool_Exp>;
};


export type Subscription_RootDipdup_Model_Update_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Model_Update_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Model_Update_Order_By>>;
  where?: InputMaybe<Dipdup_Model_Update_Bool_Exp>;
};


export type Subscription_RootDipdup_Model_Update_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDipdup_Model_Update_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Model_Update_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Model_Update_Bool_Exp>;
};


export type Subscription_RootDipdup_SchemaArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Schema_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Schema_Order_By>>;
  where?: InputMaybe<Dipdup_Schema_Bool_Exp>;
};


export type Subscription_RootDipdup_Schema_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Schema_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Schema_Order_By>>;
  where?: InputMaybe<Dipdup_Schema_Bool_Exp>;
};


export type Subscription_RootDipdup_Schema_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootDipdup_Schema_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Schema_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Schema_Bool_Exp>;
};


export type Subscription_RootDipdup_StatusArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Status_Order_By>>;
  where?: InputMaybe<Dipdup_Status_Bool_Exp>;
};


export type Subscription_RootDipdup_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Status_Order_By>>;
  where?: InputMaybe<Dipdup_Status_Bool_Exp>;
};


export type Subscription_RootDipdup_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Status_Bool_Exp>;
};


export type Subscription_RootDipdup_Token_MetadataArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Token_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Token_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Token_Metadata_Bool_Exp>;
};


export type Subscription_RootDipdup_Token_Metadata_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dipdup_Token_Metadata_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dipdup_Token_Metadata_Order_By>>;
  where?: InputMaybe<Dipdup_Token_Metadata_Bool_Exp>;
};


export type Subscription_RootDipdup_Token_Metadata_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDipdup_Token_Metadata_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dipdup_Token_Metadata_Stream_Cursor_Input>>;
  where?: InputMaybe<Dipdup_Token_Metadata_Bool_Exp>;
};


export type Subscription_RootDodo_MavArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDodo_Mav_Entrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_Entrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_Entrypoint_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDodo_Mav_Entrypoint_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dodo_Mav_Entrypoint_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Dodo_Mav_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Lambda_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Lambda_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDodo_Mav_Lambda_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dodo_Mav_Lambda_Stream_Cursor_Input>>;
  where?: InputMaybe<Dodo_Mav_Lambda_Bool_Exp>;
};


export type Subscription_RootDodo_Mav_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dodo_Mav_Stream_Cursor_Input>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


export type Subscription_RootEquiteez_UserArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Order_By>>;
  where?: InputMaybe<Equiteez_User_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Order_By>>;
  where?: InputMaybe<Equiteez_User_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_Balance_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEquiteez_User_Balance_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Equiteez_User_Balance_Stream_Cursor_Input>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEquiteez_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Equiteez_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Equiteez_User_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_Token_TransferArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_Token_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


export type Subscription_RootEquiteez_User_Token_Transfer_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEquiteez_User_Token_Transfer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Equiteez_User_Token_Transfer_Stream_Cursor_Input>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


export type Subscription_RootKycArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Order_By>>;
  where?: InputMaybe<Kyc_Bool_Exp>;
};


export type Subscription_RootKyc_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Order_By>>;
  where?: InputMaybe<Kyc_Bool_Exp>;
};


export type Subscription_RootKyc_BlacklistedArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


export type Subscription_RootKyc_Blacklisted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Blacklisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Blacklisted_Order_By>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


export type Subscription_RootKyc_Blacklisted_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Blacklisted_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Blacklisted_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Blacklisted_Bool_Exp>;
};


export type Subscription_RootKyc_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Country_Transfer_RuleArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Order_By>>;
  where?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
};


export type Subscription_RootKyc_Country_Transfer_Rule_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Country_Transfer_Rule_Order_By>>;
  where?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
};


export type Subscription_RootKyc_Country_Transfer_Rule_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Country_Transfer_Rule_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Country_Transfer_Rule_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Country_Transfer_Rule_Bool_Exp>;
};


export type Subscription_RootKyc_Entrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootKyc_Entrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootKyc_Entrypoint_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Entrypoint_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Entrypoint_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootKyc_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Lambda_Order_By>>;
  where?: InputMaybe<Kyc_Lambda_Bool_Exp>;
};


export type Subscription_RootKyc_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Lambda_Order_By>>;
  where?: InputMaybe<Kyc_Lambda_Bool_Exp>;
};


export type Subscription_RootKyc_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Lambda_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Lambda_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Lambda_Bool_Exp>;
};


export type Subscription_RootKyc_MemberArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


export type Subscription_RootKyc_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Member_Order_By>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


export type Subscription_RootKyc_Member_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Member_Bool_Exp>;
};


export type Subscription_RootKyc_RegistrarArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


export type Subscription_RootKyc_Registrar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Registrar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Registrar_Order_By>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


export type Subscription_RootKyc_Registrar_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Registrar_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Registrar_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Registrar_Bool_Exp>;
};


export type Subscription_RootKyc_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Bool_Exp>;
};


export type Subscription_RootKyc_Valid_InputArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Valid_Input_Order_By>>;
  where?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
};


export type Subscription_RootKyc_Valid_Input_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Valid_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Valid_Input_Order_By>>;
  where?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
};


export type Subscription_RootKyc_Valid_Input_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Valid_Input_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Valid_Input_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Valid_Input_Bool_Exp>;
};


export type Subscription_RootKyc_WhitelistedArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


export type Subscription_RootKyc_Whitelisted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kyc_Whitelisted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Kyc_Whitelisted_Order_By>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


export type Subscription_RootKyc_Whitelisted_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootKyc_Whitelisted_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Kyc_Whitelisted_Stream_Cursor_Input>>;
  where?: InputMaybe<Kyc_Whitelisted_Bool_Exp>;
};


export type Subscription_RootMarketplaceArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Order_By>>;
  where?: InputMaybe<Marketplace_Bool_Exp>;
};


export type Subscription_RootMarketplace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Order_By>>;
  where?: InputMaybe<Marketplace_Bool_Exp>;
};


export type Subscription_RootMarketplace_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMarketplace_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


export type Subscription_RootMarketplace_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


export type Subscription_RootMarketplace_Currency_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMarketplace_Currency_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Marketplace_Currency_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


export type Subscription_RootMarketplace_General_ContractArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_General_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
};


export type Subscription_RootMarketplace_General_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_General_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_General_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
};


export type Subscription_RootMarketplace_General_Contract_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMarketplace_General_Contract_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Marketplace_General_Contract_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_General_Contract_Bool_Exp>;
};


export type Subscription_RootMarketplace_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Lambda_Order_By>>;
  where?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
};


export type Subscription_RootMarketplace_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Lambda_Order_By>>;
  where?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
};


export type Subscription_RootMarketplace_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMarketplace_Lambda_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Marketplace_Lambda_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_Lambda_Bool_Exp>;
};


export type Subscription_RootMarketplace_ListingArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


export type Subscription_RootMarketplace_Listing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


export type Subscription_RootMarketplace_Listing_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMarketplace_Listing_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Marketplace_Listing_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


export type Subscription_RootMarketplace_OfferArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


export type Subscription_RootMarketplace_Offer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Offer_Order_By>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


export type Subscription_RootMarketplace_Offer_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMarketplace_Offer_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Marketplace_Offer_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_Offer_Bool_Exp>;
};


export type Subscription_RootMarketplace_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Marketplace_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_Bool_Exp>;
};


export type Subscription_RootMarketplace_Whitelist_ContractArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Whitelist_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
};


export type Subscription_RootMarketplace_Whitelist_Contract_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Whitelist_Contract_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Whitelist_Contract_Order_By>>;
  where?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
};


export type Subscription_RootMarketplace_Whitelist_Contract_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMarketplace_Whitelist_Contract_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Marketplace_Whitelist_Contract_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_Whitelist_Contract_Bool_Exp>;
};


export type Subscription_RootOrderbookArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


export type Subscription_RootOrderbook_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


export type Subscription_RootOrderbook_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


export type Subscription_RootOrderbook_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


export type Subscription_RootOrderbook_Currency_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Currency_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Currency_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


export type Subscription_RootOrderbook_Entrypoint_StatusArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootOrderbook_Entrypoint_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Entrypoint_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Entrypoint_Status_Order_By>>;
  where?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootOrderbook_Entrypoint_Status_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Entrypoint_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Entrypoint_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Entrypoint_Status_Bool_Exp>;
};


export type Subscription_RootOrderbook_FeeArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


export type Subscription_RootOrderbook_Fee_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


export type Subscription_RootOrderbook_Fee_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Fee_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Fee_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


export type Subscription_RootOrderbook_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Lambda_Order_By>>;
  where?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
};


export type Subscription_RootOrderbook_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Lambda_Order_By>>;
  where?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
};


export type Subscription_RootOrderbook_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Lambda_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Lambda_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Lambda_Bool_Exp>;
};


export type Subscription_RootOrderbook_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Order_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_Order_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Rwa_Order_Buy_Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_PriceArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Buy_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_Price_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Rwa_Order_Buy_Price_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Rwa_Order_Buy_Price_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Buy_Price_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_OrderArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_Order_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_Order_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Rwa_Order_Sell_Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_PriceArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Sell_Price_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_Price_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrderbook_Rwa_Order_Sell_Price_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Rwa_Order_Sell_Price_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Sell_Price_Bool_Exp>;
};


export type Subscription_RootOrderbook_Rwa_Order_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Rwa_Order_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


export type Subscription_RootOrderbook_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orderbook_Stream_Cursor_Input>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


export type Subscription_RootSuper_AdminArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_Contract_AdminArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Contract_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Contract_Admin_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_Contract_Admin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_Contract_Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_General_AdminArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_General_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_General_Admin_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_General_Admin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_General_Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_LambdaArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Lambda_Order_By>>;
  where?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Lambda_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Lambda_Order_By>>;
  where?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Lambda_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_Lambda_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_Lambda_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_SignatoryArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_ActionArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_Action_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_Action_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_Signatory_Action_DataArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_Action_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_Action_Data_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_Signatory_Action_Data_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_Signatory_Action_Data_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_Action_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_Signatory_Action_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signatory_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_Signatory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_Signatory_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_SignatureArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signature_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_Signature_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSuper_Admin_Signature_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_Signature_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


export type Subscription_RootSuper_Admin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Super_Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Super_Admin_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Bool_Exp>;
};

/** columns and relationships of "super_admin" */
export type Super_Admin = {
  __typename?: 'super_admin';
  action_counter: Scalars['bigint']['output'];
  action_expiry_in_seconds: Scalars['bigint']['output'];
  address: Scalars['String']['output'];
  /** An array relationship */
  contract_admins: Array<Super_Admin_Contract_Admin>;
  /** An aggregate relationship */
  contract_admins_aggregate: Super_Admin_Contract_Admin_Aggregate;
  /** An array relationship */
  general_admins: Array<Super_Admin_General_Admin>;
  /** An aggregate relationship */
  general_admins_aggregate: Super_Admin_General_Admin_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  lambdas: Array<Super_Admin_Lambda>;
  /** An aggregate relationship */
  lambdas_aggregate: Super_Admin_Lambda_Aggregate;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  signatories: Array<Super_Admin_Signatory>;
  /** An aggregate relationship */
  signatories_aggregate: Super_Admin_Signatory_Aggregate;
  /** An array relationship */
  signatory_actions: Array<Super_Admin_Signatory_Action>;
  /** An aggregate relationship */
  signatory_actions_aggregate: Super_Admin_Signatory_Action_Aggregate;
  signatory_size: Scalars['bigint']['output'];
  /** An array relationship */
  signatures: Array<Super_Admin_Signature>;
  /** An aggregate relationship */
  signatures_aggregate: Super_Admin_Signature_Aggregate;
  threshold: Scalars['bigint']['output'];
};


/** columns and relationships of "super_admin" */
export type Super_AdminContract_AdminsArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminContract_Admins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Contract_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminGeneral_AdminsArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminGeneral_Admins_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_General_Admin_Order_By>>;
  where?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminLambdasArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Lambda_Order_By>>;
  where?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminLambdas_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Lambda_Order_By>>;
  where?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminSignatoriesArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminSignatories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminSignatory_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminSignatory_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminSignaturesArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


/** columns and relationships of "super_admin" */
export type Super_AdminSignatures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};

/** aggregated selection of "super_admin" */
export type Super_Admin_Aggregate = {
  __typename?: 'super_admin_aggregate';
  aggregate?: Maybe<Super_Admin_Aggregate_Fields>;
  nodes: Array<Super_Admin>;
};

/** aggregate fields of "super_admin" */
export type Super_Admin_Aggregate_Fields = {
  __typename?: 'super_admin_aggregate_fields';
  avg?: Maybe<Super_Admin_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_Max_Fields>;
  min?: Maybe<Super_Admin_Min_Fields>;
  stddev?: Maybe<Super_Admin_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_Variance_Fields>;
};


/** aggregate fields of "super_admin" */
export type Super_Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Super_Admin_Avg_Fields = {
  __typename?: 'super_admin_avg_fields';
  action_counter?: Maybe<Scalars['Float']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_size?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "super_admin". All fields are combined with a logical 'AND'. */
export type Super_Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_Bool_Exp>>;
  action_counter?: InputMaybe<Bigint_Comparison_Exp>;
  action_expiry_in_seconds?: InputMaybe<Bigint_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  contract_admins?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
  contract_admins_aggregate?: InputMaybe<Super_Admin_Contract_Admin_Aggregate_Bool_Exp>;
  general_admins?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
  general_admins_aggregate?: InputMaybe<Super_Admin_General_Admin_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambdas?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
  lambdas_aggregate?: InputMaybe<Super_Admin_Lambda_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  signatories?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
  signatories_aggregate?: InputMaybe<Super_Admin_Signatory_Aggregate_Bool_Exp>;
  signatory_actions?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  signatory_actions_aggregate?: InputMaybe<Super_Admin_Signatory_Action_Aggregate_Bool_Exp>;
  signatory_size?: InputMaybe<Bigint_Comparison_Exp>;
  signatures?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
  signatures_aggregate?: InputMaybe<Super_Admin_Signature_Aggregate_Bool_Exp>;
  threshold?: InputMaybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin = {
  __typename?: 'super_admin_contract_admin';
  contract_address: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  super_admin: Super_Admin;
  super_admin_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Equiteez_User;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Aggregate = {
  __typename?: 'super_admin_contract_admin_aggregate';
  aggregate?: Maybe<Super_Admin_Contract_Admin_Aggregate_Fields>;
  nodes: Array<Super_Admin_Contract_Admin>;
};

export type Super_Admin_Contract_Admin_Aggregate_Bool_Exp = {
  count?: InputMaybe<Super_Admin_Contract_Admin_Aggregate_Bool_Exp_Count>;
};

export type Super_Admin_Contract_Admin_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Aggregate_Fields = {
  __typename?: 'super_admin_contract_admin_aggregate_fields';
  avg?: Maybe<Super_Admin_Contract_Admin_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_Contract_Admin_Max_Fields>;
  min?: Maybe<Super_Admin_Contract_Admin_Min_Fields>;
  stddev?: Maybe<Super_Admin_Contract_Admin_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_Contract_Admin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_Contract_Admin_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_Contract_Admin_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_Contract_Admin_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_Contract_Admin_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_Contract_Admin_Variance_Fields>;
};


/** aggregate fields of "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_Contract_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Aggregate_Order_By = {
  avg?: InputMaybe<Super_Admin_Contract_Admin_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Super_Admin_Contract_Admin_Max_Order_By>;
  min?: InputMaybe<Super_Admin_Contract_Admin_Min_Order_By>;
  stddev?: InputMaybe<Super_Admin_Contract_Admin_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Super_Admin_Contract_Admin_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Super_Admin_Contract_Admin_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Super_Admin_Contract_Admin_Sum_Order_By>;
  var_pop?: InputMaybe<Super_Admin_Contract_Admin_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Super_Admin_Contract_Admin_Var_Samp_Order_By>;
  variance?: InputMaybe<Super_Admin_Contract_Admin_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Super_Admin_Contract_Admin_Avg_Fields = {
  __typename?: 'super_admin_contract_admin_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "super_admin_contract_admin". All fields are combined with a logical 'AND'. */
export type Super_Admin_Contract_Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_Contract_Admin_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_Contract_Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_Contract_Admin_Bool_Exp>>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  super_admin?: InputMaybe<Super_Admin_Bool_Exp>;
  super_admin_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Super_Admin_Contract_Admin_Max_Fields = {
  __typename?: 'super_admin_contract_admin_max_fields';
  contract_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Max_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Super_Admin_Contract_Admin_Min_Fields = {
  __typename?: 'super_admin_contract_admin_min_fields';
  contract_address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Min_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "super_admin_contract_admin". */
export type Super_Admin_Contract_Admin_Order_By = {
  contract_address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Super_Admin_Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin_contract_admin" */
export enum Super_Admin_Contract_Admin_Select_Column {
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  Id = 'id',
  /** column name */
  SuperAdminId = 'super_admin_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Super_Admin_Contract_Admin_Stddev_Fields = {
  __typename?: 'super_admin_contract_admin_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_Contract_Admin_Stddev_Pop_Fields = {
  __typename?: 'super_admin_contract_admin_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_Contract_Admin_Stddev_Samp_Fields = {
  __typename?: 'super_admin_contract_admin_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_Contract_Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_Contract_Admin_Stream_Cursor_Value_Input = {
  contract_address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  super_admin_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_Contract_Admin_Sum_Fields = {
  __typename?: 'super_admin_contract_admin_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Super_Admin_Contract_Admin_Var_Pop_Fields = {
  __typename?: 'super_admin_contract_admin_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Super_Admin_Contract_Admin_Var_Samp_Fields = {
  __typename?: 'super_admin_contract_admin_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Super_Admin_Contract_Admin_Variance_Fields = {
  __typename?: 'super_admin_contract_admin_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "super_admin_contract_admin" */
export type Super_Admin_Contract_Admin_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "super_admin_general_admin" */
export type Super_Admin_General_Admin = {
  __typename?: 'super_admin_general_admin';
  id: Scalars['Int']['output'];
  /** An object relationship */
  super_admin: Super_Admin;
  super_admin_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Equiteez_User;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "super_admin_general_admin" */
export type Super_Admin_General_Admin_Aggregate = {
  __typename?: 'super_admin_general_admin_aggregate';
  aggregate?: Maybe<Super_Admin_General_Admin_Aggregate_Fields>;
  nodes: Array<Super_Admin_General_Admin>;
};

export type Super_Admin_General_Admin_Aggregate_Bool_Exp = {
  count?: InputMaybe<Super_Admin_General_Admin_Aggregate_Bool_Exp_Count>;
};

export type Super_Admin_General_Admin_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "super_admin_general_admin" */
export type Super_Admin_General_Admin_Aggregate_Fields = {
  __typename?: 'super_admin_general_admin_aggregate_fields';
  avg?: Maybe<Super_Admin_General_Admin_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_General_Admin_Max_Fields>;
  min?: Maybe<Super_Admin_General_Admin_Min_Fields>;
  stddev?: Maybe<Super_Admin_General_Admin_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_General_Admin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_General_Admin_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_General_Admin_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_General_Admin_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_General_Admin_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_General_Admin_Variance_Fields>;
};


/** aggregate fields of "super_admin_general_admin" */
export type Super_Admin_General_Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_General_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Aggregate_Order_By = {
  avg?: InputMaybe<Super_Admin_General_Admin_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Super_Admin_General_Admin_Max_Order_By>;
  min?: InputMaybe<Super_Admin_General_Admin_Min_Order_By>;
  stddev?: InputMaybe<Super_Admin_General_Admin_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Super_Admin_General_Admin_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Super_Admin_General_Admin_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Super_Admin_General_Admin_Sum_Order_By>;
  var_pop?: InputMaybe<Super_Admin_General_Admin_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Super_Admin_General_Admin_Var_Samp_Order_By>;
  variance?: InputMaybe<Super_Admin_General_Admin_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Super_Admin_General_Admin_Avg_Fields = {
  __typename?: 'super_admin_general_admin_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "super_admin_general_admin". All fields are combined with a logical 'AND'. */
export type Super_Admin_General_Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_General_Admin_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_General_Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_General_Admin_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  super_admin?: InputMaybe<Super_Admin_Bool_Exp>;
  super_admin_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Super_Admin_General_Admin_Max_Fields = {
  __typename?: 'super_admin_general_admin_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Super_Admin_General_Admin_Min_Fields = {
  __typename?: 'super_admin_general_admin_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "super_admin_general_admin". */
export type Super_Admin_General_Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Super_Admin_Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin_general_admin" */
export enum Super_Admin_General_Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SuperAdminId = 'super_admin_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Super_Admin_General_Admin_Stddev_Fields = {
  __typename?: 'super_admin_general_admin_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_General_Admin_Stddev_Pop_Fields = {
  __typename?: 'super_admin_general_admin_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_General_Admin_Stddev_Samp_Fields = {
  __typename?: 'super_admin_general_admin_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_General_Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_General_Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  super_admin_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_General_Admin_Sum_Fields = {
  __typename?: 'super_admin_general_admin_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Super_Admin_General_Admin_Var_Pop_Fields = {
  __typename?: 'super_admin_general_admin_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Super_Admin_General_Admin_Var_Samp_Fields = {
  __typename?: 'super_admin_general_admin_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Super_Admin_General_Admin_Variance_Fields = {
  __typename?: 'super_admin_general_admin_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "super_admin_general_admin" */
export type Super_Admin_General_Admin_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "super_admin_lambda" */
export type Super_Admin_Lambda = {
  __typename?: 'super_admin_lambda';
  /** An object relationship */
  contract: Super_Admin;
  contract_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lambda_bytes: Scalars['String']['output'];
  lambda_name: Scalars['String']['output'];
  last_updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "super_admin_lambda" */
export type Super_Admin_Lambda_Aggregate = {
  __typename?: 'super_admin_lambda_aggregate';
  aggregate?: Maybe<Super_Admin_Lambda_Aggregate_Fields>;
  nodes: Array<Super_Admin_Lambda>;
};

export type Super_Admin_Lambda_Aggregate_Bool_Exp = {
  count?: InputMaybe<Super_Admin_Lambda_Aggregate_Bool_Exp_Count>;
};

export type Super_Admin_Lambda_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "super_admin_lambda" */
export type Super_Admin_Lambda_Aggregate_Fields = {
  __typename?: 'super_admin_lambda_aggregate_fields';
  avg?: Maybe<Super_Admin_Lambda_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_Lambda_Max_Fields>;
  min?: Maybe<Super_Admin_Lambda_Min_Fields>;
  stddev?: Maybe<Super_Admin_Lambda_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_Lambda_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_Lambda_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_Lambda_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_Lambda_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_Lambda_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_Lambda_Variance_Fields>;
};


/** aggregate fields of "super_admin_lambda" */
export type Super_Admin_Lambda_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_Lambda_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "super_admin_lambda" */
export type Super_Admin_Lambda_Aggregate_Order_By = {
  avg?: InputMaybe<Super_Admin_Lambda_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Super_Admin_Lambda_Max_Order_By>;
  min?: InputMaybe<Super_Admin_Lambda_Min_Order_By>;
  stddev?: InputMaybe<Super_Admin_Lambda_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Super_Admin_Lambda_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Super_Admin_Lambda_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Super_Admin_Lambda_Sum_Order_By>;
  var_pop?: InputMaybe<Super_Admin_Lambda_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Super_Admin_Lambda_Var_Samp_Order_By>;
  variance?: InputMaybe<Super_Admin_Lambda_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Super_Admin_Lambda_Avg_Fields = {
  __typename?: 'super_admin_lambda_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "super_admin_lambda". All fields are combined with a logical 'AND'. */
export type Super_Admin_Lambda_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_Lambda_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_Lambda_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_Lambda_Bool_Exp>>;
  contract?: InputMaybe<Super_Admin_Bool_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lambda_bytes?: InputMaybe<String_Comparison_Exp>;
  lambda_name?: InputMaybe<String_Comparison_Exp>;
  last_updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Super_Admin_Lambda_Max_Fields = {
  __typename?: 'super_admin_lambda_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Super_Admin_Lambda_Min_Fields = {
  __typename?: 'super_admin_lambda_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lambda_bytes?: Maybe<Scalars['String']['output']>;
  lambda_name?: Maybe<Scalars['String']['output']>;
  last_updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "super_admin_lambda". */
export type Super_Admin_Lambda_Order_By = {
  contract?: InputMaybe<Super_Admin_Order_By>;
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lambda_bytes?: InputMaybe<Order_By>;
  lambda_name?: InputMaybe<Order_By>;
  last_updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin_lambda" */
export enum Super_Admin_Lambda_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  LambdaBytes = 'lambda_bytes',
  /** column name */
  LambdaName = 'lambda_name',
  /** column name */
  LastUpdatedAt = 'last_updated_at'
}

/** aggregate stddev on columns */
export type Super_Admin_Lambda_Stddev_Fields = {
  __typename?: 'super_admin_lambda_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_Lambda_Stddev_Pop_Fields = {
  __typename?: 'super_admin_lambda_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_Lambda_Stddev_Samp_Fields = {
  __typename?: 'super_admin_lambda_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "super_admin_lambda" */
export type Super_Admin_Lambda_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_Lambda_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_Lambda_Stream_Cursor_Value_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lambda_bytes?: InputMaybe<Scalars['String']['input']>;
  lambda_name?: InputMaybe<Scalars['String']['input']>;
  last_updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_Lambda_Sum_Fields = {
  __typename?: 'super_admin_lambda_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Super_Admin_Lambda_Var_Pop_Fields = {
  __typename?: 'super_admin_lambda_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Super_Admin_Lambda_Var_Samp_Fields = {
  __typename?: 'super_admin_lambda_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Super_Admin_Lambda_Variance_Fields = {
  __typename?: 'super_admin_lambda_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "super_admin_lambda" */
export type Super_Admin_Lambda_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Super_Admin_Max_Fields = {
  __typename?: 'super_admin_max_fields';
  action_counter?: Maybe<Scalars['bigint']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['bigint']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  signatory_size?: Maybe<Scalars['bigint']['output']>;
  threshold?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Super_Admin_Min_Fields = {
  __typename?: 'super_admin_min_fields';
  action_counter?: Maybe<Scalars['bigint']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['bigint']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  signatory_size?: Maybe<Scalars['bigint']['output']>;
  threshold?: Maybe<Scalars['bigint']['output']>;
};

/** Ordering options when selecting data from "super_admin". */
export type Super_Admin_Order_By = {
  action_counter?: InputMaybe<Order_By>;
  action_expiry_in_seconds?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  contract_admins_aggregate?: InputMaybe<Super_Admin_Contract_Admin_Aggregate_Order_By>;
  general_admins_aggregate?: InputMaybe<Super_Admin_General_Admin_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lambdas_aggregate?: InputMaybe<Super_Admin_Lambda_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  signatories_aggregate?: InputMaybe<Super_Admin_Signatory_Aggregate_Order_By>;
  signatory_actions_aggregate?: InputMaybe<Super_Admin_Signatory_Action_Aggregate_Order_By>;
  signatory_size?: InputMaybe<Order_By>;
  signatures_aggregate?: InputMaybe<Super_Admin_Signature_Aggregate_Order_By>;
  threshold?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin" */
export enum Super_Admin_Select_Column {
  /** column name */
  ActionCounter = 'action_counter',
  /** column name */
  ActionExpiryInSeconds = 'action_expiry_in_seconds',
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  SignatorySize = 'signatory_size',
  /** column name */
  Threshold = 'threshold'
}

/** columns and relationships of "super_admin_signatory" */
export type Super_Admin_Signatory = {
  __typename?: 'super_admin_signatory';
  id: Scalars['Int']['output'];
  /** An array relationship */
  signatory_actions: Array<Super_Admin_Signatory_Action>;
  /** An aggregate relationship */
  signatory_actions_aggregate: Super_Admin_Signatory_Action_Aggregate;
  /** An array relationship */
  signatures: Array<Super_Admin_Signature>;
  /** An aggregate relationship */
  signatures_aggregate: Super_Admin_Signature_Aggregate;
  /** An object relationship */
  super_admin: Super_Admin;
  super_admin_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Equiteez_User;
  user_id: Scalars['Int']['output'];
};


/** columns and relationships of "super_admin_signatory" */
export type Super_Admin_SignatorySignatory_ActionsArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


/** columns and relationships of "super_admin_signatory" */
export type Super_Admin_SignatorySignatory_Actions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
};


/** columns and relationships of "super_admin_signatory" */
export type Super_Admin_SignatorySignaturesArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


/** columns and relationships of "super_admin_signatory" */
export type Super_Admin_SignatorySignatures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};

/** columns and relationships of "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action = {
  __typename?: 'super_admin_signatory_action';
  action_id: Scalars['bigint']['output'];
  action_type: Scalars['String']['output'];
  /** An array relationship */
  data: Array<Super_Admin_Signatory_Action_Data>;
  /** An aggregate relationship */
  data_aggregate: Super_Admin_Signatory_Action_Data_Aggregate;
  executed: Scalars['Boolean']['output'];
  executed_datetime?: Maybe<Scalars['timestamptz']['output']>;
  executed_level?: Maybe<Scalars['bigint']['output']>;
  expiration_datetime?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  initiator: Super_Admin_Signatory;
  initiator_id: Scalars['Int']['output'];
  /** An array relationship */
  signatures: Array<Super_Admin_Signature>;
  /** An aggregate relationship */
  signatures_aggregate: Super_Admin_Signature_Aggregate;
  signers_count: Scalars['bigint']['output'];
  start_datetime?: Maybe<Scalars['timestamptz']['output']>;
  start_level: Scalars['bigint']['output'];
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status: Scalars['smallint']['output'];
  /** An object relationship */
  super_admin: Super_Admin;
  super_admin_id: Scalars['Int']['output'];
};


/** columns and relationships of "super_admin_signatory_action" */
export type Super_Admin_Signatory_ActionDataArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
};


/** columns and relationships of "super_admin_signatory_action" */
export type Super_Admin_Signatory_ActionData_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Order_By>>;
  where?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
};


/** columns and relationships of "super_admin_signatory_action" */
export type Super_Admin_Signatory_ActionSignaturesArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};


/** columns and relationships of "super_admin_signatory_action" */
export type Super_Admin_Signatory_ActionSignatures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Super_Admin_Signature_Order_By>>;
  where?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
};

/** aggregated selection of "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Aggregate = {
  __typename?: 'super_admin_signatory_action_aggregate';
  aggregate?: Maybe<Super_Admin_Signatory_Action_Aggregate_Fields>;
  nodes: Array<Super_Admin_Signatory_Action>;
};

export type Super_Admin_Signatory_Action_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Count>;
};

export type Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_And = {
  arguments: Super_Admin_Signatory_Action_Select_Column_Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Super_Admin_Signatory_Action_Select_Column_Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Aggregate_Fields = {
  __typename?: 'super_admin_signatory_action_aggregate_fields';
  avg?: Maybe<Super_Admin_Signatory_Action_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_Signatory_Action_Max_Fields>;
  min?: Maybe<Super_Admin_Signatory_Action_Min_Fields>;
  stddev?: Maybe<Super_Admin_Signatory_Action_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_Signatory_Action_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_Signatory_Action_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_Signatory_Action_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_Signatory_Action_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_Signatory_Action_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_Signatory_Action_Variance_Fields>;
};


/** aggregate fields of "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_Signatory_Action_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Aggregate_Order_By = {
  avg?: InputMaybe<Super_Admin_Signatory_Action_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Super_Admin_Signatory_Action_Max_Order_By>;
  min?: InputMaybe<Super_Admin_Signatory_Action_Min_Order_By>;
  stddev?: InputMaybe<Super_Admin_Signatory_Action_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Super_Admin_Signatory_Action_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Super_Admin_Signatory_Action_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Super_Admin_Signatory_Action_Sum_Order_By>;
  var_pop?: InputMaybe<Super_Admin_Signatory_Action_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Super_Admin_Signatory_Action_Var_Samp_Order_By>;
  variance?: InputMaybe<Super_Admin_Signatory_Action_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Super_Admin_Signatory_Action_Avg_Fields = {
  __typename?: 'super_admin_signatory_action_avg_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  executed_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  signers_count?: Maybe<Scalars['Float']['output']>;
  start_level?: Maybe<Scalars['Float']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Avg_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "super_admin_signatory_action". All fields are combined with a logical 'AND'. */
export type Super_Admin_Signatory_Action_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_Signatory_Action_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_Signatory_Action_Bool_Exp>>;
  action_id?: InputMaybe<Bigint_Comparison_Exp>;
  action_type?: InputMaybe<String_Comparison_Exp>;
  data?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
  data_aggregate?: InputMaybe<Super_Admin_Signatory_Action_Data_Aggregate_Bool_Exp>;
  executed?: InputMaybe<Boolean_Comparison_Exp>;
  executed_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  executed_level?: InputMaybe<Bigint_Comparison_Exp>;
  expiration_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initiator?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
  initiator_id?: InputMaybe<Int_Comparison_Exp>;
  signatures?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
  signatures_aggregate?: InputMaybe<Super_Admin_Signature_Aggregate_Bool_Exp>;
  signers_count?: InputMaybe<Bigint_Comparison_Exp>;
  start_datetime?: InputMaybe<Timestamptz_Comparison_Exp>;
  start_level?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<Smallint_Comparison_Exp>;
  super_admin?: InputMaybe<Super_Admin_Bool_Exp>;
  super_admin_id?: InputMaybe<Int_Comparison_Exp>;
};

/** columns and relationships of "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data = {
  __typename?: 'super_admin_signatory_action_data';
  /** An object relationship */
  action: Super_Admin_Signatory_Action;
  action_id: Scalars['Int']['output'];
  bytes: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Aggregate = {
  __typename?: 'super_admin_signatory_action_data_aggregate';
  aggregate?: Maybe<Super_Admin_Signatory_Action_Data_Aggregate_Fields>;
  nodes: Array<Super_Admin_Signatory_Action_Data>;
};

export type Super_Admin_Signatory_Action_Data_Aggregate_Bool_Exp = {
  count?: InputMaybe<Super_Admin_Signatory_Action_Data_Aggregate_Bool_Exp_Count>;
};

export type Super_Admin_Signatory_Action_Data_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Aggregate_Fields = {
  __typename?: 'super_admin_signatory_action_data_aggregate_fields';
  avg?: Maybe<Super_Admin_Signatory_Action_Data_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_Signatory_Action_Data_Max_Fields>;
  min?: Maybe<Super_Admin_Signatory_Action_Data_Min_Fields>;
  stddev?: Maybe<Super_Admin_Signatory_Action_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_Signatory_Action_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_Signatory_Action_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_Signatory_Action_Data_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_Signatory_Action_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_Signatory_Action_Data_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_Signatory_Action_Data_Variance_Fields>;
};


/** aggregate fields of "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Aggregate_Order_By = {
  avg?: InputMaybe<Super_Admin_Signatory_Action_Data_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Super_Admin_Signatory_Action_Data_Max_Order_By>;
  min?: InputMaybe<Super_Admin_Signatory_Action_Data_Min_Order_By>;
  stddev?: InputMaybe<Super_Admin_Signatory_Action_Data_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Super_Admin_Signatory_Action_Data_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Super_Admin_Signatory_Action_Data_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Super_Admin_Signatory_Action_Data_Sum_Order_By>;
  var_pop?: InputMaybe<Super_Admin_Signatory_Action_Data_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Super_Admin_Signatory_Action_Data_Var_Samp_Order_By>;
  variance?: InputMaybe<Super_Admin_Signatory_Action_Data_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Super_Admin_Signatory_Action_Data_Avg_Fields = {
  __typename?: 'super_admin_signatory_action_data_avg_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Avg_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "super_admin_signatory_action_data". All fields are combined with a logical 'AND'. */
export type Super_Admin_Signatory_Action_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_Signatory_Action_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_Signatory_Action_Data_Bool_Exp>>;
  action?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  action_id?: InputMaybe<Int_Comparison_Exp>;
  bytes?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Super_Admin_Signatory_Action_Data_Max_Fields = {
  __typename?: 'super_admin_signatory_action_data_max_fields';
  action_id?: Maybe<Scalars['Int']['output']>;
  bytes?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Max_Order_By = {
  action_id?: InputMaybe<Order_By>;
  bytes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Super_Admin_Signatory_Action_Data_Min_Fields = {
  __typename?: 'super_admin_signatory_action_data_min_fields';
  action_id?: Maybe<Scalars['Int']['output']>;
  bytes?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Min_Order_By = {
  action_id?: InputMaybe<Order_By>;
  bytes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "super_admin_signatory_action_data". */
export type Super_Admin_Signatory_Action_Data_Order_By = {
  action?: InputMaybe<Super_Admin_Signatory_Action_Order_By>;
  action_id?: InputMaybe<Order_By>;
  bytes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin_signatory_action_data" */
export enum Super_Admin_Signatory_Action_Data_Select_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  Bytes = 'bytes',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate stddev on columns */
export type Super_Admin_Signatory_Action_Data_Stddev_Fields = {
  __typename?: 'super_admin_signatory_action_data_stddev_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Stddev_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_Signatory_Action_Data_Stddev_Pop_Fields = {
  __typename?: 'super_admin_signatory_action_data_stddev_pop_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Stddev_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_Signatory_Action_Data_Stddev_Samp_Fields = {
  __typename?: 'super_admin_signatory_action_data_stddev_samp_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Stddev_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_Signatory_Action_Data_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_Signatory_Action_Data_Stream_Cursor_Value_Input = {
  action_id?: InputMaybe<Scalars['Int']['input']>;
  bytes?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_Signatory_Action_Data_Sum_Fields = {
  __typename?: 'super_admin_signatory_action_data_sum_fields';
  action_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Sum_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Super_Admin_Signatory_Action_Data_Var_Pop_Fields = {
  __typename?: 'super_admin_signatory_action_data_var_pop_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Var_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Super_Admin_Signatory_Action_Data_Var_Samp_Fields = {
  __typename?: 'super_admin_signatory_action_data_var_samp_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Var_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Super_Admin_Signatory_Action_Data_Variance_Fields = {
  __typename?: 'super_admin_signatory_action_data_variance_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "super_admin_signatory_action_data" */
export type Super_Admin_Signatory_Action_Data_Variance_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Super_Admin_Signatory_Action_Max_Fields = {
  __typename?: 'super_admin_signatory_action_max_fields';
  action_id?: Maybe<Scalars['bigint']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  executed_datetime?: Maybe<Scalars['timestamptz']['output']>;
  executed_level?: Maybe<Scalars['bigint']['output']>;
  expiration_datetime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  signers_count?: Maybe<Scalars['bigint']['output']>;
  start_datetime?: Maybe<Scalars['timestamptz']['output']>;
  start_level?: Maybe<Scalars['bigint']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['smallint']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Max_Order_By = {
  action_id?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  executed_datetime?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  expiration_datetime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Super_Admin_Signatory_Action_Min_Fields = {
  __typename?: 'super_admin_signatory_action_min_fields';
  action_id?: Maybe<Scalars['bigint']['output']>;
  action_type?: Maybe<Scalars['String']['output']>;
  executed_datetime?: Maybe<Scalars['timestamptz']['output']>;
  executed_level?: Maybe<Scalars['bigint']['output']>;
  expiration_datetime?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  signers_count?: Maybe<Scalars['bigint']['output']>;
  start_datetime?: Maybe<Scalars['timestamptz']['output']>;
  start_level?: Maybe<Scalars['bigint']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['smallint']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Min_Order_By = {
  action_id?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  executed_datetime?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  expiration_datetime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "super_admin_signatory_action". */
export type Super_Admin_Signatory_Action_Order_By = {
  action_id?: InputMaybe<Order_By>;
  action_type?: InputMaybe<Order_By>;
  data_aggregate?: InputMaybe<Super_Admin_Signatory_Action_Data_Aggregate_Order_By>;
  executed?: InputMaybe<Order_By>;
  executed_datetime?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  expiration_datetime?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator?: InputMaybe<Super_Admin_Signatory_Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signatures_aggregate?: InputMaybe<Super_Admin_Signature_Aggregate_Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_datetime?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Super_Admin_Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin_signatory_action" */
export enum Super_Admin_Signatory_Action_Select_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  ActionType = 'action_type',
  /** column name */
  Executed = 'executed',
  /** column name */
  ExecutedDatetime = 'executed_datetime',
  /** column name */
  ExecutedLevel = 'executed_level',
  /** column name */
  ExpirationDatetime = 'expiration_datetime',
  /** column name */
  Id = 'id',
  /** column name */
  InitiatorId = 'initiator_id',
  /** column name */
  SignersCount = 'signers_count',
  /** column name */
  StartDatetime = 'start_datetime',
  /** column name */
  StartLevel = 'start_level',
  /** column name */
  Status = 'status',
  /** column name */
  SuperAdminId = 'super_admin_id'
}

/** select "super_admin_signatory_action_aggregate_bool_exp_bool_and_arguments_columns" columns of table "super_admin_signatory_action" */
export enum Super_Admin_Signatory_Action_Select_Column_Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Executed = 'executed'
}

/** select "super_admin_signatory_action_aggregate_bool_exp_bool_or_arguments_columns" columns of table "super_admin_signatory_action" */
export enum Super_Admin_Signatory_Action_Select_Column_Super_Admin_Signatory_Action_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Executed = 'executed'
}

/** aggregate stddev on columns */
export type Super_Admin_Signatory_Action_Stddev_Fields = {
  __typename?: 'super_admin_signatory_action_stddev_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  executed_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  signers_count?: Maybe<Scalars['Float']['output']>;
  start_level?: Maybe<Scalars['Float']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Stddev_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_Signatory_Action_Stddev_Pop_Fields = {
  __typename?: 'super_admin_signatory_action_stddev_pop_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  executed_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  signers_count?: Maybe<Scalars['Float']['output']>;
  start_level?: Maybe<Scalars['Float']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Stddev_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_Signatory_Action_Stddev_Samp_Fields = {
  __typename?: 'super_admin_signatory_action_stddev_samp_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  executed_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  signers_count?: Maybe<Scalars['Float']['output']>;
  start_level?: Maybe<Scalars['Float']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Stddev_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_Signatory_Action_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_Signatory_Action_Stream_Cursor_Value_Input = {
  action_id?: InputMaybe<Scalars['bigint']['input']>;
  action_type?: InputMaybe<Scalars['String']['input']>;
  executed?: InputMaybe<Scalars['Boolean']['input']>;
  executed_datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  executed_level?: InputMaybe<Scalars['bigint']['input']>;
  expiration_datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initiator_id?: InputMaybe<Scalars['Int']['input']>;
  signers_count?: InputMaybe<Scalars['bigint']['input']>;
  start_datetime?: InputMaybe<Scalars['timestamptz']['input']>;
  start_level?: InputMaybe<Scalars['bigint']['input']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Scalars['smallint']['input']>;
  super_admin_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_Signatory_Action_Sum_Fields = {
  __typename?: 'super_admin_signatory_action_sum_fields';
  action_id?: Maybe<Scalars['bigint']['output']>;
  executed_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initiator_id?: Maybe<Scalars['Int']['output']>;
  signers_count?: Maybe<Scalars['bigint']['output']>;
  start_level?: Maybe<Scalars['bigint']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['smallint']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Sum_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Super_Admin_Signatory_Action_Var_Pop_Fields = {
  __typename?: 'super_admin_signatory_action_var_pop_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  executed_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  signers_count?: Maybe<Scalars['Float']['output']>;
  start_level?: Maybe<Scalars['Float']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Var_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Super_Admin_Signatory_Action_Var_Samp_Fields = {
  __typename?: 'super_admin_signatory_action_var_samp_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  executed_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  signers_count?: Maybe<Scalars['Float']['output']>;
  start_level?: Maybe<Scalars['Float']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Var_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Super_Admin_Signatory_Action_Variance_Fields = {
  __typename?: 'super_admin_signatory_action_variance_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  executed_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  initiator_id?: Maybe<Scalars['Float']['output']>;
  signers_count?: Maybe<Scalars['Float']['output']>;
  start_level?: Maybe<Scalars['Float']['output']>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "super_admin_signatory_action" */
export type Super_Admin_Signatory_Action_Variance_Order_By = {
  action_id?: InputMaybe<Order_By>;
  executed_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initiator_id?: InputMaybe<Order_By>;
  signers_count?: InputMaybe<Order_By>;
  start_level?: InputMaybe<Order_By>;
  /** FLUSHED: 0\nEXECUTED: 1\nPENDING: 2 */
  status?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregated selection of "super_admin_signatory" */
export type Super_Admin_Signatory_Aggregate = {
  __typename?: 'super_admin_signatory_aggregate';
  aggregate?: Maybe<Super_Admin_Signatory_Aggregate_Fields>;
  nodes: Array<Super_Admin_Signatory>;
};

export type Super_Admin_Signatory_Aggregate_Bool_Exp = {
  count?: InputMaybe<Super_Admin_Signatory_Aggregate_Bool_Exp_Count>;
};

export type Super_Admin_Signatory_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "super_admin_signatory" */
export type Super_Admin_Signatory_Aggregate_Fields = {
  __typename?: 'super_admin_signatory_aggregate_fields';
  avg?: Maybe<Super_Admin_Signatory_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_Signatory_Max_Fields>;
  min?: Maybe<Super_Admin_Signatory_Min_Fields>;
  stddev?: Maybe<Super_Admin_Signatory_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_Signatory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_Signatory_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_Signatory_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_Signatory_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_Signatory_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_Signatory_Variance_Fields>;
};


/** aggregate fields of "super_admin_signatory" */
export type Super_Admin_Signatory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_Signatory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "super_admin_signatory" */
export type Super_Admin_Signatory_Aggregate_Order_By = {
  avg?: InputMaybe<Super_Admin_Signatory_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Super_Admin_Signatory_Max_Order_By>;
  min?: InputMaybe<Super_Admin_Signatory_Min_Order_By>;
  stddev?: InputMaybe<Super_Admin_Signatory_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Super_Admin_Signatory_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Super_Admin_Signatory_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Super_Admin_Signatory_Sum_Order_By>;
  var_pop?: InputMaybe<Super_Admin_Signatory_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Super_Admin_Signatory_Var_Samp_Order_By>;
  variance?: InputMaybe<Super_Admin_Signatory_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Super_Admin_Signatory_Avg_Fields = {
  __typename?: 'super_admin_signatory_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "super_admin_signatory". All fields are combined with a logical 'AND'. */
export type Super_Admin_Signatory_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_Signatory_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_Signatory_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  signatory_actions?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  signatory_actions_aggregate?: InputMaybe<Super_Admin_Signatory_Action_Aggregate_Bool_Exp>;
  signatures?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
  signatures_aggregate?: InputMaybe<Super_Admin_Signature_Aggregate_Bool_Exp>;
  super_admin?: InputMaybe<Super_Admin_Bool_Exp>;
  super_admin_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Equiteez_User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Super_Admin_Signatory_Max_Fields = {
  __typename?: 'super_admin_signatory_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Super_Admin_Signatory_Min_Fields = {
  __typename?: 'super_admin_signatory_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "super_admin_signatory". */
export type Super_Admin_Signatory_Order_By = {
  id?: InputMaybe<Order_By>;
  signatory_actions_aggregate?: InputMaybe<Super_Admin_Signatory_Action_Aggregate_Order_By>;
  signatures_aggregate?: InputMaybe<Super_Admin_Signature_Aggregate_Order_By>;
  super_admin?: InputMaybe<Super_Admin_Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Equiteez_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin_signatory" */
export enum Super_Admin_Signatory_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  SuperAdminId = 'super_admin_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate stddev on columns */
export type Super_Admin_Signatory_Stddev_Fields = {
  __typename?: 'super_admin_signatory_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_Signatory_Stddev_Pop_Fields = {
  __typename?: 'super_admin_signatory_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_Signatory_Stddev_Samp_Fields = {
  __typename?: 'super_admin_signatory_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "super_admin_signatory" */
export type Super_Admin_Signatory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_Signatory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_Signatory_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  super_admin_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_Signatory_Sum_Fields = {
  __typename?: 'super_admin_signatory_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Super_Admin_Signatory_Var_Pop_Fields = {
  __typename?: 'super_admin_signatory_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Super_Admin_Signatory_Var_Samp_Fields = {
  __typename?: 'super_admin_signatory_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Super_Admin_Signatory_Variance_Fields = {
  __typename?: 'super_admin_signatory_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "super_admin_signatory" */
export type Super_Admin_Signatory_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "super_admin_signature" */
export type Super_Admin_Signature = {
  __typename?: 'super_admin_signature';
  /** An object relationship */
  action: Super_Admin_Signatory_Action;
  action_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  signatory: Super_Admin_Signatory;
  signatory_id: Scalars['Int']['output'];
  /** An object relationship */
  super_admin: Super_Admin;
  super_admin_id: Scalars['Int']['output'];
};

/** aggregated selection of "super_admin_signature" */
export type Super_Admin_Signature_Aggregate = {
  __typename?: 'super_admin_signature_aggregate';
  aggregate?: Maybe<Super_Admin_Signature_Aggregate_Fields>;
  nodes: Array<Super_Admin_Signature>;
};

export type Super_Admin_Signature_Aggregate_Bool_Exp = {
  count?: InputMaybe<Super_Admin_Signature_Aggregate_Bool_Exp_Count>;
};

export type Super_Admin_Signature_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "super_admin_signature" */
export type Super_Admin_Signature_Aggregate_Fields = {
  __typename?: 'super_admin_signature_aggregate_fields';
  avg?: Maybe<Super_Admin_Signature_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Super_Admin_Signature_Max_Fields>;
  min?: Maybe<Super_Admin_Signature_Min_Fields>;
  stddev?: Maybe<Super_Admin_Signature_Stddev_Fields>;
  stddev_pop?: Maybe<Super_Admin_Signature_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Super_Admin_Signature_Stddev_Samp_Fields>;
  sum?: Maybe<Super_Admin_Signature_Sum_Fields>;
  var_pop?: Maybe<Super_Admin_Signature_Var_Pop_Fields>;
  var_samp?: Maybe<Super_Admin_Signature_Var_Samp_Fields>;
  variance?: Maybe<Super_Admin_Signature_Variance_Fields>;
};


/** aggregate fields of "super_admin_signature" */
export type Super_Admin_Signature_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Super_Admin_Signature_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "super_admin_signature" */
export type Super_Admin_Signature_Aggregate_Order_By = {
  avg?: InputMaybe<Super_Admin_Signature_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Super_Admin_Signature_Max_Order_By>;
  min?: InputMaybe<Super_Admin_Signature_Min_Order_By>;
  stddev?: InputMaybe<Super_Admin_Signature_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Super_Admin_Signature_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Super_Admin_Signature_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Super_Admin_Signature_Sum_Order_By>;
  var_pop?: InputMaybe<Super_Admin_Signature_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Super_Admin_Signature_Var_Samp_Order_By>;
  variance?: InputMaybe<Super_Admin_Signature_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Super_Admin_Signature_Avg_Fields = {
  __typename?: 'super_admin_signature_avg_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Avg_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "super_admin_signature". All fields are combined with a logical 'AND'. */
export type Super_Admin_Signature_Bool_Exp = {
  _and?: InputMaybe<Array<Super_Admin_Signature_Bool_Exp>>;
  _not?: InputMaybe<Super_Admin_Signature_Bool_Exp>;
  _or?: InputMaybe<Array<Super_Admin_Signature_Bool_Exp>>;
  action?: InputMaybe<Super_Admin_Signatory_Action_Bool_Exp>;
  action_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  signatory?: InputMaybe<Super_Admin_Signatory_Bool_Exp>;
  signatory_id?: InputMaybe<Int_Comparison_Exp>;
  super_admin?: InputMaybe<Super_Admin_Bool_Exp>;
  super_admin_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Super_Admin_Signature_Max_Fields = {
  __typename?: 'super_admin_signature_max_fields';
  action_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  signatory_id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Max_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Super_Admin_Signature_Min_Fields = {
  __typename?: 'super_admin_signature_min_fields';
  action_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  signatory_id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Min_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "super_admin_signature". */
export type Super_Admin_Signature_Order_By = {
  action?: InputMaybe<Super_Admin_Signatory_Action_Order_By>;
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory?: InputMaybe<Super_Admin_Signatory_Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin?: InputMaybe<Super_Admin_Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** select columns of table "super_admin_signature" */
export enum Super_Admin_Signature_Select_Column {
  /** column name */
  ActionId = 'action_id',
  /** column name */
  Id = 'id',
  /** column name */
  SignatoryId = 'signatory_id',
  /** column name */
  SuperAdminId = 'super_admin_id'
}

/** aggregate stddev on columns */
export type Super_Admin_Signature_Stddev_Fields = {
  __typename?: 'super_admin_signature_stddev_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Stddev_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_Signature_Stddev_Pop_Fields = {
  __typename?: 'super_admin_signature_stddev_pop_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Stddev_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_Signature_Stddev_Samp_Fields = {
  __typename?: 'super_admin_signature_stddev_samp_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Stddev_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "super_admin_signature" */
export type Super_Admin_Signature_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_Signature_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_Signature_Stream_Cursor_Value_Input = {
  action_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  signatory_id?: InputMaybe<Scalars['Int']['input']>;
  super_admin_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_Signature_Sum_Fields = {
  __typename?: 'super_admin_signature_sum_fields';
  action_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  signatory_id?: Maybe<Scalars['Int']['output']>;
  super_admin_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Sum_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Super_Admin_Signature_Var_Pop_Fields = {
  __typename?: 'super_admin_signature_var_pop_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Var_Pop_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Super_Admin_Signature_Var_Samp_Fields = {
  __typename?: 'super_admin_signature_var_samp_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Var_Samp_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Super_Admin_Signature_Variance_Fields = {
  __typename?: 'super_admin_signature_variance_fields';
  action_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_id?: Maybe<Scalars['Float']['output']>;
  super_admin_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "super_admin_signature" */
export type Super_Admin_Signature_Variance_Order_By = {
  action_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  signatory_id?: InputMaybe<Order_By>;
  super_admin_id?: InputMaybe<Order_By>;
};

/** aggregate stddev on columns */
export type Super_Admin_Stddev_Fields = {
  __typename?: 'super_admin_stddev_fields';
  action_counter?: Maybe<Scalars['Float']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_size?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Super_Admin_Stddev_Pop_Fields = {
  __typename?: 'super_admin_stddev_pop_fields';
  action_counter?: Maybe<Scalars['Float']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_size?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Super_Admin_Stddev_Samp_Fields = {
  __typename?: 'super_admin_stddev_samp_fields';
  action_counter?: Maybe<Scalars['Float']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_size?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "super_admin" */
export type Super_Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Super_Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Super_Admin_Stream_Cursor_Value_Input = {
  action_counter?: InputMaybe<Scalars['bigint']['input']>;
  action_expiry_in_seconds?: InputMaybe<Scalars['bigint']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  signatory_size?: InputMaybe<Scalars['bigint']['input']>;
  threshold?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Super_Admin_Sum_Fields = {
  __typename?: 'super_admin_sum_fields';
  action_counter?: Maybe<Scalars['bigint']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  signatory_size?: Maybe<Scalars['bigint']['output']>;
  threshold?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate var_pop on columns */
export type Super_Admin_Var_Pop_Fields = {
  __typename?: 'super_admin_var_pop_fields';
  action_counter?: Maybe<Scalars['Float']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_size?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Super_Admin_Var_Samp_Fields = {
  __typename?: 'super_admin_var_samp_fields';
  action_counter?: Maybe<Scalars['Float']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_size?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Super_Admin_Variance_Fields = {
  __typename?: 'super_admin_variance_fields';
  action_counter?: Maybe<Scalars['Float']['output']>;
  action_expiry_in_seconds?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  signatory_size?: Maybe<Scalars['Float']['output']>;
  threshold?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timetz']['input']>;
  _gt?: InputMaybe<Scalars['timetz']['input']>;
  _gte?: InputMaybe<Scalars['timetz']['input']>;
  _in?: InputMaybe<Array<Scalars['timetz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timetz']['input']>;
  _lte?: InputMaybe<Scalars['timetz']['input']>;
  _neq?: InputMaybe<Scalars['timetz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timetz']['input']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  address: Scalars['String']['output'];
  /** An array relationship */
  dodo_mav_base_lp_tokens: Array<Dodo_Mav>;
  /** An aggregate relationship */
  dodo_mav_base_lp_tokens_aggregate: Dodo_Mav_Aggregate;
  /** An array relationship */
  dodo_mav_base_tokens: Array<Dodo_Mav>;
  /** An aggregate relationship */
  dodo_mav_base_tokens_aggregate: Dodo_Mav_Aggregate;
  /** An array relationship */
  dodo_mav_quote_lp_tokens: Array<Dodo_Mav>;
  /** An aggregate relationship */
  dodo_mav_quote_lp_tokens_aggregate: Dodo_Mav_Aggregate;
  /** An array relationship */
  dodo_mav_quote_tokens: Array<Dodo_Mav>;
  /** An aggregate relationship */
  dodo_mav_quote_tokens_aggregate: Dodo_Mav_Aggregate;
  /** An array relationship */
  equiteez_user_balances: Array<Equiteez_User_Balance>;
  /** An aggregate relationship */
  equiteez_user_balances_aggregate: Equiteez_User_Balance_Aggregate;
  /** An array relationship */
  equiteez_user_token_transfers: Array<Equiteez_User_Token_Transfer>;
  /** An aggregate relationship */
  equiteez_user_token_transfers_aggregate: Equiteez_User_Token_Transfer_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  marketplace_currencies: Array<Marketplace_Currency>;
  /** An aggregate relationship */
  marketplace_currencies_aggregate: Marketplace_Currency_Aggregate;
  /** An array relationship */
  marketplace_listing_tokens: Array<Marketplace_Listing>;
  /** An aggregate relationship */
  marketplace_listing_tokens_aggregate: Marketplace_Listing_Aggregate;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  orderbook_currencies: Array<Orderbook_Currency>;
  /** An aggregate relationship */
  orderbook_currencies_aggregate: Orderbook_Currency_Aggregate;
  /** An array relationship */
  orderbook_fees: Array<Orderbook_Fee>;
  /** An aggregate relationship */
  orderbook_fees_aggregate: Orderbook_Fee_Aggregate;
  /** An array relationship */
  orderbook_rwa_orders: Array<Orderbook_Rwa_Order>;
  /** An aggregate relationship */
  orderbook_rwa_orders_aggregate: Orderbook_Rwa_Order_Aggregate;
  /** An array relationship */
  orderbooks: Array<Orderbook>;
  /** An aggregate relationship */
  orderbooks_aggregate: Orderbook_Aggregate;
  token_id: Scalars['smallint']['output'];
  token_metadata?: Maybe<Scalars['jsonb']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['smallint']['output']>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Base_Lp_TokensArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Base_Lp_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Base_TokensArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Base_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Quote_Lp_TokensArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Quote_Lp_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Quote_TokensArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenDodo_Mav_Quote_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dodo_Mav_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dodo_Mav_Order_By>>;
  where?: InputMaybe<Dodo_Mav_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenEquiteez_User_BalancesArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenEquiteez_User_Balances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Balance_Order_By>>;
  where?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenEquiteez_User_Token_TransfersArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenEquiteez_User_Token_Transfers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Equiteez_User_Token_Transfer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Equiteez_User_Token_Transfer_Order_By>>;
  where?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenMarketplace_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenMarketplace_Currencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Currency_Order_By>>;
  where?: InputMaybe<Marketplace_Currency_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenMarketplace_Listing_TokensArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenMarketplace_Listing_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Marketplace_Listing_Order_By>>;
  where?: InputMaybe<Marketplace_Listing_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "token" */
export type TokenOrderbook_CurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenOrderbook_Currencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Currency_Order_By>>;
  where?: InputMaybe<Orderbook_Currency_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenOrderbook_FeesArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenOrderbook_Fees_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Fee_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Fee_Order_By>>;
  where?: InputMaybe<Orderbook_Fee_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenOrderbook_Rwa_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenOrderbook_Rwa_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Rwa_Order_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Rwa_Order_Order_By>>;
  where?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenOrderbooksArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenOrderbooks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orderbook_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orderbook_Order_By>>;
  where?: InputMaybe<Orderbook_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_MetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  avg?: Maybe<Token_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
  stddev?: Maybe<Token_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Sum_Fields>;
  var_pop?: Maybe<Token_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Var_Samp_Fields>;
  variance?: Maybe<Token_Variance_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Token_Avg_Fields = {
  __typename?: 'token_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  dodo_mav_base_lp_tokens?: InputMaybe<Dodo_Mav_Bool_Exp>;
  dodo_mav_base_lp_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp>;
  dodo_mav_base_tokens?: InputMaybe<Dodo_Mav_Bool_Exp>;
  dodo_mav_base_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp>;
  dodo_mav_quote_lp_tokens?: InputMaybe<Dodo_Mav_Bool_Exp>;
  dodo_mav_quote_lp_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp>;
  dodo_mav_quote_tokens?: InputMaybe<Dodo_Mav_Bool_Exp>;
  dodo_mav_quote_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Bool_Exp>;
  equiteez_user_balances?: InputMaybe<Equiteez_User_Balance_Bool_Exp>;
  equiteez_user_balances_aggregate?: InputMaybe<Equiteez_User_Balance_Aggregate_Bool_Exp>;
  equiteez_user_token_transfers?: InputMaybe<Equiteez_User_Token_Transfer_Bool_Exp>;
  equiteez_user_token_transfers_aggregate?: InputMaybe<Equiteez_User_Token_Transfer_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  marketplace_currencies?: InputMaybe<Marketplace_Currency_Bool_Exp>;
  marketplace_currencies_aggregate?: InputMaybe<Marketplace_Currency_Aggregate_Bool_Exp>;
  marketplace_listing_tokens?: InputMaybe<Marketplace_Listing_Bool_Exp>;
  marketplace_listing_tokens_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  orderbook_currencies?: InputMaybe<Orderbook_Currency_Bool_Exp>;
  orderbook_currencies_aggregate?: InputMaybe<Orderbook_Currency_Aggregate_Bool_Exp>;
  orderbook_fees?: InputMaybe<Orderbook_Fee_Bool_Exp>;
  orderbook_fees_aggregate?: InputMaybe<Orderbook_Fee_Aggregate_Bool_Exp>;
  orderbook_rwa_orders?: InputMaybe<Orderbook_Rwa_Order_Bool_Exp>;
  orderbook_rwa_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Aggregate_Bool_Exp>;
  orderbooks?: InputMaybe<Orderbook_Bool_Exp>;
  orderbooks_aggregate?: InputMaybe<Orderbook_Aggregate_Bool_Exp>;
  token_id?: InputMaybe<Smallint_Comparison_Exp>;
  token_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  token_standard?: InputMaybe<Smallint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['smallint']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['smallint']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['smallint']['output']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  address?: InputMaybe<Order_By>;
  dodo_mav_base_lp_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Order_By>;
  dodo_mav_base_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Order_By>;
  dodo_mav_quote_lp_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Order_By>;
  dodo_mav_quote_tokens_aggregate?: InputMaybe<Dodo_Mav_Aggregate_Order_By>;
  equiteez_user_balances_aggregate?: InputMaybe<Equiteez_User_Balance_Aggregate_Order_By>;
  equiteez_user_token_transfers_aggregate?: InputMaybe<Equiteez_User_Token_Transfer_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  marketplace_currencies_aggregate?: InputMaybe<Marketplace_Currency_Aggregate_Order_By>;
  marketplace_listing_tokens_aggregate?: InputMaybe<Marketplace_Listing_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  orderbook_currencies_aggregate?: InputMaybe<Orderbook_Currency_Aggregate_Order_By>;
  orderbook_fees_aggregate?: InputMaybe<Orderbook_Fee_Aggregate_Order_By>;
  orderbook_rwa_orders_aggregate?: InputMaybe<Orderbook_Rwa_Order_Aggregate_Order_By>;
  orderbooks_aggregate?: InputMaybe<Orderbook_Aggregate_Order_By>;
  token_id?: InputMaybe<Order_By>;
  token_metadata?: InputMaybe<Order_By>;
  token_standard?: InputMaybe<Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TokenMetadata = 'token_metadata',
  /** column name */
  TokenStandard = 'token_standard'
}

/** aggregate stddev on columns */
export type Token_Stddev_Fields = {
  __typename?: 'token_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Token_Stddev_Pop_Fields = {
  __typename?: 'token_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Token_Stddev_Samp_Fields = {
  __typename?: 'token_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  token_id?: InputMaybe<Scalars['smallint']['input']>;
  token_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: InputMaybe<Scalars['smallint']['input']>;
};

/** aggregate sum on columns */
export type Token_Sum_Fields = {
  __typename?: 'token_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  token_id?: Maybe<Scalars['smallint']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['smallint']['output']>;
};

/** aggregate var_pop on columns */
export type Token_Var_Pop_Fields = {
  __typename?: 'token_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Token_Var_Samp_Fields = {
  __typename?: 'token_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Token_Variance_Fields = {
  __typename?: 'token_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  token_id?: Maybe<Scalars['Float']['output']>;
  /** FA12: 0\nFA2: 1\nMAV: 2 */
  token_standard?: Maybe<Scalars['Float']['output']>;
};

export type DexStorageQueryVariables = Exact<{ [key: string]: never; }>;


export type DexStorageQuery = { __typename?: 'query_root', dodo_mav: Array<{ __typename?: 'dodo_mav', address: string, fee_decimals: any, guide_price: any, slippage_factor: any, fixed_price_percent: any, base_balance: any, quote_balance: any, target_base_token_amount: any, target_quote_token_amount: any, base_balance_limit: any, quote_balance_limit: any, metadata?: any | null, r_status: any, price_model: any, maintainer_fee: any, lp_fee: any, quote_token: { __typename?: 'token', token_id: any, address: string }, quote_lp_token: { __typename?: 'token', address: string, token_id: any }, base_lp_token: { __typename?: 'token', address: string, token_id: any }, base_token: { __typename?: 'token', token_id: any, address: string } }> };

export type DipDupHeadLvlSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type DipDupHeadLvlSubscription = { __typename?: 'subscription_root', dipdup_head: Array<{ __typename?: 'dipdup_head', level: number }> };

export type DodoMAvAssetMetadataQueryVariables = Exact<{
  addresses?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type DodoMAvAssetMetadataQuery = { __typename?: 'query_root', token: Array<{ __typename?: 'token', address: string, token_id: any, token_standard?: any | null, token_metadata?: any | null, metadata?: any | null }> };

export type MarketAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type MarketAddressesQuery = { __typename?: 'query_root', dodo_mav: Array<{ __typename?: 'dodo_mav', address: string, base_token: { __typename?: 'token', token_id: any, address: string }, quote_token: { __typename?: 'token', token_id: any, address: string }, quote_lp_token: { __typename?: 'token', address: string, token_id: any }, base_lp_token: { __typename?: 'token', address: string, token_id: any } }>, orderbook: Array<{ __typename?: 'orderbook', address: string, rwa_token?: { __typename?: 'token', address: string } | null }> };

export type UserKycStatusQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type UserKycStatusQuery = { __typename?: 'query_root', kyc_member: Array<{ __typename?: 'kyc_member', user?: { __typename?: 'equiteez_user', address: string } | null }> };


export const DexStorageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DexStorage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dodo_mav"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"fee_decimals"}},{"kind":"Field","name":{"kind":"Name","value":"guide_price"}},{"kind":"Field","name":{"kind":"Name","value":"slippage_factor"}},{"kind":"Field","name":{"kind":"Name","value":"fixed_price_percent"}},{"kind":"Field","name":{"kind":"Name","value":"base_balance"}},{"kind":"Field","name":{"kind":"Name","value":"quote_balance"}},{"kind":"Field","name":{"kind":"Name","value":"target_base_token_amount"}},{"kind":"Field","name":{"kind":"Name","value":"target_quote_token_amount"}},{"kind":"Field","name":{"kind":"Name","value":"base_balance_limit"}},{"kind":"Field","name":{"kind":"Name","value":"quote_balance_limit"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"r_status"}},{"kind":"Field","name":{"kind":"Name","value":"price_model"}},{"kind":"Field","name":{"kind":"Name","value":"maintainer_fee"}},{"kind":"Field","name":{"kind":"Name","value":"lp_fee"}},{"kind":"Field","name":{"kind":"Name","value":"quote_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote_lp_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"token_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"base_lp_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"token_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"base_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<DexStorageQuery, DexStorageQueryVariables>;
export const DipDupHeadLvlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"DipDupHeadLvl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dipdup_head"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]} as unknown as DocumentNode<DipDupHeadLvlSubscription, DipDupHeadLvlSubscriptionVariables>;
export const DodoMAvAssetMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dodoMAvAssetMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addresses"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addresses"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"token_id"}},{"kind":"Field","name":{"kind":"Name","value":"token_standard"}},{"kind":"Field","name":{"kind":"Name","value":"token_metadata"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<DodoMAvAssetMetadataQuery, DodoMAvAssetMetadataQueryVariables>;
export const MarketAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"marketAddresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dodo_mav"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"base_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quote_lp_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"token_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"base_lp_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"token_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"orderbook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"rwa_token"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<MarketAddressesQuery, MarketAddressesQueryVariables>;
export const UserKycStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserKycStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kyc_member"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<UserKycStatusQuery, UserKycStatusQueryVariables>;