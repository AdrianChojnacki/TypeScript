class Example {
  constructor(public id: number, private readonly name: string) {}
}

const example = new Example(55, 'Samurajła');

console.log(example.id);
