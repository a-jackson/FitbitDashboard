export class DurationValueConverter {
  toView(value, ms) {
    if (typeof value === 'undefined' || value === null) return 'N/A';
    if (ms) value /= 1000;

    let minutes = Math.floor(value / 60).toFixed(0);
    let seconds = (value % 60).toFixed(0);
    if (seconds.length == 1) seconds = '0' + seconds;
    return `${minutes}:${seconds}`;
  }
}

