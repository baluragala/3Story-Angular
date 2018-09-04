class Product {
  constructor(protected _title: string, protected _price: number) {}

  get Title(): string {
    return this._title;
  }

  set Title(value: string) {
    this._title = value;
  }

  describe() {
    return `Product ${this._title} is priced ${this._price} $`;
  }
}

class OnlineProduct extends Product {
  constructor(
    protected _title: string,
    protected _price: number,
    private _deliveryMode: string
  ) {
    super(_title, _price);
  }

  describe() {
    return `Product ${this._title} is priced ${this._price} $`;
  }
}

const p10 = new Product("mac book pro", 2000);
p10.describe();
p10.Title = "Dell XPS";

interface IMediaPlayer {
  play: () => void;
  pause: () => void;
  volume: (value: number) => boolean;
}

class MediaPlayer implements IMediaPlayer {
  play() {}

  pause() {}

  volume(value: number) {
    return true;
  }
}
