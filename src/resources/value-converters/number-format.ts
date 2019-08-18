export class NumberFormatValueConverter {
  toView(value, places) {
    if (!places) places = 0;
    return value.toFixed(places);
  }
}

