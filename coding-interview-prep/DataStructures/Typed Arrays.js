// First, create a buffer that is 64-bytes.
const buffer = new ArrayBuffer(64);

// Then create a Int32Array typed array with a view of it called i32View.
// An Int32Array element is 4 bytes, so a 64-byte buffer will hold 16 elements (64 / 4 = 16).
const i32View = new Int32Array(buffer);