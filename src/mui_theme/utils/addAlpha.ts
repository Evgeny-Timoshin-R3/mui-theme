export default function setOpacity(hex: string, alpha: number) {
    let finalHex = hex;
    if (hex.length === 4) {
        finalHex = hex + hex.substring(1);
    }

    return `${finalHex}${Math.floor(alpha * 255)
        .toString(16)
        .padStart(2)}`;
}
