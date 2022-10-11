export default function setOpacity(hex: string, alpha: number) {
    let finalHex = hex;

    if (hex.includes('rgb')) {
        const hexConverted = rgbToHex(hex);
        if (hexConverted.length === 0) {
            console.error(`Could not convert rgb value ${hex} to hex`);
            return '';
        }
        finalHex = hexConverted;
    }

    if (hex.length === 4) {
        finalHex = hex + hex.substring(1);
    }

    return `${finalHex}${Math.floor(alpha * 255)
        .toString(16)
        .padStart(2)}`;
}

function rgbToHex(hex: string): string {
    var matchColors = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    var match = matchColors.exec(hex);
    if (match === null || match[1] === null || match[1] === null || match[1] === null) {
        return '';
    }

    const rgb = (parseInt(match[1]) << 16) | (parseInt(match[2]) << 8) | (parseInt(match[3]) << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}
