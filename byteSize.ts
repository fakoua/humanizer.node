import { ByteSize } from './src/Humanizer/Bytes/ByteSize'

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
    return ByteSize.fromBits(this as number)
}

Number.prototype.bytes = function (): ByteSize {
    return ByteSize.fromBytes(this as number)
}

Number.prototype.kilobytes = function (): ByteSize {
    return ByteSize.fromKilobytes(this as number)
}

Number.prototype.megabytes = function (): ByteSize {
    return ByteSize.fromMegabytes(this as number)
}

Number.prototype.gigabytes = function (): ByteSize {
    return ByteSize.fromGigabytes(this as number)
}

Number.prototype.terabytes = function (): ByteSize {
    return ByteSize.fromTerabytes(this as number)
}