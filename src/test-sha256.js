const { sha256 } = require('./utils/Utils');

function arrayBufferToHex(buffer) {
  return '0x' + Array.from(new Uint8Array(buffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
}

async function main() {
    const bytes = new Uint8Array([1, 2, 3]);
    const hash = await sha256(bytes);

    console.log('hash=', hash);
    console.log('hash.constructor.name=', hash.constructor.name);

    const expectedHashString = '0x039058c6f2c0cb492c533b0a4d14ef77cc0f78abccced5287d84a1a2011cfb81';
    const hashString = arrayBufferToHex(hash);
    console.log('hashString=', hashString);

    if (hashString !== expectedHashString) {
        throw new Error(`hashString is not correct actual=${hashString} expected=${expectedHashString}`);
    }
    if (hash.constructor.name !== 'ArrayBuffer') {
        throw new Error(`hash is not ArrayBuffer actual=${hash.constructor.name} expected=ArrayBuffer`);
    }
    console.log('hashString is correct');
}

main();
