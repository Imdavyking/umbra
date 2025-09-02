'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

var STATUS;
(function (STATUS) {
  STATUS[STATUS['Pending'] = 0] = 'Pending';
  STATUS[STATUS['Verified'] = 1] = 'Verified';
  STATUS[STATUS['Revoked'] = 2] = 'Revoked';
})(STATUS = exports.STATUS || (exports.STATUS = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _VoteTally_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return {
      up: _descriptor_0.fromValue(value_0),
      down: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.up).concat(_descriptor_0.toValue(value_0.down));
  }
}

const _descriptor_1 = new _VoteTally_0();

const _descriptor_2 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_3 = new __compactRuntime.CompactTypeBytes(32);

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_3.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.bytes);
  }
}

const _descriptor_4 = new _ZswapCoinPublicKey_0();

const _descriptor_5 = new __compactRuntime.CompactTypeOpaqueString();

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

class _Feature_0 {
  alignment() {
    return _descriptor_4.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))))))));
  }
  fromValue(value_0) {
    return {
      creator: _descriptor_4.fromValue(value_0),
      name: _descriptor_5.fromValue(value_0),
      description: _descriptor_5.fromValue(value_0),
      category: _descriptor_5.fromValue(value_0),
      image_url: _descriptor_5.fromValue(value_0),
      min_age: _descriptor_6.fromValue(value_0),
      price: _descriptor_0.fromValue(value_0),
      created_at: _descriptor_0.fromValue(value_0),
      is_active: _descriptor_2.fromValue(value_0),
      coin_type: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_4.toValue(value_0.creator).concat(_descriptor_5.toValue(value_0.name).concat(_descriptor_5.toValue(value_0.description).concat(_descriptor_5.toValue(value_0.category).concat(_descriptor_5.toValue(value_0.image_url).concat(_descriptor_6.toValue(value_0.min_age).concat(_descriptor_0.toValue(value_0.price).concat(_descriptor_0.toValue(value_0.created_at).concat(_descriptor_2.toValue(value_0.is_active).concat(_descriptor_3.toValue(value_0.coin_type))))))))));
  }
}

const _descriptor_7 = new _Feature_0();

const _descriptor_8 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_3.alignment().concat(_descriptor_8.alignment().concat(_descriptor_0.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_3.fromValue(value_0),
      color: _descriptor_3.fromValue(value_0),
      value: _descriptor_8.fromValue(value_0),
      mt_index: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.nonce).concat(_descriptor_3.toValue(value_0.color).concat(_descriptor_8.toValue(value_0.value).concat(_descriptor_0.toValue(value_0.mt_index))));
  }
}

const _descriptor_9 = new _QualifiedCoinInfo_0();

const _descriptor_10 = new __compactRuntime.CompactTypeEnum(2, 1);

class _Certificate_0 {
  alignment() {
    return _descriptor_4.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_4.alignment().concat(_descriptor_6.alignment())))));
  }
  fromValue(value_0) {
    return {
      issuer: _descriptor_4.fromValue(value_0),
      issued_at: _descriptor_0.fromValue(value_0),
      valid_until: _descriptor_0.fromValue(value_0),
      is_valid: _descriptor_2.fromValue(value_0),
      owner: _descriptor_4.fromValue(value_0),
      year_of_birth: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_4.toValue(value_0.issuer).concat(_descriptor_0.toValue(value_0.issued_at).concat(_descriptor_0.toValue(value_0.valid_until).concat(_descriptor_2.toValue(value_0.is_valid).concat(_descriptor_4.toValue(value_0.owner).concat(_descriptor_6.toValue(value_0.year_of_birth))))));
  }
}

const _descriptor_11 = new _Certificate_0();

class _CoinInfo_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_3.alignment().concat(_descriptor_8.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_3.fromValue(value_0),
      color: _descriptor_3.fromValue(value_0),
      value: _descriptor_8.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.nonce).concat(_descriptor_3.toValue(value_0.color).concat(_descriptor_8.toValue(value_0.value)));
  }
}

const _descriptor_12 = new _CoinInfo_0();

class _Maybe_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_3.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_2.fromValue(value_0),
      value: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.is_some).concat(_descriptor_3.toValue(value_0.value));
  }
}

const _descriptor_13 = new _Maybe_0();

const _descriptor_14 = new __compactRuntime.CompactTypeVector(10, _descriptor_13);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_3.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.bytes);
  }
}

const _descriptor_15 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_4.alignment().concat(_descriptor_15.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_2.fromValue(value_0),
      left: _descriptor_4.fromValue(value_0),
      right: _descriptor_15.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.is_left).concat(_descriptor_4.toValue(value_0.left).concat(_descriptor_15.toValue(value_0.right)));
  }
}

const _descriptor_16 = new _Either_0();

class _Maybe_1 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_12.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_2.fromValue(value_0),
      value: _descriptor_12.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.is_some).concat(_descriptor_12.toValue(value_0.value));
  }
}

const _descriptor_17 = new _Maybe_1();

class _SendResult_0 {
  alignment() {
    return _descriptor_17.alignment().concat(_descriptor_12.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_17.fromValue(value_0),
      sent: _descriptor_12.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_17.toValue(value_0.change).concat(_descriptor_12.toValue(value_0.sent));
  }
}

const _descriptor_18 = new _SendResult_0();

const _descriptor_19 = new __compactRuntime.CompactTypeField();

const _descriptor_20 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_12.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment().concat(_descriptor_20.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_12.fromValue(value_0),
      dataType: _descriptor_2.fromValue(value_0),
      data: _descriptor_3.fromValue(value_0),
      domain_sep: _descriptor_20.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_12.toValue(value_0.info).concat(_descriptor_2.toValue(value_0.dataType).concat(_descriptor_3.toValue(value_0.data).concat(_descriptor_20.toValue(value_0.domain_sep))));
  }
}

const _descriptor_21 = new _CoinPreimage_0();

const _descriptor_22 = new __compactRuntime.CompactTypeVector(2, _descriptor_19);

