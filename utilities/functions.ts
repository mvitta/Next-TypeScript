export function random(): number {
  return Math.floor(Math.random() * 123) + 1
}

export function arrayRandomNumbers(): number[] {
  return new Array(2).fill(0).map(() => random())
}
