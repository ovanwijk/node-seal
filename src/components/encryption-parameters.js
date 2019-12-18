export const EncryptionParameters = ({ library, schemeType }) => {
  const _getException = library.getException
  const _ComprModeType = library.ComprModeType
  let _instance = null
  try {
    _instance = new library.EncryptionParameters(schemeType)
  } catch (e) {
    // eslint-disable-next-line no-nested-ternary
    throw new Error(
      typeof e === 'number'
        ? _getException(e)
        : e instanceof Error
        ? e.message
        : e
    )
  }

  return {
    /**
     * Get the underlying wasm instance
     * @returns {instance}
     */
    get instance() {
      return _instance
    },

    /**
     * Inject this object with a raw wasm instance
     * @param instance
     */
    inject({ instance }) {
      if (_instance) {
        _instance.delete()
        _instance = null
      }
      _instance = instance
    },

    /**
     * Sets the degree of the polynomial modulus parameter to the specified value.
     * The polynomial modulus directly affects the number of coefficients in
     * plaintext polynomials, the size of ciphertext elements, the computational
     * performance of the scheme (bigger is worse), and the security level (bigger
     * is better). In Microsoft SEAL the degree of the polynomial modulus must be a power
     * of 2 (e.g.  1024, 2048, 4096, 8192, 16384, or 32768).
     *
     * @param polyModulusDegree
     */
    setPolyModulusDegree({ polyModulusDegree }) {
      try {
        _instance.setPolyModulusDegree(polyModulusDegree)
      } catch (e) {
        // eslint-disable-next-line no-nested-ternary
        throw new Error(
          typeof e === 'number'
            ? _getException(e)
            : e instanceof Error
            ? e.message
            : e
        )
      }
    },

    /**
     * Sets the coefficient modulus parameter. The coefficient modulus consists
     * of a list of distinct prime numbers, and is represented by a vector of
     * SmallModulus objects. The coefficient modulus directly affects the size
     * of ciphertext elements, the amount of computation that the scheme can perform
     * (bigger is better), and the security level (bigger is worse). In Microsoft SEAL each
     * of the prime numbers in the coefficient modulus must be at most 60 bits,
     * and must be congruent to 1 modulo 2*degree(poly_modulus).
     *
     * @param coeffModulus
     */
    setCoeffModulus({ coeffModulus }) {
      try {
        _instance.setCoeffModulus(coeffModulus)
      } catch (e) {
        // eslint-disable-next-line no-nested-ternary
        throw new Error(
          typeof e === 'number'
            ? _getException(e)
            : e instanceof Error
            ? e.message
            : e
        )
      }
    },

    /**
     * Sets the plaintext modulus parameter. The plaintext modulus is an integer
     * modulus represented by the SmallModulus class. The plaintext modulus
     * determines the largest coefficient that plaintext polynomials can represent.
     * It also affects the amount of computation that the scheme can perform
     * (bigger is worse). In Microsoft SEAL the plaintext modulus can be at most 60 bits
     * long, but can otherwise be any integer. Note, however, that some features
     * (e.g. batching) require the plaintext modulus to be of a particular form.
     *
     * @param {SmallModulus} plainModulus
     */
    setPlainModulus({ plainModulus }) {
      try {
        _instance.setPlainModulus(plainModulus)
      } catch (e) {
        // eslint-disable-next-line no-nested-ternary
        throw new Error(
          typeof e === 'number'
            ? _getException(e)
            : e instanceof Error
            ? e.message
            : e
        )
      }
    },

    /**
     * Returns the encryption scheme type.
     *
     * @returns {number}
     */
    get scheme() {
      return _instance.scheme()
    },

    /**
     * Returns the degree of the polynomial modulus parameter.
     *
     * @returns {number}
     */
    get polyModulusDegree() {
      return _instance.polyModulusDegree()
    },

    /**
     * Returns the currently set coefficient modulus parameter.
     * @returns {vector<SmallModulus>}
     */
    get coeffModulus() {
      return _instance.coeffModulus()
    },

    /**
     * Returns the currently set plaintext modulus parameter.
     * @returns {SmallModulus}
     */
    get plainModulus() {
      return _instance.plainModulus()
    },

    /**
     * Save the Encryption Parameters to a base64 string
     * @returns {string}
     */
    save({ compression = _ComprModeType.deflate } = {}) {
      try {
        return _instance.saveToString(compression)
      } catch (e) {
        // eslint-disable-next-line no-nested-ternary
        throw new Error(
          typeof e === 'number'
            ? _getException(e)
            : e instanceof Error
            ? e.message
            : e
        )
      }
    },

    /**
     * Load the Encryption Parameters from a base64 string
     * @param context
     * @param encoded
     */
    load({ encoded }) {
      try {
        _instance.loadFromString(encoded)
      } catch (e) {
        // eslint-disable-next-line no-nested-ternary
        throw new Error(
          typeof e === 'number'
            ? _getException(e)
            : e instanceof Error
            ? e.message
            : e
        )
      }
    }
  }
}
