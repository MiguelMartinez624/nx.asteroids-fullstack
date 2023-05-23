export class ListingAsteroid {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly itsFavorite: boolean = false) {

  }
}

export class AsteroidDetails {
  constructor(
    public readonly id: string,
    public readonly name: string) {

  }
}