const _descriptor_23 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    if (typeof(witnesses_0.user_certificate) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named user_certificate');
    if (typeof(witnesses_0.prove_cert_signed_and_fresh) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named prove_cert_signed_and_fresh');
    if (typeof(witnesses_0.check_age_feature) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named check_age_feature');
    if (typeof(witnesses_0.gen_access_nullifier) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named gen_access_nullifier');
    if (typeof(witnesses_0.gen_vote_nullifier) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named gen_vote_nullifier');
    this.witnesses = witnesses_0;
    this.circuits = {
      cert_hash: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`cert_hash: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const cert_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('cert_hash',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 131 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(cert_0) === 'object' && typeof(cert_0.issuer) === 'object' && cert_0.issuer.bytes.buffer instanceof ArrayBuffer && cert_0.issuer.bytes.BYTES_PER_ELEMENT === 1 && cert_0.issuer.bytes.length === 32 && typeof(cert_0.issued_at) === 'bigint' && cert_0.issued_at >= 0 && cert_0.issued_at <= 18446744073709551615n && typeof(cert_0.valid_until) === 'bigint' && cert_0.valid_until >= 0 && cert_0.valid_until <= 18446744073709551615n && typeof(cert_0.is_valid) === 'boolean' && typeof(cert_0.owner) === 'object' && cert_0.owner.bytes.buffer instanceof ArrayBuffer && cert_0.owner.bytes.BYTES_PER_ELEMENT === 1 && cert_0.owner.bytes.length === 32 && typeof(cert_0.year_of_birth) === 'bigint' && cert_0.year_of_birth >= 0 && cert_0.year_of_birth <= 65535n))
          __compactRuntime.type_error('cert_hash',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 131 char 1',
                                      'struct Certificate<issuer: struct ZswapCoinPublicKey<bytes: Bytes<32>>, issued_at: Uint<0..18446744073709551615>, valid_until: Uint<0..18446744073709551615>, is_valid: Boolean, owner: struct ZswapCoinPublicKey<bytes: Bytes<32>>, year_of_birth: Uint<0..65535>>',
                                      cert_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(cert_0),
            alignment: _descriptor_11.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_cert_hash_0(context, partialProofData, cert_0);
        partialProofData.output = { value: _descriptor_3.toValue(result_0), alignment: _descriptor_3.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      add_trusted_issuer: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`add_trusted_issuer: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const issuer_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('add_trusted_issuer',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 139 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(issuer_0) === 'object' && issuer_0.bytes.buffer instanceof ArrayBuffer && issuer_0.bytes.BYTES_PER_ELEMENT === 1 && issuer_0.bytes.length === 32))
          __compactRuntime.type_error('add_trusted_issuer',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 139 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      issuer_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_4.toValue(issuer_0),
            alignment: _descriptor_4.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_add_trusted_issuer_0(context,
                                                     partialProofData,
                                                     issuer_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      remove_trusted_issuer: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`remove_trusted_issuer: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const issuer_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('remove_trusted_issuer',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 144 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(issuer_0) === 'object' && issuer_0.bytes.buffer instanceof ArrayBuffer && issuer_0.bytes.BYTES_PER_ELEMENT === 1 && issuer_0.bytes.length === 32))
          __compactRuntime.type_error('remove_trusted_issuer',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 144 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      issuer_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_4.toValue(issuer_0),
            alignment: _descriptor_4.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_remove_trusted_issuer_0(context,
                                                        partialProofData,
                                                        issuer_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      register: (...args_1) => {
        if (args_1.length !== 6)
          throw new __compactRuntime.CompactError(`register: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const issuer_0 = args_1[1];
        const issued_at_0 = args_1[2];
        const valid_until_0 = args_1[3];
        const is_valid_0 = args_1[4];
        const year_of_birth_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('register',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 153 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(issuer_0) === 'object' && issuer_0.bytes.buffer instanceof ArrayBuffer && issuer_0.bytes.BYTES_PER_ELEMENT === 1 && issuer_0.bytes.length === 32))
          __compactRuntime.type_error('register',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 153 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      issuer_0)
        if (!(typeof(issued_at_0) === 'bigint' && issued_at_0 >= 0 && issued_at_0 <= 18446744073709551615n))
          __compactRuntime.type_error('register',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'zkbadge.compact line 153 char 1',
                                      'Uint<0..18446744073709551615>',
                                      issued_at_0)
        if (!(typeof(valid_until_0) === 'bigint' && valid_until_0 >= 0 && valid_until_0 <= 18446744073709551615n))
          __compactRuntime.type_error('register',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'zkbadge.compact line 153 char 1',
                                      'Uint<0..18446744073709551615>',
                                      valid_until_0)
        if (!(typeof(is_valid_0) === 'boolean'))
          __compactRuntime.type_error('register',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'zkbadge.compact line 153 char 1',
                                      'Boolean',
                                      is_valid_0)
        if (!(typeof(year_of_birth_0) === 'bigint' && year_of_birth_0 >= 0 && year_of_birth_0 <= 65535n))
          __compactRuntime.type_error('register',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'zkbadge.compact line 153 char 1',
                                      'Uint<0..65535>',
                                      year_of_birth_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_4.toValue(issuer_0).concat(_descriptor_0.toValue(issued_at_0).concat(_descriptor_0.toValue(valid_until_0).concat(_descriptor_2.toValue(is_valid_0).concat(_descriptor_6.toValue(year_of_birth_0))))),
            alignment: _descriptor_4.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_6.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_register_0(context,
                                           partialProofData,
                                           issuer_0,
                                           issued_at_0,
                                           valid_until_0,
                                           is_valid_0,
                                           year_of_birth_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      verify_certificates: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`verify_certificates: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const hashes_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('verify_certificates',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 197 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(Array.isArray(hashes_0) && hashes_0.length === 10 && hashes_0.every((t) => typeof(t) === 'object' && typeof(t.is_some) === 'boolean' && t.value.buffer instanceof ArrayBuffer && t.value.BYTES_PER_ELEMENT === 1 && t.value.length === 32)))
          __compactRuntime.type_error('verify_certificates',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 197 char 1',
                                      'Vector<10, struct Maybe<is_some: Boolean, value: Bytes<32>>>',
                                      hashes_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_14.toValue(hashes_0),
            alignment: _descriptor_14.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_verify_certificates_0(context,
                                                      partialProofData,
                                                      hashes_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      check_verification: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`check_verification: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const cert_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('check_verification',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 211 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(cert_0) === 'object' && typeof(cert_0.issuer) === 'object' && cert_0.issuer.bytes.buffer instanceof ArrayBuffer && cert_0.issuer.bytes.BYTES_PER_ELEMENT === 1 && cert_0.issuer.bytes.length === 32 && typeof(cert_0.issued_at) === 'bigint' && cert_0.issued_at >= 0 && cert_0.issued_at <= 18446744073709551615n && typeof(cert_0.valid_until) === 'bigint' && cert_0.valid_until >= 0 && cert_0.valid_until <= 18446744073709551615n && typeof(cert_0.is_valid) === 'boolean' && typeof(cert_0.owner) === 'object' && cert_0.owner.bytes.buffer instanceof ArrayBuffer && cert_0.owner.bytes.BYTES_PER_ELEMENT === 1 && cert_0.owner.bytes.length === 32 && typeof(cert_0.year_of_birth) === 'bigint' && cert_0.year_of_birth >= 0 && cert_0.year_of_birth <= 65535n))
          __compactRuntime.type_error('check_verification',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 211 char 1',
                                      'struct Certificate<issuer: struct ZswapCoinPublicKey<bytes: Bytes<32>>, issued_at: Uint<0..18446744073709551615>, valid_until: Uint<0..18446744073709551615>, is_valid: Boolean, owner: struct ZswapCoinPublicKey<bytes: Bytes<32>>, year_of_birth: Uint<0..65535>>',
                                      cert_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(cert_0),
            alignment: _descriptor_11.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_check_verification_0(context,
                                                     partialProofData,
                                                     cert_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      create_feature: (...args_1) => {
        if (args_1.length !== 9)
          throw new __compactRuntime.CompactError(`create_feature: expected 9 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const feature_name_0 = args_1[1];
        const min_age_0 = args_1[2];
        const description_0 = args_1[3];
        const category_0 = args_1[4];
        const image_url_0 = args_1[5];
        const price_0 = args_1[6];
        const created_at_0 = args_1[7];
        const coin_type_0 = args_1[8];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('create_feature',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 221 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(min_age_0) === 'bigint' && min_age_0 >= 0 && min_age_0 <= 65535n))
          __compactRuntime.type_error('create_feature',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'zkbadge.compact line 221 char 1',
                                      'Uint<0..65535>',
                                      min_age_0)
        if (!(typeof(price_0) === 'bigint' && price_0 >= 0 && price_0 <= 18446744073709551615n))
          __compactRuntime.type_error('create_feature',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'zkbadge.compact line 221 char 1',
                                      'Uint<0..18446744073709551615>',
                                      price_0)
        if (!(typeof(created_at_0) === 'bigint' && created_at_0 >= 0 && created_at_0 <= 18446744073709551615n))
          __compactRuntime.type_error('create_feature',
                                      'argument 7 (argument 8 as invoked from Typescript)',
                                      'zkbadge.compact line 221 char 1',
                                      'Uint<0..18446744073709551615>',
                                      created_at_0)
        if (!(coin_type_0.buffer instanceof ArrayBuffer && coin_type_0.BYTES_PER_ELEMENT === 1 && coin_type_0.length === 32))
          __compactRuntime.type_error('create_feature',
                                      'argument 8 (argument 9 as invoked from Typescript)',
                                      'zkbadge.compact line 221 char 1',
                                      'Bytes<32>',
                                      coin_type_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_5.toValue(feature_name_0).concat(_descriptor_6.toValue(min_age_0).concat(_descriptor_5.toValue(description_0).concat(_descriptor_5.toValue(category_0).concat(_descriptor_5.toValue(image_url_0).concat(_descriptor_0.toValue(price_0).concat(_descriptor_0.toValue(created_at_0).concat(_descriptor_3.toValue(coin_type_0)))))))),
            alignment: _descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment())))))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_create_feature_0(context,
                                                 partialProofData,
                                                 feature_name_0,
                                                 min_age_0,
                                                 description_0,
                                                 category_0,
                                                 image_url_0,
                                                 price_0,
                                                 created_at_0,
                                                 coin_type_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      access_private_feature: (...args_1) => {
        if (args_1.length !== 4)
          throw new __compactRuntime.CompactError(`access_private_feature: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const cert_0 = args_1[1];
        const feature_id_0 = args_1[2];
        const payment_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('access_private_feature',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 260 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(cert_0) === 'object' && typeof(cert_0.issuer) === 'object' && cert_0.issuer.bytes.buffer instanceof ArrayBuffer && cert_0.issuer.bytes.BYTES_PER_ELEMENT === 1 && cert_0.issuer.bytes.length === 32 && typeof(cert_0.issued_at) === 'bigint' && cert_0.issued_at >= 0 && cert_0.issued_at <= 18446744073709551615n && typeof(cert_0.valid_until) === 'bigint' && cert_0.valid_until >= 0 && cert_0.valid_until <= 18446744073709551615n && typeof(cert_0.is_valid) === 'boolean' && typeof(cert_0.owner) === 'object' && cert_0.owner.bytes.buffer instanceof ArrayBuffer && cert_0.owner.bytes.BYTES_PER_ELEMENT === 1 && cert_0.owner.bytes.length === 32 && typeof(cert_0.year_of_birth) === 'bigint' && cert_0.year_of_birth >= 0 && cert_0.year_of_birth <= 65535n))
          __compactRuntime.type_error('access_private_feature',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 260 char 1',
                                      'struct Certificate<issuer: struct ZswapCoinPublicKey<bytes: Bytes<32>>, issued_at: Uint<0..18446744073709551615>, valid_until: Uint<0..18446744073709551615>, is_valid: Boolean, owner: struct ZswapCoinPublicKey<bytes: Bytes<32>>, year_of_birth: Uint<0..65535>>',
                                      cert_0)
        if (!(typeof(feature_id_0) === 'bigint' && feature_id_0 >= 0 && feature_id_0 <= 18446744073709551615n))
          __compactRuntime.type_error('access_private_feature',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'zkbadge.compact line 260 char 1',
                                      'Uint<0..18446744073709551615>',
                                      feature_id_0)
        if (!(typeof(payment_0) === 'object' && payment_0.nonce.buffer instanceof ArrayBuffer && payment_0.nonce.BYTES_PER_ELEMENT === 1 && payment_0.nonce.length === 32 && payment_0.color.buffer instanceof ArrayBuffer && payment_0.color.BYTES_PER_ELEMENT === 1 && payment_0.color.length === 32 && typeof(payment_0.value) === 'bigint' && payment_0.value >= 0 && payment_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('access_private_feature',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'zkbadge.compact line 260 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      payment_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(cert_0).concat(_descriptor_0.toValue(feature_id_0).concat(_descriptor_12.toValue(payment_0))),
            alignment: _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_12.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_access_private_feature_0(context,
                                                         partialProofData,
                                                         cert_0,
                                                         feature_id_0,
                                                         payment_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      withdrawFunds: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`withdrawFunds: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const feature_id_0 = args_1[1];
        const _coinType_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('withdrawFunds',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 316 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(feature_id_0) === 'bigint' && feature_id_0 >= 0 && feature_id_0 <= 18446744073709551615n))
          __compactRuntime.type_error('withdrawFunds',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 316 char 1',
                                      'Uint<0..18446744073709551615>',
                                      feature_id_0)
        if (!(_coinType_0.buffer instanceof ArrayBuffer && _coinType_0.BYTES_PER_ELEMENT === 1 && _coinType_0.length === 32))
          __compactRuntime.type_error('withdrawFunds',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'zkbadge.compact line 316 char 1',
                                      'Bytes<32>',
                                      _coinType_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(feature_id_0).concat(_descriptor_3.toValue(_coinType_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_3.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_withdrawFunds_0(context,
                                                partialProofData,
                                                feature_id_0,
                                                _coinType_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      vote_on_feature: (...args_1) => {
        if (args_1.length !== 5)
          throw new __compactRuntime.CompactError(`vote_on_feature: expected 5 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const cert_0 = args_1[1];
        const feature_id_0 = args_1[2];
        const like_0 = args_1[3];
        const vote_salt_0 = args_1[4];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('vote_on_feature',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 336 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(cert_0) === 'object' && typeof(cert_0.issuer) === 'object' && cert_0.issuer.bytes.buffer instanceof ArrayBuffer && cert_0.issuer.bytes.BYTES_PER_ELEMENT === 1 && cert_0.issuer.bytes.length === 32 && typeof(cert_0.issued_at) === 'bigint' && cert_0.issued_at >= 0 && cert_0.issued_at <= 18446744073709551615n && typeof(cert_0.valid_until) === 'bigint' && cert_0.valid_until >= 0 && cert_0.valid_until <= 18446744073709551615n && typeof(cert_0.is_valid) === 'boolean' && typeof(cert_0.owner) === 'object' && cert_0.owner.bytes.buffer instanceof ArrayBuffer && cert_0.owner.bytes.BYTES_PER_ELEMENT === 1 && cert_0.owner.bytes.length === 32 && typeof(cert_0.year_of_birth) === 'bigint' && cert_0.year_of_birth >= 0 && cert_0.year_of_birth <= 65535n))
          __compactRuntime.type_error('vote_on_feature',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 336 char 1',
                                      'struct Certificate<issuer: struct ZswapCoinPublicKey<bytes: Bytes<32>>, issued_at: Uint<0..18446744073709551615>, valid_until: Uint<0..18446744073709551615>, is_valid: Boolean, owner: struct ZswapCoinPublicKey<bytes: Bytes<32>>, year_of_birth: Uint<0..65535>>',
                                      cert_0)
        if (!(typeof(feature_id_0) === 'bigint' && feature_id_0 >= 0 && feature_id_0 <= 18446744073709551615n))
          __compactRuntime.type_error('vote_on_feature',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'zkbadge.compact line 336 char 1',
                                      'Uint<0..18446744073709551615>',
                                      feature_id_0)
        if (!(typeof(like_0) === 'boolean'))
          __compactRuntime.type_error('vote_on_feature',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'zkbadge.compact line 336 char 1',
                                      'Boolean',
                                      like_0)
        if (!(vote_salt_0.buffer instanceof ArrayBuffer && vote_salt_0.BYTES_PER_ELEMENT === 1 && vote_salt_0.length === 32))
          __compactRuntime.type_error('vote_on_feature',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'zkbadge.compact line 336 char 1',
                                      'Bytes<32>',
                                      vote_salt_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(cert_0).concat(_descriptor_0.toValue(feature_id_0).concat(_descriptor_2.toValue(like_0).concat(_descriptor_3.toValue(vote_salt_0)))),
            alignment: _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_vote_on_feature_0(context,
                                                  partialProofData,
                                                  cert_0,
                                                  feature_id_0,
                                                  like_0,
                                                  vote_salt_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      get_feature_votes: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`get_feature_votes: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const feature_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('get_feature_votes',
                                      'argument 1 (as invoked from Typescript)',
                                      'zkbadge.compact line 378 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(feature_id_0) === 'bigint' && feature_id_0 >= 0 && feature_id_0 <= 18446744073709551615n))
          __compactRuntime.type_error('get_feature_votes',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'zkbadge.compact line 378 char 1',
                                      'Uint<0..18446744073709551615>',
                                      feature_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(feature_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_get_feature_votes_0(context,
                                                    partialProofData,
                                                    feature_id_0);
        partialProofData.output = { value: _descriptor_1.toValue(result_0), alignment: _descriptor_1.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      add_trusted_issuer: this.circuits.add_trusted_issuer,
      remove_trusted_issuer: this.circuits.remove_trusted_issuer,
      register: this.circuits.register,
      verify_certificates: this.circuits.verify_certificates,
      check_verification: this.circuits.check_verification,
      create_feature: this.circuits.create_feature,
      access_private_feature: this.circuits.access_private_feature,
      withdrawFunds: this.circuits.withdrawFunds,
      vote_on_feature: this.circuits.vote_on_feature,
      get_feature_votes: this.circuits.get_feature_votes
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('add_trusted_issuer', new __compactRuntime.ContractOperation());
    state_0.setOperation('remove_trusted_issuer', new __compactRuntime.ContractOperation());
    state_0.setOperation('register', new __compactRuntime.ContractOperation());
    state_0.setOperation('verify_certificates', new __compactRuntime.ContractOperation());
    state_0.setOperation('check_verification', new __compactRuntime.ContractOperation());
    state_0.setOperation('create_feature', new __compactRuntime.ContractOperation());
    state_0.setOperation('access_private_feature', new __compactRuntime.ContractOperation());
    state_0.setOperation('withdrawFunds', new __compactRuntime.ContractOperation());
    state_0.setOperation('vote_on_feature', new __compactRuntime.ContractOperation());
    state_0.setOperation('get_feature_votes', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(0n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue({ bytes: new Uint8Array(32) }),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(1n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(2n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(3n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(4n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(5n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(6n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(7n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(8n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(9n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(10n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(11n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this.#_ownPublicKey_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_23.toValue(0n),
                                                                            alignment: _descriptor_23.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(tmp_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_some_0(context, partialProofData, value_0) {
    return { is_some: true, value: value_0 };
  }
  #_none_0(context, partialProofData) {
    return { is_some: false,
             value:
               { nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n } };
  }
  #_left_0(context, partialProofData, value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  #_right_0(context, partialProofData, value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  #_transientHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_22, value_0);
    return result_0;
  }
  #_persistentHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_11, value_0);
    return result_0;
  }
  #_persistentHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_21, value_0);
    return result_0;
  }
  #_degradeToTransient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  #_upgradeFromTransient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  #_ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_4.toValue(result_0),
      alignment: _descriptor_4.alignment()
    });
    return result_0;
  }
  #_createZswapInput_0(context, partialProofData, coin_0) {
    const result_0 = __compactRuntime.createZswapInput(context, coin_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_createZswapOutput_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_receive_0(context, partialProofData, coin_0) {
    const recipient_0 = this.#_right_0(context,
                                       partialProofData,
                                       _descriptor_15.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 2 } },
                                                                                 { idx: { cached: true,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_23.toValue(0n),
                                                                                                            alignment: _descriptor_23.alignment() } }] } },
                                                                                 { popeq: { cached: true,
                                                                                            result: undefined } }]).value));
    this.#_createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const tmp_0 = this.#_coinCommitment_0(context,
                                          partialProofData,
                                          coin_0,
                                          recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(1n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_0),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return [];
  }
  #_send_0(context, partialProofData, input_0, recipient_0, value_0) {
    const selfAddr_0 = _descriptor_15.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_23.toValue(0n),
                                                                                            alignment: _descriptor_23.alignment() } }] } },
                                                                 { popeq: { cached: true,
                                                                            result: undefined } }]).value);
    this.#_createZswapInput_0(context, partialProofData, input_0);
    const tmp_0 = this.#_coinNullifier_0(context,
                                         partialProofData,
                                         this.#_downcastQualifiedCoin_0(context,
                                                                        partialProofData,
                                                                        input_0),
                                         selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(0n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_0),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    let t_0;
    const change_0 = (t_0 = input_0.value,
                      (__compactRuntime.assert(!(t_0 < value_0),
                                               'result of subtraction would be negative'),
                       t_0 - value_0));
    const output_0 = { nonce:
                         this.#_upgradeFromTransient_0(context,
                                                       partialProofData,
                                                       this.#_transientHash_0(context,
                                                                              partialProofData,
                                                                              [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                             new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                               this.#_degradeToTransient_0(context,
                                                                                                           partialProofData,
                                                                                                           input_0.nonce)])),
                       color: input_0.color,
                       value: value_0 };
    this.#_createZswapOutput_0(context, partialProofData, output_0, recipient_0);
    const tmp_1 = this.#_coinCommitment_0(context,
                                          partialProofData,
                                          output_0,
                                          recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(2n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_1),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    if (this.#_equal_0(change_0, 0n)) {
      return { change: this.#_none_0(context, partialProofData), sent: output_0 };
    } else {
      const changeCoin_0 = { nonce:
                               this.#_upgradeFromTransient_0(context,
                                                             partialProofData,
                                                             this.#_transientHash_0(context,
                                                                                    partialProofData,
                                                                                    [__compactRuntime.convert_Uint8Array_to_bigint(30,
                                                                                                                                   new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101, 47, 50])),
                                                                                     this.#_degradeToTransient_0(context,
                                                                                                                 partialProofData,
                                                                                                                 input_0.nonce)])),
                             color: input_0.color,
                             value: change_0 };
      this.#_createZswapOutput_0(context,
                                 partialProofData,
                                 changeCoin_0,
                                 this.#_right_0(context,
                                                partialProofData,
                                                selfAddr_0));
      const cm_0 = this.#_coinCommitment_0(context,
                                           partialProofData,
                                           changeCoin_0,
                                           this.#_right_0(context,
                                                          partialProofData,
                                                          selfAddr_0));
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(2n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(cm_0),
                                                                              alignment: _descriptor_3.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(1n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(cm_0),
                                                                              alignment: _descriptor_3.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      return { change: this.#_some_0(context, partialProofData, changeCoin_0),
               sent: output_0 };
    }
  }
  #_downcastQualifiedCoin_0(context, partialProofData, coin_0) {
    return { nonce: coin_0.nonce, color: coin_0.color, value: coin_0.value };
  }
  #_coinCommitment_0(context, partialProofData, coin_0, recipient_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   { info: coin_0,
                                     dataType: recipient_0.is_left,
                                     data:
                                       recipient_0.is_left ?
                                       recipient_0.left.bytes :
                                       recipient_0.right.bytes,
                                     domain_sep:
                                       new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  #_coinNullifier_0(context, partialProofData, coin_0, addr_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   { info: coin_0,
                                     dataType: false,
                                     data: addr_0.bytes,
                                     domain_sep:
                                       new Uint8Array([109, 100, 110, 58, 99, 110]) });
  }
  #_user_certificate_0(context,
                       partialProofData,
                       issuer_0,
                       issued_at_0,
                       valid_until_0,
                       is_valid_0,
                       owner_0,
                       year_of_birth_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.user_certificate(witnessContext_0,
                                                                           issuer_0,
                                                                           issued_at_0,
                                                                           valid_until_0,
                                                                           is_valid_0,
                                                                           owner_0,
                                                                           year_of_birth_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && typeof(result_0.issuer) === 'object' && result_0.issuer.bytes.buffer instanceof ArrayBuffer && result_0.issuer.bytes.BYTES_PER_ELEMENT === 1 && result_0.issuer.bytes.length === 32 && typeof(result_0.issued_at) === 'bigint' && result_0.issued_at >= 0 && result_0.issued_at <= 18446744073709551615n && typeof(result_0.valid_until) === 'bigint' && result_0.valid_until >= 0 && result_0.valid_until <= 18446744073709551615n && typeof(result_0.is_valid) === 'boolean' && typeof(result_0.owner) === 'object' && result_0.owner.bytes.buffer instanceof ArrayBuffer && result_0.owner.bytes.BYTES_PER_ELEMENT === 1 && result_0.owner.bytes.length === 32 && typeof(result_0.year_of_birth) === 'bigint' && result_0.year_of_birth >= 0 && result_0.year_of_birth <= 65535n))
      __compactRuntime.type_error('user_certificate',
                                  'return value',
                                  'zkbadge.compact line 49 char 1',
                                  'struct Certificate<issuer: struct ZswapCoinPublicKey<bytes: Bytes<32>>, issued_at: Uint<0..18446744073709551615>, valid_until: Uint<0..18446744073709551615>, is_valid: Boolean, owner: struct ZswapCoinPublicKey<bytes: Bytes<32>>, year_of_birth: Uint<0..65535>>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_11.toValue(result_0),
      alignment: _descriptor_11.alignment()
    });
    return result_0;
  }
  #_prove_cert_signed_and_fresh_0(context, partialProofData, cert_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.prove_cert_signed_and_fresh(witnessContext_0,
                                                                                      cert_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'boolean'))
      __compactRuntime.type_error('prove_cert_signed_and_fresh',
                                  'return value',
                                  'zkbadge.compact line 62 char 1',
                                  'Boolean',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_2.toValue(result_0),
      alignment: _descriptor_2.alignment()
    });
    return result_0;
  }
  #_check_age_feature_0(context, partialProofData, cert_0, feature_age_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.check_age_feature(witnessContext_0,
                                                                            cert_0,
                                                                            feature_age_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'boolean'))
      __compactRuntime.type_error('check_age_feature',
                                  'return value',
                                  'zkbadge.compact line 65 char 1',
                                  'Boolean',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_2.toValue(result_0),
      alignment: _descriptor_2.alignment()
    });
    return result_0;
  }
  #_gen_access_nullifier_0(context, partialProofData, cert_0, feature_id_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.gen_access_nullifier(witnessContext_0,
                                                                               cert_0,
                                                                               feature_id_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 340282366920938463463374607431768211455n))
      __compactRuntime.type_error('gen_access_nullifier',
                                  'return value',
                                  'zkbadge.compact line 73 char 1',
                                  'Uint<0..340282366920938463463374607431768211455>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_8.toValue(result_0),
      alignment: _descriptor_8.alignment()
    });
    return result_0;
  }
  #_gen_vote_nullifier_0(context, partialProofData, cert_0, feature_id_0, salt_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.gen_vote_nullifier(witnessContext_0,
                                                                             cert_0,
                                                                             feature_id_0,
                                                                             salt_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 340282366920938463463374607431768211455n))
      __compactRuntime.type_error('gen_vote_nullifier',
                                  'return value',
                                  'zkbadge.compact line 81 char 1',
                                  'Uint<0..340282366920938463463374607431768211455>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_8.toValue(result_0),
      alignment: _descriptor_8.alignment()
    });
    return result_0;
  }
  #_cert_hash_0(context, partialProofData, cert_0) {
    return this.#_persistentHash_0(context, partialProofData, cert_0);
  }
  #_add_trusted_issuer_0(context, partialProofData, issuer_0) {
    __compactRuntime.assert(this.#_equal_1(this.#_ownPublicKey_0(context,
                                                                 partialProofData),
                                           _descriptor_4.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_23.toValue(0n),
                                                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value)),
                            'Only admin');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(2n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(issuer_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(true),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_remove_trusted_issuer_0(context, partialProofData, issuer_0) {
    __compactRuntime.assert(this.#_equal_2(this.#_ownPublicKey_0(context,
                                                                 partialProofData),
                                           _descriptor_4.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_23.toValue(0n),
                                                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value)),
                            'Only admin');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(2n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(issuer_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_register_0(context,
               partialProofData,
               issuer_0,
               issued_at_0,
               valid_until_0,
               is_valid_0,
               year_of_birth_0)
  {
    const cert_0 = this.#_user_certificate_0(context,
                                             partialProofData,
                                             issuer_0,
                                             issued_at_0,
                                             valid_until_0,
                                             is_valid_0,
                                             this.#_ownPublicKey_0(context,
                                                                   partialProofData),
                                             year_of_birth_0);
    const proofOk_0 = this.#_prove_cert_signed_and_fresh_0(context,
                                                           partialProofData,
                                                           cert_0);
    __compactRuntime.assert(proofOk_0, 'Invalid or expired certificate');
    const caller_0 = this.#_ownPublicKey_0(context, partialProofData);
    const hash_0 = this.#_cert_hash_0(context, partialProofData, cert_0);
    __compactRuntime.assert(!_descriptor_2.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_23.toValue(3n),
                                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(hash_0),
                                                                                                                             alignment: _descriptor_3.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value),
                            'Duplicate certificate hash');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(3n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(hash_0),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(1),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(5n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(caller_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(hash_0),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_verify_certificates_0(context, partialProofData, hashes_0) {
    __compactRuntime.assert(this.#_equal_3(_descriptor_4.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_23.toValue(0n),
                                                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value),
                                           this.#_ownPublicKey_0(context,
                                                                 partialProofData)),
                            'Not admin');
    this.#_folder_0(context,
                    partialProofData,
                    ((context, partialProofData, t_0, maybe_hash_0) =>
                     {
                       if (maybe_hash_0.is_some) {
                         const hash_value_0 = maybe_hash_0.value;
                         Contract._query(context,
                                         partialProofData,
                                         [
                                          { idx: { cached: false,
                                                   pushPath: true,
                                                   path: [
                                                          { tag: 'value',
                                                            value: { value: _descriptor_23.toValue(3n),
                                                                     alignment: _descriptor_23.alignment() } }] } },
                                          { push: { storage: false,
                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(hash_value_0),
                                                                                                 alignment: _descriptor_3.alignment() }).encode() } },
                                          { push: { storage: true,
                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(1),
                                                                                                 alignment: _descriptor_10.alignment() }).encode() } },
                                          { ins: { cached: false, n: 1 } },
                                          { ins: { cached: true, n: 1 } }]);
                       }
                       return t_0;
                     }),
                    [],
                    hashes_0);
    return [];
  }
  #_check_verification_0(context, partialProofData, cert_0) {
    const hash_0 = this.#_cert_hash_0(context, partialProofData, cert_0);
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(3n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(hash_0),
                                                                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Certificate not registered');
    __compactRuntime.assert(_descriptor_10.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_23.toValue(3n),
                                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_3.toValue(hash_0),
                                                                                                 alignment: _descriptor_3.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value)
                            ===
                            1,
                            'Certificate not verified');
    return [];
  }
  #_create_feature_0(context,
                     partialProofData,
                     feature_name_0,
                     min_age_0,
                     description_0,
                     category_0,
                     image_url_0,
                     price_0,
                     created_at_0,
                     coin_type_0)
  {
    const feature_id_0 = _descriptor_0.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 0 } },
                                                                  { idx: { cached: false,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_23.toValue(7n),
                                                                                             alignment: _descriptor_23.alignment() } }] } },
                                                                  { popeq: { cached: true,
                                                                             result: undefined } }]).value);
    let t_0;
    const tmp_0 = (t_0 = { creator: { bytes: new Uint8Array(32) }, name: '', description: '', category: '', image_url: '', min_age: 0n, price: 0n, created_at: 0n, is_active: false, coin_type: new Uint8Array(32) },
                   { creator: this.#_ownPublicKey_0(context, partialProofData),
                     name: feature_name_0,
                     description: description_0,
                     category: category_0,
                     image_url: image_url_0,
                     min_age: min_age_0,
                     price: price_0,
                     created_at: created_at_0,
                     is_active: true,
                     coin_type: coin_type_0 });
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(6n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(feature_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_0),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    let t_1; const tmp_1 = (t_1 = { up: 0n, down: 0n }, { up: 0n, down: 0n });
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(10n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(feature_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_2 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(7n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_6.toValue(tmp_2),
                                              alignment: _descriptor_6.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_access_private_feature_0(context,
                             partialProofData,
                             cert_0,
                             feature_id_0,
                             payment_0)
  {
    const hash_0 = this.#_cert_hash_0(context, partialProofData, cert_0);
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(3n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(hash_0),
                                                                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Certificate not registered');
    __compactRuntime.assert(_descriptor_10.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_23.toValue(3n),
                                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_3.toValue(hash_0),
                                                                                                 alignment: _descriptor_3.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value)
                            ===
                            1,
                            'Access denied');
    const fid_0 = feature_id_0;
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(6n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Feature does not exist');
    const f_0 = _descriptor_7.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_23.toValue(6n),
                                                                                    alignment: _descriptor_23.alignment() } }] } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_0.toValue(fid_0),
                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                         { popeq: { cached: false,
                                                                    result: undefined } }]).value);
    const ageOk_0 = this.#_check_age_feature_0(context,
                                               partialProofData,
                                               cert_0,
                                               f_0.min_age);
    __compactRuntime.assert(ageOk_0, 'Age verification failed');
    if (f_0.price > 0n) {
      const paidCoin_0 = payment_0;
      __compactRuntime.assert(this.#_equal_4(paidCoin_0.value, f_0.price),
                              'Incorrect payment amount');
      __compactRuntime.assert(this.#_equal_5(paidCoin_0.color, f_0.coin_type),
                              'Incorrect coin type');
      this.#_receive_0(context, partialProofData, paidCoin_0);
      if (!_descriptor_2.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_23.toValue(1n),
                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                    { push: { storage: false,
                                                              value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                                                           alignment: _descriptor_0.alignment() }).encode() } },
                                                    'member',
                                                    { popeq: { cached: true,
                                                               result: undefined } }]).value))
      {
        const tmp_0 = 0n;
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_23.toValue(1n),
                                                    alignment: _descriptor_23.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
      }
      const tmp_1 = ((t1) => {
                      if (t1 > 340282366920938463463374607431768211455n)
                        throw new __compactRuntime.CompactError('zkbadge.compact line 295 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                      return t1;
                    })(_descriptor_8.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_23.toValue(1n),
                                                                                           alignment: _descriptor_23.alignment() } }] } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_0.toValue(fid_0),
                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value)
                       +
                       paidCoin_0.value);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(1n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_1),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    const accessNull_0 = this.#_gen_access_nullifier_0(context,
                                                       partialProofData,
                                                       cert_0,
                                                       fid_0);
    if (!_descriptor_2.fromValue(Contract._query(context,
                                                 partialProofData,
                                                 [
                                                  { dup: { n: 0 } },
                                                  { idx: { cached: false,
                                                           pushPath: false,
                                                           path: [
                                                                  { tag: 'value',
                                                                    value: { value: _descriptor_23.toValue(8n),
                                                                             alignment: _descriptor_23.alignment() } }] } },
                                                  { push: { storage: false,
                                                            value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(accessNull_0),
                                                                                                         alignment: _descriptor_8.alignment() }).encode() } },
                                                  'member',
                                                  { popeq: { cached: true,
                                                             result: undefined } }]).value))
    {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(8n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(accessNull_0),
                                                                              alignment: _descriptor_8.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(true),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    return [];
  }
  #_withdrawFunds_0(context, partialProofData, feature_id_0, _coinType_0) {
    const fid_0 = feature_id_0;
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(6n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Feature does not exist');
    const f_0 = _descriptor_7.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_23.toValue(6n),
                                                                                    alignment: _descriptor_23.alignment() } }] } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_0.toValue(fid_0),
                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                         { popeq: { cached: false,
                                                                    result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_6(f_0.creator,
                                           this.#_ownPublicKey_0(context,
                                                                 partialProofData)),
                            'Only feature creator can withdraw');
    const coinType_0 = f_0.coin_type;
    const sendResult_0 = this.#_send_0(context,
                                       partialProofData,
                                       _descriptor_9.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_23.toValue(4n),
                                                                                                           alignment: _descriptor_23.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_3.toValue(coinType_0),
                                                                                                           alignment: _descriptor_3.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value),
                                       this.#_left_0(context,
                                                     partialProofData,
                                                     f_0.creator),
                                       _descriptor_8.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_23.toValue(1n),
                                                                                                           alignment: _descriptor_23.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(fid_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(1n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_vote_on_feature_0(context,
                      partialProofData,
                      cert_0,
                      feature_id_0,
                      like_0,
                      vote_salt_0)
  {
    const fid_0 = feature_id_0;
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(6n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Feature does not exist');
    const hash_0 = this.#_cert_hash_0(context, partialProofData, cert_0);
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(3n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(hash_0),
                                                                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Certificate not registered');
    __compactRuntime.assert(_descriptor_10.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_23.toValue(3n),
                                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_3.toValue(hash_0),
                                                                                                 alignment: _descriptor_3.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value)
                            ===
                            1,
                            'Certificate not verified');
    const accessNull_0 = this.#_gen_access_nullifier_0(context,
                                                       partialProofData,
                                                       cert_0,
                                                       fid_0);
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(8n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(accessNull_0),
                                                                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Must access feature before voting');
    const voteNull_0 = this.#_gen_vote_nullifier_0(context,
                                                   partialProofData,
                                                   cert_0,
                                                   fid_0,
                                                   vote_salt_0);
    __compactRuntime.assert(!_descriptor_2.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_23.toValue(9n),
                                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(voteNull_0),
                                                                                                                             alignment: _descriptor_8.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value),
                            'Already voted for this feature');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_23.toValue(9n),
                                                alignment: _descriptor_23.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(voteNull_0),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(true),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(10n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Vote tally not initialized');
    const tally_0 = _descriptor_1.fromValue(Contract._query(context,
                                                            partialProofData,
                                                            [
                                                             { dup: { n: 0 } },
                                                             { idx: { cached: false,
                                                                      pushPath: false,
                                                                      path: [
                                                                             { tag: 'value',
                                                                               value: { value: _descriptor_23.toValue(10n),
                                                                                        alignment: _descriptor_23.alignment() } }] } },
                                                             { idx: { cached: false,
                                                                      pushPath: false,
                                                                      path: [
                                                                             { tag: 'value',
                                                                               value: { value: _descriptor_0.toValue(fid_0),
                                                                                        alignment: _descriptor_0.alignment() } }] } },
                                                             { popeq: { cached: false,
                                                                        result: undefined } }]).value);
    if (like_0) {
      const tmp_0 = { up:
                        ((t1) => {
                          if (t1 > 18446744073709551615n)
                            throw new __compactRuntime.CompactError('zkbadge.compact line 367 char 32: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                          return t1;
                        })(tally_0.up + 1n),
                      down: tally_0.down };
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(10n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      const tmp_1 = { up: tally_0.up,
                      down:
                        ((t1) => {
                          if (t1 > 18446744073709551615n)
                            throw new __compactRuntime.CompactError('zkbadge.compact line 372 char 34: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                          return t1;
                        })(tally_0.down + 1n) };
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_23.toValue(10n),
                                                  alignment: _descriptor_23.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    return [];
  }
  #_get_feature_votes_0(context, partialProofData, feature_id_0) {
    const fid_0 = feature_id_0;
    __compactRuntime.assert(_descriptor_2.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_23.toValue(10n),
                                                                                                alignment: _descriptor_23.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(fid_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Feature does not exist');
    return _descriptor_1.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_23.toValue(10n),
                                                                               alignment: _descriptor_23.alignment() } }] } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_0.toValue(fid_0),
                                                                               alignment: _descriptor_0.alignment() } }] } },
                                                    { popeq: { cached: false,
                                                               result: undefined } }]).value);
  }
  #_equal_0(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_1(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  #_equal_2(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  #_equal_3(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  #_folder_0(context, partialProofData, f, x, a0)
  {
    for (let i = 0; i < 10; i++) x = f(context, partialProofData, x, a0[i]);
    return x;
  }
  #_equal_4(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_6(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get admin() {
      return _descriptor_4.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_23.toValue(0n),
                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    feature_balances: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(1n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(1n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 18446744073709551615n))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 90 char 1',
                                      'Uint<0..18446744073709551615>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(1n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 18446744073709551615n))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 90 char 1',
                                      'Uint<0..18446744073709551615>',
                                      key_0)
        return _descriptor_8.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(1n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_8.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    trusted_issuers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(2n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(2n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 93 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(2n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(key_0),
                                                                                                               alignment: _descriptor_4.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 93 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(2n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_4.toValue(key_0),
                                                                                   alignment: _descriptor_4.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_4.fromValue(key.value),      _descriptor_2.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    registered_hashes: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(3n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(3n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 96 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(3n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(key_0),
                                                                                                               alignment: _descriptor_3.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 96 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_10.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_23.toValue(3n),
                                                                                    alignment: _descriptor_23.alignment() } }] } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_3.toValue(key_0),
                                                                                    alignment: _descriptor_3.alignment() } }] } },
                                                         { popeq: { cached: false,
                                                                    result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[3];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_3.fromValue(key.value),      _descriptor_10.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    protocolTVL: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(4n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(4n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 98 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(4n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(key_0),
                                                                                                               alignment: _descriptor_3.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 98 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_9.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(4n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_3.toValue(key_0),
                                                                                   alignment: _descriptor_3.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[4];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_3.fromValue(key.value),      _descriptor_9.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    certificate_owners: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 101 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(key_0),
                                                                                                               alignment: _descriptor_4.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 101 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(5n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_4.toValue(key_0),
                                                                                   alignment: _descriptor_4.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[5];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_4.fromValue(key.value),      _descriptor_3.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    features: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 18446744073709551615n))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 104 char 1',
                                      'Uint<0..18446744073709551615>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 18446744073709551615n))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 104 char 1',
                                      'Uint<0..18446744073709551615>',
                                      key_0)
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(6n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[6];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_7.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get feature_counter() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_23.toValue(7n),
                                                                                 alignment: _descriptor_23.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    },
    access_nullifiers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(8n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(8n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 108 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(8n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(key_0),
                                                                                                               alignment: _descriptor_8.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 108 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(8n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_8.toValue(key_0),
                                                                                   alignment: _descriptor_8.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[8];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_8.fromValue(key.value),      _descriptor_2.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    vote_nullifiers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(9n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(9n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 111 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(9n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(key_0),
                                                                                                               alignment: _descriptor_8.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 111 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(9n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_8.toValue(key_0),
                                                                                   alignment: _descriptor_8.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[9];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_8.fromValue(key.value),      _descriptor_2.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    feature_vote_tallies: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(10n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(10n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 18446744073709551615n))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 114 char 1',
                                      'Uint<0..18446744073709551615>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(10n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 18446744073709551615n))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 114 char 1',
                                      'Uint<0..18446744073709551615>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(10n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[10];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_1.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    verified_users: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(11n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(11n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'zkbadge.compact line 117 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(11n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(key_0),
                                                                                                               alignment: _descriptor_4.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'zkbadge.compact line 117 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_23.toValue(11n),
                                                                                   alignment: _descriptor_23.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_4.toValue(key_0),
                                                                                   alignment: _descriptor_4.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[11];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_4.fromValue(key.value),      _descriptor_2.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  user_certificate: (...args) => undefined,
  prove_cert_signed_and_fresh: (...args) => undefined,
  check_age_feature: (...args) => undefined,
  gen_access_nullifier: (...args) => undefined,
  gen_vote_nullifier: (...args) => undefined
});
const pureCircuits = {
  cert_hash: (...args_0) => _dummyContract.circuits.cert_hash(_emptyContext, ...args_0).result
};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
