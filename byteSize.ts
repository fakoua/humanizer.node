// @ts-ignore
import { ByteSize } from './src/Humanizer/Bytes/ByteSize.ts'

declare global {
    interface Number {
        bits(): ByteSize
        bytes(): ByteSize
        kilobytes(): ByteSize
        megabytes(): ByteSize
        gigabytes(): ByteSize
        terabytes(): ByteSize
    }
}

Number.prototype.bits = function (): ByteSize {
    return ByteSize.fromBits(this)
}

Number.prototype.bytes = function (): ByteSize {
    return ByteSize.fromBytes(this)
}

Number.prototype.kilobytes = function (): ByteSize {
    return ByteSize.fromKilobytes(this)
}

Number.prototype.megabytes = function (): ByteSize {
    return ByteSize.fromMegabytes(this)
}

Number.prototype.gigabytes = function (): ByteSize {
    return ByteSize.fromGigabytes(this)
}

Number.prototype.terabytes = function (): ByteSize {
    return ByteSize.fromTerabytes(this)
}