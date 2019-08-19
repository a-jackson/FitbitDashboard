export class NumberFormatValueConverter {
  toView(value, places) {
    if (!places) places = 0;
    if (typeof value === 'undefined' || value === null) return 'N/A';
    return value.toFixed(places);
  }
}

