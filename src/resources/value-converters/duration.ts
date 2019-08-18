export class DurationValueConverter {
  toView(value, ms) {
    if (value) {
      if (ms) value /= 1000;

      let minutes = (value / 60).toFixed(0);
      let seconds = (value % 60).toFixed(0);
      if (seconds.length == 1) seconds = '0'+seconds;
      return `${minutes}:${seconds}`;
    }

    return 'N/A';
  }
}

